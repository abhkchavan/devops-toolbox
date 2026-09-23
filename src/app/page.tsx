"use client"; // DevOpsToolbox homepage

import { useEffect, useRef, useState } from "react";

type SearchItem = {
  title: string;
  description: string;
  href: string;
  category: "Topic" | "Guide" | "Tool";
  keywords?: string[];
};

const searchItems: SearchItem[] = [
  {
    title: "Kubernetes",
    description:
      "kubectl commands, deployments, services, pods and production troubleshooting.",
    href: "/kubernetes/kubectl-commands",
    category: "Topic",
    keywords: [
      "k8s",
      "kube",
      "pods",
      "pod",
      "deployments",
      "deployment",
      "services",
      "service",
      "ingress",
      "cluster",
      "container",
      "crashloopbackoff",
      "oomkilled",
      "namespace",
      "node",
    ],
  },
  {
    title: "kubectl Commands",
    description:
      "Practical kubectl commands for pods, deployments, services and troubleshooting.",
    href: "/kubernetes/kubectl-commands",
    category: "Guide",
    keywords: [
      "k8s",
      "kubectl",
      "pod",
      "deployment",
      "service",
      "logs",
      "exec",
      "events",
      "troubleshooting",
    ],
  },
  {
    title: "Kubernetes Command Builder",
    description:
      "Build kubectl commands interactively with actions, resources, namespaces and options.",
    href: "/command-builder",
    category: "Tool",
    keywords: [
      "k8s",
      "kubectl",
      "command generator",
      "command builder",
      "namespace",
      "resource",
    ],
  },
  {
    title: "DevOps Scenario Generator",
    description:
      "Practice real-world DevOps incidents with a simulated terminal and guided troubleshooting workflow.",
    href: "/scenarios",
    category: "Tool",
    keywords: [
      "scenario",
      "incident",
      "production",
      "support",
      "troubleshooting",
      "simulation",
      "practice",
    ],
  },
  {
    title: "Kubernetes CrashLoopBackOff",
    description:
      "Troubleshoot Kubernetes CrashLoopBackOff using logs, events, probes, configuration and resource checks.",
    href: "/kubernetes/troubleshooting/crashloopbackoff",
    category: "Guide",
    keywords: [
      "k8s",
      "crashloop",
      "crashloopbackoff",
      "pod restart",
      "logs",
      "events",
      "probe",
      "liveness",
      "readiness",
      "oom",
    ],
  },
  {
    title: "Linux",
    description:
      "Linux commands, system administration, networking, processes, storage and troubleshooting.",
    href: "/linux/linux-commands",
    category: "Topic",
    keywords: [
      "unix",
      "server",
      "bash",
      "shell",
      "process",
      "disk",
      "cpu",
      "memory",
      "network",
      "ssh",
      "systemctl",
      "logs",
      "filesystem",
      "permissions",
    ],
  },
  {
    title: "Linux Commands",
    description:
      "Essential Linux commands for system administration and troubleshooting.",
    href: "/linux/linux-commands",
    category: "Guide",
    keywords: [
      "unix",
      "bash",
      "shell",
      "grep",
      "find",
      "ps",
      "top",
      "df",
      "du",
      "systemctl",
      "journalctl",
      "ssh",
      "chmod",
      "chown",
    ],
  },
  {
    title: "Docker",
    description:
      "Containers, images, networking, volumes, logs and troubleshooting.",
    href: "/docker/docker-commands",
    category: "Topic",
    keywords: [
      "container",
      "containers",
      "image",
      "dockerfile",
      "logs",
      "volume",
      "network",
      "registry",
      "restart",
      "compose",
      "runtime",
    ],
  },
  {
    title: "Docker Commands",
    description:
      "Essential Docker commands for containers, images, logs and troubleshooting.",
    href: "/docker/docker-commands",
    category: "Guide",
    keywords: [
      "container",
      "image",
      "docker ps",
      "docker logs",
      "docker exec",
      "docker run",
      "docker restart",
      "volume",
      "network",
      "registry",
    ],
  },
  {
    title: "Ansible",
    description:
      "Automation, playbooks, inventory, modules and configuration management.",
    href: "/ansible/ansible-commands",
    category: "Topic",
    keywords: [
      "automation",
      "playbook",
      "inventory",
      "yaml",
      "configuration",
      "deployment",
      "server automation",
      "modules",
      "idempotent",
      "restart",
    ],
  },
  {
    title: "Ansible Commands",
    description:
      "Practical commands for inventory, connectivity, playbooks and troubleshooting.",
    href: "/ansible/ansible-commands",
    category: "Guide",
    keywords: [
      "ansible",
      "ansible-playbook",
      "inventory",
      "ping",
      "module",
      "yaml",
      "playbook",
      "vault",
      "ad-hoc",
      "automation",
    ],
  },
  {
    title: "Git",
    description:
      "Branches, commits, merge, rebase, stash, remotes, tags and troubleshooting.",
    href: "/git/git-commands",
    category: "Topic",
    keywords: [
      "github",
      "gitlab",
      "bitbucket",
      "repository",
      "repo",
      "branch",
      "commit",
      "merge",
      "rebase",
      "stash",
      "remote",
      "tag",
      "version control",
    ],
  },
  {
    title: "Git Commands",
    description:
      "Git commands for branches, commits, merge, rebase, stash and troubleshooting.",
    href: "/git/git-commands",
    category: "Guide",
    keywords: [
      "git clone",
      "git pull",
      "git push",
      "git commit",
      "git branch",
      "git merge",
      "git rebase",
      "git stash",
      "git reset",
      "git revert",
    ],
  },
  {
    title: "Terraform",
    description:
      "Infrastructure as code, providers, state, modules, workspaces and deployments.",
    href: "/terraform/terraform-commands",
    category: "Topic",
    keywords: [
      "iac",
      "infrastructure",
      "infrastructure as code",
      "state",
      "module",
      "provider",
      "plan",
      "apply",
      "destroy",
      "drift",
      "workspace",
      "cloud infrastructure",
    ],
  },
  {
    title: "Terraform Commands",
    description:
      "Terraform commands for infrastructure as code, state, modules and deployment.",
    href: "/terraform/terraform-commands",
    category: "Guide",
    keywords: [
      "terraform init",
      "terraform plan",
      "terraform apply",
      "terraform destroy",
      "terraform state",
      "terraform validate",
      "terraform fmt",
      "terraform import",
      "iac",
      "infrastructure",
    ],
  },
  {
    title: "Jenkins",
    description:
      "Jobs, builds, pipelines, agents, plugins, credentials and CI/CD.",
    href: "/jenkins/jenkins-commands",
    category: "Topic",
    keywords: [
      "pipeline",
      "ci",
      "cd",
      "cicd",
      "ci/cd",
      "build",
      "job",
      "agent",
      "workspace",
      "deployment",
      "plugin",
      "credentials",
    ],
  },
  {
    title: "Jenkins Commands",
    description:
      "Jenkins commands for jobs, builds, pipelines, agents and CI/CD automation.",
    href: "/jenkins/jenkins-commands",
    category: "Guide",
    keywords: [
      "pipeline",
      "build",
      "job",
      "agent",
      "workspace",
      "jenkinsfile",
      "ci",
      "cd",
      "cicd",
      "deployment",
    ],
  },
  {
    title: "Helm",
    description:
      "Kubernetes package management, charts, releases, upgrades and rollbacks.",
    href: "/helm/helm-commands",
    category: "Topic",
    keywords: [
      "k8s",
      "kubernetes",
      "chart",
      "charts",
      "release",
      "upgrade",
      "rollback",
      "repository",
      "values",
      "template",
      "package manager",
    ],
  },
  {
    title: "Helm Commands",
    description:
      "Helm commands for charts, repositories, releases, upgrades, rollbacks and CI/CD.",
    href: "/helm/helm-commands",
    category: "Guide",
    keywords: [
      "helm install",
      "helm upgrade",
      "helm rollback",
      "helm list",
      "helm repo",
      "helm template",
      "helm uninstall",
      "chart",
      "release",
    ],
  },
  {
    title: "Prometheus",
    description:
      "Monitoring, PromQL, alerting, recording rules, targets and SRE troubleshooting.",
    href: "/prometheus/prometheus-commands",
    category: "Topic",
    keywords: [
      "monitoring",
      "metrics",
      "promql",
      "alerting",
      "alerts",
      "recording rules",
      "targets",
      "scrape",
      "rate",
      "histogram",
      "cpu",
      "memory",
      "disk",
      "sre",
      "observability",
    ],
  },
  {
    title: "Prometheus & PromQL",
    description:
      "Prometheus commands, promtool, PromQL, monitoring, alerting and recording rules.",
    href: "/prometheus/prometheus-commands",
    category: "Guide",
    keywords: [
      "promql",
      "promtool",
      "query",
      "metrics",
      "monitoring",
      "alert",
      "alertmanager",
      "rate",
      "increase",
      "histogram",
      "counter",
      "gauge",
    ],
  },
  {
    title: "AWS CLI",
    description:
      "AWS cloud administration, EC2, S3, IAM, VPC and DevOps workflows.",
    href: "/aws/aws-cli",
    category: "Topic",
    keywords: [
      "amazon",
      "aws",
      "cloud",
      "ec2",
      "s3",
      "iam",
      "vpc",
      "ecr",
      "ecs",
      "eks",
      "lambda",
      "rds",
      "cloudwatch",
    ],
  },
  {
    title: "AWS CLI Commands",
    description:
      "AWS CLI commands for EC2, S3, IAM, VPC, ECR, ECS, EKS, Lambda, RDS and CloudWatch.",
    href: "/aws/aws-cli",
    category: "Guide",
    keywords: [
      "aws",
      "ec2",
      "s3",
      "iam",
      "vpc",
      "ecr",
      "ecs",
      "eks",
      "lambda",
      "rds",
      "cloudwatch",
      "aws cli",
    ],
  },
  {
    title: "Azure CLI",
    description:
      "Azure cloud administration, VMs, Storage, AKS, ACR, networking and DevOps.",
    href: "/azure/azure-cli",
    category: "Topic",
    keywords: [
      "microsoft",
      "azure",
      "cloud",
      "vm",
      "storage",
      "aks",
      "acr",
      "vnet",
      "nsg",
      "key vault",
      "app service",
    ],
  },
  {
    title: "Azure CLI Commands",
    description:
      "Azure CLI commands for VMs, Storage, VNet, NSG, ACR, AKS, App Service and Key Vault.",
    href: "/azure/azure-cli",
    category: "Guide",
    keywords: [
      "az cli",
      "azure cli",
      "vm",
      "storage",
      "vnet",
      "nsg",
      "acr",
      "aks",
      "app service",
      "key vault",
    ],
  },
  {
    title: "Google Cloud CLI",
    description:
      "Google Cloud administration, Compute Engine, Storage, GKE, Cloud Run and IAM.",
    href: "/gcp/gcloud-commands",
    category: "Topic",
    keywords: [
      "gcp",
      "google cloud",
      "gcloud",
      "compute engine",
      "storage",
      "gke",
      "cloud run",
      "cloud sql",
      "iam",
    ],
  },
  {
    title: "gcloud Commands",
    description:
      "Google Cloud CLI commands for Compute Engine, Storage, GKE, Cloud Run and Cloud SQL.",
    href: "/gcp/gcloud-commands",
    category: "Guide",
    keywords: [
      "gcp",
      "gcloud",
      "compute",
      "storage",
      "gke",
      "cloud run",
      "cloud sql",
      "iam",
    ],
  },
  {
    title: "Oracle Cloud CLI",
    description:
      "OCI administration, Compute, Object Storage, VCN, OKE, IAM, Vault and databases.",
    href: "/oci/oci-cli",
    category: "Topic",
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
      "database",
      "load balancer",
      "monitoring",
    ],
  },
  {
    title: "OCI CLI Commands",
    description:
      "OCI CLI commands for Compute, Object Storage, VCN, OKE, IAM, Vault and monitoring.",
    href: "/oci/oci-cli",
    category: "Guide",
    keywords: [
      "oci",
      "oci cli",
      "oracle cloud",
      "compute",
      "object storage",
      "vcn",
      "oke",
      "iam",
      "vault",
      "dns",
      "load balancer",
    ],
  },
  {
    title: "IBM Cloud CLI",
    description:
      "IBM Cloud administration, IAM, VPC, Kubernetes, Code Engine and Object Storage.",
    href: "/ibm/ibm-cli",
    category: "Topic",
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
    title: "IBM Cloud CLI Commands",
    description:
      "IBM Cloud CLI commands for IAM, VPC, Kubernetes, Code Engine, Container Registry and storage.",
    href: "/ibm/ibm-cli",
    category: "Guide",
    keywords: [
      "ibm cli",
      "ibm cloud",
      "iam",
      "vpc",
      "kubernetes",
      "code engine",
      "container registry",
      "storage",
    ],
  },
  {
    title: "SRE",
    description:
      "SLIs, SLOs, monitoring, incidents, reliability and server troubleshooting.",
    href: "/sre/sre-troubleshooting",
    category: "Topic",
    keywords: [
      "site reliability",
      "reliability",
      "incident",
      "incident management",
      "sla",
      "slo",
      "sli",
      "error budget",
      "mttr",
      "monitoring",
      "production",
      "observability",
    ],
  },
  {
    title: "SRE Server Troubleshooting",
    description:
      "Practical troubleshooting for CPU, memory, disk, processes, services, logs and networking.",
    href: "/sre/sre-troubleshooting",
    category: "Guide",
    keywords: [
      "sre",
      "cpu",
      "memory",
      "disk",
      "process",
      "service",
      "logs",
      "network",
      "server",
      "production",
      "incident",
    ],
  },
  {
    title: "DevOps Troubleshooting",
    description:
      "Practical troubleshooting for Linux, Docker, Kubernetes, Jenkins, Terraform and monitoring.",
    href: "/troubleshooting/devops-troubleshooting",
    category: "Guide",
    keywords: [
      "production",
      "incident",
      "error",
      "failure",
      "issue",
      "problem",
      "debug",
      "troubleshooting",
      "linux",
      "docker",
      "kubernetes",
      "jenkins",
      "terraform",
      "monitoring",
    ],
  },
  {
    title: "DevOps Interview",
    description:
      "Practical DevOps interview questions covering Linux, Git, Docker, Kubernetes, cloud and SRE.",
    href: "/interview/devops-interview",
    category: "Guide",
    keywords: [
      "interview",
      "questions",
      "jobs",
      "career",
      "linux",
      "git",
      "docker",
      "kubernetes",
      "cloud",
      "sre",
      "devops",
    ],
  },
  {
    title: "YAML Validator",
    description: "Validate YAML syntax instantly.",
    href: "/tools/yaml-validator",
    category: "Tool",
    keywords: [
      "yaml",
      "yaml validation",
      "syntax",
      "configuration",
      "kubernetes yaml",
      "ansible yaml",
    ],
  },
  {
    title: "JSON Formatter",
    description: "Format, validate and minify JSON instantly.",
    href: "/tools/json-formatter",
    category: "Tool",
    keywords: [
      "json",
      "format",
      "formatter",
      "validate",
      "minify",
      "api",
    ],
  },
  {
    title: "Cron Generator",
    description: "Create cron expressions easily.",
    href: "/tools/cron-generator",
    category: "Tool",
    keywords: [
      "cron",
      "crontab",
      "schedule",
      "scheduler",
      "linux",
      "job",
      "automation",
    ],
  },
  {
    title: "CIDR Calculator",
    description: "Calculate IP ranges and subnets.",
    href: "/tools/cidr-calculator",
    category: "Tool",
    keywords: [
      "cidr",
      "subnet",
      "subnetting",
      "ip",
      "network",
      "networking",
      "ipv4",
      "ip range",
    ],
  },
];

const topics = [
  {
    title: "Linux",
    description: "Commands, troubleshooting and system administration.",
    href: "/linux/linux-commands",
  },
  {
    title: "Kubernetes",
    description: "kubectl commands, deployments and production issues.",
    href: "/kubernetes/kubectl-commands",
  },
  {
    title: "Docker",
    description: "Containers, images, networking and troubleshooting.",
    href: "/docker/docker-commands",
  },
  {
    title: "AWS CLI",
    description: "EC2, S3, IAM, VPC and cloud administration.",
    href: "/aws/aws-cli",
  },
  {
    title: "Git",
    description: "Branches, commits, merge, rebase and troubleshooting.",
    href: "/git/git-commands",
  },
  {
    title: "Terraform",
    description: "Infrastructure as code, state, modules and deployments.",
    href: "/terraform/terraform-commands",
  },
  {
    title: "Ansible",
    description: "Automation, playbooks, inventory and configuration.",
    href: "/ansible/ansible-commands",
  },
  {
    title: "Jenkins",
    description: "Jobs, builds, pipelines, agents and CI/CD automation.",
    href: "/jenkins/jenkins-commands",
  },
  {
    title: "Helm",
    description: "Kubernetes charts, releases, upgrades and rollbacks.",
    href: "/helm/helm-commands",
  },
  {
    title: "Prometheus",
    description: "Monitoring, PromQL, alerting and SRE troubleshooting.",
    href: "/prometheus/prometheus-commands",
  },
  {
    title: "Azure CLI",
    description: "Azure VMs, Storage, AKS, networking and DevOps.",
    href: "/azure/azure-cli",
  },
  {
    title: "Google Cloud CLI",
    description: "Compute Engine, Storage, GKE, Cloud Run and IAM.",
    href: "/gcp/gcloud-commands",
  },
  {
    title: "DevOps Troubleshooting",
    description:
      "Production troubleshooting for common DevOps and SRE issues.",
    href: "/troubleshooting/devops-troubleshooting",
  },
  {
    title: "DevOps Interview",
    description:
      "Practical DevOps, cloud, Kubernetes and SRE interview questions.",
    href: "/interview/devops-interview",
  },
];

const troubleshooting = [
  {
    title: "Kubernetes Pod CrashLoopBackOff",
    description:
      "Check pod status, events, logs, probes, configuration and resource issues.",
    href: "/kubernetes/troubleshooting/crashloopbackoff",
    tag: "Kubernetes",
  },
  {
    title: "Kubernetes Pod Pending",
    description:
      "Investigate scheduling, resources, taints, node availability and events.",
    href: "/troubleshooting/devops-troubleshooting",
    tag: "Kubernetes",
  },
  {
    title: "Linux Disk Full",
    description:
      "Find large files, full filesystems, deleted-open files and storage issues.",
    href: "/sre/sre-troubleshooting",
    tag: "Linux",
  },
  {
    title: "Linux High CPU",
    description:
      "Identify CPU-consuming processes and investigate application behaviour.",
    href: "/sre/sre-troubleshooting",
    tag: "SRE",
  },
  {
    title: "Docker Container Not Starting",
    description:
      "Inspect containers, images, logs, ports, volumes and runtime errors.",
    href: "/docker/docker-commands",
    tag: "Docker",
  },
  {
    title: "Jenkins Build Failed",
    description:
      "Check console output, workspace, agents, credentials and pipeline errors.",
    href: "/jenkins/jenkins-commands",
    tag: "Jenkins",
  },
  {
    title: "Terraform State Locked",
    description:
      "Understand state locking, inspect state and safely recover from lock issues.",
    href: "/terraform/terraform-commands",
    tag: "Terraform",
  },
  {
    title: "Application Port Not Responding",
    description:
      "Check listening ports, processes, firewall rules and network connectivity.",
    href: "/sre/sre-troubleshooting",
    tag: "Production",
  },
];

const guides = [
  {
    category: "Kubernetes",
    title: "kubectl Commands Cheat Sheet",
    description:
      "Practical kubectl commands for pods, deployments, services and troubleshooting.",
    href: "/kubernetes/kubectl-commands",
  },
  {
    category: "Linux",
    title: "Linux Commands Cheat Sheet",
    description:
      "Essential Linux commands for system administration and troubleshooting.",
    href: "/linux/linux-commands",
  },
  {
    category: "Docker",
    title: "Docker Commands Cheat Sheet",
    description:
      "Essential Docker commands for containers, images, logs and troubleshooting.",
    href: "/docker/docker-commands",
  },
  {
    category: "AWS",
    title: "AWS CLI Commands Cheat Sheet",
    description:
      "AWS CLI commands for EC2, S3, IAM, VPC, ECR, ECS, EKS, Lambda and CloudWatch.",
    href: "/aws/aws-cli",
  },
  {
    category: "Terraform",
    title: "Terraform Commands Cheat Sheet",
    description:
      "Infrastructure as code, providers, state, modules, workspaces and deployment.",
    href: "/terraform/terraform-commands",
  },
  {
    category: "Ansible",
    title: "Ansible Commands Cheat Sheet",
    description:
      "Practical commands for inventory, connectivity, playbooks and automation.",
    href: "/ansible/ansible-commands",
  },
  {
    category: "Jenkins",
    title: "Jenkins Commands Cheat Sheet",
    description:
      "Jobs, builds, pipelines, agents, credentials, logs and CI/CD troubleshooting.",
    href: "/jenkins/jenkins-commands",
  },
  {
    category: "Helm",
    title: "Helm Commands Cheat Sheet",
    description:
      "Charts, repositories, releases, upgrades, rollbacks, values and templates.",
    href: "/helm/helm-commands",
  },
  {
    category: "Prometheus",
    title: "Prometheus & PromQL Cheat Sheet",
    description:
      "PromQL, promtool, monitoring, alerting, recording rules and troubleshooting.",
    href: "/prometheus/prometheus-commands",
  },
  {
    category: "SRE",
    title: "SRE Server Troubleshooting Guide",
    description:
      "A practical workflow for CPU, memory, disk, processes, services, logs and networking.",
    href: "/sre/sre-troubleshooting",
  },
];

const tools = [
  {
    title: "Kubernetes Command Builder",
    description:
      "Build kubectl commands interactively with actions, resources, namespaces and options.",
    href: "/command-builder",
    featured: true,
  },
  {
    title: "DevOps Scenario Generator",
    description:
      "Practice real-world DevOps incidents with a simulated terminal and guided troubleshooting workflow.",
    href: "/scenarios",
    featured: true,
  },
  {
    title: "YAML Validator",
    description: "Validate YAML syntax instantly.",
    href: "/tools/yaml-validator",
    featured: false,
  },
  {
    title: "JSON Formatter",
    description: "Format, validate and minify JSON instantly.",
    href: "/tools/json-formatter",
    featured: false,
  },
  {
    title: "Cron Generator",
    description: "Create cron expressions easily.",
    href: "/tools/cron-generator",
    featured: false,
  },
  {
    title: "CIDR Calculator",
    description: "Calculate IP ranges and subnets.",
    href: "/tools/cidr-calculator",
    featured: false,
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredSuggestions = search.trim()
    ? searchItems
        .filter((item) => {
          const query = search.trim().toLowerCase();

          const searchableText = [
            item.title,
            item.description,
            item.category,
            ...(item.keywords ?? []),
          ]
            .join(" ")
            .toLowerCase();

          return searchableText.includes(query);
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

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;

      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        searchInputRef.current?.focus();
        setShowSuggestions(Boolean(search.trim()));
        return;
      }

      if (event.key === "/") {
        event.preventDefault();
        searchInputRef.current?.focus();
        setShowSuggestions(Boolean(search.trim()));
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [search]);

  const openSearchResult = (item: SearchItem) => {
    window.location.href = item.href;
  };

  const handleSearchKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Escape") {
      setShowSuggestions(false);
      setSelectedIndex(-1);
      return;
    }

    if (!search.trim()) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setShowSuggestions(true);

      setSelectedIndex((current) => {
        if (filteredSuggestions.length === 0) return -1;

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
        if (filteredSuggestions.length === 0) return -1;

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
  };

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;

    setSearch(value);
    setSelectedIndex(-1);
    setShowSuggestions(Boolean(value.trim()));
  };

  const clearSearch = () => {
    setSearch("");
    setShowSuggestions(false);
    setSelectedIndex(-1);
    searchInputRef.current?.focus();
  };

  return (
    <main
      id="top"
      className="min-h-screen bg-slate-950 text-white"
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <a href="/" className="text-xl font-bold tracking-tight">
            DevOps<span className="text-cyan-400">Toolbox</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#topics" className="transition hover:text-cyan-400">
              Topics
            </a>
            <a
              href="#troubleshooting"
              className="transition hover:text-cyan-400"
            >
              Troubleshooting
            </a>
            <a href="#guides" className="transition hover:text-cyan-400">
              Commands
            </a>
            <a href="#tools" className="transition hover:text-cyan-400">
              Tools
            </a>
            <a
              href="/command-builder"
              className="transition hover:text-cyan-400"
            >
              Command Builder
            </a>
            <a
              href="/scenarios"
              className="transition hover:text-cyan-400"
            >
              Scenarios
            </a>
            <a
              href="#interview"
              className="transition hover:text-cyan-400"
            >
              Interview
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-visible border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-6 md:py-28">
          <div className="mx-auto mb-5 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            DevOps • SRE • Cloud • Production Support
          </div>

          <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            DevOps Commands, Tools &
            <span className="block text-cyan-400">
              Troubleshooting Guides
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
            Find practical commands, solve production problems, use free
            DevOps tools and prepare for technical interviews — all in one
            place.
          </p>

          {/* Search */}
          <div
            ref={searchRef}
            className="relative mx-auto mt-10 max-w-3xl"
          >
            <div className="flex rounded-xl shadow-2xl shadow-cyan-950/20">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search Kubernetes, Linux, Docker, AWS, Terraform..."
                className="min-w-0 flex-1 rounded-l-xl border border-slate-700 bg-slate-900 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500 sm:text-base"
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
                  ×
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
                className="rounded-r-xl bg-cyan-500 px-5 font-semibold text-slate-950 transition hover:bg-cyan-400 sm:px-7"
              >
                Search
              </button>
            </div>

            <div className="mt-2 flex justify-end px-1">
              <span className="text-xs text-slate-500">
                Press{" "}
                <kbd className="rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 font-mono text-slate-400">
                  Ctrl K
                </kbd>{" "}
                to search
              </span>
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
                        onMouseEnter={() => setSelectedIndex(index)}
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
                      Try Kubernetes, Linux, Docker, Git, Terraform,
                      Jenkins, Helm, AWS, Azure, GCP, SRE, YAML or JSON.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {[
              "Kubernetes",
              "Linux",
              "Docker",
              "AWS",
              "Terraform",
              "Ansible",
            ].map((item) => (
              <a
                key={item}
                href={
                  item === "Kubernetes"
                    ? "/kubernetes/kubectl-commands"
                    : item === "Linux"
                      ? "/linux/linux-commands"
                      : item === "Docker"
                        ? "/docker/docker-commands"
                        : item === "AWS"
                          ? "/aws/aws-cli"
                          : item === "Terraform"
                            ? "/terraform/terraform-commands"
                            : "/ansible/ansible-commands"
                }
                className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Three Main Paths */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          <a
            href="#guides"
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-cyan-500"
          >
            <div className="text-3xl">⚡</div>
            <h2 className="mt-5 text-xl font-bold group-hover:text-cyan-400">
              Find Commands
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Quickly find practical commands for Linux, Kubernetes, Docker,
              cloud, CI/CD and infrastructure automation.
            </p>
            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Browse commands →
            </p>
          </a>

          <a
            href="#troubleshooting"
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-cyan-500"
          >
            <div className="text-3xl">🚨</div>
            <h2 className="mt-5 text-xl font-bold group-hover:text-cyan-400">
              Solve Problems
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Follow practical troubleshooting workflows for common production
              and infrastructure issues.
            </p>
            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Troubleshoot now →
            </p>
          </a>

          <a
            href="/command-builder"
            className="group rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-7 transition hover:-translate-y-1 hover:border-cyan-500"
          >
            <div className="text-3xl">🛠️</div>
            <h2 className="mt-5 text-xl font-bold group-hover:text-cyan-400">
              Build Commands
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Build kubectl commands interactively with namespaces, resources,
              images, ports and output options.
            </p>
            <p className="mt-5 text-sm font-semibold text-cyan-400">
              Open Command Builder →
            </p>
          </a>
        </div>
      </section>

      {/* Topics */}
      <section
        id="topics"
        className="mx-auto max-w-7xl scroll-mt-20 px-5 py-16 sm:px-6"
      >
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Explore
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              Popular DevOps Topics
            </h2>
            <p className="mt-3 max-w-2xl text-slate-400">
              Practical references for the technologies used across DevOps,
              cloud engineering and SRE.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => (
            <a
              key={topic.title}
              href={topic.href}
              className="group rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:-translate-y-1 hover:border-cyan-500 hover:bg-slate-800"
            >
              <h3 className="text-lg font-semibold group-hover:text-cyan-400">
                {topic.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {topic.description}
              </p>

              <p className="mt-4 text-sm font-semibold text-cyan-400">
                Explore →
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Troubleshooting */}
      <section
        id="troubleshooting"
        className="scroll-mt-20 border-y border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Production Support
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              🚨 Production problem? Start here.
            </h2>

            <p className="mt-4 text-slate-400">
              Practical troubleshooting paths for the problems DevOps,
              application support and SRE teams commonly investigate.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {troubleshooting.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-slate-800 bg-slate-950 p-5 transition hover:-translate-y-1 hover:border-cyan-500"
              >
                <span className="inline-flex rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                  {item.tag}
                </span>

                <h3 className="mt-4 font-semibold leading-6 group-hover:text-cyan-400">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-cyan-400">
                  Troubleshoot →
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/troubleshooting/devops-troubleshooting"
              className="inline-flex rounded-lg border border-cyan-500/40 px-5 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
            >
              View DevOps Troubleshooting Guide →
            </a>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section
        id="guides"
        className="mx-auto max-w-7xl scroll-mt-20 px-5 py-16 sm:px-6"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Command Reference
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            ⚡ DevOps Command Guides
          </h2>

          <p className="mt-4 text-slate-400">
            Searchable command references with practical examples,
            troubleshooting commands and production-focused workflows.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <a
              key={guide.title}
              href={guide.href}
              className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-500 hover:bg-slate-800"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                {guide.category}
              </p>

              <h3 className="mt-3 text-xl font-semibold group-hover:text-cyan-400">
                {guide.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {guide.description}
              </p>

              <p className="mt-5 text-sm font-semibold text-cyan-400">
                Read guide →
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="scroll-mt-20 border-y border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Free Utilities
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              🛠 Free DevOps Tools
            </h2>

            <p className="mt-4 text-slate-400">
              Useful browser-based tools for developers, DevOps engineers,
              cloud engineers and SREs.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <a
                key={tool.title}
                href={tool.href}
                className={`group rounded-xl border p-6 transition hover:-translate-y-1 ${
                  tool.featured
                    ? "border-cyan-500/50 bg-cyan-500/5 hover:border-cyan-400"
                    : "border-slate-800 bg-slate-950 hover:border-cyan-500"
                }`}
              >
                {tool.featured && (
                  <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-xs font-semibold text-cyan-400">
                    NEW
                  </span>
                )}

                <h3
                  className={`font-semibold ${
                    tool.featured
                      ? "mt-4 text-lg group-hover:text-cyan-400"
                      : "group-hover:text-cyan-400"
                  }`}
                >
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {tool.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-cyan-400">
                  {tool.title === "Kubernetes Command Builder"
                    ? "Build command →"
                    : tool.title === "DevOps Scenario Generator"
                      ? "Practice a Scenario →"
                      : "Open tool →"}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Interview */}
      <section
        id="interview"
        className="mx-auto max-w-7xl scroll-mt-20 px-5 py-16 sm:px-6"
      >
        <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-900 p-8 sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Career Preparation
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                🎯 Preparing for a DevOps interview?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Practice practical questions across Linux, Git, Docker,
                Kubernetes, cloud, CI/CD, Terraform, Ansible and SRE.
              </p>

              <a
                href="/interview/devops-interview"
                className="mt-7 inline-flex rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Start Interview Preparation →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                "Linux",
                "Docker",
                "Kubernetes",
                "AWS",
                "Terraform",
                "Ansible",
                "Jenkins",
                "SRE",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-slate-800 bg-slate-950/70 px-4 py-3 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold">
            Your DevOps command reference starts here.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Search commands, troubleshoot production issues, use free tools
            and build your DevOps knowledge.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="/command-builder"
              className="inline-flex rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Build a kubectl Command →
            </a>

            <a
              href="/scenarios"
              className="inline-flex rounded-lg border border-cyan-500/40 px-5 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
            >
              Practice a DevOps Scenario →
            </a>

            <a
              href="#top"
              className="inline-flex rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-5 py-10 text-slate-400 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <div>
            <p className="font-semibold text-white">
              DevOps<span className="text-cyan-400">Toolbox</span>
            </p>

            <p className="mt-2 text-sm">
              © 2026 DevOpsToolbox. Practical DevOps & SRE resources.
            </p>
          </div>

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