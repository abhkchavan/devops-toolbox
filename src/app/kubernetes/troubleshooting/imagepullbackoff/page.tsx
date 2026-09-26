import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kubernetes ImagePullBackOff Troubleshooting | ErrImagePull Guide",
  description:
    "Troubleshoot Kubernetes ImagePullBackOff and ErrImagePull errors with kubectl. Diagnose incorrect image names, registry authentication, private registries, image tags, network issues, pull secrets and container runtime failures.",
  keywords: [
    "Kubernetes ImagePullBackOff",
    "ErrImagePull Kubernetes",
    "ImagePullBackOff troubleshooting",
    "Kubernetes image pull error",
    "kubectl ImagePullBackOff",
    "Kubernetes private registry",
    "Kubernetes imagePullSecrets",
    "Kubernetes container image troubleshooting",
    "Kubernetes Docker image error",
    "Kubernetes registry authentication",
    "Kubernetes pod image error",
  ],
  alternates: {
    canonical:
      "https://www.devopscommands.com/kubernetes/troubleshooting/imagepullbackoff",
  },
  openGraph: {
    title: "Kubernetes ImagePullBackOff Troubleshooting | ErrImagePull Guide",
    description:
      "Production-focused troubleshooting guide for Kubernetes ImagePullBackOff and ErrImagePull errors.",
    url: "https://www.devopscommands.com/kubernetes/troubleshooting/imagepullbackoff",
    type: "article",
  },
};

const diagnosticSteps = [
  {
    number: "01",
    title: "Check Pod status",
    description:
      "Confirm the Pod is reporting ImagePullBackOff or ErrImagePull and identify the affected container.",
    command: "kubectl get pod <pod-name> -n <namespace>",
  },
  {
    number: "02",
    title: "Describe the Pod",
    description:
      "Inspect the Events section for the actual image-pull failure returned by the kubelet or container runtime.",
    command: "kubectl describe pod <pod-name> -n <namespace>",
  },
  {
    number: "03",
    title: "Check the image",
    description:
      "Verify the exact registry, repository and tag configured for the container.",
    command:
      "kubectl get pod <pod-name> -o jsonpath='{.spec.containers[*].image}'",
  },
  {
    number: "04",
    title: "Check registry access",
    description:
      "Determine whether the node can reach the registry and whether authentication is required.",
    command: "kubectl get pod <pod-name> -o yaml",
  },
  {
    number: "05",
    title: "Check imagePullSecrets",
    description:
      "For private registries, verify that the correct image pull secret is configured and available in the namespace.",
    command: "kubectl get secrets -n <namespace>",
  },
];

const commonCauses = [
  {
    title: "Incorrect Image Name",
    description:
      "The image repository or registry hostname is incorrect, so the container runtime cannot locate the requested image.",
    command:
      "kubectl get pod <pod-name> -o jsonpath='{.spec.containers[*].image}'",
  },
  {
    title: "Invalid or Missing Tag",
    description:
      "The specified image tag does not exist in the registry. This commonly happens after a deployment references a newly expected tag that was never pushed.",
    command: "kubectl describe pod <pod-name>",
  },
  {
    title: "Private Registry Authentication",
    description:
      "The registry requires credentials but the Pod does not have a valid imagePullSecret or equivalent workload identity configuration.",
    command: "kubectl get pod <pod-name> -o yaml",
  },
  {
    title: "Image Does Not Exist",
    description:
      "The repository or tag may not have been pushed to the registry at all.",
    command: "kubectl describe pod <pod-name>",
  },
  {
    title: "Registry Network Problem",
    description:
      "The node may be unable to reach the registry because of DNS, firewall, proxy, routing or outbound network restrictions.",
    command: "kubectl describe pod <pod-name>",
  },
  {
    title: "Registry Rate Limiting",
    description:
      "Public registries may throttle anonymous or high-volume image pulls.",
    command: "kubectl describe pod <pod-name>",
  },
  {
    title: "TLS or Certificate Error",
    description:
      "The container runtime may reject the registry connection because of certificate or TLS configuration problems.",
    command: "kubectl describe pod <pod-name>",
  },
  {
    title: "Container Runtime Problem",
    description:
      "The node's container runtime may have its own image-pull, disk, credential or connectivity issue.",
    command: "kubectl get nodes -o wide",
  },
];

const eventExamples = [
  {
    message:
      'Failed to pull image "nginx:invalid-tag": manifest unknown',
    meaning:
      "The requested image tag does not exist in the registry.",
  },
  {
    message:
      'pull access denied for private-repo/app, repository does not exist or may require authorization',
    meaning:
      "The registry may require authentication or the repository reference may be incorrect.",
  },
  {
    message:
      "Back-off pulling image",
    meaning:
      "Kubernetes is backing off and retrying image pulls after repeated failures.",
  },
  {
    message:
      "dial tcp: lookup registry.example.com: no such host",
    meaning:
      "The node cannot resolve the registry hostname through DNS.",
  },
  {
    message:
      "x509: certificate signed by unknown authority",
    meaning:
      "The node's container runtime does not trust the registry certificate.",
  },
];

const troubleshootingScenarios = [
  {
    title: "Scenario 1: Wrong image tag",
    steps: [
      "kubectl get pod <pod-name>",
      "kubectl describe pod <pod-name>",
      "kubectl get deployment <deployment-name> -o yaml",
      "kubectl get pod <pod-name> -o jsonpath='{.spec.containers[*].image}'",
    ],
    explanation:
      "Start with the Pod events. If the registry reports that the manifest or tag does not exist, verify the deployment image against the image tags actually available in the registry.",
  },
  {
    title: "Scenario 2: Private registry authentication failure",
    steps: [
      "kubectl describe pod <pod-name>",
      "kubectl get secret -n <namespace>",
      "kubectl get serviceaccount <service-account> -o yaml",
      "kubectl get deployment <deployment-name> -o yaml",
    ],
    explanation:
      "Check whether the workload references the expected imagePullSecret or uses another supported registry authentication mechanism. Verify the secret exists in the same namespace as the Pod.",
  },
  {
    title: "Scenario 3: Registry DNS or network failure",
    steps: [
      "kubectl describe pod <pod-name>",
      "kubectl get nodes -o wide",
      "kubectl run registry-test --rm -it --image=curlimages/curl -- sh",
      "nslookup <registry-hostname>",
    ],
    explanation:
      "If events show DNS, timeout or connection errors, investigate node-level DNS, routing, firewall, proxy and outbound network configuration rather than changing the application image.",
  },
  {
    title: "Scenario 4: Image exists but pull still fails",
    steps: [
      "kubectl describe pod <pod-name>",
      "kubectl get pod <pod-name> -o yaml",
      "kubectl get nodes -o wide",
      "kubectl describe node <node-name>",
    ],
    explanation:
      "When the image reference is correct, inspect the detailed runtime error and the affected node. Disk pressure, runtime configuration, certificate trust and registry connectivity can all affect image pulls.",
  },
];

const safeActions = [
  "Start with kubectl get and kubectl describe before changing the workload.",
  "Confirm the exact image registry, repository and tag.",
  "Check the Pod Events section before assuming the application image is broken.",
  "For private registries, verify credentials and imagePullSecrets in the correct namespace.",
  "Do not expose registry passwords or Secret values in tickets, logs or screenshots.",
  "Avoid repeatedly deleting Pods without understanding why the image pull is failing.",
  "Check whether the problem affects one node or multiple nodes.",
  "After correcting the configuration, verify the rollout and Pod readiness.",
];

const preventionItems = [
  "Use immutable image tags or digests for production deployments where appropriate.",
  "Validate that images are successfully pushed before deploying a new version.",
  "Use approved private registries for production workloads.",
  "Configure registry authentication through supported Kubernetes mechanisms.",
  "Monitor registry availability and authentication failures.",
  "Keep node DNS and outbound connectivity healthy.",
  "Monitor node disk pressure and container runtime health.",
  "Avoid relying on mutable tags such as latest for controlled production releases.",
];

const relatedLinks = [
  {
    title: "kubectl Commands Cheat Sheet",
    description:
      "Use the complete kubectl reference for Pods, deployments, logs, events, nodes and troubleshooting.",
    href: "/kubernetes/kubectl-commands",
  },
  {
    title: "Pending Pods Troubleshooting",
    description:
      "Troubleshoot Pods that cannot be scheduled because of resources, taints, affinity, storage or node constraints.",
    href: "/kubernetes/troubleshooting/pending-pods",
  },
  {
    title: "CrashLoopBackOff Troubleshooting",
    description:
      "Investigate containers that start but repeatedly terminate and restart.",
    href: "/kubernetes/troubleshooting/crashloopbackoff",
  },
];

const faqItems = [
  {
    question: "What does ImagePullBackOff mean in Kubernetes?",
    answer:
      "ImagePullBackOff means Kubernetes was unable to pull a container image and is backing off before retrying. The underlying reason is normally visible in the Pod Events section returned by kubectl describe pod.",
  },
  {
    question: "What is the difference between ErrImagePull and ImagePullBackOff?",
    answer:
      "ErrImagePull indicates that Kubernetes encountered an error while attempting to pull the image. ImagePullBackOff indicates that the pull has repeatedly failed and Kubernetes is delaying subsequent retry attempts.",
  },
  {
    question: "How do I find the image that Kubernetes is trying to pull?",
    answer:
      "You can inspect the Pod specification with kubectl get pod <pod-name> -o yaml or use a JSONPath expression such as kubectl get pod <pod-name> -o jsonpath='{.spec.containers[*].image}'.",
  },
  {
    question: "How do I fix ImagePullBackOff for a private Docker registry?",
    answer:
      "First verify the image name and tag. Then verify that the required registry credentials are available through the supported authentication mechanism, such as an imagePullSecret, and that the credential is accessible in the Pod's namespace.",
  },
  {
    question: "Why does an image pull work on my laptop but fail in Kubernetes?",
    answer:
      "Your laptop and Kubernetes nodes may have different network access, DNS configuration, registry credentials, certificate trust or proxy settings. Kubernetes pulls images from the node environment, not from your local workstation.",
  },
  {
    question: "Should I use latest in production Kubernetes deployments?",
    answer:
      "Using mutable tags such as latest makes deployments harder to reproduce because the tag can point to different image content over time. Controlled release processes commonly use versioned tags and, where appropriate, immutable image digests.",
  },
];

export default function ImagePullBackOffTroubleshootingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
          Kubernetes Troubleshooting
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Kubernetes ImagePullBackOff &amp; ErrImagePull Troubleshooting
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          Learn how to troubleshoot Kubernetes{" "}
          <code className="rounded bg-slate-800 px-2 py-1 text-cyan-300">
            ImagePullBackOff
          </code>{" "}
          and{" "}
          <code className="rounded bg-slate-800 px-2 py-1 text-cyan-300">
            ErrImagePull
          </code>{" "}
          errors. Diagnose incorrect image names, missing tags, private
          registry authentication, imagePullSecrets, DNS and network failures,
          TLS errors and container runtime problems.
        </p>
      </header>

      <section className="mt-10 rounded-2xl border border-cyan-500/20 bg-slate-900/70 p-6">
        <h2 className="text-2xl font-bold text-white">
          Quick Diagnosis
        </h2>

        <p className="mt-2 text-slate-400">
          The fastest way to troubleshoot ImagePullBackOff is to inspect the
          Pod Events before changing the deployment.
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
          What Does ImagePullBackOff Mean?
        </h2>

        <div className="mt-4 space-y-4 text-slate-300">
          <p className="leading-7">
            Kubernetes needs to pull the container image from a registry before
            the container can start. If the image cannot be downloaded,
            Kubernetes reports an image-pull failure.
          </p>

          <p className="leading-7">
            <code className="rounded bg-slate-800 px-2 py-1 text-cyan-300">
              ErrImagePull
            </code>{" "}
            indicates that an image pull attempt failed.{" "}
            <code className="rounded bg-slate-800 px-2 py-1 text-cyan-300">
              ImagePullBackOff
            </code>{" "}
            indicates that Kubernetes has repeatedly failed to pull the image
            and is backing off before retrying.
          </p>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="font-semibold text-white">
              First command to remember:
            </p>

            <code className="mt-3 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-cyan-300">
              kubectl describe pod &lt;pod-name&gt; -n &lt;namespace&gt;
            </code>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Look at the Events section. It normally contains the registry or
              container-runtime error that explains why the image could not be
              pulled.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">
          Common Causes of ImagePullBackOff
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
          Kubernetes Image Pull Errors to Watch
        </h2>

        <p className="mt-2 text-slate-400">
          The exact error message matters. Different registry errors require
          different fixes.
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
          Real-World ImagePullBackOff Troubleshooting
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
          Troubleshooting Private Container Registries
        </h2>

        <p className="mt-3 leading-7 text-slate-300">
          Private registries require Kubernetes workloads to authenticate
          before the node can pull protected images. The authentication method
          depends on the registry and Kubernetes platform.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="font-semibold text-white">
              Check imagePullSecrets
            </h3>

            <code className="mt-4 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
              kubectl get pod &lt;pod-name&gt; -o yaml
            </code>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Look for the imagePullSecrets configuration in the Pod
              specification or its associated ServiceAccount.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="font-semibold text-white">
              Verify Secret exists
            </h3>

            <code className="mt-4 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
              kubectl get secrets -n &lt;namespace&gt;
            </code>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              The registry credential must be available in the namespace where
              the workload is running.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
          <p className="text-sm leading-6 text-slate-300">
            <strong className="text-amber-300">Security caution:</strong>{" "}
            Never paste registry passwords, decoded Secret values or long-lived
            credentials into tickets, logs, source code or public documentation.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">
          Verify the Container Image
        </h2>

        <p className="mt-3 leading-7 text-slate-300">
          Before troubleshooting networking or credentials, make sure the
          workload is requesting the image you actually intended to deploy.
        </p>

        <div className="mt-6 space-y-3">
          {[
            "kubectl get pod <pod-name> -o jsonpath='{.spec.containers[*].image}'",
            "kubectl get deployment <deployment-name> -o yaml",
            "kubectl describe pod <pod-name>",
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

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">
          Debugging Registry DNS and Network Connectivity
        </h2>

        <p className="mt-3 leading-7 text-slate-300">
          Kubernetes image pulls happen from the node's container runtime.
          Therefore, connectivity from your laptop does not prove that the
          Kubernetes node can reach the registry.
        </p>

        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="font-semibold text-white">
            Temporary network test
          </h3>

          <code className="mt-4 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-300">
            kubectl run registry-test --rm -it --image=curlimages/curl -- sh
          </code>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            From the temporary troubleshooting environment, test DNS and HTTP
            connectivity to the relevant registry endpoint where appropriate.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
        <h2 className="text-2xl font-bold text-white">
          Production-Safe Troubleshooting
        </h2>

        <p className="mt-2 text-slate-400">
          Image-pull failures can affect application availability, so diagnose
          the exact failure before changing production configuration.
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
          How to Prevent ImagePullBackOff
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

        <div className="mt-6 grid gap-4 md:grid-cols-3">
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
          ImagePullBackOff FAQ
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
          This Kubernetes ImagePullBackOff troubleshooting guide is intended
          for Kubernetes administrators, DevOps engineers, SREs and production
          support teams. Always verify commands and registry configuration
          against your Kubernetes platform and environment before making
          production changes.
        </p>
      </section>
    </main>
  );
}