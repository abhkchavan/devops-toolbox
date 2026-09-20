import type { Metadata } from "next";
import TerraformCommandSearch from "./TerraformCommandSearch";

export const metadata: Metadata = {
  title: "Terraform Commands Cheat Sheet",
  description:
    "Comprehensive Terraform commands for initialization, providers, resources, variables, state, modules, planning, deployment, import, workspaces and DevOps workflows.",
};

type Command = {
  command: string;
  description: string;
};

type CommandSection = {
  title: string;
  commands: Command[];
};

const commandSections: CommandSection[] = [
  {
    title: "Terraform Setup and Version",
    commands: [
      {
        command: "terraform version",
        description: "Display the installed Terraform version and provider information.",
      },
      {
        command: "terraform -help",
        description: "Display Terraform help and available commands.",
      },
      {
        command: "terraform <command> -help",
        description: "Display help for a specific Terraform command.",
      },
      {
        command: "terraform providers",
        description: "Display the providers required by the current configuration.",
      },
    ],
  },
  {
    title: "Initialize Terraform",
    commands: [
      {
        command: "terraform init",
        description: "Initialize the working directory and download required providers and modules.",
      },
      {
        command: "terraform init -upgrade",
        description: "Upgrade modules and providers to newer allowed versions.",
      },
      {
        command: "terraform init -reconfigure",
        description: "Reconfigure the backend without attempting to migrate existing state.",
      },
      {
        command: "terraform init -migrate-state",
        description: "Attempt to migrate existing state to a newly configured backend.",
      },
    ],
  },
  {
    title: "Format and Validate",
    commands: [
      {
        command: "terraform fmt",
        description: "Format Terraform configuration files in the current directory.",
      },
      {
        command: "terraform fmt -recursive",
        description: "Format Terraform configuration files recursively in subdirectories.",
      },
      {
        command: "terraform fmt -check",
        description: "Check whether Terraform files are correctly formatted without modifying them.",
      },
      {
        command: "terraform validate",
        description: "Validate the configuration for syntax and internal consistency.",
      },
      {
        command: "terraform validate -json",
        description: "Return validation results in JSON format.",
      },
    ],
  },
  {
    title: "Plan and Apply",
    commands: [
      {
        command: "terraform plan",
        description: "Create an execution plan showing proposed infrastructure changes.",
      },
      {
        command: "terraform plan -out=tfplan",
        description: "Save the Terraform execution plan to a file.",
      },
      {
        command: "terraform show tfplan",
        description: "Display a saved Terraform plan.",
      },
      {
        command: "terraform apply",
        description: "Create or update infrastructure according to the Terraform configuration.",
      },
      {
        command: "terraform apply tfplan",
        description: "Apply a previously saved execution plan.",
      },
      {
        command: "terraform apply -auto-approve",
        description: "Apply changes without asking for interactive approval.",
      },
      {
        command: "terraform apply -refresh-only",
        description: "Update state to reflect remote infrastructure without changing infrastructure.",
      },
    ],
  },
  {
    title: "Destroy Infrastructure",
    commands: [
      {
        command: "terraform destroy",
        description: "Destroy infrastructure managed by the current Terraform configuration.",
      },
      {
        command: "terraform destroy -auto-approve",
        description: "Destroy managed infrastructure without interactive approval.",
      },
      {
        command: "terraform plan -destroy",
        description: "Create a plan showing what would be destroyed.",
      },
    ],
  },
  {
    title: "Variables",
    commands: [
      {
        command: "terraform plan -var='region=ap-south-1'",
        description: "Pass a variable value directly when creating a plan.",
      },
      {
        command: "terraform apply -var='environment=prod'",
        description: "Pass a variable value directly during apply.",
      },
      {
        command: "terraform plan -var-file='prod.tfvars'",
        description: "Load variable values from a specific variable file.",
      },
      {
        command: "terraform apply -var-file='prod.tfvars'",
        description: "Apply infrastructure using values from a variable file.",
      },
      {
        command: "terraform console",
        description: "Open an interactive console for evaluating Terraform expressions.",
      },
    ],
  },
  {
    title: "Output Values",
    commands: [
      {
        command: "terraform output",
        description: "Display all root module output values.",
      },
      {
        command: "terraform output instance_ip",
        description: "Display a specific output value.",
      },
      {
        command: "terraform output -raw instance_ip",
        description: "Display a string output without Terraform formatting.",
      },
      {
        command: "terraform output -json",
        description: "Display output values in JSON format.",
      },
    ],
  },
  {
    title: "Terraform State",
    commands: [
      {
        command: "terraform state list",
        description: "List all resources currently tracked in Terraform state.",
      },
      {
        command: "terraform state show aws_instance.web",
        description: "Display detailed state information for a specific resource.",
      },
      {
        command: "terraform state pull",
        description: "Download the current state and print it to standard output.",
      },
      {
        command: "terraform state push terraform.tfstate",
        description: "Upload a local state file to the configured backend. Use with extreme care.",
      },
      {
        command: "terraform state mv old.name new.name",
        description: "Move a resource to a new state address without recreating it.",
      },
      {
        command: "terraform state rm aws_instance.web",
        description: "Remove a resource from Terraform state without destroying the remote object.",
      },
      {
        command: "terraform state replace-provider old new",
        description: "Replace provider references in Terraform state.",
      },
    ],
  },
  {
    title: "State Locking and Refresh",
    commands: [
      {
        command: "terraform plan -refresh-only",
        description: "Create a plan that updates state to match remote infrastructure without changing resources.",
      },
      {
        command: "terraform apply -refresh-only",
        description: "Apply refresh-only changes to synchronize Terraform state.",
      },
      {
        command: "terraform force-unlock <LOCK_ID>",
        description: "Remove a state lock that is confirmed to be stale. Use carefully.",
      },
    ],
  },
  {
    title: "Resources",
    commands: [
      {
        command: "terraform state list",
        description: "List resources tracked in the current state.",
      },
      {
        command: "terraform state show <resource>",
        description: "Inspect attributes stored for a specific resource.",
      },
      {
        command: "terraform plan -target=<resource>",
        description: "Create a plan targeting a specific resource. Use only for exceptional troubleshooting cases.",
      },
      {
        command: "terraform apply -target=<resource>",
        description: "Apply changes targeting a specific resource. Avoid as a normal workflow.",
      },
    ],
  },
  {
    title: "Import Existing Infrastructure",
    commands: [
      {
        command: "terraform import aws_instance.web i-1234567890",
        description: "Import an existing infrastructure object into Terraform state.",
      },
      {
        command: "terraform plan",
        description: "Review the configuration and imported state before making further changes.",
      },
    ],
  },
  {
    title: "Modules",
    commands: [
      {
        command: "terraform get",
        description: "Download modules referenced by the configuration.",
      },
      {
        command: "terraform init",
        description: "Initialize the configuration and download required modules.",
      },
      {
        command: "terraform init -upgrade",
        description: "Upgrade module dependencies within the configured constraints.",
      },
      {
        command: "terraform providers",
        description: "Show provider requirements for the root module and child modules.",
      },
    ],
  },
  {
    title: "Workspaces",
    commands: [
      {
        command: "terraform workspace list",
        description: "List available Terraform workspaces.",
      },
      {
        command: "terraform workspace show",
        description: "Display the currently selected workspace.",
      },
      {
        command: "terraform workspace new dev",
        description: "Create and select a new workspace.",
      },
      {
        command: "terraform workspace select dev",
        description: "Switch to an existing workspace.",
      },
      {
        command: "terraform workspace delete dev",
        description: "Delete an existing workspace when it is safe to do so.",
      },
    ],
  },
  {
    title: "Providers and Dependencies",
    commands: [
      {
        command: "terraform providers",
        description: "Show provider requirements for the configuration.",
      },
      {
        command: "terraform providers schema",
        description: "Display provider and resource schema information.",
      },
      {
        command: "terraform providers lock",
        description: "Generate or update provider dependency lock information.",
      },
      {
        command: "terraform init",
        description: "Resolve and install required provider plugins.",
      },
    ],
  },
  {
    title: "Graph and Inspection",
    commands: [
      {
        command: "terraform graph",
        description: "Generate a dependency graph of Terraform resources.",
      },
      {
        command: "terraform show",
        description: "Display the current state or a saved plan in human-readable form.",
      },
      {
        command: "terraform show -json",
        description: "Display state or plan information as JSON.",
      },
    ],
  },
  {
    title: "Terraform Cloud and Automation",
    commands: [
      {
        command: "terraform login",
        description: "Authenticate Terraform CLI with a Terraform-compatible service.",
      },
      {
        command: "terraform logout",
        description: "Remove stored credentials for a Terraform-compatible service.",
      },
      {
        command: "terraform init",
        description: "Initialize Terraform in a CI/CD environment before planning or applying.",
      },
      {
        command: "terraform plan -input=false",
        description: "Run planning without prompting for interactive input, useful in automation.",
      },
      {
        command: "terraform apply -input=false",
        description: "Run apply without interactive variable input when values are supplied through automation.",
      },
    ],
  },
  {
    title: "CI/CD Terraform Workflow",
    commands: [
      {
        command: "terraform fmt -check -recursive",
        description: "Check formatting across the Terraform project in CI.",
      },
      {
        command: "terraform init -input=false",
        description: "Initialize Terraform non-interactively in CI/CD.",
      },
      {
        command: "terraform validate",
        description: "Validate Terraform configuration before creating an infrastructure plan.",
      },
      {
        command: "terraform plan -out=tfplan",
        description: "Generate a saved infrastructure plan for review or later application.",
      },
      {
        command: "terraform apply -input=false tfplan",
        description: "Apply a previously reviewed Terraform plan in automation.",
      },
    ],
  },
  {
    title: "Terraform Troubleshooting",
    commands: [
      {
        command: "terraform version",
        description: "Verify the installed Terraform version when troubleshooting CLI behavior.",
      },
      {
        command: "terraform providers",
        description: "Inspect provider dependencies when provider-related errors occur.",
      },
      {
        command: "terraform validate",
        description: "Check the configuration for syntax and configuration errors.",
      },
      {
        command: "terraform plan",
        description: "Inspect the proposed changes and identify configuration or state issues.",
      },
      {
        command: "terraform state list",
        description: "Check which resources Terraform currently manages.",
      },
      {
        command: "terraform state show <resource>",
        description: "Inspect detailed state for a problematic resource.",
      },
      {
        command: "terraform refresh",
        description: "Legacy state refresh command; prefer refresh-only planning and applying in modern workflows.",
      },
    ],
  },
  {
    title: "DevOps Terraform Workflow",
    commands: [
      {
        command: "terraform fmt -recursive",
        description: "Format Terraform files before committing infrastructure changes.",
      },
      {
        command: "terraform init",
        description: "Initialize providers, modules and backend configuration.",
      },
      {
        command: "terraform validate",
        description: "Validate Terraform configuration.",
      },
      {
        command: "terraform plan",
        description: "Review the infrastructure changes before applying them.",
      },
      {
        command: "terraform apply",
        description: "Apply the reviewed infrastructure changes.",
      },
      {
        command: "terraform output",
        description: "Display important infrastructure outputs after deployment.",
      },
    ],
  },
];

export default function TerraformCommands() {
  const totalCommands = commandSections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <a
          href="/"
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Back to DevOpsCommands
        </a>

        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Terraform
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Terraform Commands Cheat Sheet
          </h1>

          <p className="mt-4 max-w-3xl text-slate-400">
            Practical Terraform commands for infrastructure as code,
            providers, resources, state, modules, workspaces, planning,
            deployment, CI/CD and troubleshooting.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
              {commandSections.length} categories
            </span>

            <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
              {totalCommands}+ commands
            </span>
          </div>
        </header>

        <TerraformCommandSearch sections={commandSections} />

        <section className="mt-12 rounded-xl border border-cyan-900 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">
            Recommended DevOps Terraform Workflow
          </h2>

          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
{`# Format
terraform fmt -recursive

# Initialize
terraform init

# Validate
terraform validate

# Review changes
terraform plan

# Apply
terraform apply

# Check outputs
terraform output

# Inspect state
terraform state list`}
          </pre>
        </section>

        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">DevOpsCommands Tip</h2>

          <p className="mt-3 leading-7 text-slate-400">
            Always review terraform plan before applying infrastructure
            changes. Protect Terraform state with an appropriate remote
            backend and state locking mechanism, especially when working
            with teams and CI/CD pipelines.
          </p>
        </section>

        <footer className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          Be especially careful with terraform destroy, state rm,
          force-unlock, targeted operations and commands that modify
          infrastructure state.
        </footer>
      </div>
    </main>
  );
}