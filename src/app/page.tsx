"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const query = search.trim().toLowerCase();

    if (!query) return;

    const routes: Record<string, string> = {
      kubernetes: "/kubernetes/kubectl-commands",
      kubectl: "/kubernetes/kubectl-commands",
      linux: "/linux/linux-commands",
      docker: "/docker/docker-commands",
      ansible: "/ansible/ansible-commands",
      git: "/git/git-commands",
      terraform: "/terraform/terraform-commands",
      jenkins: "/jenkins/jenkins-commands",
      aws: "/aws/aws-cli",
      "aws cli": "/aws/aws-cli",
      azure: "/azure/azure-cli",
      "azure cli": "/azure/azure-cli",
      gcp: "/gcp/gcloud-commands",
      gcloud: "/gcp/gcloud-commands",
      "google cloud": "/gcp/gcloud-commands",
      "google cloud cli": "/gcp/gcloud-commands",
      oci: "/oci/oci-cli",
      "oci cli": "/oci/oci-cli",
      "oracle cloud": "/oci/oci-cli",
      "oracle cloud infrastructure": "/oci/oci-cli",
      ibm: "/ibm/ibm-cli",
      "ibm cloud": "/ibm/ibm-cli",
      "ibm cloud cli": "/ibm/ibm-cli",
      ibmcloud: "/ibm/ibm-cli",
      sre: "/sre/sre-troubleshooting",
      yaml: "/tools/yaml-validator",
      json: "/tools/json-formatter",
      cron: "/tools/cron-generator",
      cidr: "/tools/cidr-calculator",
    };

    const route = Object.entries(routes).find(([keyword]) =>
      query.includes(keyword),
    );

    if (route) {
      window.location.href = route[1];
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold">
            DevOps<span className="text-cyan-400">Toolbox</span>
          </h1>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#guides" className="hover:text-cyan-400">
              Guides
            </a>

            <a href="#tools" className="hover:text-cyan-400">
              Tools
            </a>

            <a href="#topics" className="hover:text-cyan-400">
              Topics
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          DevOps • SRE • Cloud
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Practical DevOps tools, commands and guides.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Learn Linux, Docker, Kubernetes, Ansible, Git, Terraform, Jenkins,
          AWS CLI, Azure CLI, Google Cloud CLI, OCI CLI, IBM Cloud CLI and SRE
          through practical examples, troubleshooting guides and free tools.
        </p>

        {/* Search */}
        <div className="mx-auto mt-10 flex max-w-2xl">
          <input
            type="text"
            placeholder="Search Kubernetes, Linux, Docker, Git, Terraform, Jenkins, AWS, Azure, GCP, OCI, IBM..."
            className="w-full rounded-l-lg border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none focus:border-cyan-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button
            type="button"
            onClick={handleSearch}
            className="rounded-r-lg bg-cyan-500 px-6 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Search
          </button>
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="mb-8 text-2xl font-bold">Explore Topics</h3>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "Linux",
              "Commands, troubleshooting and system administration.",
            ],
            [
              "Docker",
              "Containers, images, networking and troubleshooting.",
            ],
            [
              "Kubernetes",
              "kubectl commands, deployments and production issues.",
            ],
            [
              "Ansible",
              "Automation, playbooks, inventory and configuration.",
            ],
            [
              "Git",
              "Branches, commits, merge, rebase, stash and troubleshooting.",
            ],
            [
              "Terraform",
              "Infrastructure as code, state, modules and deployments.",
            ],
            [
              "Jenkins",
              "Jobs, builds, pipelines, agents and CI/CD automation.",
            ],
            [
              "AWS CLI",
              "AWS cloud administration, EC2, S3, IAM, VPC and DevOps workflows.",
            ],
            [
              "Azure CLI",
              "Azure cloud administration, VMs, Storage, AKS, ACR, networking and DevOps workflows.",
            ],
            [
              "Google Cloud CLI",
              "Google Cloud administration, Compute Engine, Storage, GKE, Cloud Run, IAM and DevOps workflows.",
            ],
            [
              "Oracle Cloud CLI",
              "Oracle Cloud Infrastructure administration, Compute, Object Storage, VCN, OKE, IAM, Vault and DevOps workflows.",
            ],
            [
              "IBM Cloud CLI",
              "IBM Cloud administration, IAM, VPC, Kubernetes, Code Engine, Container Registry, Object Storage and DevOps workflows.",
            ],
            [
              "SRE",
              "SLIs, SLOs, monitoring, incidents and reliability.",
            ],
            [
              "AutoSys",
              "Jobs, dependencies, scheduling and troubleshooting.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500"
            >
              <h4 className="text-xl font-semibold">{title}</h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section id="guides" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="mb-8 text-2xl font-bold">DevOps Command Guides</h3>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Kubernetes */}
          <a
            href="/kubernetes/kubectl-commands"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Kubernetes
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              kubectl Commands Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Practical kubectl commands for pods, deployments, services and
              troubleshooting.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide →
            </p>
          </a>

          {/* Linux */}
          <a
            href="/linux/linux-commands"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Linux
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              Linux Commands Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Essential Linux commands for system administration and
              troubleshooting.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide →
            </p>
          </a>

          {/* Docker */}
          <a
            href="/docker/docker-commands"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Docker
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              Docker Commands Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Essential Docker commands for containers, images, logs and
              troubleshooting.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide →
            </p>
          </a>

          {/* Ansible */}
          <a
            href="/ansible/ansible-commands"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Ansible
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              Ansible Commands Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Practical commands for inventory, connectivity, playbooks and
              troubleshooting.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide →
            </p>
          </a>

          {/* Git */}
          <a
            href="/git/git-commands"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Git
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              Git Commands Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Branches, commits, merge, rebase, stash, remotes, tags and Git
              troubleshooting.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide →
            </p>
          </a>

          {/* Terraform */}
          <a
            href="/terraform/terraform-commands"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Terraform
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              Terraform Commands Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Infrastructure as code, providers, state, modules, workspaces,
              planning and deployment.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide →
            </p>
          </a>

          {/* Jenkins */}
          <a
            href="/jenkins/jenkins-commands"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Jenkins
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              Jenkins Commands Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Jobs, builds, pipelines, agents, plugins, credentials, logs and
              CI/CD troubleshooting.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide →
            </p>
          </a>

          {/* AWS */}
          <a
            href="/aws/aws-cli"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              AWS CLI
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              AWS CLI Commands Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              AWS CLI commands for EC2, S3, IAM, VPC, ECR, ECS, EKS, Lambda,
              RDS, CloudWatch and DevOps workflows.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide →
            </p>
          </a>

          {/* Azure */}
          <a
            href="/azure/azure-cli"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Azure CLI
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              Azure CLI Commands Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Azure CLI commands for VMs, Storage, VNet, NSG, ACR, AKS,
              App Service, Functions, SQL, Monitor, Key Vault and DevOps.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide →
            </p>
          </a>

          {/* Google Cloud */}
          <a
            href="/gcp/gcloud-commands"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Google Cloud CLI
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              Google Cloud CLI Commands Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              gcloud commands for Compute Engine, Cloud Storage, GKE,
              Artifact Registry, Cloud Run, Cloud SQL, IAM, networking,
              logging and DevOps workflows.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide →
            </p>
          </a>

          {/* Oracle Cloud */}
          <a
            href="/oci/oci-cli"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Oracle Cloud CLI
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              OCI CLI Commands Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              OCI CLI commands for Compute, Object Storage, VCN, OKE,
              Container Registry, IAM, Vault, Load Balancer, databases,
              monitoring and DevOps workflows.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide →
            </p>
          </a>

          {/* IBM Cloud */}
          <a
            href="/ibm/ibm-cli"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              IBM Cloud CLI
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              IBM Cloud CLI Commands Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              IBM Cloud CLI commands for IAM, VPC, Kubernetes, Code Engine,
              Container Registry, Object Storage, Compute, databases and
              DevOps workflows.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide →
            </p>
          </a>

          {/* SRE */}
          <a
            href="/sre/sre-troubleshooting"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              SRE
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              SRE Server Troubleshooting Guide
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              A practical workflow for CPU, memory, disk, processes, services,
              logs and network problems.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide →
            </p>
          </a>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="mb-8 text-2xl font-bold">Free DevOps Tools</h3>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* YAML */}
          <a
            href="/tools/yaml-validator"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <h4 className="font-semibold">YAML Validator</h4>

            <p className="mt-2 text-sm text-slate-400">
              Validate YAML syntax instantly.
            </p>

            <p className="mt-4 text-sm font-semibold text-cyan-400">
              Open tool →
            </p>
          </a>

          {/* JSON */}
          <a
            href="/tools/json-formatter"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <h4 className="font-semibold">JSON Formatter</h4>

            <p className="mt-2 text-sm text-slate-400">
              Format, validate and minify JSON instantly.
            </p>

            <p className="mt-4 text-sm font-semibold text-cyan-400">
              Open tool →
            </p>
          </a>

          {/* Cron */}
          <a
            href="/tools/cron-generator"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <h4 className="font-semibold">Cron Generator</h4>

            <p className="mt-2 text-sm text-slate-400">
              Create cron expressions easily.
            </p>

            <p className="mt-4 text-sm font-semibold text-cyan-400">
              Open tool →
            </p>
          </a>

          {/* CIDR */}
          <a
            href="/tools/cidr-calculator"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <h4 className="font-semibold">CIDR Calculator</h4>

            <p className="mt-2 text-sm text-slate-400">
              Calculate IP ranges and subnets.
            </p>

            <p className="mt-4 text-sm font-semibold text-cyan-400">
              Open tool →
            </p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-10 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">
            © 2026 DevOpsToolbox. Practical DevOps & SRE resources.
          </p>

          <nav className="flex flex-wrap justify-center gap-5 text-sm">
            <a href="/about" className="hover:text-cyan-400">
              About
            </a>

            <a href="/contact" className="hover:text-cyan-400">
              Contact
            </a>

            <a href="/privacy" className="hover:text-cyan-400">
              Privacy
            </a>

            <a href="/terms" className="hover:text-cyan-400">
              Terms
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}