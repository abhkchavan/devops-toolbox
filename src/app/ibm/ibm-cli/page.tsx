import IbmCommandSearch from "./IbmCommandSearch";

export const metadata = {
  title: "IBM Cloud CLI Commands Cheat Sheet | DevOpsCommands",
  description:
    "Practical IBM Cloud CLI ibmcloud commands for authentication, resources, Kubernetes, Code Engine, Container Registry, IAM, Object Storage, VPC, Cloud Foundry, monitoring and DevOps workflows.",
};

const commandSections = [
  {
    title: "IBM Cloud CLI Setup and Version",
    commands: [
      {
        command: "ibmcloud -v",
        description: "Display the installed IBM Cloud CLI version.",
      },
      {
        command: "ibmcloud help",
        description: "Display IBM Cloud CLI help and available commands.",
      },
      {
        command: "ibmcloud update",
        description: "Update the IBM Cloud CLI to the latest version.",
      },
      {
        command: "ibmcloud config --list",
        description: "Display current IBM Cloud CLI configuration.",
      },
    ],
  },

  {
    title: "IBM Cloud Login and Authentication",
    commands: [
      {
        command: "ibmcloud login",
        description: "Log in to IBM Cloud interactively.",
      },
      {
        command: "ibmcloud login --sso",
        description: "Log in using a federated IBM Cloud identity.",
      },
      {
        command: "ibmcloud login --apikey <api_key>",
        description: "Log in using an IBM Cloud API key.",
      },
      {
        command: "ibmcloud logout",
        description: "Log out from the current IBM Cloud session.",
      },
      {
        command: "ibmcloud target",
        description: "Display the current targeted account, resource group and region.",
      },
      {
        command: "ibmcloud target -r us-south",
        description: "Target a specific IBM Cloud region.",
      },
      {
        command: "ibmcloud target -g <resource_group>",
        description: "Target a specific resource group.",
      },
    ],
  },

  {
    title: "IBM Cloud Plugins",
    commands: [
      {
        command: "ibmcloud plugin list",
        description: "List installed IBM Cloud CLI plugins.",
      },
      {
        command: "ibmcloud plugin repos",
        description: "List configured plugin repositories.",
      },
      {
        command: "ibmcloud plugin repo-plugins",
        description: "List plugins available from configured repositories.",
      },
      {
        command: "ibmcloud plugin install <plugin>",
        description: "Install an IBM Cloud CLI plugin.",
      },
      {
        command: "ibmcloud plugin install <plugin> -v <version>",
        description: "Install a specific plugin version.",
      },
      {
        command: "ibmcloud plugin update",
        description: "Check for and update installed plugins.",
      },
      {
        command: "ibmcloud plugin update --all",
        description: "Update all available plugins.",
      },
      {
        command: "ibmcloud plugin uninstall <plugin>",
        description: "Remove an installed plugin.",
      },
      {
        command: "ibmcloud plugin show <plugin>",
        description: "Show details about an installed plugin.",
      },
    ],
  },

  {
    title: "IBM Cloud Accounts and Resource Groups",
    commands: [
      {
        command: "ibmcloud account show",
        description: "Display information about the current IBM Cloud account.",
      },
      {
        command: "ibmcloud resource groups",
        description: "List resource groups.",
      },
      {
        command: "ibmcloud resource group",
        description: "Display the current targeted resource group.",
      },
      {
        command: "ibmcloud resource group-create <name>",
        description: "Create a resource group.",
      },
      {
        command: "ibmcloud resource group-update <name>",
        description: "Update a resource group.",
      },
      {
        command: "ibmcloud resource group-delete <name>",
        description: "Delete a resource group.",
      },
    ],
  },

  {
    title: "IBM Cloud IAM",
    commands: [
      {
        command: "ibmcloud iam service-id <name>",
        description: "Create a service ID.",
      },
      {
        command: "ibmcloud iam service-ids",
        description: "List service IDs.",
      },
      {
        command: "ibmcloud iam service-id-delete <id>",
        description: "Delete a service ID.",
      },
      {
        command: "ibmcloud iam service-api-key-create <service_id> <name>",
        description: "Create an API key for a service ID.",
      },
      {
        command: "ibmcloud iam service-api-keys <service_id>",
        description: "List API keys for a service ID.",
      },
      {
        command: "ibmcloud iam api-keys",
        description: "List API keys associated with the current user.",
      },
      {
        command: "ibmcloud iam user-policies <user>",
        description: "List IAM policies for a user.",
      },
    ],
  },

  {
    title: "IBM Cloud Resources",
    commands: [
      {
        command: "ibmcloud resource service-instances",
        description: "List service instances in the targeted resource group.",
      },
      {
        command: "ibmcloud resource service-instance <name>",
        description: "Display details for a service instance.",
      },
      {
        command: "ibmcloud resource service-instance-create <name> <service> <plan> <location>",
        description: "Create a service instance.",
      },
      {
        command: "ibmcloud resource service-instance-delete <name>",
        description: "Delete a service instance.",
      },
      {
        command: "ibmcloud resource service-aliases",
        description: "List service aliases.",
      },
      {
        command: "ibmcloud resource service-bindings <service_instance>",
        description: "List service bindings.",
      },
    ],
  },

  {
    title: "IBM Cloud Catalog",
    commands: [
      {
        command: "ibmcloud catalog search <keyword>",
        description: "Search the IBM Cloud catalog.",
      },
      {
        command: "ibmcloud catalog service <service>",
        description: "Display details about a catalog service.",
      },
      {
        command: "ibmcloud catalog service-marketplace <service>",
        description: "Show marketplace information for a service.",
      },
    ],
  },

  {
    title: "IBM Cloud Object Storage",
    commands: [
      {
        command: "ibmcloud cos buckets",
        description: "List Object Storage buckets using the COS plugin.",
      },
      {
        command: "ibmcloud cos bucket-create --bucket <bucket_name>",
        description: "Create an Object Storage bucket.",
      },
      {
        command: "ibmcloud cos bucket-delete --bucket <bucket_name>",
        description: "Delete an Object Storage bucket.",
      },
      {
        command: "ibmcloud cos objects --bucket <bucket_name>",
        description: "List objects in a bucket.",
      },
      {
        command: "ibmcloud cos object-head --bucket <bucket_name> --key <object>",
        description: "Display metadata for an object.",
      },
      {
        command: "ibmcloud cos object-delete --bucket <bucket_name> --key <object>",
        description: "Delete an object from a bucket.",
      },
    ],
  },

  {
    title: "IBM Cloud VPC",
    commands: [
      {
        command: "ibmcloud is vpcs",
        description: "List IBM Cloud VPCs.",
      },
      {
        command: "ibmcloud is vpc-create <name>",
        description: "Create a VPC.",
      },
      {
        command: "ibmcloud is vpc <id>",
        description: "Display VPC details.",
      },
      {
        command: "ibmcloud is vpc-delete <id>",
        description: "Delete a VPC.",
      },
      {
        command: "ibmcloud is subnets",
        description: "List VPC subnets.",
      },
      {
        command: "ibmcloud is subnet <id>",
        description: "Display subnet details.",
      },
      {
        command: "ibmcloud is security-groups",
        description: "List VPC security groups.",
      },
      {
        command: "ibmcloud is security-group-rules <security_group_id>",
        description: "List security group rules.",
      },
    ],
  },

  {
    title: "IBM Cloud VPC Virtual Servers",
    commands: [
      {
        command: "ibmcloud is instances",
        description: "List VPC virtual server instances.",
      },
      {
        command: "ibmcloud is instance <id>",
        description: "Display virtual server details.",
      },
      {
        command: "ibmcloud is instance-create",
        description: "Create a VPC virtual server instance.",
      },
      {
        command: "ibmcloud is instance-start <id>",
        description: "Start a virtual server instance.",
      },
      {
        command: "ibmcloud is instance-stop <id>",
        description: "Stop a virtual server instance.",
      },
      {
        command: "ibmcloud is instance-reboot <id>",
        description: "Reboot a virtual server instance.",
      },
      {
        command: "ibmcloud is instance-delete <id>",
        description: "Delete a virtual server instance.",
      },
    ],
  },

  {
    title: "IBM Cloud VPC Images and Volumes",
    commands: [
      {
        command: "ibmcloud is images",
        description: "List available VPC images.",
      },
      {
        command: "ibmcloud is image <id>",
        description: "Display image details.",
      },
      {
        command: "ibmcloud is volumes",
        description: "List block storage volumes.",
      },
      {
        command: "ibmcloud is volume <id>",
        description: "Display volume details.",
      },
      {
        command: "ibmcloud is volume-create <name>",
        description: "Create a block storage volume.",
      },
      {
        command: "ibmcloud is volume-delete <id>",
        description: "Delete a block storage volume.",
      },
    ],
  },

  {
    title: "IBM Cloud Load Balancers",
    commands: [
      {
        command: "ibmcloud is load-balancers",
        description: "List VPC load balancers.",
      },
      {
        command: "ibmcloud is load-balancer <id>",
        description: "Display load balancer details.",
      },
      {
        command: "ibmcloud is load-balancer-create",
        description: "Create a VPC load balancer.",
      },
      {
        command: "ibmcloud is load-balancer-delete <id>",
        description: "Delete a load balancer.",
      },
    ],
  },

  {
    title: "IBM Cloud Kubernetes Service",
    commands: [
      {
        command: "ibmcloud plugin install container-service",
        description: "Install the IBM Cloud Kubernetes Service CLI plugin.",
      },
      {
        command: "ibmcloud ks clusters",
        description: "List IBM Cloud Kubernetes Service clusters.",
      },
      {
        command: "ibmcloud ks cluster get --cluster <cluster>",
        description: "Display Kubernetes cluster details.",
      },
      {
        command: "ibmcloud ks worker ls --cluster <cluster>",
        description: "List worker nodes in a cluster.",
      },
      {
        command: "ibmcloud ks worker-reboot --cluster <cluster> --worker <worker>",
        description: "Reboot a Kubernetes worker node.",
      },
      {
        command: "ibmcloud ks worker-rm --cluster <cluster> --worker <worker>",
        description: "Remove a worker node.",
      },
      {
        command: "ibmcloud ks cluster config --cluster <cluster>",
        description: "Configure kubectl access to a Kubernetes cluster.",
      },
    ],
  },

  {
    title: "IBM Cloud Code Engine",
    commands: [
      {
        command: "ibmcloud plugin install code-engine",
        description: "Install the IBM Cloud Code Engine CLI plugin.",
      },
      {
        command: "ibmcloud ce project list",
        description: "List Code Engine projects.",
      },
      {
        command: "ibmcloud ce project create --name <project>",
        description: "Create a Code Engine project.",
      },
      {
        command: "ibmcloud ce project select --name <project>",
        description: "Select a Code Engine project.",
      },
      {
        command: "ibmcloud ce app list",
        description: "List Code Engine applications.",
      },
      {
        command: "ibmcloud ce app create --name <app> --image <image>",
        description: "Create a Code Engine application from a container image.",
      },
      {
        command: "ibmcloud ce app get --name <app>",
        description: "Display Code Engine application details.",
      },
      {
        command: "ibmcloud ce app delete --name <app>",
        description: "Delete a Code Engine application.",
      },
      {
        command: "ibmcloud ce job list",
        description: "List Code Engine jobs.",
      },
    ],
  },

  {
    title: "IBM Cloud Container Registry",
    commands: [
      {
        command: "ibmcloud cr login",
        description: "Authenticate Docker with IBM Cloud Container Registry.",
      },
      {
        command: "ibmcloud cr namespaces",
        description: "List Container Registry namespaces.",
      },
      {
        command: "ibmcloud cr namespace-add <namespace>",
        description: "Create a Container Registry namespace.",
      },
      {
        command: "ibmcloud cr images",
        description: "List container images.",
      },
      {
        command: "ibmcloud cr image-inspect <image>",
        description: "Inspect a container image.",
      },
      {
        command: "ibmcloud cr image-rm <image>",
        description: "Delete a container image.",
      },
      {
        command: "ibmcloud cr image-prune",
        description: "Remove unused container images.",
      },
    ],
  },

  {
    title: "IBM Cloud Functions",
    commands: [
      {
        command: "ibmcloud plugin install cloud-functions",
        description: "Install the IBM Cloud Functions CLI plugin.",
      },
      {
        command: "ibmcloud fn namespace list",
        description: "List Cloud Functions namespaces.",
      },
      {
        command: "ibmcloud fn action list",
        description: "List Cloud Functions actions.",
      },
      {
        command: "ibmcloud fn action create <name> <file>",
        description: "Create a Cloud Functions action.",
      },
      {
        command: "ibmcloud fn action invoke <name>",
        description: "Invoke a Cloud Functions action.",
      },
      {
        command: "ibmcloud fn action delete <name>",
        description: "Delete a Cloud Functions action.",
      },
    ],
  },

  {
    title: "IBM Cloud Databases",
    commands: [
      {
        command: "ibmcloud resource service-instances",
        description: "List provisioned IBM Cloud database service instances.",
      },
      {
        command: "ibmcloud resource service-instance <name>",
        description: "Display database service instance details.",
      },
      {
        command: "ibmcloud resource service-keys <service_instance>",
        description: "List service credentials for a database service.",
      },
      {
        command: "ibmcloud resource service-key-create <name> <service_instance>",
        description: "Create credentials for a service instance.",
      },
    ],
  },

  {
    title: "IBM Cloud Monitoring",
    commands: [
      {
        command: "ibmcloud resource service-instances",
        description: "List IBM Cloud monitoring service instances.",
      },
      {
        command: "ibmcloud resource service-instance <name>",
        description: "Inspect a monitoring service instance.",
      },
      {
        command: "ibmcloud resource service-bindings <service_instance>",
        description: "List bindings associated with a monitoring service.",
      },
    ],
  },

  {
    title: "IBM Cloud Secrets Manager",
    commands: [
      {
        command: "ibmcloud plugin install secrets-manager",
        description: "Install the IBM Cloud Secrets Manager CLI plugin.",
      },
      {
        command: "ibmcloud secrets-manager secret-list",
        description: "List secrets available through Secrets Manager.",
      },
      {
        command: "ibmcloud secrets-manager secret",
        description: "Display information about a secret.",
      },
    ],
  },

  {
    title: "IBM Cloud Resource Controller",
    commands: [
      {
        command: "ibmcloud resource service-instances",
        description: "List service instances managed by IBM Cloud Resource Controller.",
      },
      {
        command: "ibmcloud resource service-instance-create <name> <service> <plan> <location>",
        description: "Create a service instance.",
      },
      {
        command: "ibmcloud resource service-instance-delete <name>",
        description: "Delete a service instance.",
      },
      {
        command: "ibmcloud resource service-aliases",
        description: "List service aliases.",
      },
    ],
  },

  {
    title: "IBM Cloud DevOps Workflow",
    commands: [
      {
        command: "ibmcloud login --apikey <api_key>",
        description: "Authenticate CI/CD jobs using an IBM Cloud API key.",
      },
      {
        command: "ibmcloud target -r <region>",
        description: "Select the IBM Cloud region used by the pipeline.",
      },
      {
        command: "ibmcloud target -g <resource_group>",
        description: "Select the resource group used by the pipeline.",
      },
      {
        command: "ibmcloud cr login",
        description: "Authenticate Docker with IBM Cloud Container Registry.",
      },
      {
        command: "docker build -t <image>:<tag> .",
        description: "Build a container image for an IBM Cloud deployment.",
      },
      {
        command: "docker push <registry>/<namespace>/<image>:<tag>",
        description: "Push the image to IBM Cloud Container Registry.",
      },
      {
        command: "ibmcloud ce app update --name <app> --image <image>",
        description: "Deploy an updated container image to Code Engine.",
      },
    ],
  },

  {
    title: "IBM Cloud CLI Output and Troubleshooting",
    commands: [
      {
        command: "ibmcloud help",
        description: "Display general CLI help.",
      },
      {
        command: "ibmcloud <command> --help",
        description: "Display help for a specific command.",
      },
      {
        command: "ibmcloud plugin list",
        description: "Check installed plugin versions and availability of updates.",
      },
      {
        command: "ibmcloud target",
        description: "Verify the currently targeted account, region and resource group.",
      },
      {
        command: "ibmcloud logout",
        description: "Clear the current login session before authenticating again.",
      },
      {
        command: "ibmcloud login --sso",
        description: "Use SSO authentication when a federated identity is required.",
      },
    ],
  },

  {
    title: "Useful IBM Cloud DevOps Commands",
    commands: [
      {
        command: "ibmcloud -v",
        description: "Check the IBM Cloud CLI version before troubleshooting.",
      },
      {
        command: "ibmcloud plugin list",
        description: "Check installed service plugins.",
      },
      {
        command: "ibmcloud target",
        description: "Verify the current deployment target.",
      },
      {
        command: "ibmcloud resource service-instances",
        description: "Inspect deployed cloud service instances.",
      },
      {
        command: "ibmcloud is instances",
        description: "Inspect VPC compute instances.",
      },
      {
        command: "ibmcloud ks clusters",
        description: "Inspect IBM Cloud Kubernetes clusters.",
      },
      {
        command: "ibmcloud ce app list",
        description: "Inspect Code Engine applications.",
      },
      {
        command: "ibmcloud cr images",
        description: "Inspect container images.",
      },
    ],
  },
];

export default function IbmCliPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            IBM Cloud CLI
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            IBM Cloud CLI Commands Cheat Sheet
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Practical IBM Cloud CLI commands for authentication, IAM,
            resource groups, VPC, Kubernetes, Code Engine, Container
            Registry, Object Storage, databases and DevOps workflows.
          </p>
        </div>

        <IbmCommandSearch sections={commandSections} />

        <section className="space-y-10">
          {commandSections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-5 text-2xl font-bold text-white">
                {section.title}
              </h2>

              <div className="space-y-4">
                {section.commands.map((item) => (
                  <div
                    key={`${section.title}-${item.command}`}
                    className="rounded-xl border border-slate-800 bg-slate-900 p-5"
                  >
                    <code className="block break-all text-sm font-semibold text-cyan-400">
                      {item.command}
                    </code>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-xl border border-cyan-900/50 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold text-white">
            Recommended IBM Cloud CLI Workflow
          </h2>

          <pre className="mt-5 overflow-x-auto rounded-lg bg-slate-950 p-5 text-sm leading-7 text-cyan-400">
{`ibmcloud -v
ibmcloud login --apikey <api_key>
ibmcloud target -r <region>
ibmcloud target -g <resource_group>

ibmcloud plugin list

ibmcloud cr login
docker build -t <image>:<tag> .
docker push <registry>/<namespace>/<image>:<tag>

ibmcloud ce app update --name <app> --image <image>`}</pre>
        </section>
      </div>
    </main>
  );
}