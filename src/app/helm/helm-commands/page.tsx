import HelmCommandSearch from "./HelmCommandSearch";

type HelmCommand = {
  command: string;
  description: string;
};

type HelmSection = {
  title: string;
  commands: HelmCommand[];
};

const commandSections: HelmSection[] = [
  {
    title: "Helm Setup and Version",
    commands: [
      {
        command: "helm version",
        description: "Display the installed Helm client version.",
      },
      {
        command: "helm version --short",
        description: "Display a shorter Helm version output.",
      },
      {
        command: "helm help",
        description: "Display general Helm help.",
      },
      {
        command: "helm env",
        description: "Display Helm environment information and configuration paths.",
      },
      {
        command: "helm <command> --help",
        description: "Display help for a specific Helm command.",
      },
      {
        command: "helm completion powershell",
        description: "Generate PowerShell shell completion.",
      },
      {
        command: "helm completion bash",
        description: "Generate Bash shell completion.",
      },
      {
        command: "helm completion zsh",
        description: "Generate Zsh shell completion.",
      },
    ],
  },

  {
    title: "Helm Repository Management",
    commands: [
      {
        command: "helm repo add <name> <url>",
        description: "Add a chart repository.",
      },
      {
        command: "helm repo list",
        description: "List configured Helm repositories.",
      },
      {
        command: "helm repo update",
        description: "Update local information about charts in configured repositories.",
      },
      {
        command: "helm repo remove <name>",
        description: "Remove a configured chart repository.",
      },
      {
        command: "helm repo index <directory>",
        description: "Generate an index file for a directory containing packaged charts.",
      },
    ],
  },

  {
    title: "Search Helm Charts",
    commands: [
      {
        command: "helm search repo <keyword>",
        description: "Search configured chart repositories.",
      },
      {
        command: "helm search hub <keyword>",
        description: "Search charts through Artifact Hub.",
      },
      {
        command: "helm search repo nginx",
        description: "Search configured repositories for nginx charts.",
      },
      {
        command: "helm search repo <keyword> --versions",
        description: "Show all available chart versions matching the search.",
      },
    ],
  },

  {
    title: "Chart Information",
    commands: [
      {
        command: "helm show chart <chart>",
        description: "Display Chart.yaml metadata.",
      },
      {
        command: "helm show values <chart>",
        description: "Display the default values exposed by a chart.",
      },
      {
        command: "helm show readme <chart>",
        description: "Display the chart README.",
      },
      {
        command: "helm show crds <chart>",
        description: "Display CRDs included by a chart.",
      },
      {
        command: "helm show all <chart>",
        description: "Display all available chart information.",
      },
    ],
  },

  {
    title: "Create and Download Charts",
    commands: [
      {
        command: "helm create <name>",
        description: "Create a new Helm chart using the standard chart structure.",
      },
      {
        command: "helm pull <chart>",
        description: "Download a chart locally.",
      },
      {
        command: "helm pull <chart> --untar",
        description: "Download and extract a chart locally.",
      },
      {
        command: "helm pull <chart> --version <version>",
        description: "Download a specific chart version.",
      },
      {
        command: "helm pull <chart> --destination <directory>",
        description: "Download a chart into a specified directory.",
      },
      {
        command: "helm package <chart-path>",
        description: "Package a chart directory into a versioned archive.",
      },
      {
        command: "helm package <chart-path> --destination <directory>",
        description: "Package a chart into a specified destination directory.",
      },
    ],
  },

  {
    title: "Chart Validation",
    commands: [
      {
        command: "helm lint <chart>",
        description: "Check a chart for possible installation and convention issues.",
      },
      {
        command: "helm lint <chart> --strict",
        description: "Treat lint warnings as errors.",
      },
      {
        command: "helm lint <chart> --values values.yaml",
        description: "Lint a chart using a custom values file.",
      },
      {
        command: "helm lint <chart> --set image.tag=latest",
        description: "Lint a chart with a command-line value override.",
      },
    ],
  },

  {
    title: "Install Helm Releases",
    commands: [
      {
        command: "helm install <release> <chart>",
        description: "Install a Helm chart as a named release.",
      },
      {
        command: "helm install <release> <chart> --namespace <namespace>",
        description: "Install a release into a specific Kubernetes namespace.",
      },
      {
        command: "helm install <release> <chart> --create-namespace",
        description: "Create the namespace if it does not already exist.",
      },
      {
        command: "helm install <release> <chart> --values values.yaml",
        description: "Install using values from a YAML file.",
      },
      {
        command: "helm install <release> <chart> --set key=value",
        description: "Override a chart value from the command line.",
      },
      {
        command: "helm install <release> <chart> --version <version>",
        description: "Install a specific chart version.",
      },
      {
        command: "helm install <release> <chart> --dry-run",
        description: "Simulate an installation without applying it.",
      },
      {
        command: "helm install <release> <chart> --wait",
        description: "Wait for resources to become ready before returning.",
      },
      {
        command: "helm install <release> <chart> --debug",
        description: "Enable debug output during installation.",
      },
    ],
  },

  {
    title: "Upgrade Helm Releases",
    commands: [
      {
        command: "helm upgrade <release> <chart>",
        description: "Upgrade an existing Helm release.",
      },
      {
        command: "helm upgrade <release> <chart> --install",
        description: "Upgrade a release or install it when it does not exist.",
      },
      {
        command: "helm upgrade <release> <chart> --values values.yaml",
        description: "Upgrade using a values file.",
      },
      {
        command: "helm upgrade <release> <chart> --set key=value",
        description: "Override values during an upgrade.",
      },
      {
        command: "helm upgrade <release> <chart> --version <version>",
        description: "Upgrade to a specific chart version.",
      },
      {
        command: "helm upgrade <release> <chart> --reuse-values",
        description: "Reuse values from the previous release.",
      },
      {
        command: "helm upgrade <release> <chart> --reset-values",
        description: "Reset values to chart defaults before applying overrides.",
      },
      {
        command: "helm upgrade <release> <chart> --wait",
        description: "Wait for resources to become ready after the upgrade.",
      },
      {
        command: "helm upgrade <release> <chart> --rollback-on-failure",
        description: "Automatically roll back when the upgrade fails.",
      },
    ],
  },

  {
    title: "List and Inspect Releases",
    commands: [
      {
        command: "helm list",
        description: "List releases in the current namespace.",
      },
      {
        command: "helm list --all-namespaces",
        description: "List releases across all namespaces.",
      },
      {
        command: "helm list --all",
        description: "Include releases with statuses other than deployed.",
      },
      {
        command: "helm list --failed",
        description: "List releases with failed status.",
      },
      {
        command: "helm status <release>",
        description: "Display the current status of a release.",
      },
      {
        command: "helm status <release> --show-resources",
        description: "Display release status and associated resources.",
      },
    ],
  },

  {
    title: "Release History and Rollback",
    commands: [
      {
        command: "helm history <release>",
        description: "Display release revision history.",
      },
      {
        command: "helm history <release> --max <number>",
        description: "Limit the number of historical revisions displayed.",
      },
      {
        command: "helm rollback <release> <revision>",
        description: "Roll a release back to a specific revision.",
      },
      {
        command: "helm rollback <release> <revision> --wait",
        description: "Roll back and wait for resources to become ready.",
      },
      {
        command: "helm rollback <release> <revision> --cleanup-on-fail",
        description: "Clean up resources created during a failed rollback.",
      },
    ],
  },

  {
    title: "Get Release Information",
    commands: [
      {
        command: "helm get all <release>",
        description: "Display all available information for a release.",
      },
      {
        command: "helm get values <release>",
        description: "Display values currently used by a release.",
      },
      {
        command: "helm get values <release> --all",
        description: "Display computed values including chart defaults.",
      },
      {
        command: "helm get manifest <release>",
        description: "Display Kubernetes manifests generated by Helm.",
      },
      {
        command: "helm get notes <release>",
        description: "Display release notes.",
      },
      {
        command: "helm get hooks <release>",
        description: "Display hooks associated with a release.",
      },
      {
        command: "helm get metadata <release>",
        description: "Display release metadata.",
      },
    ],
  },

  {
    title: "Uninstall Releases",
    commands: [
      {
        command: "helm uninstall <release>",
        description: "Uninstall a Helm release.",
      },
      {
        command: "helm uninstall <release> --namespace <namespace>",
        description: "Uninstall a release from a specific namespace.",
      },
      {
        command: "helm uninstall <release> --keep-history",
        description: "Uninstall a release while retaining its history.",
      },
    ],
  },

  {
    title: "Values and Configuration",
    commands: [
      {
        command: "helm show values <chart>",
        description: "Review the chart's default values.",
      },
      {
        command: "helm install <release> <chart> -f values.yaml",
        description: "Install using a values file.",
      },
      {
        command: "helm upgrade <release> <chart> -f values.yaml",
        description: "Upgrade using a values file.",
      },
      {
        command: "helm install <release> <chart> --set image.repository=myapp",
        description: "Override a single chart value.",
      },
      {
        command: "helm install <release> <chart> --set-string image.tag=001",
        description: "Force a command-line value to be treated as a string.",
      },
      {
        command: "helm install <release> <chart> --set-file config=app.conf",
        description: "Load a chart value from a file.",
      },
    ],
  },

  {
    title: "Template Rendering and Debugging",
    commands: [
      {
        command: "helm template <release> <chart>",
        description: "Render chart templates locally without installing them.",
      },
      {
        command: "helm template <release> <chart> --values values.yaml",
        description: "Render templates using a custom values file.",
      },
      {
        command: "helm template <release> <chart> --debug",
        description: "Render templates with additional debugging information.",
      },
      {
        command: "helm install <release> <chart> --dry-run --debug",
        description: "Simulate installation and inspect rendered output.",
      },
      {
        command: "helm upgrade <release> <chart> --dry-run",
        description: "Simulate a release upgrade.",
      },
    ],
  },

  {
    title: "Chart Dependencies",
    commands: [
      {
        command: "helm dependency list <chart>",
        description: "List dependencies declared by a chart.",
      },
      {
        command: "helm dependency update <chart>",
        description: "Update chart dependencies.",
      },
      {
        command: "helm dependency build <chart>",
        description: "Rebuild dependencies using Chart.lock.",
      },
      {
        command: "helm dependency update <chart> --skip-refresh",
        description: "Update dependencies without refreshing repository indexes.",
      },
    ],
  },

  {
    title: "OCI Registries",
    commands: [
      {
        command: "helm registry login <registry>",
        description: "Authenticate Helm against an OCI registry.",
      },
      {
        command: "helm registry logout <registry>",
        description: "Log out from an OCI registry.",
      },
      {
        command: "helm pull oci://<registry>/<repository>/<chart>",
        description: "Pull a Helm chart from an OCI registry.",
      },
      {
        command: "helm push <chart>.tgz oci://<registry>/<repository>",
        description: "Push a packaged chart to an OCI registry.",
      },
    ],
  },

  {
    title: "Helm Plugins",
    commands: [
      {
        command: "helm plugin list",
        description: "List installed Helm plugins.",
      },
      {
        command: "helm plugin install <url>",
        description: "Install a Helm plugin.",
      },
      {
        command: "helm plugin update <plugin>",
        description: "Update an installed Helm plugin.",
      },
      {
        command: "helm plugin uninstall <plugin>",
        description: "Remove an installed Helm plugin.",
      },
    ],
  },

  {
    title: "Chart Verification",
    commands: [
      {
        command: "helm verify <chart>",
        description: "Verify a signed chart package.",
      },
      {
        command: "helm install <release> <chart> --verify",
        description: "Verify a chart before installation.",
      },
      {
        command: "helm pull <chart> --verify",
        description: "Download and verify a signed chart.",
      },
    ],
  },

  {
    title: "Helm Tests",
    commands: [
      {
        command: "helm test <release>",
        description: "Run tests associated with a deployed release.",
      },
      {
        command: "helm test <release> --logs",
        description: "Run release tests and stream test pod logs.",
      },
    ],
  },

  {
    title: "Helm Environment",
    commands: [
      {
        command: "helm env",
        description: "Display Helm environment variables and configuration locations.",
      },
      {
        command: "$HELM_CONFIG_HOME",
        description: "Controls the Helm configuration directory.",
      },
      {
        command: "$HELM_CACHE_HOME",
        description: "Controls the Helm cache directory.",
      },
      {
        command: "$HELM_DATA_HOME",
        description: "Controls the Helm data directory.",
      },
      {
        command: "$HELM_NAMESPACE",
        description: "Sets the default namespace used by Helm.",
      },
      {
        command: "$HELM_DEBUG",
        description: "Enables Helm debug behavior when configured.",
      },
    ],
  },

  {
    title: "Helm Troubleshooting",
    commands: [
      {
        command: "helm list --all-namespaces",
        description: "Check whether a release exists in another namespace.",
      },
      {
        command: "helm status <release> -n <namespace>",
        description: "Inspect release status in a specific namespace.",
      },
      {
        command: "helm history <release> -n <namespace>",
        description: "Inspect previous revisions during upgrade troubleshooting.",
      },
      {
        command: "helm get manifest <release> -n <namespace>",
        description: "Inspect Kubernetes manifests generated by Helm.",
      },
      {
        command: "helm get values <release> -n <namespace> --all",
        description: "Inspect the effective values used by a release.",
      },
      {
        command: "helm template <release> <chart> --debug",
        description: "Debug chart rendering without modifying the cluster.",
      },
      {
        command: "helm lint <chart>",
        description: "Find chart structure and template problems.",
      },
    ],
  },

  {
    title: "CI/CD Helm Workflow",
    commands: [
      {
        command: "helm lint ./chart",
        description: "Validate the chart during CI.",
      },
      {
        command: "helm dependency update ./chart",
        description: "Resolve chart dependencies during the pipeline.",
      },
      {
        command: "helm template myapp ./chart -f values-prod.yaml",
        description: "Render production Kubernetes manifests during CI.",
      },
      {
        command: "helm package ./chart",
        description: "Package the chart for publishing.",
      },
      {
        command: "helm registry login <registry>",
        description: "Authenticate to the OCI registry used by the pipeline.",
      },
      {
        command: "helm push myapp-1.0.0.tgz oci://<registry>/<repository>",
        description: "Publish a packaged chart to an OCI registry.",
      },
      {
        command:
          "helm upgrade --install myapp ./chart -n production --create-namespace",
        description: "Deploy or upgrade the application in the production namespace.",
      },
    ],
  },

  {
    title: "Recommended Helm Deployment Workflow",
    commands: [
      {
        command: "helm repo update",
        description: "Refresh available chart information.",
      },
      {
        command: "helm show values <chart>",
        description: "Review configurable chart values.",
      },
      {
        command: "helm lint ./chart",
        description: "Validate the chart before deployment.",
      },
      {
        command: "helm dependency update ./chart",
        description: "Resolve required chart dependencies.",
      },
      {
        command:
          "helm template myapp ./chart -f values-prod.yaml",
        description: "Review rendered Kubernetes manifests.",
      },
      {
        command:
          "helm upgrade --install myapp ./chart -n production --create-namespace --wait",
        description:
          "Install or upgrade the application and wait for resources to become ready.",
      },
      {
        command: "helm status myapp -n production",
        description: "Verify the deployed release status.",
      },
      {
        command: "helm history myapp -n production",
        description: "Review release revisions for auditing and rollback.",
      },
    ],
  },
];

export const metadata = {
  title: "Helm Commands Cheat Sheet | DevOpsCommands",
  description:
    "Practical Helm commands for Kubernetes charts, repositories, releases, upgrades, rollbacks, values, templates, dependencies, OCI registries and CI/CD workflows.",
};

export default function HelmCommandsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Kubernetes • Helm • DevOps
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Helm Commands Cheat Sheet
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Practical Helm commands for Kubernetes charts, repositories,
          releases, deployments, upgrades, rollbacks, values, templates,
          dependencies, OCI registries and CI/CD automation.
        </p>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold text-white">
            What is Helm?
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            Helm is a package manager for Kubernetes. Helm charts package
            Kubernetes resources into reusable application definitions, while
            Helm releases track installed instances of those charts.
          </p>
        </div>

        <div className="mt-10">
          <HelmCommandSearch sections={commandSections} />
        </div>

        <section className="mt-16 rounded-xl border border-cyan-900 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">
            Common Helm Workflow
          </h2>

          <div className="mt-6 space-y-4">
            <code className="block rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
              helm repo add bitnami https://charts.bitnami.com/bitnami
            </code>

            <code className="block rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
              helm repo update
            </code>

            <code className="block rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
              helm search repo nginx
            </code>

            <code className="block rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
              helm show values bitnami/nginx
            </code>

            <code className="block rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
              helm upgrade --install nginx bitnami/nginx -n web --create-namespace
            </code>

            <code className="block rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
              helm status nginx -n web
            </code>

            <code className="block rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
              helm history nginx -n web
            </code>
          </div>
        </section>
      </section>
    </main>
  );
}