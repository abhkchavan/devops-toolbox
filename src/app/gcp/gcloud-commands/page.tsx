import GcloudCommandSearch from "./GcloudCommandSearch";

export const metadata = {
  title: "Google Cloud CLI Commands Cheat Sheet | DevOpsCommands",
  description:
    "Practical Google Cloud CLI gcloud commands for Compute Engine, Cloud Storage, GKE, Cloud Run, Artifact Registry, IAM, networking, Cloud SQL, monitoring and DevOps workflows.",
};

const commandSections = [
  {
    title: "Google Cloud CLI Setup and Version",
    commands: [
      {
        command: "gcloud version",
        description: "Display the installed Google Cloud CLI version and components.",
      },
      {
        command: "gcloud help",
        description: "Search Google Cloud CLI help documentation.",
      },
      {
        command: "gcloud topic configurations",
        description: "Learn about gcloud configurations and configuration management.",
      },
      {
        command: "gcloud components list",
        description: "List installed and available Google Cloud CLI components.",
      },
      {
        command: "gcloud components update",
        description: "Update installed Google Cloud CLI components.",
      },
    ],
  },

  {
    title: "Google Cloud Authentication",
    commands: [
      {
        command: "gcloud init",
        description: "Initialize gcloud, authenticate and configure a Google Cloud project.",
      },
      {
        command: "gcloud auth login",
        description: "Authenticate the Google Cloud CLI with a Google account.",
      },
      {
        command: "gcloud auth list",
        description: "List authenticated Google Cloud accounts.",
      },
      {
        command: "gcloud auth revoke <ACCOUNT>",
        description: "Revoke credentials for a Google Cloud account.",
      },
      {
        command: "gcloud auth application-default login",
        description: "Configure Application Default Credentials for local development.",
      },
    ],
  },

  {
    title: "Google Cloud Projects",
    commands: [
      {
        command: "gcloud projects list",
        description: "List accessible Google Cloud projects.",
      },
      {
        command: "gcloud config get-value project",
        description: "Display the currently configured Google Cloud project.",
      },
      {
        command: "gcloud config set project <PROJECT_ID>",
        description: "Set the active Google Cloud project.",
      },
      {
        command: "gcloud projects describe <PROJECT_ID>",
        description: "Display project metadata.",
      },
      {
        command: "gcloud projects create <PROJECT_ID>",
        description: "Create a new Google Cloud project.",
      },
    ],
  },

  {
    title: "Google Cloud Configurations",
    commands: [
      {
        command: "gcloud config list",
        description: "Display active gcloud configuration properties.",
      },
      {
        command: "gcloud config configurations list",
        description: "List available gcloud configurations.",
      },
      {
        command: "gcloud config configurations create <NAME>",
        description: "Create a separate gcloud configuration.",
      },
      {
        command: "gcloud config configurations activate <NAME>",
        description: "Activate a gcloud configuration.",
      },
      {
        command: "gcloud config set compute/region <REGION>",
        description: "Set the default Compute Engine region.",
      },
      {
        command: "gcloud config set compute/zone <ZONE>",
        description: "Set the default Compute Engine zone.",
      },
    ],
  },

  {
    title: "Compute Engine Virtual Machines",
    commands: [
      {
        command: "gcloud compute instances list",
        description: "List Compute Engine VM instances.",
      },
      {
        command: "gcloud compute instances describe <INSTANCE> --zone=<ZONE>",
        description: "Display details about a Compute Engine instance.",
      },
      {
        command: "gcloud compute instances create <INSTANCE> --zone=<ZONE>",
        description: "Create a Compute Engine VM.",
      },
      {
        command:
          "gcloud compute instances create <INSTANCE> --zone=<ZONE> --machine-type=<MACHINE_TYPE>",
        description: "Create a VM using a specific machine type.",
      },
      {
        command: "gcloud compute instances start <INSTANCE> --zone=<ZONE>",
        description: "Start a stopped VM.",
      },
      {
        command: "gcloud compute instances stop <INSTANCE> --zone=<ZONE>",
        description: "Stop a running VM.",
      },
      {
        command: "gcloud compute instances restart <INSTANCE> --zone=<ZONE>",
        description: "Restart a VM instance.",
      },
      {
        command: "gcloud compute instances delete <INSTANCE> --zone=<ZONE>",
        description: "Delete a Compute Engine VM.",
      },
      {
        command: "gcloud compute ssh <INSTANCE> --zone=<ZONE>",
        description: "Connect to a Compute Engine VM over SSH.",
      },
      {
        command: "gcloud compute scp <LOCAL_FILE> <INSTANCE>:<REMOTE_PATH> --zone=<ZONE>",
        description: "Copy files to a Compute Engine VM.",
      },
    ],
  },

  {
    title: "Compute Engine Disks and Images",
    commands: [
      {
        command: "gcloud compute disks list",
        description: "List persistent disks.",
      },
      {
        command: "gcloud compute disks describe <DISK> --zone=<ZONE>",
        description: "Display persistent disk details.",
      },
      {
        command: "gcloud compute disks create <DISK> --size=<SIZE>",
        description: "Create a persistent disk.",
      },
      {
        command: "gcloud compute disks delete <DISK> --zone=<ZONE>",
        description: "Delete a persistent disk.",
      },
      {
        command: "gcloud compute images list",
        description: "List available Compute Engine images.",
      },
      {
        command: "gcloud compute images describe <IMAGE>",
        description: "Display image metadata.",
      },
      {
        command: "gcloud compute snapshots list",
        description: "List disk snapshots.",
      },
      {
        command: "gcloud compute snapshots create <SNAPSHOT> --source-disk=<DISK>",
        description: "Create a snapshot from a persistent disk.",
      },
    ],
  },

  {
    title: "Google Cloud Storage",
    commands: [
      {
        command: "gcloud storage buckets list",
        description: "List Cloud Storage buckets.",
      },
      {
        command: "gcloud storage buckets create gs://<BUCKET>",
        description: "Create a Cloud Storage bucket.",
      },
      {
        command: "gcloud storage buckets describe gs://<BUCKET>",
        description: "Display Cloud Storage bucket metadata.",
      },
      {
        command: "gcloud storage buckets delete gs://<BUCKET>",
        description: "Delete a Cloud Storage bucket.",
      },
      {
        command: "gcloud storage ls",
        description: "List Cloud Storage buckets and objects.",
      },
      {
        command: "gcloud storage cp <FILE> gs://<BUCKET>/",
        description: "Upload a file to Cloud Storage.",
      },
      {
        command: "gcloud storage cp gs://<BUCKET>/<OBJECT> .",
        description: "Download an object from Cloud Storage.",
      },
      {
        command: "gcloud storage rsync <LOCAL_DIR> gs://<BUCKET>/<PATH>",
        description: "Synchronize a local directory with Cloud Storage.",
      },
      {
        command: "gcloud storage rm gs://<BUCKET>/<OBJECT>",
        description: "Delete a Cloud Storage object.",
      },
    ],
  },

  {
    title: "VPC Networks",
    commands: [
      {
        command: "gcloud compute networks list",
        description: "List VPC networks.",
      },
      {
        command: "gcloud compute networks describe <NETWORK>",
        description: "Display VPC network details.",
      },
      {
        command: "gcloud compute networks create <NETWORK>",
        description: "Create a custom VPC network.",
      },
      {
        command: "gcloud compute networks delete <NETWORK>",
        description: "Delete a VPC network.",
      },
      {
        command: "gcloud compute networks subnets list",
        description: "List VPC subnets.",
      },
      {
        command:
          "gcloud compute networks subnets create <SUBNET> --network=<NETWORK> --region=<REGION> --range=<CIDR>",
        description: "Create a subnet in a VPC network.",
      },
    ],
  },

  {
    title: "Firewall Rules",
    commands: [
      {
        command: "gcloud compute firewall-rules list",
        description: "List VPC firewall rules.",
      },
      {
        command: "gcloud compute firewall-rules describe <RULE>",
        description: "Display firewall rule details.",
      },
      {
        command:
          "gcloud compute firewall-rules create <RULE> --network=<NETWORK> --allow=tcp:80",
        description: "Create a firewall rule allowing HTTP traffic.",
      },
      {
        command: "gcloud compute firewall-rules delete <RULE>",
        description: "Delete a firewall rule.",
      },
    ],
  },

  {
    title: "Google Kubernetes Engine",
    commands: [
      {
        command: "gcloud container clusters list",
        description: "List GKE clusters.",
      },
      {
        command:
          "gcloud container clusters create <CLUSTER> --zone=<ZONE>",
        description: "Create a GKE cluster.",
      },
      {
        command:
          "gcloud container clusters create-auto <CLUSTER> --region=<REGION>",
        description: "Create an Autopilot GKE cluster.",
      },
      {
        command:
          "gcloud container clusters describe <CLUSTER> --zone=<ZONE>",
        description: "Display GKE cluster details.",
      },
      {
        command:
          "gcloud container clusters get-credentials <CLUSTER> --zone=<ZONE>",
        description: "Configure kubectl credentials for a GKE cluster.",
      },
      {
        command:
          "gcloud container clusters resize <CLUSTER> --num-nodes=<COUNT> --zone=<ZONE>",
        description: "Resize a GKE cluster.",
      },
      {
        command:
          "gcloud container clusters delete <CLUSTER> --zone=<ZONE>",
        description: "Delete a GKE cluster.",
      },
    ],
  },

  {
    title: "Google Artifact Registry",
    commands: [
      {
        command: "gcloud artifacts repositories list",
        description: "List Artifact Registry repositories.",
      },
      {
        command:
          "gcloud artifacts repositories create <REPOSITORY> --repository-format=docker --location=<REGION>",
        description: "Create a Docker Artifact Registry repository.",
      },
      {
        command:
          "gcloud artifacts repositories describe <REPOSITORY> --location=<REGION>",
        description: "Display repository details.",
      },
      {
        command:
          "gcloud artifacts repositories delete <REPOSITORY> --location=<REGION>",
        description: "Delete an Artifact Registry repository.",
      },
      {
        command:
          "gcloud auth configure-docker <REGION>-docker.pkg.dev",
        description: "Configure Docker authentication for Artifact Registry.",
      },
    ],
  },

  {
    title: "Cloud Run",
    commands: [
      {
        command: "gcloud run services list",
        description: "List Cloud Run services.",
      },
      {
        command:
          "gcloud run deploy <SERVICE> --image=<IMAGE>",
        description: "Deploy a container image to Cloud Run.",
      },
      {
        command: "gcloud run services describe <SERVICE> --region=<REGION>",
        description: "Display Cloud Run service details.",
      },
      {
        command:
          "gcloud run services update <SERVICE> --region=<REGION>",
        description: "Update Cloud Run service configuration.",
      },
      {
        command: "gcloud run services delete <SERVICE> --region=<REGION>",
        description: "Delete a Cloud Run service.",
      },
    ],
  },

  {
    title: "Cloud Functions",
    commands: [
      {
        command: "gcloud functions list",
        description: "List Cloud Functions.",
      },
      {
        command:
          "gcloud functions deploy <FUNCTION> --runtime=<RUNTIME> --trigger-http",
        description: "Deploy an HTTP-triggered Cloud Function.",
      },
      {
        command: "gcloud functions describe <FUNCTION>",
        description: "Display Cloud Function details.",
      },
      {
        command: "gcloud functions logs read <FUNCTION>",
        description: "Read Cloud Function logs.",
      },
      {
        command: "gcloud functions delete <FUNCTION>",
        description: "Delete a Cloud Function.",
      },
    ],
  },

  {
    title: "Cloud SQL",
    commands: [
      {
        command: "gcloud sql instances list",
        description: "List Cloud SQL instances.",
      },
      {
        command: "gcloud sql instances describe <INSTANCE>",
        description: "Display Cloud SQL instance details.",
      },
      {
        command:
          "gcloud sql instances create <INSTANCE> --database-version=POSTGRES_16 --tier=<TIER>",
        description: "Create a Cloud SQL PostgreSQL instance.",
      },
      {
        command: "gcloud sql databases list --instance=<INSTANCE>",
        description: "List databases in a Cloud SQL instance.",
      },
      {
        command:
          "gcloud sql databases create <DATABASE> --instance=<INSTANCE>",
        description: "Create a Cloud SQL database.",
      },
      {
        command: "gcloud sql instances restart <INSTANCE>",
        description: "Restart a Cloud SQL instance.",
      },
      {
        command: "gcloud sql instances delete <INSTANCE>",
        description: "Delete a Cloud SQL instance.",
      },
    ],
  },

  {
    title: "IAM and Service Accounts",
    commands: [
      {
        command: "gcloud iam service-accounts list",
        description: "List service accounts.",
      },
      {
        command:
          "gcloud iam service-accounts create <ACCOUNT> --display-name=<DISPLAY_NAME>",
        description: "Create a service account.",
      },
      {
        command:
          "gcloud iam service-accounts keys create <FILE> --iam-account=<EMAIL>",
        description: "Create a service account key file.",
      },
      {
        command:
          "gcloud iam service-accounts delete <EMAIL>",
        description: "Delete a service account.",
      },
      {
        command:
          "gcloud projects get-iam-policy <PROJECT_ID>",
        description: "Display IAM policy for a project.",
      },
      {
        command:
          "gcloud projects add-iam-policy-binding <PROJECT_ID> --member=<MEMBER> --role=<ROLE>",
        description: "Grant an IAM role to a principal at project level.",
      },
      {
        command:
          "gcloud projects remove-iam-policy-binding <PROJECT_ID> --member=<MEMBER> --role=<ROLE>",
        description: "Remove an IAM role binding.",
      },
    ],
  },

  {
    title: "Cloud DNS",
    commands: [
      {
        command: "gcloud dns managed-zones list",
        description: "List Cloud DNS managed zones.",
      },
      {
        command:
          "gcloud dns managed-zones create <ZONE> --dns-name=<DOMAIN> --description=<DESCRIPTION>",
        description: "Create a managed DNS zone.",
      },
      {
        command: "gcloud dns record-sets list --zone=<ZONE>",
        description: "List DNS records in a managed zone.",
      },
      {
        command: "gcloud dns managed-zones delete <ZONE>",
        description: "Delete a DNS managed zone.",
      },
    ],
  },

  {
    title: "Cloud Monitoring",
    commands: [
      {
        command: "gcloud monitoring policies list",
        description: "List Cloud Monitoring alert policies.",
      },
      {
        command: "gcloud monitoring policies describe <POLICY>",
        description: "Display an alert policy.",
      },
    ],
  },

  {
    title: "Cloud Logging",
    commands: [
      {
        command: "gcloud logging logs list",
        description: "List available logs.",
      },
      {
        command: "gcloud logging read '<FILTER>'",
        description: "Read log entries matching a filter.",
      },
      {
        command: "gcloud logging read '<FILTER>' --limit=50",
        description: "Read a limited number of matching log entries.",
      },
      {
        command: "gcloud logging sinks list",
        description: "List configured logging sinks.",
      },
    ],
  },

  {
    title: "Secret Manager",
    commands: [
      {
        command: "gcloud secrets list",
        description: "List Secret Manager secrets.",
      },
      {
        command: "gcloud secrets create <SECRET> --replication-policy=automatic",
        description: "Create a Secret Manager secret.",
      },
      {
        command:
          "gcloud secrets versions add <SECRET> --data-file=<FILE>",
        description: "Add a new secret version from a file.",
      },
      {
        command:
          "gcloud secrets versions access latest --secret=<SECRET>",
        description: "Read the latest secret version.",
      },
      {
        command: "gcloud secrets delete <SECRET>",
        description: "Delete a secret.",
      },
    ],
  },

  {
    title: "BigQuery",
    commands: [
      {
        command: "bq ls",
        description: "List BigQuery datasets.",
      },
      {
        command: "bq ls <PROJECT_ID>:<DATASET>",
        description: "List tables in a BigQuery dataset.",
      },
      {
        command: "bq show <PROJECT_ID>:<DATASET>",
        description: "Display BigQuery dataset information.",
      },
      {
        command: "bq query --use_legacy_sql=false '<SQL>'",
        description: "Run a standard SQL query using the bq CLI.",
      },
    ],
  },

  {
    title: "Google Cloud APIs",
    commands: [
      {
        command: "gcloud services list --enabled",
        description: "List enabled Google Cloud APIs and services.",
      },
      {
        command: "gcloud services list --available",
        description: "List APIs and services available to enable.",
      },
      {
        command:
          "gcloud services enable <SERVICE>.googleapis.com",
        description: "Enable a Google Cloud API.",
      },
      {
        command:
          "gcloud services disable <SERVICE>.googleapis.com",
        description: "Disable a Google Cloud API.",
      },
    ],
  },

  {
    title: "Google Cloud Output and Filtering",
    commands: [
      {
        command: "gcloud compute instances list --format=json",
        description: "Return command output as JSON.",
      },
      {
        command: "gcloud compute instances list --format='table(name,zone)'",
        description: "Display selected fields in table format.",
      },
      {
        command:
          "gcloud compute instances list --filter='status=RUNNING'",
        description: "Filter resources by status.",
      },
      {
        command:
          "gcloud compute instances list --sort-by=name",
        description: "Sort command results by resource name.",
      },
      {
        command:
          "gcloud compute instances list --limit=10",
        description: "Limit the number of returned resources.",
      },
      {
        command: "gcloud <COMMAND> --quiet",
        description: "Disable interactive prompts for automation.",
      },
    ],
  },

  {
    title: "Google Cloud CLI Troubleshooting",
    commands: [
      {
        command: "gcloud info",
        description: "Display gcloud environment and installation information.",
      },
      {
        command: "gcloud auth list",
        description: "Verify authenticated accounts.",
      },
      {
        command: "gcloud config list",
        description: "Check active configuration and project settings.",
      },
      {
        command: "gcloud config get-value project",
        description: "Verify the active Google Cloud project.",
      },
      {
        command: "gcloud services list --enabled",
        description: "Check which APIs are enabled.",
      },
      {
        command: "gcloud <COMMAND> --verbosity=debug",
        description: "Enable detailed debugging output.",
      },
    ],
  },

  {
    title: "CI/CD Google Cloud Workflow",
    commands: [
      {
        command: "gcloud auth activate-service-account --key-file=<KEY_FILE>",
        description: "Authenticate CI/CD automation with a service account key.",
      },
      {
        command: "gcloud config set project <PROJECT_ID>",
        description: "Set the target Google Cloud project for CI/CD.",
      },
      {
        command:
          "gcloud auth configure-docker <REGION>-docker.pkg.dev",
        description: "Configure Docker authentication for Artifact Registry.",
      },
      {
        command:
          "docker build -t <REGION>-docker.pkg.dev/<PROJECT_ID>/<REPOSITORY>/myapp:$BUILD_NUMBER .",
        description: "Build a versioned Docker image for Artifact Registry.",
      },
      {
        command:
          "docker push <REGION>-docker.pkg.dev/<PROJECT_ID>/<REPOSITORY>/myapp:$BUILD_NUMBER",
        description: "Push the image to Artifact Registry.",
      },
      {
        command:
          "gcloud run deploy <SERVICE> --image=<IMAGE> --region=<REGION>",
        description: "Deploy the image to Cloud Run.",
      },
      {
        command:
          "gcloud container clusters get-credentials <CLUSTER> --zone=<ZONE>",
        description: "Load GKE credentials for Kubernetes deployment.",
      },
      {
        command: "kubectl apply -f deployment.yaml",
        description: "Deploy Kubernetes resources to GKE.",
      },
    ],
  },

  {
    title: "Useful Google Cloud DevOps Commands",
    commands: [
      {
        command: "gcloud cheat-sheet",
        description: "Display the built-in gcloud cheat sheet.",
      },
      {
        command: "gcloud topic filters",
        description: "Learn how gcloud filtering works.",
      },
      {
        command: "gcloud topic formats",
        description: "Learn about gcloud output formatting.",
      },
      {
        command: "gcloud topic command-conventions",
        description: "Learn standard gcloud command conventions.",
      },
      {
        command: "gcloud <COMMAND> --help",
        description: "Display detailed help for a specific gcloud command.",
      },
    ],
  },
];

export default function GcloudCommandsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Google Cloud • DevOps • SRE
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Google Cloud CLI Commands Cheat Sheet
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Practical gcloud commands for Compute Engine, Cloud Storage, GKE,
            Artifact Registry, Cloud Run, Cloud SQL, IAM, networking, logging,
            monitoring and CI/CD automation.
          </p>
        </div>

        <GcloudCommandSearch sections={commandSections} />

        <div className="space-y-12">
          {commandSections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-5 text-2xl font-bold text-white">
                {section.title}
              </h2>

              <div className="overflow-hidden rounded-xl border border-slate-800">
                <div className="divide-y divide-slate-800">
                  {section.commands.map((item) => (
                    <div
                      key={`${section.title}-${item.command}`}
                      className="bg-slate-900 p-5"
                    >
                      <code className="block break-all text-sm font-semibold text-cyan-400">
                        {item.command}
                      </code>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-cyan-900 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Recommended Google Cloud DevOps Workflow
          </h2>

          <div className="mt-5 space-y-3">
            <code className="block break-all text-sm text-cyan-400">
              gcloud auth login
            </code>

            <code className="block break-all text-sm text-cyan-400">
              gcloud config set project &lt;PROJECT_ID&gt;
            </code>

            <code className="block break-all text-sm text-cyan-400">
              gcloud auth configure-docker &lt;REGION&gt;-docker.pkg.dev
            </code>

            <code className="block break-all text-sm text-cyan-400">
              docker build -t &lt;REGION&gt;-docker.pkg.dev/&lt;PROJECT_ID&gt;/&lt;REPOSITORY&gt;/myapp:$BUILD_NUMBER .
            </code>

            <code className="block break-all text-sm text-cyan-400">
              docker push &lt;REGION&gt;-docker.pkg.dev/&lt;PROJECT_ID&gt;/&lt;REPOSITORY&gt;/myapp:$BUILD_NUMBER
            </code>

            <code className="block break-all text-sm text-cyan-400">
              gcloud run deploy &lt;SERVICE&gt; --image=&lt;IMAGE&gt; --region=&lt;REGION&gt;
            </code>

            <code className="block break-all text-sm text-cyan-400">
              gcloud container clusters get-credentials &lt;CLUSTER&gt; --zone=&lt;ZONE&gt;
            </code>

            <code className="block break-all text-sm text-cyan-400">
              kubectl apply -f deployment.yaml
            </code>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">Quick Troubleshooting Workflow</h2>

          <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-400">
            <li>Check the authenticated account with gcloud auth list.</li>
            <li>Check the active project with gcloud config get-value project.</li>
            <li>Verify enabled APIs with gcloud services list --enabled.</li>
            <li>Inspect the target resource with the appropriate describe command.</li>
            <li>Check logs using gcloud logging read.</li>
            <li>Use --verbosity=debug when detailed CLI diagnostics are required.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}