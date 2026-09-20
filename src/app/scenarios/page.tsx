"use client";

import { useMemo, useState } from "react";

type ScenarioCommand = {
  command: string;
  output: string;
  action?: "diagnose" | "fix" | "verify";
};

type Scenario = {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  description: string;
  symptom: string;
  commands: ScenarioCommand[];
  hints: string[];
  rootCause: string;
  requiredFix: string;
};

const scenarios: Scenario[] = [
  {
    id: "k8s-crashloopbackoff",
    title: "Kubernetes CrashLoopBackOff",
    category: "Kubernetes",
    difficulty: "Beginner",
    description:
      "A production API pod keeps restarting and Kubernetes reports CrashLoopBackOff.",
    symptom:
      "The API deployment is unhealthy and the pod repeatedly crashes after starting.",
    commands: [
      {
        command: "kubectl get pods",
        output: `NAME                     READY   STATUS             RESTARTS   AGE
api-7d9f8c6b7d-x2k4p      0/1     CrashLoopBackOff   6          4m`,
        action: "diagnose",
      },
      {
        command: "kubectl get pods -o wide",
        output: `NAME                     READY   STATUS             RESTARTS   AGE   IP
api-7d9f8c6b7d-x2k4p      0/1     CrashLoopBackOff   6          4m    10.42.0.15`,
        action: "diagnose",
      },
      {
        command: "kubectl describe pod api-7d9f8c6b7d-x2k4p",
        output: `Name:         api-7d9f8c6b7d-x2k4p
Namespace:    default
Status:       Running
Containers:
  api:
    State:      Waiting
    Reason:     CrashLoopBackOff
Last State:
  Terminated
    Reason:     Error
Events:
  Warning  BackOff  kubelet  Back-off restarting failed container`,
        action: "diagnose",
      },
      {
        command: "kubectl logs api-7d9f8c6b7d-x2k4p",
        output: `Starting API server...
Loading configuration...
ERROR: DATABASE_URL environment variable is missing
Application startup failed.`,
        action: "diagnose",
      },
      {
        command: "kubectl get deployment api -o yaml",
        output: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  template:
    spec:
      containers:
        - name: api
          image: devops-demo/api:1.0
          env:
            - name: NODE_ENV
              value: production
# DATABASE_URL is missing`,
        action: "diagnose",
      },
      {
        command:
          "kubectl set env deployment/api DATABASE_URL=postgresql://db:5432/app",
        output: `deployment.apps/api env updated

Environment variable DATABASE_URL added to deployment/api.
Deployment rollout started.`,
        action: "fix",
      },
      {
        command: "kubectl rollout status deployment/api",
        output: `Waiting for deployment "api" rollout to finish...
deployment "api" successfully rolled out`,
        action: "verify",
      },
      {
        command: "kubectl get pods",
        output: `NAME                     READY   STATUS    RESTARTS   AGE
api-7d9f8c6b7d-x2k4p      1/1     Running   0          8m`,
        action: "verify",
      },
    ],
    hints: [
      "Start by checking the current pod status.",
      "Use kubectl logs to find the application startup error.",
      "The logs mention a missing DATABASE_URL environment variable.",
      "Check the deployment configuration before applying the fix.",
    ],
    rootCause:
      "The API container requires DATABASE_URL, but the deployment does not define it.",
    requiredFix:
      "Add the DATABASE_URL environment variable to deployment/api.",
  },

  {
    id: "k8s-imagepullbackoff",
    title: "Kubernetes ImagePullBackOff",
    category: "Kubernetes",
    difficulty: "Beginner",
    description:
      "A web application pod cannot start because Kubernetes cannot pull its container image.",
    symptom:
      "The web pod remains unavailable and Kubernetes reports ImagePullBackOff.",
    commands: [
      {
        command: "kubectl get pods",
        output: `NAME                     READY   STATUS             RESTARTS   AGE
web-6f7d8c9b5-x7k2m      0/1     ImagePullBackOff   0          3m`,
        action: "diagnose",
      },
      {
        command: "kubectl describe pod web-6f7d8c9b5-x7k2m",
        output: `Name:         web-6f7d8c9b5-x7k2m
Namespace:    default
Status:       Pending

Containers:
  web:
    Image:      nginx:999
    State:      Waiting
    Reason:     ImagePullBackOff

Events:
  Warning  Failed  kubelet  Failed to pull image "nginx:999"
  Warning  Failed  kubelet  manifest for nginx:999 not found`,
        action: "diagnose",
      },
      {
        command: "kubectl get deployment web -o yaml",
        output: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
spec:
  template:
    spec:
      containers:
        - name: web
          image: nginx:999
# The configured image tag does not exist.`,
        action: "diagnose",
      },
      {
        command: "kubectl get events",
        output: `LAST SEEN   TYPE      REASON    OBJECT
1m          Warning   Failed    pod/web-6f7d8c9b5-x7k2m

MESSAGE
Failed to pull image "nginx:999"
manifest for nginx:999 not found`,
        action: "diagnose",
      },
      {
        command: "kubectl set image deployment/web web=nginx:1.27",
        output: `deployment.apps/web image updated

Container image changed from nginx:999 to nginx:1.27.
Deployment rollout started.`,
        action: "fix",
      },
      {
        command: "kubectl rollout status deployment/web",
        output: `Waiting for deployment "web" rollout to finish...
deployment "web" successfully rolled out`,
        action: "verify",
      },
      {
        command: "kubectl get pods",
        output: `NAME                     READY   STATUS    RESTARTS   AGE
web-6f7d8c9b5-x7k2m      1/1     Running   0          6m`,
        action: "verify",
      },
    ],
    hints: [
      "Start by checking the pod status.",
      "Use kubectl describe pod to inspect the image and events.",
      "Look for an image pull error in the Events section.",
      "Check the deployment to find the configured image.",
    ],
    rootCause:
      "The deployment references nginx:999, but that image tag does not exist.",
    requiredFix:
      "Change the web deployment image to a valid nginx image tag.",
  },

  {
    id: "k8s-pending-pod",
    title: "Kubernetes Pending Pod",
    category: "Kubernetes",
    difficulty: "Beginner",
    description:
      "A payment service pod is stuck in Pending because the scheduler cannot place it on a node.",
    symptom:
      "The payment pod has been Pending for several minutes and has not been scheduled.",
    commands: [
      {
        command: "kubectl get pods",
        output: `NAME                     READY   STATUS    RESTARTS   AGE
payments-7c8d9f6b4-x8m2p  0/1     Pending   0          5m`,
        action: "diagnose",
      },
      {
        command: "kubectl describe pod payments-7c8d9f6b4-x8m2p",
        output: `Name:         payments-7c8d9f6b4-x8m2p
Namespace:    default
Status:       Pending

Events:
  Warning  FailedScheduling
  0/3 nodes are available:
  3 Insufficient cpu.`,
        action: "diagnose",
      },
      {
        command: "kubectl get nodes",
        output: `NAME       STATUS   ROLES
worker-1   Ready    <none>
worker-2   Ready    <none>
worker-3   Ready    <none>`,
        action: "diagnose",
      },
      {
        command: "kubectl get deployment payments -o yaml",
        output: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: payments
spec:
  template:
    spec:
      containers:
        - name: payments
          image: payments-api:2.1
          resources:
            requests:
              cpu: "8"
# CPU request is too high for the available cluster capacity.`,
        action: "diagnose",
      },
      {
        command:
          "kubectl set resources deployment/payments --requests=cpu=250m",
        output: `deployment.apps/payments resources updated

CPU request changed from 8 cores to 250m.
Deployment rollout started.`,
        action: "fix",
      },
      {
        command: "kubectl rollout status deployment/payments",
        output: `Waiting for deployment "payments" rollout to finish...
deployment "payments" successfully rolled out`,
        action: "verify",
      },
      {
        command: "kubectl get pods",
        output: `NAME                     READY   STATUS    RESTARTS   AGE
payments-7c8d9f6b4-x8m2p  1/1     Running   0          8m`,
        action: "verify",
      },
    ],
    hints: [
      "Check the pod status first.",
      "Use kubectl describe pod to inspect scheduling events.",
      "Look for FailedScheduling messages.",
      "Check the deployment resource requests.",
    ],
    rootCause:
      "The payment deployment requests 8 CPU cores, but the cluster does not have enough available CPU capacity.",
    requiredFix:
      "Reduce the CPU request to a value the cluster can schedule.",
  },

  {
    id: "k8s-service-not-reachable",
    title: "Kubernetes Service Not Reachable",
    category: "Kubernetes",
    difficulty: "Intermediate",
    description:
      "The frontend cannot reach the backend service even though the backend pods are running.",
    symptom:
      "Backend pods are healthy, but requests through the backend Service fail.",
    commands: [
      {
        command: "kubectl get pods",
        output: `NAME                      READY   STATUS    RESTARTS   AGE
backend-7f9d8c6b4-a2k9m   1/1     Running   0          12m
backend-7f9d8c6b4-b7x4p   1/1     Running   0          12m`,
        action: "diagnose",
      },
      {
        command: "kubectl get svc backend",
        output: `NAME      TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)
backend   ClusterIP   10.96.120.20   <none>        80/TCP`,
        action: "diagnose",
      },
      {
        command: "kubectl describe svc backend",
        output: `Name:              backend
Selector:          app=backend-v2
Port:              80/TCP
TargetPort:        8080/TCP
Endpoints:         <none>

WARNING:
The Service selector does not match the running backend pods.`,
        action: "diagnose",
      },
      {
        command: "kubectl get pods --show-labels",
        output: `NAME                      READY   STATUS    LABELS
backend-7f9d8c6b4-a2k9m   1/1     Running   app=backend
backend-7f9d8c6b4-b7x4p   1/1     Running   app=backend`,
        action: "diagnose",
      },
      {
        command:
          "kubectl patch service backend -p {\"spec\":{\"selector\":{\"app\":\"backend\"}}}",
        output: `service/backend patched

Service selector updated from app=backend-v2 to app=backend.
Endpoints will now be populated.`,
        action: "fix",
      },
      {
        command: "kubectl get endpoints backend",
        output: `NAME      ENDPOINTS
backend   10.42.1.20:8080,10.42.2.15:8080`,
        action: "verify",
      },
      {
        command: "kubectl get svc backend",
        output: `NAME      TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)
backend   ClusterIP   10.96.120.20   <none>        80:80/TCP`,
        action: "verify",
      },
    ],
    hints: [
      "The backend pods are running, so investigate the Service.",
      "Check whether the Service has any endpoints.",
      "Compare the Service selector with the pod labels.",
      "A Service only routes traffic to pods matching its selector.",
    ],
    rootCause:
      "The backend Service selector uses app=backend-v2, while the pods use app=backend.",
    requiredFix:
      "Update the Service selector to app=backend.",
  },

  {
    id: "k8s-configmap-problem",
    title: "Kubernetes ConfigMap Problem",
    category: "Kubernetes",
    difficulty: "Intermediate",
    description:
      "An application deployment is failing because it references the wrong ConfigMap.",
    symptom:
      "The application starts with missing configuration and fails its readiness checks.",
    commands: [
      {
        command: "kubectl get pods",
        output: `NAME                     READY   STATUS    RESTARTS   AGE
orders-6d8f9c7b4-k2m7p   0/1     Running   3          6m`,
        action: "diagnose",
      },
      {
        command: "kubectl logs orders-6d8f9c7b4-k2m7p",
        output: `Starting orders service...
Loading configuration...
ERROR: CONFIG_FILE is missing
Readiness check failed.`,
        action: "diagnose",
      },
      {
        command: "kubectl get configmap",
        output: `NAME                DATA   AGE
orders-config       3      20m
orders-old-config   3      2d`,
        action: "diagnose",
      },
      {
        command: "kubectl get deployment orders -o yaml",
        output: `spec:
  template:
    spec:
      containers:
        - name: orders
          image: orders-api:3.2
          envFrom:
            - configMapRef:
                name: orders-old-config

The deployment references an outdated ConfigMap.`,
        action: "diagnose",
      },
      {
        command:
          "kubectl set env deployment/orders --from=configmap/orders-config",
        output: `deployment.apps/orders env updated

Configuration source changed to orders-config.
Deployment rollout started.`,
        action: "fix",
      },
      {
        command: "kubectl rollout status deployment/orders",
        output: `Waiting for deployment "orders" rollout to finish...
deployment "orders" successfully rolled out`,
        action: "verify",
      },
      {
        command: "kubectl get pods",
        output: `NAME                     READY   STATUS    RESTARTS   AGE
orders-6d8f9c7b4-k8p2x   1/1     Running   0          9m`,
        action: "verify",
      },
    ],
    hints: [
      "Check the application logs for the missing configuration.",
      "List the available ConfigMaps.",
      "Inspect which ConfigMap the deployment references.",
      "The deployment may be using an outdated configuration source.",
    ],
    rootCause:
      "The orders deployment references orders-old-config instead of the current orders-config.",
    requiredFix:
      "Update the deployment to use the current orders-config ConfigMap.",
  },

  {
    id: "k8s-networkpolicy",
    title: "Kubernetes NetworkPolicy Issue",
    category: "Kubernetes",
    difficulty: "Advanced",
    description:
      "A backend application is healthy but cannot communicate with the database after a NetworkPolicy change.",
    symptom:
      "The backend pods are Running, but database connection attempts time out.",
    commands: [
      {
        command: "kubectl get pods",
        output: `NAME                      READY   STATUS    RESTARTS   AGE
backend-7f9d8c6b4-a2k9m   1/1     Running   0          20m
postgres-5d8f7c6b4-m4x2p  1/1     Running   0          20m`,
        action: "diagnose",
      },
      {
        command: "kubectl logs backend-7f9d8c6b4-a2k9m",
        output: `Connecting to PostgreSQL...
ERROR: connection timed out
Database connection failed.`,
        action: "diagnose",
      },
      {
        command: "kubectl get networkpolicy",
        output: `NAME               POD-SELECTOR
backend-isolation  app=backend`,
        action: "diagnose",
      },
      {
        command: "kubectl describe networkpolicy backend-isolation",
        output: `Name:         backend-isolation
PodSelector:  app=backend

Policy Types:
  Ingress
  Egress

Egress Rules:
  Only DNS traffic is allowed.

Database traffic on TCP/5432 is blocked.`,
        action: "diagnose",
      },
      {
        command: "kubectl get pods --show-labels",
        output: `NAME                      READY   STATUS    LABELS
backend-7f9d8c6b4-a2k9m   1/1     Running   app=backend
postgres-5d8f7c6b4-m4x2p  1/1     Running   app=postgres`,
        action: "diagnose",
      },
      {
        command: "kubectl apply -f backend-networkpolicy.yaml",
        output: `networkpolicy.networking.k8s.io/backend-isolation configured

Egress rule updated.
TCP/5432 traffic to app=postgres is now allowed.`,
        action: "fix",
      },
      {
        command: "kubectl describe networkpolicy backend-isolation",
        output: `Name:         backend-isolation
PodSelector:  app=backend

Egress Rules:
  DNS traffic allowed
  TCP/5432 to app=postgres allowed`,
        action: "verify",
      },
      {
        command: "kubectl logs backend-7f9d8c6b4-a2k9m",
        output: `Connecting to PostgreSQL...
Database connection established.
Backend application is healthy.`,
        action: "verify",
      },
    ],
    hints: [
      "Both backend and database pods are Running, so investigate networking.",
      "Check NetworkPolicies in the namespace.",
      "Inspect the egress rules on the backend policy.",
      "PostgreSQL normally listens on TCP port 5432.",
    ],
    rootCause:
      "The backend NetworkPolicy allows DNS but blocks egress traffic to PostgreSQL on TCP/5432.",
    requiredFix:
      "Update the NetworkPolicy to allow backend pods to reach PostgreSQL on TCP/5432.",
  },

  {
    id: "k8s-rollout-failure",
    title: "Kubernetes Deployment Rollout Failure",
    category: "Kubernetes",
    difficulty: "Advanced",
    description:
      "A new deployment version is failing its readiness checks and the rollout is stuck.",
    symptom:
      "The deployment has unavailable replicas and the new ReplicaSet cannot become Ready.",
    commands: [
      {
        command: "kubectl get deployment api",
        output: `NAME   READY   UP-TO-DATE   AVAILABLE
api    2/3     1            2`,
        action: "diagnose",
      },
      {
        command: "kubectl rollout status deployment/api",
        output: `Waiting for deployment "api" rollout to finish...
1 out of 3 new replicas have been updated...
deployment "api" exceeded its progress deadline`,
        action: "diagnose",
      },
      {
        command: "kubectl get pods",
        output: `NAME                     READY   STATUS    RESTARTS   AGE
api-5d7f8c6b4-a1x2m      1/1     Running   0          18m
api-5d7f8c6b4-b4k7p      1/1     Running   0          18m
api-8f9d6c7b5-z2m4p      0/1     Running   0          5m`,
        action: "diagnose",
      },
      {
        command: "kubectl describe pod api-8f9d6c7b5-z2m4p",
        output: `Name:         api-8f9d6c7b5-z2m4p
Status:       Running

Readiness probe:
  HTTP GET /healthz
  Port: 8080

Events:
  Warning  Unhealthy
  Readiness probe failed: HTTP probe failed with statuscode: 503`,
        action: "diagnose",
      },
      {
        command: "kubectl logs api-8f9d6c7b5-z2m4p",
        output: `API server started.
Loading version 2.0...
Health endpoint initialization failed.
Database migration has not completed.`,
        action: "diagnose",
      },
      {
        command: "kubectl rollout undo deployment/api",
        output: `deployment.apps/api rolled back

Rolling back to the previous stable ReplicaSet.
Deployment rollout started.`,
        action: "fix",
      },
      {
        command: "kubectl rollout status deployment/api",
        output: `Waiting for deployment "api" rollout to finish...
deployment "api" successfully rolled out`,
        action: "verify",
      },
      {
        command: "kubectl get deployment api",
        output: `NAME   READY   UP-TO-DATE   AVAILABLE
api    3/3     3            3`,
        action: "verify",
      },
    ],
    hints: [
      "Start with the deployment rollout status.",
      "Check which pod is not Ready.",
      "Inspect the failing pod's readiness probe.",
      "The new version has a startup problem. Consider the safest rollback action.",
    ],
    rootCause:
      "The new API version fails its readiness probe because database initialization has not completed.",
    requiredFix:
      "Roll back the deployment to the previous stable ReplicaSet.",
  },
];

export default function ScenariosPage() {
  const [category, setCategory] = useState("Kubernetes");
  const [difficulty, setDifficulty] = useState("Beginner");

  const [scenario, setScenario] = useState<Scenario>(scenarios[0]);

  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const [hintIndex, setHintIndex] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);

  const [diagnosisFound, setDiagnosisFound] = useState(false);
  const [fixApplied, setFixApplied] = useState(false);
  const [verified, setVerified] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "DevOps Scenario Generator",
    "Type a command below to investigate the incident.",
    "",
  ]);

  const progressPercent = useMemo(() => {
    if (completed) return 100;
    if (verified) return 100;
    if (fixApplied) return 66;
    if (diagnosisFound) return 33;
    return 0;
  }, [diagnosisFound, fixApplied, verified, completed]);

  const currentStage = useMemo(() => {
    if (completed) return "Completed";
    if (verified) return "Verify";
    if (fixApplied) return "Verify";
    if (diagnosisFound) return "Fix";
    return "Investigate";
  }, [diagnosisFound, fixApplied, verified, completed]);

  const availableScenarioCount = useMemo(() => {
    return scenarios.filter(
      (item) =>
        item.category === category &&
        item.difficulty === difficulty,
    ).length;
  }, [category, difficulty]);

  function clearProgress() {
    setCommand("");
    setHistory([]);
    setHintIndex(0);
    setHintsUsed(0);
    setDiagnosisFound(false);
    setFixApplied(false);
    setVerified(false);
    setCompleted(false);
  }

  function resetScenario() {
    clearProgress();

    setTerminalOutput([
      "DevOps Scenario Generator",
      "Scenario reset.",
      "",
      "Type a command below to investigate the incident.",
      "",
    ]);
  }

  function generateScenario() {
    const matchingScenarios = scenarios.filter(
      (item) =>
        item.category === category &&
        item.difficulty === difficulty,
    );

    if (matchingScenarios.length === 0) {
      clearProgress();

      setTerminalOutput([
        "DevOps Scenario Generator",
        "",
        `No ${difficulty} scenarios are available for ${category} yet.`,
        "",
        "Try Kubernetes with Beginner, Intermediate, or Advanced.",
        "",
      ]);

      return;
    }

    let nextScenario: Scenario;

    if (matchingScenarios.length === 1) {
      nextScenario = matchingScenarios[0];
    } else {
      const differentScenarios = matchingScenarios.filter(
        (item) => item.id !== scenario.id,
      );

      nextScenario =
        differentScenarios[
          Math.floor(Math.random() * differentScenarios.length)
        ];
    }

    setScenario(nextScenario);
    clearProgress();

    setTerminalOutput([
      "DevOps Scenario Generator",
      "",
      `New scenario loaded: ${nextScenario.title}`,
      "",
      "Type a command below to investigate the incident.",
      "",
    ]);
  }

  function useHint() {
    if (hintIndex >= scenario.hints.length) return;

    setTerminalOutput((previous) => [
      ...previous,
      `Hint: ${scenario.hints[hintIndex]}`,
      "",
    ]);

    setHintIndex((previous) => previous + 1);
    setHintsUsed((previous) => previous + 1);
  }

  function runCommand() {
    const normalizedCommand = command.trim();

    if (!normalizedCommand) return;

    const matchedCommand = scenario.commands.find(
      (item) =>
        item.command.trim().toLowerCase() ===
        normalizedCommand.toLowerCase(),
    );

    setHistory((previous) => [...previous, normalizedCommand]);

    if (!matchedCommand) {
      setTerminalOutput((previous) => [
        ...previous,
        `$ ${normalizedCommand}`,
        "command not recognized in this scenario.",
        "",
      ]);

      setCommand("");
      return;
    }

    let nextDiagnosisFound = diagnosisFound;
    let nextFixApplied = fixApplied;
    let nextVerified = verified;
    let nextCompleted = completed;

    if (matchedCommand.action === "diagnose") {
      nextDiagnosisFound = true;
    }

    if (matchedCommand.action === "fix") {
      if (!diagnosisFound) {
        setTerminalOutput((previous) => [
          ...previous,
          `$ ${normalizedCommand}`,
          "Warning: investigate the problem before applying the fix.",
          "",
        ]);

        setCommand("");
        return;
      }

      nextFixApplied = true;
    }

    if (matchedCommand.action === "verify") {
      if (!fixApplied) {
        setTerminalOutput((previous) => [
          ...previous,
          `$ ${normalizedCommand}`,
          "The fix has not been applied yet.",
          "",
        ]);

        setCommand("");
        return;
      }

      nextVerified = true;

      const verifyCommands = scenario.commands.filter(
        (item) => item.action === "verify",
      );

      const finalVerifyCommand =
        verifyCommands[verifyCommands.length - 1]?.command;

      if (
        finalVerifyCommand &&
        normalizedCommand.toLowerCase() ===
          finalVerifyCommand.toLowerCase()
      ) {
        nextCompleted = true;
      }
    }

    setDiagnosisFound(nextDiagnosisFound);
    setFixApplied(nextFixApplied);
    setVerified(nextVerified);
    setCompleted(nextCompleted);

    setTerminalOutput((previous) => [
      ...previous,
      `$ ${normalizedCommand}`,
      matchedCommand.output,
      "",
    ]);

    setCommand("");
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.key === "Enter") {
      runCommand();
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Back to Home */}
        <div className="mb-6">
          <a
            href="/"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            ← Back to DevOpsToolbox
          </a>
        </div>

        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Interactive Lab
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            DevOps Scenario Generator
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Practice real-world DevOps troubleshooting scenarios in a
            safe simulated terminal. No Kubernetes cluster or cloud
            account is required.
          </p>
        </div>

        {/* Scenario Selector */}
        <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Category
              </label>

              <select
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value)
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
              >
                <option>Kubernetes</option>
                <option>Docker</option>
                <option>Linux</option>
                <option>Git</option>
                <option>CI/CD</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Difficulty
              </label>

              <select
                value={difficulty}
                onChange={(event) =>
                  setDifficulty(event.target.value)
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={generateScenario}
                className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Generate Scenario
              </button>
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-500">
            {availableScenarioCount > 0
              ? `${availableScenarioCount} ${difficulty.toLowerCase()} ${category.toLowerCase()} scenario${
                  availableScenarioCount === 1 ? "" : "s"
                } available`
              : `No ${difficulty.toLowerCase()} ${category.toLowerCase()} scenarios available yet`}
          </div>
        </section>

        {/* Scenario */}
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {scenario.category}
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {scenario.difficulty}
                </span>
              </div>

              <h2 className="text-2xl font-bold">
                {scenario.title}
              </h2>

              <p className="mt-3 text-slate-600">
                {scenario.description}
              </p>
            </div>

            <button
              onClick={resetScenario}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
            >
              Reset
            </button>
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-900">
              Symptom
            </p>

            <p className="mt-1 text-sm text-amber-800">
              {scenario.symptom}
            </p>
          </div>
        </section>

        {/* Progress */}
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Progress
              </p>

              <p className="mt-1 text-lg font-bold">
                {currentStage}
              </p>
            </div>

            <p className="text-sm font-semibold text-slate-600">
              {progressPercent}%
            </p>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs font-semibold">
            <span
              className={
                diagnosisFound
                  ? "text-blue-600"
                  : "text-slate-400"
              }
            >
              Investigate
            </span>

            <span
              className={
                fixApplied
                  ? "text-blue-600"
                  : "text-slate-400"
              }
            >
              Fix
            </span>

            <span
              className={
                verified
                  ? "text-blue-600"
                  : "text-slate-400"
              }
            >
              Verify
            </span>

            <span
              className={
                completed
                  ? "text-green-600"
                  : "text-slate-400"
              }
            >
              Completed
            </span>
          </div>
        </section>

        {/* Terminal + Sidebar */}
        <section className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-lg">
              <div className="border-b border-slate-800 bg-slate-900 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />

                  <span className="ml-3 text-xs text-slate-400">
                    simulated-terminal
                  </span>
                </div>
              </div>

              <div className="min-h-[420px] p-5 font-mono text-sm leading-7">
                {terminalOutput.map((line, index) => (
                  <div
                    key={`${line}-${index}`}
                    className={
                      line.startsWith("$")
                        ? "text-green-400"
                        : line.startsWith("Warning:")
                          ? "text-yellow-400"
                          : line.startsWith("Hint:")
                            ? "text-cyan-400"
                            : "text-slate-300"
                    }
                  >
                    {line || "\u00A0"}
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-800 p-4">
                <div className="flex gap-3">
                  <span className="py-3 font-mono text-green-400">
                    $
                  </span>

                  <input
                    value={command}
                    onChange={(event) =>
                      setCommand(event.target.value)
                    }
                    onKeyDown={handleKeyDown}
                    placeholder="Type a kubectl command..."
                    className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 font-mono text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                  />

                  <button
                    onClick={runCommand}
                    className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Run
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold">Hints</h3>

              <p className="mt-2 text-sm text-slate-600">
                Use hints if you get stuck. Try investigating before
                applying any fix.
              </p>

              <button
                onClick={useHint}
                disabled={hintIndex >= scenario.hints.length}
                className="mt-4 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50"
              >
                {hintIndex >= scenario.hints.length
                  ? "No More Hints"
                  : `Use Hint (${hintIndex + 1}/${scenario.hints.length})`}
              </button>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold">Lab Stats</h3>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Commands
                  </span>

                  <span className="font-semibold">
                    {history.length}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Hints Used
                  </span>

                  <span className="font-semibold">
                    {hintsUsed}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Diagnosis
                  </span>

                  <span className="font-semibold">
                    {diagnosisFound ? "Found" : "Not found"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Fix
                  </span>

                  <span className="font-semibold">
                    {fixApplied ? "Applied" : "Pending"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Verification
                  </span>

                  <span className="font-semibold">
                    {verified ? "Passed" : "Pending"}
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* Completion */}
        {completed && (
          <section className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              Scenario Completed
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-900">
              Great work! The incident is resolved.
            </h2>

            <div className="mt-6 space-y-4 text-sm text-green-900">
              <div>
                <p className="font-bold">Root Cause</p>

                <p className="mt-1">
                  {scenario.rootCause}
                </p>
              </div>

              <div>
                <p className="font-bold">Fix Applied</p>

                <p className="mt-1">
                  {scenario.requiredFix}
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}