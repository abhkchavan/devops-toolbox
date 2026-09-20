import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kubernetes CrashLoopBackOff | Troubleshooting Guide",
  description:
    "Learn how to troubleshoot Kubernetes CrashLoopBackOff errors using kubectl logs, describe pod, events, previous container logs, and practical fixes.",
  keywords: [
    "Kubernetes CrashLoopBackOff",
    "CrashLoopBackOff troubleshooting",
    "kubectl CrashLoopBackOff",
    "Kubernetes pod restarting",
    "Kubernetes pod troubleshooting",
    "kubectl logs",
    "kubectl describe pod",
  ],
  alternates: {
    canonical:
      "https://www.devopscommands.com/kubernetes/troubleshooting/crashloopbackoff",
  },
  openGraph: {
    title: "Kubernetes CrashLoopBackOff | Troubleshooting Guide",
    description:
      "Practical guide to diagnose and fix Kubernetes CrashLoopBackOff errors.",
    url: "https://www.devopscommands.com/kubernetes/troubleshooting/crashloopbackoff",
    type: "article",
  },
};

const diagnosticCommands = [
  {
    title: "Check Pod Status",
    command: "kubectl get pods",
    explanation:
      "Start by checking the pod status and restart count. A high restart count is a common sign that the container is repeatedly failing.",
  },
  {
    title: "Check Pod Details",
    command: "kubectl describe pod <pod-name>",
    explanation:
      "Shows container state, restart information, events, probes, image details, mounts, and scheduling information.",
  },
  {
    title: "Check Current Logs",
    command: "kubectl logs <pod-name>",
    explanation:
      "Displays logs from the currently running container instance or the most recent container output.",
  },
  {
    title: "Check Previous Container Logs",
    command: "kubectl logs <pod-name> --previous",
    explanation:
      "Very useful for CrashLoopBackOff because the previous container may have crashed before you could inspect its logs.",
  },
  {
    title: "Check Events",
    command: "kubectl get events --sort-by=.lastTimestamp",
    explanation:
      "Shows recent Kubernetes events, which can reveal image, scheduling, probe, mount, or resource-related problems.",
  },
  {
    title: "Check Pod in a Namespace",
    command: "kubectl get pod <pod-name> -n <namespace>",
    explanation:
      "Use the namespace option when the affected pod is not running in the default namespace.",
  },
];

const commonCauses = [
  {
    title: "Application Crash",
    description:
      "The application starts and then exits because of an application error, invalid configuration, missing dependency, or runtime exception.",
  },
  {
    title: "Incorrect Configuration",
    description:
      "Environment variables, ConfigMaps, Secrets, command arguments, or configuration files may contain incorrect values.",
  },
  {
    title: "Failed Health Checks",
    description:
      "Incorrect liveness or startup probes can cause Kubernetes to restart an otherwise running container.",
  },
  {
    title: "Missing Environment Variables",
    description:
      "The application may require variables that were not provided through the Deployment, ConfigMap, or Secret.",
  },
  {
    title: "Incorrect Container Command",
    description:
      "The image may start with a command or argument that does not exist or causes the application to exit immediately.",
  },
  {
    title: "Resource Problems",
    description:
      "Memory limits, CPU limits, or other resource constraints can cause containers to terminate unexpectedly.",
  },
];

const fixes = [
  "Check the application logs before changing the Deployment.",
  "Use kubectl logs --previous when the container has already restarted.",
  "Inspect pod events with kubectl describe pod.",
  "Verify environment variables, ConfigMaps, and Secrets.",
  "Check liveness and startup probe configuration.",
  "Verify the container image and its startup command.",
  "Check whether the container was terminated because of memory pressure.",
  "Confirm that required files, volumes, and mounts are available.",
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
            Kubernetes CrashLoopBackOff
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Learn what CrashLoopBackOff means, how to identify the root cause,
            which kubectl commands to use, and how to troubleshoot a container
            that repeatedly starts and crashes.
          </p>
        </header>

        <section className="mb-12 rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
          <h2 className="text-2xl font-semibold">What is CrashLoopBackOff?</h2>

          <p className="mt-4 leading-7 text-slate-300">
            CrashLoopBackOff means Kubernetes has detected that a container is
            repeatedly starting and then terminating. Kubernetes restarts the
            container, but after repeated failures it waits progressively
            longer between restart attempts.
          </p>

          <p className="mt-4 leading-7 text-slate-300">
            The important point is that{" "}
            <strong className="text-white">CrashLoopBackOff is usually a symptom</strong>,
            not the root cause. The application inside the container is often
            failing for another reason.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Step 1: Check the Pod Status
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Start by checking the pods in the namespace.
          </p>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>kubectl get pods</code>
          </pre>

          <p className="mt-4 leading-7 text-slate-300">
            You may see something similar to:
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-slate-300">
            <code>{`NAME                         READY   STATUS             RESTARTS
my-app-7d8f9c6b7d-abc12     0/1     CrashLoopBackOff   5`}</code>
          </pre>

          <p className="mt-4 leading-7 text-slate-300">
            The{" "}
            <strong className="text-white">RESTARTS</strong> column is especially
            useful. Repeated restarts indicate that the container is not
            staying alive.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Step 2: Check the Pod Description
          </h2>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>kubectl describe pod &lt;pod-name&gt;</code>
          </pre>

          <p className="mt-4 leading-7 text-slate-300">
            Look at the{" "}
            <strong className="text-white">State</strong>,{" "}
            <strong className="text-white">Last State</strong>,{" "}
            <strong className="text-white">Exit Code</strong>, and{" "}
            <strong className="text-white">Events</strong> sections.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Step 3: Check Container Logs
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Application logs are often the fastest way to identify why the
            container is exiting.
          </p>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>kubectl logs &lt;pod-name&gt;</code>
          </pre>

          <h3 className="mt-8 text-xl font-semibold">
            Check the Previous Container
          </h3>

          <p className="mt-3 leading-7 text-slate-300">
            If the container crashes too quickly, inspect the logs from the
            previous container instance:
          </p>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>kubectl logs &lt;pod-name&gt; --previous</code>
          </pre>

          <p className="mt-4 leading-7 text-slate-300">
            This command is particularly important when troubleshooting
            CrashLoopBackOff.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Common Causes of CrashLoopBackOff
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
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Useful kubectl Commands
          </h2>

          <div className="mt-6 space-y-4">
            {diagnosticCommands.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
                  <code>{item.command}</code>
                </pre>

                <p className="mt-3 leading-6 text-slate-400">
                  {item.explanation}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Check Kubernetes Events
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Events can reveal problems that are not obvious from the
            application logs.
          </p>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>kubectl get events --sort-by=.lastTimestamp</code>
          </pre>

          <p className="mt-4 leading-7 text-slate-300">
            You can also inspect events for a specific pod with:
          </p>

          <pre className="mt-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>kubectl describe pod &lt;pod-name&gt;</code>
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Common Fixes
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
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Example Troubleshooting Flow
          </h2>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <ol className="space-y-5 text-slate-300">
              <li>
                <strong className="text-white">1. Find the pod</strong>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
                  <code>kubectl get pods</code>
                </pre>
              </li>

              <li>
                <strong className="text-white">2. Inspect the pod</strong>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
                  <code>kubectl describe pod &lt;pod-name&gt;</code>
                </pre>
              </li>

              <li>
                <strong className="text-white">3. Check current logs</strong>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
                  <code>kubectl logs &lt;pod-name&gt;</code>
                </pre>
              </li>

              <li>
                <strong className="text-white">
                  4. Check logs from the previous crash
                </strong>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
                  <code>kubectl logs &lt;pod-name&gt; --previous</code>
                </pre>
              </li>

              <li>
                <strong className="text-white">5. Check events</strong>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
                  <code>kubectl get events --sort-by=.lastTimestamp</code>
                </pre>
              </li>

              <li>
                <strong className="text-white">
                  6. Fix the underlying application or configuration issue
                </strong>
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <h2 className="text-2xl font-semibold">
            Quick CrashLoopBackOff Checklist
          </h2>

          <ul className="mt-5 space-y-3 text-slate-300">
            <li>✓ Check pod status and restart count.</li>
            <li>✓ Run kubectl describe pod.</li>
            <li>✓ Check current container logs.</li>
            <li>✓ Check kubectl logs --previous.</li>
            <li>✓ Inspect Kubernetes events.</li>
            <li>✓ Verify ConfigMaps and Secrets.</li>
            <li>✓ Check startup and liveness probes.</li>
            <li>✓ Check container command and arguments.</li>
            <li>✓ Check resource limits and termination reasons.</li>
          </ul>
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