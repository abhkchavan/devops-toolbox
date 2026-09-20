import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "kubectl Commands Cheat Sheet | Kubernetes CLI Reference",
  description:
    "Practical kubectl commands for Kubernetes clusters, pods, deployments, services, namespaces, logs, troubleshooting and resource management.",
};

const commandSections = [
  {
    title: "1. Check Cluster Information",
    commands: [
      {
        command: "kubectl cluster-info",
        description:
          "Displays the Kubernetes control plane and cluster service endpoints.",
      },
      {
        command: "kubectl version",
        description:
          "Displays client and server Kubernetes version information.",
      },
      {
        command: "kubectl get nodes",
        description: "Lists all nodes in the current cluster.",
      },
      {
        command: "kubectl get nodes -o wide",
        description:
          "Shows additional node information such as internal IP, OS and container runtime.",
      },
    ],
  },
  {
    title: "2. Get Kubernetes Resources",
    commands: [
      {
        command: "kubectl get pods",
        description: "Lists pods in the current namespace.",
      },
      {
        command: "kubectl get pods -A",
        description: "Lists pods across all namespaces.",
      },
      {
        command: "kubectl get pods -o wide",
        description: "Shows additional pod information including IP and node.",
      },
      {
        command: "kubectl get all",
        description:
          "Displays common resources such as pods, services, deployments and replicasets in the current namespace.",
      },
      {
        command: "kubectl get namespaces",
        description: "Lists all namespaces in the cluster.",
      },
      {
        command: "kubectl get svc",
        description: "Lists Services in the current namespace.",
      },
      {
        command: "kubectl get deployments",
        description: "Lists Deployments in the current namespace.",
      },
      {
        command: "kubectl get replicasets",
        description: "Lists ReplicaSets in the current namespace.",
      },
    ],
  },
  {
    title: "3. Namespaces",
    commands: [
      {
        command: "kubectl get ns",
        description: "Lists all namespaces.",
      },
      {
        command: "kubectl get pods -n <namespace>",
        description: "Lists pods in a specific namespace.",
      },
      {
        command: "kubectl get all -n <namespace>",
        description: "Lists common resources inside a specific namespace.",
      },
      {
        command: "kubectl config set-context --current --namespace=<namespace>",
        description:
          "Sets the default namespace for the current kubectl context.",
      },
    ],
  },
  {
    title: "4. Describe Resources",
    commands: [
      {
        command: "kubectl describe pod <pod-name>",
        description:
          "Shows detailed pod information including events, containers, volumes and scheduling details.",
      },
      {
        command: "kubectl describe node <node-name>",
        description:
          "Shows detailed information about a Kubernetes node.",
      },
      {
        command: "kubectl describe deployment <deployment-name>",
        description:
          "Shows detailed Deployment configuration and events.",
      },
      {
        command: "kubectl describe svc <service-name>",
        description:
          "Shows detailed Service configuration and endpoints.",
      },
    ],
  },
  {
    title: "5. Pod Logs",
    commands: [
      {
        command: "kubectl logs <pod-name>",
        description: "Displays logs from a pod.",
      },
      {
        command: "kubectl logs -f <pod-name>",
        description: "Continuously follows pod logs.",
      },
      {
        command: "kubectl logs --tail=100 <pod-name>",
        description: "Displays the last 100 lines of logs.",
      },
      {
        command: "kubectl logs --previous <pod-name>",
        description:
          "Displays logs from the previous terminated container instance.",
      },
      {
        command: "kubectl logs <pod-name> -c <container-name>",
        description:
          "Displays logs from a specific container in a multi-container pod.",
      },
    ],
  },
  {
    title: "6. Execute Commands Inside Pods",
    commands: [
      {
        command: "kubectl exec -it <pod-name> -- /bin/bash",
        description:
          "Opens an interactive Bash shell inside a running container.",
      },
      {
        command: "kubectl exec -it <pod-name> -- /bin/sh",
        description:
          "Opens a shell when Bash is not available in the container.",
      },
      {
        command: "kubectl exec <pod-name> -- env",
        description: "Displays environment variables inside the container.",
      },
      {
        command: "kubectl exec <pod-name> -- ls -la",
        description: "Runs ls inside the container.",
      },
    ],
  },
  {
    title: "7. Create and Apply Resources",
    commands: [
      {
        command: "kubectl apply -f deployment.yaml",
        description:
          "Creates or updates resources defined in a Kubernetes manifest.",
      },
      {
        command: "kubectl apply -f ./manifests/",
        description:
          "Applies all supported Kubernetes manifests in a directory.",
      },
      {
        command: "kubectl create deployment nginx --image=nginx",
        description: "Creates a Deployment from the command line.",
      },
      {
        command: "kubectl create namespace <namespace>",
        description: "Creates a namespace.",
      },
    ],
  },
  {
    title: "8. Delete Resources",
    commands: [
      {
        command: "kubectl delete pod <pod-name>",
        description: "Deletes a specific pod.",
      },
      {
        command: "kubectl delete deployment <deployment-name>",
        description: "Deletes a Deployment and its managed resources.",
      },
      {
        command: "kubectl delete svc <service-name>",
        description: "Deletes a Service.",
      },
      {
        command: "kubectl delete -f deployment.yaml",
        description:
          "Deletes resources defined in a Kubernetes manifest.",
      },
      {
        command: "kubectl delete namespace <namespace>",
        description:
          "Deletes a namespace and resources contained within it.",
      },
    ],
  },
  {
    title: "9. Deployments and Rollouts",
    commands: [
      {
        command: "kubectl get deployment",
        description: "Lists Deployments.",
      },
      {
        command: "kubectl rollout status deployment/<deployment-name>",
        description: "Checks the rollout status of a Deployment.",
      },
      {
        command: "kubectl rollout history deployment/<deployment-name>",
        description: "Displays Deployment rollout history.",
      },
      {
        command: "kubectl rollout undo deployment/<deployment-name>",
        description: "Rolls a Deployment back to its previous revision.",
      },
      {
        command: "kubectl rollout restart deployment/<deployment-name>",
        description:
          "Triggers a rolling restart of a Deployment.",
      },
    ],
  },
  {
    title: "10. Scale Applications",
    commands: [
      {
        command: "kubectl scale deployment <deployment-name> --replicas=3",
        description:
          "Changes the desired number of replicas for a Deployment.",
      },
      {
        command: "kubectl get deployment <deployment-name>",
        description:
          "Shows the current and desired replica counts.",
      },
    ],
  },
  {
    title: "11. Services and Networking",
    commands: [
      {
        command: "kubectl get svc",
        description: "Lists Kubernetes Services.",
      },
      {
        command: "kubectl describe svc <service-name>",
        description:
          "Displays Service configuration, ports and endpoints.",
      },
      {
        command: "kubectl get endpoints",
        description:
          "Displays endpoints associated with Services.",
      },
      {
        command:
          "kubectl expose deployment <deployment-name> --port=80 --type=NodePort",
        description:
          "Creates a Service exposing a Deployment.",
      },
      {
        command:
          "kubectl port-forward svc/<service-name> 8080:80",
        description:
          "Forwards a local port to a Kubernetes Service.",
      },
    ],
  },
  {
    title: "12. ConfigMaps and Secrets",
    commands: [
      {
        command: "kubectl get configmaps",
        description: "Lists ConfigMaps.",
      },
      {
        command: "kubectl describe configmap <name>",
        description: "Displays ConfigMap details.",
      },
      {
        command: "kubectl get secrets",
        description: "Lists Secrets.",
      },
      {
        command: "kubectl describe secret <name>",
        description:
          "Displays Secret metadata without directly printing decoded values.",
      },
    ],
  },
  {
    title: "13. Kubernetes Events",
    commands: [
      {
        command: "kubectl get events",
        description: "Lists events in the current namespace.",
      },
      {
        command: "kubectl get events -A",
        description: "Lists events across all namespaces.",
      },
      {
        command:
          "kubectl get events --sort-by=.lastTimestamp",
        description:
          "Sorts events by their latest timestamp.",
      },
    ],
  },
  {
    title: "14. Resource Usage",
    commands: [
      {
        command: "kubectl top nodes",
        description:
          "Displays CPU and memory usage for nodes when Metrics Server is available.",
      },
      {
        command: "kubectl top pods",
        description:
          "Displays CPU and memory usage for pods when Metrics Server is available.",
      },
      {
        command: "kubectl top pods -A",
        description:
          "Displays pod resource usage across namespaces.",
      },
    ],
  },
  {
    title: "15. Labels and Selectors",
    commands: [
      {
        command: "kubectl get pods --show-labels",
        description: "Displays pod labels.",
      },
      {
        command: "kubectl get pods -l app=nginx",
        description:
          "Lists pods matching the specified label selector.",
      },
      {
        command:
          "kubectl label pod <pod-name> environment=production",
        description: "Adds or updates a label on a pod.",
      },
    ],
  },
  {
    title: "16. Context and Configuration",
    commands: [
      {
        command: "kubectl config get-contexts",
        description: "Lists available kubectl contexts.",
      },
      {
        command: "kubectl config current-context",
        description: "Displays the currently selected context.",
      },
      {
        command: "kubectl config use-context <context-name>",
        description: "Switches to another Kubernetes context.",
      },
      {
        command: "kubectl config view",
        description: "Displays the current kubeconfig configuration.",
      },
    ],
  },
  {
    title: "17. Debugging",
    commands: [
      {
        command: "kubectl get pods -o wide",
        description:
          "Useful first step for checking pod placement and networking information.",
      },
      {
        command: "kubectl describe pod <pod-name>",
        description:
          "Inspect scheduling, container state and Kubernetes events.",
      },
      {
        command: "kubectl logs <pod-name>",
        description:
          "Inspect application output from the container.",
      },
      {
        command: "kubectl get events --sort-by=.lastTimestamp",
        description:
          "Review recent Kubernetes events for failures and warnings.",
      },
      {
        command:
          "kubectl get pod <pod-name> -o yaml",
        description:
          "Displays the complete Kubernetes object definition.",
      },
    ],
  },
];

export default function KubectlCommands() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="text-sm text-cyan-400 hover:underline"
        >
          ← Back to DevOpsToolbox
        </a>

        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Kubernetes
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            kubectl Commands Cheat Sheet
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            A practical kubectl command reference for managing Kubernetes
            clusters, pods, deployments, services, namespaces, logs and
            troubleshooting.
          </p>
        </header>

        <section className="mt-10 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
          <h2 className="text-xl font-bold">kubectl Syntax</h2>

          <div className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4">
            <code className="text-cyan-400">
              kubectl [command] [TYPE] [NAME] [flags]
            </code>
          </div>

          <p className="mt-4 leading-7 text-slate-400">
            kubectl is the Kubernetes command-line tool used to communicate
            with the Kubernetes API server and manage cluster resources.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Quick Command Reference
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "kubectl get pods",
              "kubectl get pods -A",
              "kubectl describe pod <pod-name>",
              "kubectl logs <pod-name>",
              "kubectl exec -it <pod-name> -- /bin/sh",
              "kubectl apply -f deployment.yaml",
              "kubectl get nodes",
              "kubectl get svc",
              "kubectl rollout status deployment/<name>",
              "kubectl get events",
            ].map((command) => (
              <div
                key={command}
                className="rounded-lg border border-slate-800 bg-slate-900 p-4"
              >
                <code className="break-all text-sm text-cyan-400">
                  {command}
                </code>
              </div>
            ))}
          </div>
        </section>

        {commandSections.map((section) => (
          <section key={section.title} className="mt-12">
            <h2 className="text-2xl font-bold">
              {section.title}
            </h2>

            <div className="mt-5 space-y-4">
              {section.commands.map((item) => (
                <div
                  key={item.command}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/30"
                >
                  <div className="overflow-x-auto rounded-lg bg-slate-950 p-4">
                    <code className="whitespace-nowrap text-sm text-cyan-400">
                      {item.command}
                    </code>
                  </div>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Common Troubleshooting Workflow
          </h2>

          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-6">
            <pre className="text-sm leading-8 text-slate-300">
{`kubectl get pods
kubectl get pods -o wide
kubectl describe pod <pod-name>
kubectl logs <pod-name>
kubectl logs --previous <pod-name>
kubectl get events --sort-by=.lastTimestamp
kubectl get deployment
kubectl get svc
kubectl get nodes
kubectl describe node <node-name>`}
            </pre>
          </div>

          <p className="mt-5 leading-7 text-slate-400">
            Start with the resource status, inspect events and container
            logs, then check the surrounding Deployment, Service and node
            configuration. This gives you useful diagnostic information
            before taking disruptive actions.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
          <h2 className="text-xl font-bold">
            DevOpsToolbox Tip
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            When troubleshooting Kubernetes, avoid immediately deleting a
            failing pod. First inspect its status, events and logs. The
            information you collect can help identify whether the problem is
            related to scheduling, configuration, networking, images or the
            application itself.
          </p>
        </section>

        <footer className="mt-12 border-t border-slate-800 pt-6">
          <p className="text-sm text-slate-500">
            Kubernetes kubectl reference for DevOps and SRE workflows.
          </p>
        </footer>
      </div>
    </main>
  );
}