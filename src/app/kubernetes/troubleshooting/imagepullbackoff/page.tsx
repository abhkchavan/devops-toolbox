import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kubernetes ImagePullBackOff Troubleshooting Guide | kubectl",
  description:
    "Production-focused Kubernetes ImagePullBackOff and ErrImagePull troubleshooting guide covering image names, tags, registries, imagePullSecrets, authentication, DNS, network errors, events, fixes, rollback, verification, and SRE incident workflow.",
  keywords: [
    "Kubernetes ImagePullBackOff",
    "ImagePullBackOff troubleshooting",
    "ErrImagePull Kubernetes",
    "kubectl ImagePullBackOff",
    "Kubernetes image pull error",
    "Kubernetes imagePullSecrets",
    "Kubernetes private registry",
    "kubectl describe pod image pull",
    "Kubernetes Docker registry authentication",
    "Kubernetes image troubleshooting",
    "Kubernetes pod troubleshooting",
    "Kubernetes troubleshooting commands",
  ],
  alternates: {
    canonical:
      "https://www.devopscommands.com/kubernetes/troubleshooting/imagepullbackoff",
  },
  openGraph: {
    title: "Kubernetes ImagePullBackOff Troubleshooting Guide",
    description:
      "A practical production/SRE workflow to diagnose and fix Kubernetes ImagePullBackOff and ErrImagePull errors.",
    url: "https://www.devopscommands.com/kubernetes/troubleshooting/imagepullbackoff",
    type: "article",
  },
};

const investigationFlow = [
  {
    step: "1",
    title: "Confirm the pod status",
    command: "kubectl get pods -n <namespace>",
    question:
      "Is the pod showing ImagePullBackOff or ErrImagePull, and are restarts or readiness affected?",
  },
  {
    step: "2",
    title: "Inspect pod events",
    command: "kubectl describe pod <pod-name> -n <namespace>",
    question:
      "What exact image-pull error is reported by the kubelet?",
  },
  {
    step: "3",
    title: "Verify the image reference",
    command:
      "kubectl get pod <pod-name> -n <namespace> -o jsonpath='{.spec.containers[*].image}'",
    question:
      "Is the registry, repository, image name, and tag exactly correct?",
  },
  {
    step: "4",
    title: "Check registry authentication",
    command:
      "kubectl get pod <pod-name> -n <namespace> -o yaml",
    question:
      "Does the workload reference the expected imagePullSecrets or ServiceAccount?",
  },
  {
    step: "5",
    title: "Classify the failure",
    command:
      "kubectl get events -n <namespace> --sort-by=.lastTimestamp",
    question:
      "Is this a missing image, authentication, authorization, DNS, network, TLS, or runtime problem?",
  },
  {
    step: "6",
    title: "Apply the smallest safe fix",
    command:
      "kubectl rollout status deployment/<deployment-name> -n <namespace>",
    question:
      "Can the image or registry configuration be corrected without unrelated production changes?",
  },
  {
    step: "7",
    title: "Verify recovery",
    command: "kubectl get pods -n <namespace>",
    question:
      "Does the pod pull the image successfully, become Ready, and remain stable?",
  },
];

const commonCauses = [
  {
    title: "Incorrect image name",
    description:
      "The Deployment references a repository or image name that does not exist in the target registry.",
    evidence:
      "kubectl describe pod commonly reports that the repository or image cannot be found.",
  },
  {
    title: "Incorrect image tag",
    description:
      "The repository exists, but the requested tag has not been pushed or is spelled incorrectly.",
    evidence:
      "Pod events usually contain a registry response indicating that the requested manifest or tag was not found.",
  },
  {
    title: "Private registry authentication",
    description:
      "The cluster can reach the registry but does not have valid credentials to pull the image.",
    evidence:
      "Events may contain authentication or unauthorized errors. Check imagePullSecrets and the ServiceAccount configuration.",
  },
  {
    title: "Registry authorization",
    description:
      "Credentials may be valid but do not have permission to pull the requested repository.",
    evidence:
      "Registry responses can indicate access denied or insufficient permissions.",
  },
  {
    title: "Registry DNS or network problem",
    description:
      "The node cannot resolve or reach the registry endpoint.",
    evidence:
      "Events may show DNS resolution failures, connection timeouts, connection refused errors, or network-related messages.",
  },
  {
    title: "TLS or certificate problem",
    description:
      "The node reaches the registry but cannot establish a trusted TLS connection.",
    evidence:
      "Pod events may contain certificate, x509, or TLS handshake errors.",
  },
  {
    title: "Registry rate limiting or availability",
    description:
      "The registry may temporarily reject requests because of rate limits, service disruption, or capacity issues.",
    evidence:
      "Events and registry-side monitoring can show HTTP errors or rate-limit responses.",
  },
  {
    title: "Architecture mismatch",
    description:
      "The image reference exists, but the image manifest does not provide a compatible architecture for the node.",
    evidence:
      "Events or container runtime messages may indicate that no matching manifest exists for the node architecture.",
  },
];

const diagnosticCommands = [
  {
    title: "1. Find the affected pod",
    command: "kubectl get pods -n <namespace>",
    explanation:
      "Confirm the affected pod and determine whether it is waiting for the image or whether other containers are also affected.",
    whatToLookFor:
      "STATUS=ImagePullBackOff or ErrImagePull and a pod that is not Ready.",
  },
  {
    title: "2. Inspect pod events",
    command: "kubectl describe pod <pod-name> -n <namespace>",
    explanation:
      "This is usually the most valuable command because kubelet events contain the detailed reason the image pull failed.",
    whatToLookFor:
      "Failed to pull image, unauthorized, not found, timeout, DNS, TLS, rate limit, or manifest errors.",
  },
  {
    title: "3. Check the image reference",
    command:
      "kubectl get pod <pod-name> -n <namespace> -o jsonpath='{.spec.containers[*].image}'",
    explanation:
      "Extract the exact image reference Kubernetes is attempting to pull.",
    whatToLookFor:
      "Registry hostname, repository, image name, and tag.",
  },
  {
    title: "4. Inspect the workload definition",
    command:
      "kubectl get deployment <deployment-name> -n <namespace> -o yaml",
    explanation:
      "Check the Deployment or workload configuration that created the pod.",
    whatToLookFor:
      "Image reference, imagePullPolicy, imagePullSecrets, ServiceAccount, and recent configuration changes.",
  },
  {
    title: "5. Inspect image pull secrets",
    command:
      "kubectl get secret -n <namespace>",
    explanation:
      "Confirm that the expected registry credential Secret exists in the same namespace as the workload.",
    whatToLookFor:
      "Expected docker-registry Secret and correct namespace.",
  },
  {
    title: "6. Inspect recent events",
    command:
      "kubectl get events -n <namespace> --sort-by=.lastTimestamp",
    explanation:
      "Events help correlate image-pull failures with deployment changes and other Kubernetes activity.",
    whatToLookFor:
      "Warning events related to pulling, authentication, DNS, networking, TLS, or registry availability.",
  },
];

const registryChecks = [
  {
    title: "Image reference",
    command:
      "kubectl get deployment <deployment-name> -n <namespace> -o jsonpath='{.spec.template.spec.containers[*].image}'",
    description:
      "Verify the exact registry, repository, image name, and tag configured by the workload.",
  },
  {
    title: "Image pull secrets",
    command:
      "kubectl get deployment <deployment-name> -n <namespace> -o jsonpath='{.spec.template.spec.imagePullSecrets}'",
    description:
      "Check whether the workload explicitly references an imagePullSecret.",
  },
  {
    title: "ServiceAccount",
    command:
      "kubectl get pod <pod-name> -n <namespace> -o jsonpath='{.spec.serviceAccountName}'",
    description:
      "Identify the ServiceAccount used by the pod when registry credentials are inherited through workload configuration.",
  },
];

const errorPatterns = [
  {
    error: "manifest unknown",
    meaning:
      "The registry could not find the requested image manifest. Verify repository and tag.",
    action:
      "Check the exact image reference and confirm that the tag exists in the registry.",
  },
  {
    error: "unauthorized",
    meaning:
      "The registry rejected the authentication attempt.",
    action:
      "Verify credentials, imagePullSecrets, namespace, ServiceAccount, and registry permissions.",
  },
  {
    error: "denied",
    meaning:
      "The request reached the registry but access to the repository was rejected.",
    action:
      "Check repository-level permissions and the identity used by the workload.",
  },
  {
    error: "no such host",
    meaning:
      "The node or runtime could not resolve the registry hostname.",
    action:
      "Investigate DNS resolution, node networking, private DNS, and registry endpoint configuration.",
  },
  {
    error: "i/o timeout",
    meaning:
      "The node could not complete network communication with the registry in time.",
    action:
      "Investigate firewall rules, proxy configuration, routing, private endpoints, and registry availability.",
  },
  {
    error: "x509",
    meaning:
      "The container runtime encountered a certificate trust or TLS problem.",
    action:
      "Check registry certificates, trust configuration, endpoint correctness, and node runtime configuration.",
  },
  {
    error: "no matching manifest",
    meaning:
      "The registry does not provide an image variant compatible with the node architecture.",
    action:
      "Verify the image manifest and supported node architecture.",
  },
];

const productionChecks = [
  "Record the affected namespace, workload, pod, image reference, start time, and customer impact.",
  "Capture kubectl describe pod output and recent events before repeatedly deleting or recreating pods.",
  "Verify the exact image repository and tag instead of assuming the image exists.",
  "Confirm registry credentials and imagePullSecrets exist in the workload's namespace.",
  "Check whether the problem affects one workload, multiple workloads, or the entire cluster.",
  "Differentiate authentication errors from authorization, DNS, network, TLS, and image-not-found errors.",
  "Check recent deployment or registry changes before changing cluster-wide configuration.",
  "After the fix, verify image pull success, pod readiness, rollout completion, and application health.",
];

const verificationCommands = [
  "kubectl get pods -n <namespace>",
  "kubectl describe pod <pod-name> -n <namespace>",
  "kubectl get events -n <namespace> --sort-by=.lastTimestamp",
  "kubectl rollout status deployment/<deployment-name> -n <namespace>",
  "kubectl get deployment <deployment-name> -n <namespace>",
];

const fixes = [
  "Correct an invalid registry, repository, image name, or image tag.",
  "Push the expected image tag to the registry when the workload references a tag that does not exist.",
  "Create or correct the required imagePullSecret in the same namespace as the workload.",
  "Attach the correct imagePullSecret to the Deployment or appropriate ServiceAccount.",
  "Fix registry permissions when credentials are valid but unauthorized for the repository.",
  "Resolve node-to-registry DNS, routing, firewall, proxy, private endpoint, or TLS issues.",
  "Use an image manifest that supports the architecture of the Kubernetes nodes.",
  "Roll back a workload revision when evidence shows that a recent deployment introduced the invalid image reference.",
];

const faqs = [
  {
    question: "What is the difference between ErrImagePull and ImagePullBackOff?",
    answer:
      "ErrImagePull indicates that Kubernetes failed to pull the container image. ImagePullBackOff means Kubernetes continues to encounter the pull failure and is backing off before retrying.",
  },
  {
    question: "What command should I run first for ImagePullBackOff?",
    answer:
      "Start with kubectl get pods -n <namespace> to confirm the affected pod, then run kubectl describe pod <pod-name> -n <namespace>. The Events section usually contains the most useful explanation.",
  },
  {
    question: "Why does my imagePullSecret not work?",
    answer:
      "Common causes include the Secret being in a different namespace, an incorrect Secret type, invalid or expired registry credentials, the Secret not being referenced by the workload or ServiceAccount, or insufficient repository permissions.",
  },
  {
    question: "Does ImagePullBackOff always mean the image does not exist?",
    answer:
      "No. The image may exist but the node could still fail to pull it because of authentication, authorization, DNS, networking, TLS, registry availability, rate limits, or architecture compatibility.",
  },
  {
    question: "Can I fix ImagePullBackOff by restarting the pod?",
    answer:
      "Restarting the pod does not correct the underlying image-pull problem. Capture the event evidence first and correct the image, registry, authentication, networking, or configuration issue causing the pull failure.",
  },
];

export default function ImagePullBackOffPage() {
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
          <div className="mb-4 inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-300">
            Kubernetes Troubleshooting
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Kubernetes ImagePullBackOff Troubleshooting
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            A production-focused workflow for diagnosing Kubernetes image pull
            failures. Trace the problem from Pod events and image references to
            registry authentication, permissions, DNS, networking, TLS,
            architecture, fixes, rollback, and verification.
          </p>
        </header>

        <section className="mb-12 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
          <h2 className="text-2xl font-semibold">
            What is ImagePullBackOff?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            ImagePullBackOff is a Kubernetes container status that means the
            kubelet could not pull the required container image and is backing
            off before retrying.
          </p>

          <p className="mt-4 leading-7 text-slate-300">
            The important troubleshooting principle is:
            <strong className="text-white">
              {" "}
              ImagePullBackOff is a symptom, not necessarily the root cause.
            </strong>{" "}
            The actual failure may be an incorrect image reference,
            authentication problem, authorization issue, registry connectivity
            problem, TLS failure, rate limit, or architecture mismatch.
          </p>

          <div className="mt-6 rounded-xl border border-amber-400/20 bg-slate-950/60 p-5">
            <p className="font-semibold text-white">Think like an SRE</p>
            <p className="mt-2 leading-7 text-slate-300">
              Do not immediately delete the pod or repeatedly restart the
              workload. First capture the exact image-pull error from Events,
              classify the failure, make the smallest safe correction, and then
              verify that the workload can pull and run the expected image.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Production Troubleshooting Flow
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Follow this sequence during an incident. It moves from symptom to
            evidence, then from evidence to a targeted fix.
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
            Start by identifying the affected pod and confirming whether the
            failure is ImagePullBackOff or ErrImagePull.
          </p>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>kubectl get pods -n &lt;namespace&gt;</code>
          </pre>

          <pre className="mt-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-slate-300">
            <code>{`NAME                         READY   STATUS             RESTARTS
my-app-7d8f9c6b7d-abc12     0/1     ImagePullBackOff   0`}</code>
          </pre>

          <p className="mt-4 leading-7 text-slate-300">
            At this point, do not assume the image is missing. The status only
            tells you that Kubernetes is unable to obtain the image
            successfully. The Events section is where the specific failure
            normally becomes visible.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Step 2: Inspect Pod Events
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            For ImagePullBackOff, this is usually the most important
            investigation step.
          </p>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-cyan-400/20 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>kubectl describe pod &lt;pod-name&gt; -n &lt;namespace&gt;</code>
          </pre>

          <p className="mt-4 leading-7 text-slate-300">
            Scroll to the Events section and look for messages such as:
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {errorPatterns.map((item) => (
              <article
                key={item.error}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <code className="rounded bg-slate-950 px-2 py-1 text-sm text-amber-300">
                  {item.error}
                </code>

                <p className="mt-4 leading-6 text-slate-400">
                  {item.meaning}
                </p>

                <div className="mt-4 rounded-lg bg-slate-950 p-3">
                  <p className="text-sm font-semibold text-cyan-300">
                    Next action
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {item.action}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Step 3: Verify the Image Reference
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Verify exactly what image Kubernetes is trying to pull. A single
            character difference in the registry, repository, image name, or
            tag can cause the pull to fail.
          </p>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>
              kubectl get pod &lt;pod-name&gt; -n &lt;namespace&gt; -o
              jsonpath=&apos;{`{.spec.containers[*].image}`}&apos;
            </code>
          </pre>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-lg font-semibold text-white">
              Validate all four parts
            </h3>

            <ul className="mt-4 space-y-2 text-slate-400">
              <li>• Registry hostname</li>
              <li>• Repository path</li>
              <li>• Image name</li>
              <li>• Image tag</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Step 4: Check Registry Authentication
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Private registries require credentials that allow the Kubernetes
            node or runtime to pull the image. The credentials must be
            available to the workload through the appropriate Kubernetes
            configuration.
          </p>

          <div className="mt-6 space-y-4">
            {registryChecks.map((item) => (
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
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-amber-400/20 bg-amber-400/5 p-6">
            <h3 className="text-lg font-semibold text-amber-200">
              Important namespace rule
            </h3>

            <p className="mt-2 leading-7 text-slate-300">
              Kubernetes Secrets are namespace-scoped. A registry Secret in
              another namespace does not automatically become available to the
              workload you are troubleshooting.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Step 5: Check Recent Kubernetes Events
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Use events to establish whether the failure is isolated to one
            workload or part of a wider platform or registry problem.
          </p>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm text-cyan-300">
            <code>
              kubectl get events -n &lt;namespace&gt; --sort-by=.lastTimestamp
            </code>
          </pre>

          <p className="mt-4 leading-7 text-slate-300">
            If several workloads suddenly begin reporting image-pull failures,
            investigate shared dependencies such as registry availability,
            DNS, network routing, firewall rules, proxy configuration, or
            credentials rather than changing each Deployment independently.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Common ImagePullBackOff Causes
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
            Private Registry Troubleshooting
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            For private registries, troubleshoot authentication and
            authorization separately. Valid credentials do not automatically
            mean the identity has permission to pull every repository.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-lg font-semibold text-white">
                Authentication
              </h3>
              <p className="mt-2 leading-6 text-slate-400">
                Can the registry identify the credential being presented?
              </p>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-lg font-semibold text-white">
                Authorization
              </h3>
              <p className="mt-2 leading-6 text-slate-400">
                Does that identity have permission to pull this repository?
              </p>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-lg font-semibold text-white">
                Connectivity
              </h3>
              <p className="mt-2 leading-6 text-slate-400">
                Can the Kubernetes node reach the registry endpoint?
              </p>
            </article>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            What Not to Do in Production
          </h2>

          <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/5 p-6">
            <ul className="space-y-3 text-slate-300">
              <li>
                <span className="text-red-300">✕</span>{" "}
                Do not repeatedly delete pods without first capturing Events.
              </li>
              <li>
                <span className="text-red-300">✕</span>{" "}
                Do not change cluster-wide registry configuration for a
                single-workload image typo.
              </li>
              <li>
                <span className="text-red-300">✕</span>{" "}
                Do not expose registry credentials or Secret contents in
                incident tickets.
              </li>
              <li>
                <span className="text-red-300">✕</span>{" "}
                Do not assume an authentication error when the actual issue is
                DNS, networking, TLS, or an incorrect image tag.
              </li>
            </ul>
          </div>
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
              Fix the dependency causing the image pull failure rather than
              repeatedly restarting the pod. A restart may simply reproduce
              the same failed image pull while delaying diagnosis.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">
            Verify the Fix
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Recovery is not complete simply because ImagePullBackOff disappears.
            Verify that the image was actually pulled, the pod became Ready,
            the rollout completed, and the workload remains stable.
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
              <li>✓ Image pull succeeds.</li>
              <li>✓ Pod reaches Ready state.</li>
              <li>✓ ImagePullBackOff and ErrImagePull stop recurring.</li>
              <li>✓ Deployment rollout completes successfully.</li>
              <li>✓ Application health checks pass.</li>
              <li>✓ Recent warning events no longer show the same failure.</li>
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
            Quick ImagePullBackOff Checklist
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
                Check Events for the exact pull error
              </p>
            </div>

            <div className="rounded-lg bg-slate-950/60 p-4">
              <p className="font-semibold text-white">3. Verify image</p>
              <p className="mt-1 text-sm text-slate-400">
                Registry + repository + image + tag
              </p>
            </div>

            <div className="rounded-lg bg-slate-950/60 p-4">
              <p className="font-semibold text-white">4. Check access</p>
              <p className="mt-1 text-sm text-slate-400">
                imagePullSecrets + ServiceAccount + registry permissions
              </p>
            </div>

            <div className="rounded-lg bg-slate-950/60 p-4">
              <p className="font-semibold text-white">5. Classify</p>
              <p className="mt-1 text-sm text-slate-400">
                Image / Auth / Access / DNS / Network / TLS / Architecture
              </p>
            </div>

            <div className="rounded-lg bg-slate-950/60 p-4">
              <p className="font-semibold text-white">6. Verify</p>
              <p className="mt-1 text-sm text-slate-400">
                Pull succeeds + Ready + rollout healthy
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
