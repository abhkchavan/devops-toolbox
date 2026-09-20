"use client";

import { useEffect, useRef, useState } from "react";

type SearchItem = {
  title: string;
  description: string;
  href: string;
  category: "Topic" | "Guide" | "Tool";
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const searchRef = useRef<HTMLDivElement>(null);

  const searchItems: SearchItem[] = [
    {
      title: "Kubernetes",
      description:
        "kubectl commands, deployments, services, pods and production troubleshooting.",
      href: "/kubernetes/kubectl-commands",
      category: "Topic",
    },
    {
      title: "kubectl Commands",
      description:
        "Practical kubectl commands for pods, deployments, services and troubleshooting.",
      href: "/kubernetes/kubectl-commands",
      category: "Guide",
    },
    {
      title: "Linux",
      description:
        "Linux commands, system administration, networking, processes, storage and troubleshooting.",
      href: "/linux/linux-commands",
      category: "Topic",
    },
    {
      title: "Linux Commands",
      description:
        "Essential Linux commands for system administration and troubleshooting.",
      href: "/linux/linux-commands",
      category: "Guide",
    },
    {
      title: "Docker",
      description:
        "Containers, images, networking, volumes, logs and troubleshooting.",
      href: "/docker/docker-commands",
      category: "Topic",
    },
    {
      title: "Docker Commands",
      description:
        "Essential Docker commands for containers, images, logs and troubleshooting.",
      href: "/docker/docker-commands",
      category: "Guide",
    },
    {
      title: "Ansible",
      description:
        "Automation, playbooks, inventory, modules and configuration management.",
      href: "/ansible/ansible-commands",
      category: "Topic",
    },
    {
      title: "Ansible Commands",
      description:
        "Practical commands for inventory, connectivity, playbooks and troubleshooting.",
      href: "/ansible/ansible-commands",
      category: "Guide",
    },
    {
      title: "Git",
      description:
        "Branches, commits, merge, rebase, stash, remotes, tags and troubleshooting.",
      href: "/git/git-commands",
      category: "Topic",
    },
    {
      title: "Git Commands",
      description:
        "Git commands for branches, commits, merge, rebase, stash and troubleshooting.",
      href: "/git/git-commands",
      category: "Guide",
    },
    {
      title: "Terraform",
      description:
        "Infrastructure as code, providers, state, modules, workspaces and deployments.",
      href: "/terraform/terraform-commands",
      category: "Topic",
    },
    {
      title: "Terraform Commands",
      description:
        "Terraform commands for infrastructure as code, state, modules and deployment.",
      href: "/terraform/terraform-commands",
      category: "Guide",
    },
    {
      title: "Jenkins",
      description:
        "Jobs, builds, pipelines, agents, plugins, credentials and CI/CD.",
      href: "/jenkins/jenkins-commands",
      category: "Topic",
    },
    {
      title: "Jenkins Commands",
      description:
        "Jenkins commands for jobs, builds, pipelines, agents and CI/CD automation.",
      href: "/jenkins/jenkins-commands",
      category: "Guide",
    },
    {
      title: "Helm",
      description:
        "Kubernetes package management, charts, releases, upgrades and rollbacks.",
      href: "/helm/helm-commands",
      category: "Topic",
    },
    {
      title: "Helm Commands",
      description:
        "Helm commands for charts, repositories, releases, upgrades, rollbacks and CI/CD.",
      href: "/helm/helm-commands",
      category: "Guide",
    },
    {
      title: "Prometheus",
      description:
        "Monitoring, PromQL, alerting, recording rules, targets and SRE troubleshooting.",
      href: "/prometheus/prometheus-commands",
      category: "Topic",
    },
    {
      title: "Prometheus & PromQL",
      description:
        "Prometheus commands, promtool, PromQL, monitoring, alerting and recording rules.",
      href: "/prometheus/prometheus-commands",
      category: "Guide",
    },
    {
      title: "AWS CLI",
      description:
        "AWS cloud administration, EC2, S3, IAM, VPC and DevOps workflows.",
      href: "/aws/aws-cli",
      category: "Topic",
    },
    {
      title: "AWS CLI Commands",
      description:
        "AWS CLI commands for EC2, S3, IAM, VPC, ECR, ECS, EKS, Lambda, RDS and CloudWatch.",
      href: "/aws/aws-cli",
      category: "Guide",
    },
    {
      title: "Azure CLI",
      description:
        "Azure cloud administration, VMs, Storage, AKS, ACR, networking and DevOps.",
      href: "/azure/azure-cli",
      category: "Topic",
    },
    {
      title: "Azure CLI Commands",
      description:
        "Azure CLI commands for VMs, Storage, VNet, NSG, ACR, AKS, App Service and Key Vault.",
      href: "/azure/azure-cli",
      category: "Guide",
    },
    {
      title: "Google Cloud CLI",
      description:
        "Google Cloud administration, Compute Engine, Storage, GKE, Cloud Run and IAM.",
      href: "/gcp/gcloud-commands",
      category: "Topic",
    },
    {
      title: "gcloud Commands",
      description:
        "Google Cloud CLI commands for Compute Engine, Storage, GKE, Cloud Run and Cloud SQL.",
      href: "/gcp/gcloud-commands",
      category: "Guide",
    },
    {
      title: "Oracle Cloud CLI",
      description:
        "OCI administration, Compute, Object Storage, VCN, OKE, IAM, Vault and databases.",
      href: "/oci/oci-cli",
      category: "Topic",
    },
    {
      title: "OCI CLI Commands",
      description:
        "OCI CLI commands for Compute, Object Storage, VCN, OKE, IAM, Vault and monitoring.",
      href: "/oci/oci-cli",
      category: "Guide",
    },
    {
      title: "IBM Cloud CLI",
      description:
        "IBM Cloud administration, IAM, VPC, Kubernetes, Code Engine and Object Storage.",
      href: "/ibm/ibm-cli",
      category: "Topic",
    },
    {
      title: "IBM Cloud CLI Commands",
      description:
        "IBM Cloud CLI commands for IAM, VPC, Kubernetes, Code Engine, Container Registry and storage.",
      href: "/ibm/ibm-cli",
      category: "Guide",
    },
    {
      title: "SRE",
      description:
        "SLIs, SLOs, monitoring, incidents, reliability and server troubleshooting.",
      href: "/sre/sre-troubleshooting",
      category: "Topic",
    },
    {
      title: "SRE Server Troubleshooting",
      description:
        "Practical troubleshooting for CPU, memory, disk, processes, services, logs and networking.",
      href: "/sre/sre-troubleshooting",
      category: "Guide",
    },
    {
      title: "YAML Validator",
      description: "Validate YAML syntax instantly.",
      href: "/tools/yaml-validator",
      category: "Tool",
    },
    {
      title: "JSON Formatter",
      description: "Format, validate and minify JSON instantly.",
      href: "/tools/json-formatter",
      category: "Tool",
    },
    {
      title: "Cron Generator",
      description: "Create cron expressions easily.",
      href: "/tools/cron-generator",
      category: "Tool",
    },
    {
      title: "CIDR Calculator",
      description: "Calculate IP ranges and subnets.",
      href: "/tools/cidr-calculator",
      category: "Tool",
    },
  ];

  const topics = [
    {
      title: "Linux",
      description:
        "Commands, troubleshooting and system administration.",
      href: "/linux/linux-commands",
    },
    {
      title: "Docker",
      description:
        "Containers, images, networking and troubleshooting.",
      href: "/docker/docker-commands",
    },
    {
      title: "Kubernetes",
      description:
        "kubectl commands, deployments and production issues.",
      href: "/kubernetes/kubectl-commands",
    },
    {
      title: "Helm",
      description:
        "Kubernetes package management, charts, releases, upgrades, rollbacks and CI/CD deployments.",
      href: "/helm/helm-commands",
    },
    {
      title: "Ansible",
      description:
        "Automation, playbooks, inventory and configuration.",
      href: "/ansible/ansible-commands",
    },
    {
      title: "Git",
      description:
        "Branches, commits, merge, rebase, stash and troubleshooting.",
      href: "/git/git-commands",
    },
    {
      title: "Terraform",
      description:
        "Infrastructure as code, state, modules and deployments.",
      href: "/terraform/terraform-commands",
    },
    {
      title: "Jenkins",
      description:
        "Jobs, builds, pipelines, agents and CI/CD automation.",
      href: "/jenkins/jenkins-commands",
    },
    {
      title: "Prometheus",
      description:
        "Monitoring, PromQL, alerting, recording rules, targets and SRE troubleshooting.",
      href: "/prometheus/prometheus-commands",
    },
    {
      title: "AWS CLI",
      description:
        "AWS cloud administration, EC2, S3, IAM, VPC and DevOps workflows.",
      href: "/aws/aws-cli",
    },
    {
      title: "Azure CLI",
      description:
        "Azure cloud administration, VMs, Storage, AKS, ACR, networking and DevOps workflows.",
      href: "/azure/azure-cli",
    },
    {
      title: "Google Cloud CLI",
      description:
        "Google Cloud administration, Compute Engine, Storage, GKE, Cloud Run, IAM and DevOps workflows.",
      href: "/gcp/gcloud-commands",
    },
    {
      title: "Oracle Cloud CLI",
      description:
        "Oracle Cloud Infrastructure administration, Compute, Object Storage, VCN, OKE, IAM, Vault and DevOps workflows.",
      href: "/oci/oci-cli",
    },
    {
      title: "IBM Cloud CLI",
      description:
        "IBM Cloud administration, IAM, VPC, Kubernetes, Code Engine, Container Registry, Object Storage and DevOps workflows.",
      href: "/ibm/ibm-cli",
    },
    {
      title: "SRE",
      description:
        "SLIs, SLOs, monitoring, incidents and reliability.",
      href: "/sre/sre-troubleshooting",
    },
    {
      title: "AutoSys",
      description:
        "Jobs, dependencies, scheduling and troubleshooting.",
      href: "/autosys/autosys-commands",
    },
  ];

  const filteredSuggestions = search.trim()
    ? searchItems
        .filter((item) => {
          const query = search.trim().toLowerCase();

          return (
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
          );
        })
        .slice(0, 8)
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openSearchResult = (item: SearchItem) => {
    window.location.href = item.href;
  };

  const handleSearchKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (!search.trim()) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();

      setShowSuggestions(true);

      setSelectedIndex((current) => {
        if (filteredSuggestions.length === 0) {
          return -1;
        }

        return current < filteredSuggestions.length - 1
          ? current + 1
          : 0;
      });

      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setShowSuggestions(true);

      setSelectedIndex((current) => {
        if (filteredSuggestions.length === 0) {
          return -1;
        }

        return current > 0
          ? current - 1
          : filteredSuggestions.length - 1;
      });

      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();

      if (
        selectedIndex >= 0 &&
        filteredSuggestions[selectedIndex]
      ) {
        openSearchResult(filteredSuggestions[selectedIndex]);
        return;
      }

      if (filteredSuggestions.length > 0) {
        openSearchResult(filteredSuggestions[0]);
      }

      return;
    }

    if (e.key === "Escape") {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  };

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;

    setSearch(value);
    setSelectedIndex(-1);

    if (value.trim()) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const clearSearch = () => {
    setSearch("");
    setShowSuggestions(false);
    setSelectedIndex(-1);
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
          DevOps â€¢ SRE â€¢ Cloud
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Practical DevOps tools, commands and guides.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Learn Linux, Docker, Kubernetes, Helm, Ansible, Git, Terraform,
          Jenkins, Prometheus, AWS CLI, Azure CLI, Google Cloud CLI, OCI CLI,
          IBM Cloud CLI, AutoSys and SRE through practical examples, troubleshooting
          guides and free tools.
        </p>

        {/* Search */}
        <div
          ref={searchRef}
          className="relative mx-auto mt-10 max-w-2xl"
        >
          <div className="flex">
            <input
              type="text"
              placeholder="Search Kubernetes, Linux, Docker, Git, AWS, Terraform, AutoSys..."
              className="w-full rounded-l-lg border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none focus:border-cyan-500"
              value={search}
              onChange={handleSearchChange}
              onFocus={() => {
                if (search.trim()) {
                  setShowSuggestions(true);
                }
              }}
              onKeyDown={handleSearchKeyDown}
              role="combobox"
              aria-expanded={showSuggestions}
              aria-autocomplete="list"
            />

            {search && (
              <button
                type="button"
                onClick={clearSearch}
                className="border-y border-slate-700 bg-slate-900 px-4 text-slate-400 transition hover:text-white"
                aria-label="Clear search"
              >
                âœ•
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                if (filteredSuggestions.length > 0) {
                  openSearchResult(
                    filteredSuggestions[selectedIndex] ??
                      filteredSuggestions[0],
                  );
                }
              }}
              className="rounded-r-lg bg-cyan-500 px-6 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Search
            </button>
          </div>

          {/* Suggestions */}
          {showSuggestions && search.trim() && (
            <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 text-left shadow-2xl">
              {filteredSuggestions.length > 0 ? (
                <div className="max-h-[420px] overflow-y-auto py-2">
                  {filteredSuggestions.map((item, index) => (
                    <button
                      key={`${item.category}-${item.title}`}
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        openSearchResult(item);
                      }}
                      onMouseEnter={() =>
                        setSelectedIndex(index)
                      }
                      className={`block w-full px-5 py-4 text-left transition ${
                        selectedIndex === index
                          ? "bg-slate-800"
                          : "hover:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p
                            className={`font-semibold ${
                              selectedIndex === index
                                ? "text-cyan-400"
                                : "text-white"
                            }`}
                          >
                            {item.title}
                          </p>

                          <p className="mt-1 text-sm leading-5 text-slate-400">
                            {item.description}
                          </p>
                        </div>

                        <span className="shrink-0 rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                          {item.category}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-5 py-6">
                  <p className="font-semibold text-white">
                    No results found
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Try Kubernetes, Linux, Docker, Git, Terraform, AutoSys,
                    Jenkins, Helm, Prometheus, AWS, Azure, GCP, OCI,
                    IBM, SRE, YAML, JSON, Cron or CIDR.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Start typing to see commands, guides and tools.
        </p>
      </section>

      {/* Topics */}
      <section id="topics" className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="mb-8 text-2xl font-bold">
          Explore Topics
        </h3>

        <div className="grid gap-5 md:grid-cols-3">
          {topics.map((topic) => (
            <a
              key={topic.title}
              href={topic.href}
              className="group block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
            >
              <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400">
                {topic.title}
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {topic.description}
              </p>

              <p className="mt-4 text-sm font-semibold text-cyan-400">
                Explore commands â†’
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section id="guides" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="mb-8 text-2xl font-bold">
          DevOps Command Guides
        </h3>

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
              Read guide â†’
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
              Read guide â†’
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
              Read guide â†’
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
              Read guide â†’
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
              Read guide â†’
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
              Read guide â†’
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
              Read guide â†’
            </p>
          </a>

          {/* Helm */}
          <a
            href="/helm/helm-commands"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Helm
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              Helm Commands Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Helm commands for Kubernetes charts, repositories, releases,
              upgrades, rollbacks, values, templates and CI/CD.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide â†’
            </p>
          </a>

          {/* Prometheus */}
          <a
            href="/prometheus/prometheus-commands"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Prometheus
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              Prometheus & PromQL Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Prometheus commands, promtool, PromQL, monitoring, alerting,
              recording rules, targets and troubleshooting.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Read guide â†’
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
              Read guide â†’
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
              Read guide â†’
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
              Read guide â†’
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
              Read guide â†’
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
              Read guide â†’
            </p>
          </a>

          {/* AutoSys */}
          <a
            href="/autosys/autosys-commands"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              AutoSys
            </p>

            <h4 className="mt-3 text-xl font-semibold">
              AutoSys Commands Cheat Sheet
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              AutoSys commands for jobs, boxes, dependencies, calendars,
              autorep, sendevent, JIL and production troubleshooting.
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
              Read guide â†’
            </p>
          </a>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="mb-8 text-2xl font-bold">
          Free DevOps Tools
        </h3>

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
              Open tool â†’
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
              Open tool â†’
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
              Open tool â†’
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
              Open tool â†’
            </p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-10 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">
            Â© 2026 DevOpsToolbox. Practical DevOps & SRE resources.
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
