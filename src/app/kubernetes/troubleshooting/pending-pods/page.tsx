import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kubernetes Pending Pods Troubleshooting | kubectl Guide",
  description:
    "Learn how to troubleshoot Kubernetes Pending Pods using kubectl. Diagnose insufficient resources, taints, node selectors, affinity, PVC issues, quotas, scheduling failures and Kubernetes events.",
  keywords: [
    "Kubernetes Pending Pods",
    "Pod Pending Kubernetes",
    "Kubernetes pod stuck pending",
    "kubectl pending pod",
    "Pending pod troubleshooting",
    "Kubernetes scheduler troubleshooting",
    "Kubernetes insufficient CPU",
    "Kubernetes insufficient memory",
    "Kubernetes taints tolerations",
    "Kubernetes PVC pending",
    "Kubernetes pod scheduling",
    "kubectl describe pod",
    "kubectl get events",
  ],
  alternates: {
    canonical:
      "https://www.devopscommands.com/kubernetes/troubleshooting/pending-pods",
  },
  openGraph: {
    title: "Kubernetes Pending Pods Troubleshooting | kubectl Guide",
    description:
      "Production-focused troubleshooting guide for Kubernetes Pods stuck in Pending state.",
    url: "https://www.devopscommands.com/kubernetes/troubleshooting/pending-pods",
    type: "article",
  },
};

const diagnosticSteps = [
  {
    number: "01",
    title: "Check the Pod status",
    description:
      "Confirm that the Pod is actually Pending and identify the namespace where it is running.",
    command: "kubectl get pod <pod-name> -n <namespace>",
  },
  {
    number: "02",
    title: "Describe the Pod",
    description:
      "The Events section is usually the most important source of information when a Pod cannot be scheduled.",
    command: "kubectl describe pod <pod-name> -n <namespace>",
  },
  {
    number: "03",
    title: "Check recent events",
    description:
      "Look for scheduler messages such as insufficient CPU, insufficient memory, untolerated taint or node selector mismatch.",
    command:
      "kubectl get events -n <namespace> --sort-by=.lastTimestamp",
  },
  {
    number: "04",
    title: "Check available nodes",
    description:
      "Inspect node readiness, capacity, allocatable resources and scheduling restrictions.",
    command: "kubectl get nodes -o wide",
  },
  {
    number: "05",
    title: "Check resource usage",
    description:
      "Compare the Pod's CPU and memory requests with what the cluster can currently allocate.",
    command: "kubectl top nodes",
  },
];

const commonCauses = [
  {
    title: "Insufficient CPU",
    description:
      "The scheduler cannot find a node with enough allocatable CPU to satisfy the Pod's CPU request.",
    command: "kubectl describe pod <pod-name>",
  },
  {
    title: "Insufficient Memory",
    description:
      "The requested memory cannot be satisfied by any eligible node.",
    command: "kubectl describe pod <pod-name>",
  },
  {
    title: "Node Taints",
    description:
      "The Pod does not tolerate a taint on otherwise eligible nodes.",
    command: "kubectl describe node <node-name>",
  },
  {
    title: "Node Selector",
    description:
      "The Pod requires a node label that no available node currently has.",
    command: "kubectl get nodes --show-labels",
  },
  {
    title: "Node Affinity",
    description:
      "Required node affinity rules may prevent the scheduler from selecting any node.",
    command: "kubectl get pod <pod-name> -o yaml",
  },
  {
    title: "PVC Not Bound",
    description:
      "A Pod using a PersistentVolumeClaim may remain Pending when the PVC itself cannot be bound.",
    command: "kubectl get pvc -n <namespace>",
  },
  {
    title: "ResourceQuota",
    description:
      "Namespace resource quotas can prevent new workloads from being admitted or scheduled.",
    command: "kubectl get resourcequota -n <namespace>",
  },
  {
    title: "Node Not Ready",
    description:
      "Pods may not be scheduled onto nodes that are unavailable or marked NotReady.",
    command: "kubectl get nodes",
  },
];

const eventExamples = [
  {
    message: "0/3 nodes are available: 3 Insufficient cpu.",
    meaning:
      "The Pod's requested CPU cannot currently be satisfied by the available nodes.",
  },
  {
    message: "0/3 nodes are available: 3 Insufficient memory.",
    meaning:
      "The Pod's requested memory is greater than the schedulable memory available on eligible nodes.",
  },
  {
    message: "0/3 nodes are available: 3 node(s) had untolerated taint.",
    meaning:
      "The available nodes have taints that the Pod does not tolerate.",
  },
  {
    message: "0/3 nodes are available: 3 node(s) didn't match Pod's node affinity/selector.",
    meaning:
      "The Pod's placement rules do not match the labels of available nodes.",
  },
];

const troubleshootingScenarios = [
  {
    title: "Scenario 1: Pod Pending because of insufficient CPU",
    steps: [
      "kubectl get pod <pod-name>",
      "kubectl describe pod <pod-name>",
      "kubectl get nodes",
      "kubectl describe nodes",
      "kubectl top nodes",
    ],
    explanation:
      "Start with the Pod events to confirm the scheduler reported insufficient CPU. Then compare the Pod's CPU request with node allocatable capacity and existing workload requests.",
  },
  {
    title: "Scenario 2: Pod Pending because of a taint",
    steps: [
      "kubectl describe pod <pod-name>",
      "kubectl get nodes",
      "kubectl describe node <node-name>",
    ],
    explanation:
      "If the scheduler reports an untolerated taint, inspect the node taints and compare them with the Pod's tolerations. Do not remove production taints simply to force scheduling.",
  },
  {
    title: "Scenario 3: Pod Pending because of PVC",
    steps: [
      "kubectl get pod <pod-name>",
      "kubectl get pvc",
      "kubectl describe pvc <pvc-name>",
      "kubectl get pv",
      "kubectl get storageclass",
    ],
    explanation:
      "A workload may appear Pending because its required PersistentVolumeClaim is not Bound. Investigate the PVC events, StorageClass and available PersistentVolumes before changing the workload.",
  },
  {
    title: "Scenario 4: Pod Pending because of node selector",
    steps: [
      "kubectl get pod <pod-name> -o yaml",
      "kubectl get nodes --show-labels",
      "kubectl describe pod <pod-name>",
    ],
    explanation:
      "Compare the Pod's nodeSelector or affinity requirements with the labels actually present on cluster nodes.",
  },
];

const safeActions = [
  "Start with read-only commands: get, describe, events and top.",
  "Confirm the active cluster context before troubleshooting production.",
  "Check Pod requests against node allocatable resources rather than only looking at current CPU usage.",
  "Inspect scheduler events before changing node labels, taints or workload manifests.",
  "Do not remove taints or relax affinity rules without understanding why they were configured.",
  "Do not delete and recreate workloads simply because they are Pending.",
  "For PVC-related Pending Pods, investigate the storage layer before changing the application.",
  "After making a change, verify scheduling and rollout status.",
];

const preventionItems = [
  "Set realistic CPU and memory requests and limits.",
  "Monitor node capacity and workload resource requests.",
  "Use cluster autoscaling where appropriate for workloads with variable capacity requirements.",
  "Document intentional node taints and corresponding tolerations.",
  "Keep node labels consistent with nodeSelector and affinity rules.",
  "Monitor PersistentVolume and PersistentVolumeClaim health.",
  "Review ResourceQuota and LimitRange configuration.",
  "Use Kubernetes events and scheduler-related alerts as part of operational monitoring.",
];

const relatedLinks = [
  {
    title: "kubectl Commands Cheat Sheet",
    description:
      "Use the complete kubectl reference for Pods, nodes, events, storage, networking and troubleshooting.",
    href: "/kubernetes/kubectl-commands",
  },
  {
    title: "CrashLoopBackOff Troubleshooting",
    description:
      "Troubleshoot Pods that start successfully but repeatedly crash or restart.",
    href: "/kubernetes/troubleshooting/crashloopbackoff",
  },
];

const faqItems = [
  {
    question: "What does Pending mean in Kubernetes?",
    answer:
      "Pending means the Pod has been accepted by the Kubernetes API but has not yet been successfully scheduled onto a node. The scheduler may be unable to find a node that satisfies the Pod's resource, placement, storage or other scheduling requirements.",
  },
  {
    question: "What is the first command to run when a Pod is Pending?",
    answer:
      "Start with kubectl get pod <pod-name> -n <namespace> to confirm the state, then run kubectl describe pod <pod-name> -n <namespace>. The Events section often explains why the scheduler could not place the Pod.",
  },
  {
    question: "Why does a Kubernetes Pod stay Pending because of insufficient CPU?",
    answer:
      "Kubernetes schedules based primarily on resource requests. Even when a node appears to have unused CPU according to a monitoring tool, its allocatable CPU may not be sufficient to satisfy the new Pod's requested CPU.",
  },
  {
    question: "Can a taint cause a Pod to remain Pending?",
    answer:
      "Yes. A node taint can prevent a Pod from being scheduled unless the Pod has a matching toleration. The scheduler event commonly reports an untolerated taint when this is the reason.",
  },
  {
    question: "Can a PVC cause a Pod to remain Pending?",
    answer:
      "Yes. If the Pod requires a PersistentVolumeClaim and the PVC cannot be bound to suitable storage, the workload may remain Pending. Check the PVC status and events with kubectl get pvc and kubectl describe pvc.",
  },
  {
    question: "How do I check which nodes can run a Pending Pod?",
    answer:
      "Inspect the Pod's resource requests, nodeSelector, affinity and tolerations, then compare those requirements with node labels, taints, capacity and allocatable resources.",
  },
];

export default function PendingPodsTroubleshootingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
          Kubernetes Troubleshooting
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Kubernetes Pending Pods Troubleshooting
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          Learn how to troubleshoot Kubernetes Pods stuck in{" "}
          <code className="rounded bg-slate-800 px-2 py-1 text-cyan-300">
            Pending
          </code>{" "}
          state. This production-focused guide covers Kubernetes scheduling,
          insufficient CPU or memory, taints and tolerations, node selectors,
          affinity, PVCs, ResourceQuotas and scheduler events.
        </p>
      </header>

      <section className="mt-10 rounded-2xl border border-cyan-500/20 bg-slate-900/70 p-6">
        <h2 className="text-2xl font-bold text-white">
          Quick Diagnosis
        </h2>

        <p className="mt-2 text-slate-400">
          When a Pod is Pending, do not immediately restart or delete it.
          First determine why the Kubernetes scheduler cannot place it.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {diagnosticSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-slate-800 bg-slate-950 p-5"
            >
              <div className="text-sm font-bold text-cyan-400">
                {step.number}
              </div>

              <h3 className="mt-2 font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {step.description}
              </p>

              <code className="mt-4 block overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs text-cyan-300">
                {step.command}
              </code>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">
          What Does Pending Mean in Kubernetes?
        </h2>

        <div className="mt-4 space-y-4 text-slate-300">
          <p className="leading-7">
            A Pod in{" "}
            <code className="rounded bg-slate-800 px-2 py-1 text-cyan-300">
              Pending
            </code>{" "}
            state has been accepted by the Kubernetes API server but has not
            been successfully scheduled onto a node.
          </p>

          <p className="leading-7">
            The most important distinction is that{" "}
            <strong className="text-white">Pending is not the same as Running</strong>{" "}
            with an application failure. A Pending Pod usually has a scheduling
            or prerequisite problem that must be investigated before the
            container can start.
          </p>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="font-semibold text-white">
              First command to remember:
            </p>

            <code className="mt-3 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-cyan-300">
              kubectl describe pod &lt;pod-name&gt; -n &lt;namespace&gt;
            </code>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Look at the bottom of the output for the Events section. In many
              scheduling incidents, the scheduler message directly identifies
              the constraint preventing placement.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">
          Common Causes of Pending Pods
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {commonCauses.map((cause) => (
            <div
              key={cause.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <h3 className="text-lg font-semibold text-white">
                {cause.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {cause.description}
              </p>

              <code className="mt-4 block overflow-x-auto rounded-lg bg-slate-950 p-3 text-xs text-cyan-300">
                {cause.command}
              </code>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-bold text-white">
          Kubernetes Scheduler Events to Watch
        </h2>

        <p className="mt-2 text-slate-400">
          Scheduler events are often the fastest way to identify why a Pod
          cannot be placed.
        </p>

        <div className="mt-6 space-y-4">
          {eventExamples.map((event) => (
            <div
              key={event.message}
              className="rounded-xl border border-slate-800 bg-slate-950 p-5"
            >
              <code className="block overflow-x-auto text-sm text-amber-300">
                {event.message}
              </code>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {event.meaning}
              </p>
            </div>
          ))}
        </div>

        <code className="mt-6 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
          kubectl get events -A --sort-by=.lastTimestamp
        </code>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">
          Real-World Pending Pod Troubleshooting
        </h2>

        <div className="mt-6 space-y-6">
          {troubleshootingScenarios.map((scenario) => (
            <div
              key={scenario.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {scenario.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {scenario.explanation}
              </p>

              <div className="mt-5 space-y-2">
                {scenario.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-3 rounded-lg bg-slate-950 p-3"
                  >
                    <span className="font-mono text-sm text-slate-500">
                      {index + 1}.
                    </span>

                    <code className="overflow-x-auto text-sm text-cyan-300">
                      {step}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">
          Troubleshooting Insufficient CPU or Memory
        </h2>

        <p className="mt-3 leading-7 text-slate-300">
          Kubernetes scheduling is based on resource requests and the
          allocatable resources available on eligible nodes. A node can show
          apparently low real-time CPU usage while still being unable to accept
          another Pod because existing workload requests consume its
          allocatable capacity.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="font-semibold text-white">
              Check Pod requests
            </h3>

            <code className="mt-4 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
              kubectl get pod &lt;pod-name&gt; -o yaml
            </code>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="font-semibold text-white">
              Check node allocatable capacity
            </h3>

            <code className="mt-4 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
              kubectl describe nodes
            </code>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">
          Troubleshooting Taints and Tolerations
        </h2>

        <p className="mt-3 leading-7 text-slate-300">
          Taints allow nodes to repel Pods that do not explicitly tolerate the
          configured taint. If a Pending Pod reports an untolerated taint,
          compare the node's taints with the Pod's tolerations.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="font-semibold text-white">
              Inspect node taints
            </h3>

            <code className="mt-4 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
              kubectl describe node &lt;node-name&gt;
            </code>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="font-semibold text-white">
              Inspect Pod tolerations
            </h3>

            <code className="mt-4 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
              kubectl get pod &lt;pod-name&gt; -o yaml
            </code>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
          <p className="text-sm leading-6 text-slate-300">
            <strong className="text-amber-300">Production caution:</strong>{" "}
            Do not remove a node taint simply to make a workload schedule.
            Taints are often intentional controls for dedicated, system or
            restricted nodes.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">
          Troubleshooting PVC and Storage Issues
        </h2>

        <p className="mt-3 leading-7 text-slate-300">
          Storage dependencies are another common reason for workloads to
          remain Pending. Start by checking whether the PersistentVolumeClaim
          is Bound and inspect its events.
        </p>

        <div className="mt-6 space-y-3">
          {[
            "kubectl get pvc -n <namespace>",
            "kubectl describe pvc <pvc-name> -n <namespace>",
            "kubectl get pv",
            "kubectl get storageclass",
          ].map((command) => (
            <code
              key={command}
              className="block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300"
            >
              {command}
            </code>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
        <h2 className="text-2xl font-bold text-white">
          Production-Safe Troubleshooting
        </h2>

        <p className="mt-2 text-slate-400">
          Pending Pods are usually best investigated before any disruptive
          action is taken.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {safeActions.map((action) => (
            <div
              key={action}
              className="rounded-xl border border-slate-800 bg-slate-950 p-4"
            >
              <p className="text-sm leading-6 text-slate-300">{action}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">
          How to Prevent Pending Pods
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {preventionItems.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-800 bg-slate-900 p-4"
            >
              <p className="text-sm leading-6 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">
          Related Kubernetes Guides
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {relatedLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/50 hover:bg-slate-800/70"
            >
              <h3 className="font-semibold text-white group-hover:text-cyan-300">
                {link.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {link.description}
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-cyan-400">
                Read guide →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">
          Kubernetes Pending Pods FAQ
        </h2>

        <div className="mt-6 space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <summary className="cursor-pointer list-none font-semibold text-white">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-cyan-400 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>

              <p className="mt-4 leading-7 text-slate-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-slate-800 pt-8">
        <p className="text-sm leading-6 text-slate-500">
          This Kubernetes Pending Pods troubleshooting guide is intended for
          Kubernetes administrators, DevOps engineers, SREs and production
          support teams. Always verify commands and configuration changes
          against your Kubernetes version and environment before applying them
          to production.
        </p>
      </section>
    </main>
  );
}