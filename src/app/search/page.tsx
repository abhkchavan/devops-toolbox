"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type SearchResult = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
};

const searchData: SearchResult[] = [
  {
    title: "Kubernetes Commands",
    description:
      "kubectl commands for pods, deployments, services, namespaces, logs and troubleshooting.",
    href: "/kubernetes/kubectl-commands",
    category: "Kubernetes",
    keywords: [
      "kubernetes",
      "k8s",
      "kubectl",
      "pod",
      "pods",
      "deployment",
      "service",
      "namespace",
      "logs",
      "exec",
      "events",
      "ingress",
    ],
  },
  {
    title: "Kubernetes CrashLoopBackOff",
    description:
      "Troubleshoot CrashLoopBackOff using logs, events, probes, configuration and resources.",
    href: "/kubernetes/troubleshooting/crashloopbackoff",
    category: "Troubleshooting",
    keywords: [
      "kubernetes",
      "k8s",
      "crashloopbackoff",
      "crashloop",
      "pod restart",
      "logs",
      "events",
      "probe",
      "oomkilled",
    ],
  },
  {
    title: "Linux Commands",
    description:
      "Linux commands for processes, CPU, memory, disk, networking, permissions and services.",
    href: "/linux/linux-commands",
    category: "Linux",
    keywords: [
      "linux",
      "unix",
      "bash",
      "shell",
      "cpu",
      "memory",
      "disk",
      "process",
      "network",
      "ssh",
      "systemctl",
      "journalctl",
      "logs",
    ],
  },
  {
    title: "Docker Commands",
    description:
      "Docker commands for containers, images, logs, networks, volumes and troubleshooting.",
    href: "/docker/docker-commands",
    category: "Docker",
    keywords: [
      "docker",
      "container",
      "containers",
      "image",
      "dockerfile",
      "logs",
      "volume",
      "network",
      "registry",
      "restart",
    ],
  },
  {
    title: "Git Commands",
    description:
      "Git commands for branches, commits, merge, rebase, stash, reset, revert and remotes.",
    href: "/git/git-commands",
    category: "Git",
    keywords: [
      "git",
      "github",
      "gitlab",
      "branch",
      "commit",
      "merge",
      "rebase",
      "stash",
      "reset",
      "revert",
      "remote",
    ],
  },
  {
    title: "Jenkins Commands",
    description:
      "Jenkins jobs, builds, pipelines, agents, workspaces and CI/CD troubleshooting.",
    href: "/jenkins/jenkins-commands",
    category: "Jenkins",
    keywords: [
      "jenkins",
      "pipeline",
      "build",
      "job",
      "agent",
      "workspace",
      "jenkinsfile",
      "ci",
      "cd",
      "cicd",
    ],
  },
  {
    title: "Ansible Commands",
    description:
      "Ansible inventory, modules, playbooks, automation and server management.",
    href: "/ansible/ansible-commands",
    category: "Ansible",
    keywords: [
      "ansible",
      "playbook",
      "inventory",
      "yaml",
      "automation",
      "module",
      "server",
      "configuration",
      "restart",
    ],
  },
  {
    title: "Terraform Commands",
    description:
      "Terraform commands for infrastructure, state, providers, modules and deployments.",
    href: "/terraform/terraform-commands",
    category: "Terraform",
    keywords: [
      "terraform",
      "iac",
      "infrastructure",
      "state",
      "provider",
      "module",
      "plan",
      "apply",
      "destroy",
      "drift",
    ],
  },
  {
    title: "Helm Commands",
    description:
      "Helm charts, repositories, releases, upgrades, rollbacks and Kubernetes deployments.",
    href: "/helm/helm-commands",
    category: "Helm",
    keywords: [
      "helm",
      "kubernetes",
      "chart",
      "release",
      "upgrade",
      "rollback",
      "repository",
      "values",
      "template",
    ],
  },
  {
    title: "Prometheus & PromQL",
    description:
      "Prometheus monitoring, metrics, PromQL queries, alerts and recording rules.",
    href: "/prometheus/prometheus-commands",
    category: "Prometheus",
    keywords: [
      "prometheus",
      "promql",
      "metrics",
      "monitoring",
      "alert",
      "alerting",
      "recording",
      "rate",
      "increase",
      "observability",
    ],
  },
  {
    title: "AWS CLI Commands",
    description:
      "AWS commands for EC2, S3, IAM, VPC, ECR, ECS, EKS, Lambda and CloudWatch.",
    href: "/aws/aws-cli",
    category: "AWS",
    keywords: [
      "aws",
      "amazon",
      "ec2",
      "s3",
      "iam",
      "vpc",
      "ecr",
      "ecs",
      "eks",
      "lambda",
      "cloudwatch",
    ],
  },
  {
    title: "Azure CLI Commands",
    description:
      "Azure commands for VMs, Storage, AKS, networking, ACR and App Service.",
    href: "/azure/azure-cli",
    category: "Azure",
    keywords: [
      "azure",
      "az",
      "azure cli",
      "vm",
      "storage",
      "aks",
      "acr",
      "vnet",
      "nsg",
      "app service",
    ],
  },
  {
    title: "Google Cloud CLI",
    description:
      "gcloud commands for Compute Engine, Storage, GKE, Cloud Run and IAM.",
    href: "/gcp/gcloud-commands",
    category: "GCP",
    keywords: [
      "gcp",
      "google cloud",
      "gcloud",
      "compute engine",
      "storage",
      "gke",
      "cloud run",
      "iam",
    ],
  },
  {
    title: "OCI CLI Commands",
    description:
      "Oracle Cloud commands for Compute, Object Storage, VCN, OKE, IAM and monitoring.",
    href: "/oci/oci-cli",
    category: "OCI",
    keywords: [
      "oci",
      "oracle",
      "oracle cloud",
      "compute",
      "object storage",
      "vcn",
      "oke",
      "iam",
      "vault",
    ],
  },
  {
    title: "IBM Cloud CLI",
    description:
      "IBM Cloud commands for IAM, VPC, Kubernetes, Code Engine and Object Storage.",
    href: "/ibm/ibm-cli",
    category: "IBM Cloud",
    keywords: [
      "ibm",
      "ibm cloud",
      "iam",
      "vpc",
      "kubernetes",
      "code engine",
      "object storage",
      "container registry",
    ],
  },
  {
    title: "SRE Troubleshooting",
    description:
      "Production troubleshooting for CPU, memory, disk, processes, services, logs and networking.",
    href: "/sre/sre-troubleshooting",
    category: "SRE",
    keywords: [
      "sre",
      "site reliability",
      "production",
      "incident",
      "cpu",
      "memory",
      "disk",
      "server",
      "network",
      "mttr",
      "monitoring",
    ],
  },
  {
    title: "DevOps Troubleshooting",
    description:
      "Troubleshooting workflows for common Linux, Docker, Kubernetes, Jenkins and Terraform problems.",
    href: "/troubleshooting/devops-troubleshooting",
    category: "Troubleshooting",
    keywords: [
      "devops",
      "troubleshooting",
      "production",
      "incident",
      "error",
      "failure",
      "debug",
      "linux",
      "docker",
      "kubernetes",
      "jenkins",
      "terraform",
    ],
  },
  {
    title: "DevOps Interview",
    description:
      "Practical DevOps interview questions covering Linux, Git, Docker, Kubernetes, cloud and SRE.",
    href: "/interview/devops-interview",
    category: "Interview",
    keywords: [
      "devops",
      "interview",
      "questions",
      "linux",
      "git",
      "docker",
      "kubernetes",
      "cloud",
      "sre",
      "terraform",
      "ansible",
    ],
  },
  {
    title: "Kubernetes Command Builder",
    description: "Build kubectl commands interactively.",
    href: "/command-builder",
    category: "Tool",
    keywords: [
      "kubernetes",
      "kubectl",
      "command builder",
      "command generator",
      "k8s",
    ],
  },
  {
    title: "DevOps Scenario Generator",
    description:
      "Practice real-world DevOps production incidents and troubleshooting scenarios.",
    href: "/scenarios",
    category: "Tool",
    keywords: [
      "scenario",
      "production",
      "incident",
      "practice",
      "simulation",
      "troubleshooting",
    ],
  },
  {
    title: "YAML Validator",
    description:
      "Validate YAML configuration files and Kubernetes or Ansible YAML.",
    href: "/tools/yaml-validator",
    category: "Tool",
    keywords: [
      "yaml",
      "validator",
      "kubernetes yaml",
      "ansible yaml",
      "configuration",
      "syntax",
    ],
  },
  {
    title: "JSON Formatter",
    description: "Format, validate and minify JSON.",
    href: "/tools/json-formatter",
    category: "Tool",
    keywords: [
      "json",
      "formatter",
      "format",
      "validate",
      "minify",
      "api",
    ],
  },
  {
    title: "Cron Generator",
    description: "Create cron expressions for scheduled Linux jobs.",
    href: "/tools/cron-generator",
    category: "Tool",
    keywords: [
      "cron",
      "crontab",
      "schedule",
      "scheduler",
      "linux",
      "job",
    ],
  },
  {
    title: "CIDR Calculator",
    description:
      "Calculate CIDR ranges, subnet masks, IP addresses and network ranges.",
    href: "/tools/cidr-calculator",
    category: "Tool",
    keywords: [
      "cidr",
      "subnet",
      "subnetting",
      "ip",
      "network",
      "ipv4",
      "network range",
    ],
  },
];

export default function SearchPage() {
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return searchData;
    }

    const words = normalizedQuery
      .split(/\s+/)
      .filter(Boolean);

    return searchData
      .map((item) => {
        const title = item.title.toLowerCase();
        const description = item.description.toLowerCase();
        const category = item.category.toLowerCase();

        const searchableText = [
          item.title,
          item.description,
          item.category,
          ...item.keywords,
        ]
          .join(" ")
          .toLowerCase();

        let score = 0;

        if (searchableText.includes(normalizedQuery)) {
          score += 10;
        }

        if (title.includes(normalizedQuery)) {
          score += 20;
        }

        for (const word of words) {
          if (title.includes(word)) {
            score += 8;
          }

          if (category.includes(word)) {
            score += 5;
          }

          if (
            item.keywords.some((keyword) =>
              keyword.toLowerCase().includes(word),
            )
          ) {
            score += 4;
          }

          if (description.includes(word)) {
            score += 2;
          }
        }

        return {
          item,
          score,
        };
      })
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((result) => result.item);
  }, [query]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <a
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            DevOps<span className="text-cyan-400">Toolbox</span>
          </a>

          <a
            href="/"
            className="text-sm text-slate-400 transition hover:text-cyan-400"
          >
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            DevOps Toolbox Search
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Search DevOps Resources
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
            Search commands, troubleshooting guides, cloud tools,
            interview preparation and DevOps utilities from one place.
          </p>

          <div className="mt-8">
            <input
              type="search"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              autoFocus
              placeholder="Try: pod memory high, docker logs, terraform state, linux disk..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-base text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "pod memory high",
                "docker logs",
                "linux disk",
                "terraform state",
                "jenkins build",
                "ansible restart",
              ].map((example) => (
                <button
                  key={example}
                  type="button"
                  onClick={() => setQuery(example)}
                  className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">
              {query.trim()
                ? "Search Results"
                : "All DevOps Resources"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {results.length}{" "}
              {results.length === 1
                ? "result"
                : "results"}{" "}
              found
            </p>
          </div>

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-sm text-cyan-400 hover:text-cyan-300"
            >
              Clear search
            </button>
          )}
        </div>

        {results.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {results.map((result) => (
              <a
                key={`${result.category}-${result.title}`}
                href={result.href}
                className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-500 hover:bg-slate-800"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold group-hover:text-cyan-400">
                    {result.title}
                  </h3>

                  <span className="shrink-0 rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                    {result.category}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {result.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {result.keywords
                    .slice(0, 5)
                    .map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded bg-slate-950 px-2 py-1 text-xs text-slate-500"
                      >
                        {keyword}
                      </span>
                    ))}
                </div>

                <p className="mt-5 text-sm font-semibold text-cyan-400">
                  Open resource →
                </p>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-10 text-center">
            <div className="text-4xl">🔎</div>

            <h2 className="mt-4 text-xl font-bold">
              No matching resources
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Try a technology, command, error or production
              problem such as:
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {[
                "CrashLoopBackOff",
                "pod memory",
                "disk full",
                "docker container",
                "terraform state",
                "jenkins build",
                "ansible restart",
              ].map((example) => (
                <button
                  key={example}
                  type="button"
                  onClick={() => setQuery(example)}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Search by problem */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6">
          <h2 className="text-xl font-bold">
            Search by problem
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            You don't need to know the exact command. Describe
            the problem you're trying to solve.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                problem: "Pod memory is high",
                search: "pod memory high",
              },
              {
                problem: "Server disk is full",
                search: "linux disk full",
              },
              {
                problem: "Docker container failed",
                search: "docker container",
              },
              {
                problem: "Terraform state issue",
                search: "terraform state",
              },
            ].map((item) => (
              <button
                key={item.problem}
                type="button"
                onClick={() => {
                  setQuery(item.search);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="group rounded-xl border border-slate-800 bg-slate-950 p-5 text-left transition hover:border-cyan-500 hover:bg-slate-900"
              >
                <p className="font-semibold text-white">
                  {item.problem}
                </p>

                <p className="mt-2 text-sm font-medium text-cyan-400 transition group-hover:text-cyan-300">
                  Search →
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-5 py-8 text-center text-sm text-slate-500">
        <a
          href="/"
          className="text-slate-400 transition hover:text-cyan-400"
        >
          DevOpsToolbox
        </a>{" "}
        — Search commands, troubleshooting and DevOps resources.
      </footer>
    </main>
  );
}