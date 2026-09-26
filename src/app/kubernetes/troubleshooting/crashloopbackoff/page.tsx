import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kubernetes CrashLoopBackOff Troubleshooting Guide | kubectl",
  description:
    "Production-focused Kubernetes CrashLoopBackOff troubleshooting guide covering pod status, logs, previous logs, exit codes, OOMKilled, probes, ConfigMaps, Secrets, events, fixes, verification, and SRE incident workflow.",
  keywords: [
    "Kubernetes CrashLoopBackOff",
    "CrashLoopBackOff troubleshooting",
    "kubectl CrashLoopBackOff",
    "Kubernetes pod troubleshooting",
    "kubectl logs previous",
    "kubectl describe pod",
    "Kubernetes OOMKilled",
    "Kubernetes liveness probe",
    "Kubernetes startup probe",
    "Kubernetes exit code",
    "Kubernetes pod restart",
    "Kubernetes troubleshooting commands",
  ],
  alternates: {
    canonical:
      "https://www.devopscommands.com/kubernetes/troubleshooting/crashloopbackoff",
  },
  openGraph: {
    title: "Kubernetes CrashLoopBackOff Troubleshooting Guide",
    description:
      "A practical production/SRE workflow to diagnose and fix Kubernetes CrashLoopBackOff.",
    url: "https://www.devopscommands.com/kubernetes/troubleshooting/crashloopbackoff",
    type: "article",
  },
};

const diagnosticCommands = [
  {
    title: "1. Find the affected pod",
    command: "kubectl get pods -n <namespace>",
    explanation:
      "Confirm the pod is actually in CrashLoopBackOff and note READY, STATUS, and RESTARTS. A growing restart count tells you the container is repeatedly terminating.",
    whatToLookFor:
      "STATUS=CrashLoopBackOff, READY less than the expected number, and an increasing RESTARTS count.",
  },
  {
    title: "2. Inspect the pod state and events",
    command: "kubectl describe pod <pod-name> -n <namespace>",
    explanation:
      "Use describe when you need Kubernetes-level evidence. Check State, Last State, Reason, Exit Code, container details, probes, mounts, and the Events section.",
    whatToLookFor:
      "Last State, Reason, Exit Code, probe failures, mount errors, image problems, and recent warning events.",
  },
  {
    title: "3. Read the current container logs",
    command: "kubectl logs <pod-name> -n <namespace>",
    explanation:
      "Application logs often provide the first direct clue about why the process exited.",
    whatToLookFor:
      "Configuration errors, startup exceptions, missing files, connection failures, authentication errors, or an explicit application shutdown.",
  },
  {
    title: "4. Read logs from the previous crashed container",
    command: "kubectl logs <pod-name> -n <namespace> --previous",
    explanation:
      "This is one of the most important commands for CrashLoopBackOff. The current container may be restarting before you can inspect its output, while the previous instance contains the failure.",
    whatToLookFor:
      "The final error immediately before the previous container terminated.",
  },
  {
    title: "5. Check recent Kubernetes events",
    command: "kubectl get events -n <namespace> --sort-by=.lastTimestamp",
    explanation:
      "Events provide Kubernetes control-plane and kubelet clues that application logs may not contain.",
    whatToLookFor:
      "Failed probes, failed mounts, image issues, scheduling/resource messages, and other Warning events.",
  },
  {
    title: "6. Inspect the owning workload",
    command: "kubectl get pod <pod-name> -n <namespace> -o wide",
    explanation:
      "Confirm which node is running the pod and collect additional pod details before changing anything.",
    whatToLookFor:
      "Node placement, pod IP, image, and whether the issue is isolated to one pod or repeated across replicas.",
  },
];

const commonCauses = [
  {
    title: "Application crash",
    description:
      "The process starts and exits because of an application exception, invalid startup configuration, missing dependency, or an intentional non-zero exit.",
    evidence:
      "kubectl logs or kubectl logs --previous usually contains the application error.",
  },
  {
    title: "Bad configuration",
    description:
      "Environment variables, command-line arguments, ConfigMaps, Secrets, or mounted configuration files contain invalid or missing values.",
    evidence:
      "Logs show configuration errors, or describe reveals incorrect environment/configuration references.",
  },
  {
    title: "Liveness or startup probe failure",
    description:
      "Kubernetes can restart a container when its liveness probe repeatedly fails. A startup probe can also prevent normal probe evaluation until startup succeeds.",
    evidence:
      "describe pod and Events commonly show repeated probe failures.",
  },
  {
    title: "OOMKilled / memory pressure",
    description:
      "The container exceeded its memory limit and was terminated. This is different from simply seeing a generic CrashLoopBackOff status.",
    evidence:
      "describe pod shows a previous termination reason such as OOMKilled.",
  },
  {
    title: "Incorrect command or arguments",
    description:
      "The image starts with a command or argument that does not exist, is invalid, or causes the process to terminate immediately.",
    evidence:
      "Container logs, pod configuration, and the image's expected startup command are the first places to investigate.",
  },
  {
    title: "Missing files, mounts, or permissions",
    description:
      "The application expects a file, volume, Secret, ConfigMap, certificate, or permission that is unavailable inside the container.",
    evidence:
      "Application logs, describe output, and mount-related events can reveal the missing dependency.",
  },
];

const exitCodeExamples = [
  {
    value: "0",
    meaning:
      "The process exited successfully. If the workload is expected to stay running, investigate why the application exits instead of remaining a long-running process.",
  },
  {
    value: "1",
    meaning:
      "A generic application error. Treat the application logs as the primary evidence rather than assuming Kubernetes itself caused the failure.",
  },
  {
    value: "137",
    meaning:
      "The process was terminated with SIGKILL (128 + 9). In Kubernetes, check Last State and the termination reason for evidence of OOMKilled before concluding that memory pressure was the cause.",
  },
  {
    value: "143",
    meaning:
      "The process was terminated with SIGTERM (128 + 15). Investigate why termination was requested, including workload lifecycle events and graceful shutdown behavior.",
  },
];

const investigationFlow = [
  {
    step: "1",
    title: "Confirm the symptom",
    command: "kubectl get pods -n <namespace>",
    question:
      "Is the pod repeatedly restarting, and is the restart count increasing?",
  },
  {
    step: "2",
    title: "Capture Kubernetes evidence",
    command: "kubectl describe pod <pod-name> -n <namespace>",
    question:
      "What are State, Last State, Reason, Exit Code, probes, and Events telling you?",
  },
  {
    step: "3",
    title: "Capture application evidence",
    command:
      "kubectl logs <pod-name> -n <namespace> --previous",
    question:
      "What happened immediately before the previous container exited?",
  },
  {
    step: "4",
    title: "Classify the failure",
    command:
      "kubectl get events -n <namespace> --sort-by=.lastTimestamp",
    question:
      "Is this an application, configuration, probe, resource, mount, or platform issue?",
  },
  {
    step: "5",
    title: "Apply the smallest safe fix",
    command:
      "kubectl rollout status deployment/<deployment-name> -n <namespace>",
    question:
      "Can you correct the underlying cause without making unrelated production changes?",
  },
  {
    step: "6",
    title: "Verify recovery",
    command: "kubectl get pods -n <namespace>",
    question:
      "Is the pod Ready, stable, and no longer accumulating restarts?",
  },
];

const productionChecks = [
  "Record the affected namespace, workload, pod name, start time, and customer impact before making changes.",
  "Capture current and previous container logs before restarting or deleting the pod.",
  "Inspect Last State, Reason, Exit Code, and Events rather than treating CrashLoopBackOff as the root cause.",
  "Check whether one pod is failing or whether multiple replicas are showing the same behavior.",
  "Validate ConfigMaps, Secrets, mounted files, commands, arguments, probes, and resource limits.",
  "After the fix, verify readiness and stability rather than stopping when the pod changes from CrashLoopBackOff to Running.",
];

const verificationCommands = [
  "kubectl get pods -n <namespace>",
  "kubectl describe pod <pod-name> -n <namespace>",
  "kubectl logs <pod-name> -n <namespace> --tail=100",
  "kubectl get events -n <namespace> --sort-by=.lastTimestamp",
  "kubectl rollout status deployment/<deployment-name> -n <namespace>",
];

const fixes = [
  "Correct the application configuration or startup error identified in the logs.",
  "Fix invalid environment variables, ConfigMap values, or Secret references.",
  "Correct the container command or arguments if the process is exiting immediately.",
  "Adjust incorrect startup or liveness probes after validating the application's actual startup behavior.",
  "Investigate OOMKilled by reviewing memory usage, limits, application behavior, and recent workload changes.",
  "Restore missing volumes, files, certificates, or permissions required by the application.",
  "Roll back a bad workload revision when the evidence points to a recent deployment change.",
];

const faqs = [
  {
    question: "Is CrashLoopBackOff the root cause?",
    answer:
      "Usually no. CrashLoopBackOff describes a repeated restart condition and back-off behavior. The underlying cause may be an application error, configuration problem, failed probe, resource termination, or another container startup issue.",
  },
  {
    question: "What command should I run first?",
    answer:
      "Start with kubectl get pods -n <namespace> to confirm the affected pod and restart count. Then use kubectl describe pod and kubectl logs --previous to collect evidence.",
  },
  {
    question: "Why is kubectl logs --previous important?",
    answer:
      "A container in CrashLoopBackOff may terminate and restart quickly. --previous lets you inspect logs from the previous container instance, which can contain the failure that caused the restart.",
  },
  {
    question: "Does CrashLoopBackOff always mean OOMKilled?",
    answer:
      "No. OOMKilled is only one possible cause. Check Last State and Reason in kubectl describe pod and correlate them with logs and events.",
  },
];

export default function CrashLoopBackOffPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <a
          href="/kubernetes/kubectl-commands"
          className="mb-8 inline-flex text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to Kubernetes Commands
        </a>

        <header className="mb-12">
          <div className="mb-4 inline-flex rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-sm font-medium text-red-300">
            Kubernetes Troubleshooting
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Kubernetes CrashLoopBackOff Troubleshooting
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            A production-focused workflow for diagnosing a Kubernetes container
            that repeatedly starts, crashes, and gets restarted. Use pod state,
            exit codes, logs, events, probes, configuration, and resource
            evidence to identify the actual root cause.
          </p>
        </header>

        <section className="mb-12 rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
          <h2 className="text-2xl font-semibold">
            What is CrashLoopBackOff?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            CrashLoopBackOff is a Kubernetes status that indicates a container
            has repeatedly terminated and Kubernetes is backing off before
            attempting another restart.
          </p>

          <p className="mt-4 leading-7 text-slate-300">
            The key troubleshooting principle is:
            <strong className="text-white">
              {" "}
              CrashLoopBackOff is a symptom, not the root cause.
            </strong>{" "}
            Your job is to find out why the container is terminating.
          </p>

          <div className="mt-6 rounded-xl border border-red-400/20 bg-slate-950/60 p-5">
            <p className="font-semibold text-white">Think like an SRE</p>
            <p className="mt-2 leading-7 text-slate-300">
              Do not immediately delete or restart the pod. First capture
              evidence, determine customer impact, identify the failing layer,
              apply the smallest safe change, and then verify that the service
              remains healthy.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Production Troubleshooting Flow
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Follow this order during an incident. It keeps the investigation
            evidence-driven instead of changing multiple things at once.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {investigationFlow.map((item) => (
              <article
                key={item.step}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-950 p-3 text-sm text-cyan-300">
                      <code>{item.command}</code>
                    </pre>
                    <p className="mt-3 leading-6 text-slate-400">
                      {item.question}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Step 1: Confirm the Pod Status
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Start by identifying the affected pod and checking whether the
            restart count is increasing.
          </p>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>kubectl get pods -n &lt;namespace&gt;</code>
          </pre>

          <pre className="mt-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-slate-300">
            <code>{`NAME                         READY   STATUS             RESTARTS
my-app-7d8f9c6b7d-abc12     0/1     CrashLoopBackOff   5`}</code>
          </pre>

          <p className="mt-4 leading-7 text-slate-300">
            A pod in CrashLoopBackOff is not necessarily telling you why the
            process failed. Treat STATUS as the starting signal and continue
            to the container state, logs, and events.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Step 2: Inspect State, Last State, Exit Code, and Events
          </h2>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>kubectl describe pod &lt;pod-name&gt; -n &lt;namespace&gt;</code>
          </pre>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-lg font-semibold text-white">State</h3>
              <p className="mt-2 leading-6 text-slate-400">
                Shows the current container state. It helps establish what is
                happening right now.
              </p>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-lg font-semibold text-white">Last State</h3>
              <p className="mt-2 leading-6 text-slate-400">
                Often more useful for CrashLoopBackOff because it describes the
                previous terminated container instance.
              </p>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-lg font-semibold text-white">Reason</h3>
              <p className="mt-2 leading-6 text-slate-400">
                Look for evidence such as OOMKilled or another termination
                reason. Do not infer the cause from the CrashLoopBackOff label
                alone.
              </p>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-lg font-semibold text-white">Exit Code</h3>
              <p className="mt-2 leading-6 text-slate-400">
                Provides a clue about how the process terminated. Always
                correlate the exit code with logs and the termination reason.
              </p>
            </article>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Step 3: Check Current and Previous Logs
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Application logs are often the fastest route to the actual failure.
          </p>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>kubectl logs &lt;pod-name&gt; -n &lt;namespace&gt;</code>
          </pre>

          <h3 className="mt-8 text-xl font-semibold">
            Most important command for a crash loop
          </h3>

          <pre className="mt-4 overflow-x-auto rounded-xl border border-cyan-400/20 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>
              kubectl logs &lt;pod-name&gt; -n &lt;namespace&gt; --previous
            </code>
          </pre>

          <p className="mt-4 leading-7 text-slate-300">
            If the container has already restarted, the previous instance may
            contain the final application error that caused the termination.
          </p>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-lg font-semibold text-white">
              What to search for in logs
            </h3>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li>• Configuration or environment-variable errors</li>
              <li>• Connection or dependency failures</li>
              <li>• Authentication or certificate errors</li>
              <li>• Missing files or directories</li>
              <li>• Application startup exceptions</li>
              <li>• Explicit non-zero process termination</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Step 4: Check Kubernetes Events
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Events can expose Kubernetes-level problems that do not appear in
            application logs.
          </p>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>
              kubectl get events -n &lt;namespace&gt; --sort-by=.lastTimestamp
            </code>
          </pre>

          <p className="mt-4 leading-7 text-slate-300">
            Also check the Events section returned by:
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>kubectl describe pod &lt;pod-name&gt; -n &lt;namespace&gt;</code>
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Common CrashLoopBackOff Causes
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {commonCauses.map((cause) => (
              <article
                key={cause.title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {cause.title}
                </h3>
                <p className="mt-2 leading-6 text-slate-400">
                  {cause.description}
                </p>
                <div className="mt-4 rounded-lg bg-slate-950 p-3">
                  <p className="text-sm text-cyan-300">Evidence</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {cause.evidence}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Understanding Exit Codes
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Exit codes are clues, not standalone root-cause answers. Always
            correlate them with Last State, Reason, logs, and events.
          </p>

          <div className="mt-6 space-y-4">
            {exitCodeExamples.map((item) => (
              <article
                key={item.value}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                  <span className="rounded-lg bg-slate-950 px-3 py-2 font-mono text-cyan-300">
                    Exit {item.value}
                  </span>
                  <p className="leading-7 text-slate-400">{item.meaning}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Probe Failures: Startup vs Liveness
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            A common production mistake is changing probe settings without
            first checking whether the application actually starts correctly.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-lg font-semibold text-white">
                Startup probe
              </h3>
              <p className="mt-2 leading-6 text-slate-400">
                Gives a slow-starting application time to initialize before
                normal liveness/readiness behavior becomes relevant.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Investigate repeated startup failures and whether the configured
                startup window matches the application's actual startup time.
              </p>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-lg font-semibold text-white">
                Liveness probe
              </h3>
              <p className="mt-2 leading-6 text-slate-400">
                Helps Kubernetes determine whether a running container should
                be restarted.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                If liveness failures appear in Events, verify the endpoint,
                port, timing, and application's real health behavior before
                changing thresholds.
              </p>
            </article>
          </div>

          <pre className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>kubectl describe pod &lt;pod-name&gt; -n &lt;namespace&gt;</code>
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            OOMKilled: Do Not Confuse It With CrashLoopBackOff
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            OOMKilled describes a memory-related termination. CrashLoopBackOff
            describes the resulting repeated restart condition. A pod can show
            CrashLoopBackOff after a container is repeatedly terminated for
            memory reasons.
          </p>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>kubectl describe pod &lt;pod-name&gt; -n &lt;namespace&gt;</code>
          </pre>

          <p className="mt-4 leading-7 text-slate-300">
            Check the container's Last State and Reason. If the evidence shows
            OOMKilled, investigate memory limits, actual workload usage, recent
            application changes, and whether the process has a memory-growth
            problem before simply increasing the limit.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Configuration, ConfigMap, and Secret Checks
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            If logs point to missing or invalid configuration, inspect the
            workload configuration instead of repeatedly restarting the pod.
          </p>

          <div className="mt-5 space-y-4">
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
              <code>
                kubectl get deployment &lt;deployment-name&gt; -n &lt;namespace&gt; -o yaml
              </code>
            </pre>

            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
              <code>
                kubectl get configmap &lt;configmap-name&gt; -n &lt;namespace&gt; -o yaml
              </code>
            </pre>

            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
              <code>
                kubectl get secret &lt;secret-name&gt; -n &lt;namespace&gt; -o yaml
              </code>
            </pre>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Avoid exposing Secret values in tickets, screenshots, terminal
            captures, or incident documentation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Common Fixes — Based on Evidence
          </h2>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <ul className="space-y-3 text-slate-300">
              {fixes.map((fix) => (
                <li key={fix} className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>{fix}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-amber-400/20 bg-amber-400/5 p-6">
            <h3 className="text-lg font-semibold text-amber-200">
              Production warning
            </h3>
            <p className="mt-2 leading-7 text-slate-300">
              Avoid using pod deletion or arbitrary restarts as the first
              troubleshooting step. Restarting can destroy useful evidence and
              may temporarily hide the underlying problem.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Verify the Fix
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Recovery is not complete just because the pod briefly becomes
            Running. Verify readiness, restart stability, workload rollout, and
            recent events.
          </p>

          <div className="mt-6 space-y-4">
            {verificationCommands.map((command) => (
              <pre
                key={command}
                className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm text-cyan-300"
              >
                <code>{command}</code>
              </pre>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-6">
            <h3 className="text-lg font-semibold text-emerald-300">
              Recovery criteria
            </h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>✓ Pod reaches Ready state.</li>
              <li>✓ Restart count stops increasing.</li>
              <li>✓ Application logs no longer show the failure.</li>
              <li>✓ Recent events do not show the same warning repeatedly.</li>
              <li>✓ Deployment rollout completes successfully.</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            SRE Incident Checklist
          </h2>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <ul className="space-y-3 text-slate-300">
              {productionChecks.map((check) => (
                <li key={check} className="flex gap-3">
                  <span className="text-cyan-400">□</span>
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <h2 className="text-2xl font-semibold">
            Quick CrashLoopBackOff Checklist
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-slate-950/60 p-4">
              <p className="font-semibold text-white">1. Confirm</p>
              <p className="mt-1 text-sm text-slate-400">
                kubectl get pods
              </p>
            </div>
            <div className="rounded-lg bg-slate-950/60 p-4">
              <p className="font-semibold text-white">2. Describe</p>
              <p className="mt-1 text-sm text-slate-400">
                State + Last State + Reason + Exit Code + Events
              </p>
            </div>
            <div className="rounded-lg bg-slate-950/60 p-4">
              <p className="font-semibold text-white">3. Logs</p>
              <p className="mt-1 text-sm text-slate-400">
                kubectl logs --previous
              </p>
            </div>
            <div className="rounded-lg bg-slate-950/60 p-4">
              <p className="font-semibold text-white">4. Classify</p>
              <p className="mt-1 text-sm text-slate-400">
                App / Config / Probe / Resource / Mount / Platform
              </p>
            </div>
            <div className="rounded-lg bg-slate-950/60 p-4">
              <p className="font-semibold text-white">5. Fix</p>
              <p className="mt-1 text-sm text-slate-400">
                Change the underlying cause, not just the symptom
              </p>
            </div>
            <div className="rounded-lg bg-slate-950/60 p-4">
              <p className="font-semibold text-white">6. Verify</p>
              <p className="mt-1 text-sm text-slate-400">
                Ready + stable restarts + healthy rollout
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <p className="mt-2 leading-7 text-slate-400">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="border-t border-slate-800 pt-8">
          <a
            href="/kubernetes/kubectl-commands"
            className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
          >
            ← Explore Kubernetes Commands
          </a>
        </footer>
      </div>
    </main>
  );
}