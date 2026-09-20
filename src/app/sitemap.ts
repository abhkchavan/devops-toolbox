import type { MetadataRoute } from "next";

const baseUrl = "https://www.devopscommands.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    // Homepage
    "/",

    // Main pages
    "/about",
    "/contact",

    // DevOps technology command references
    "/kubernetes/kubectl-commands",
    "/linux/linux-commands",
    "/docker/docker-commands",
    "/ansible/ansible-commands",
    "/aws/aws-cli",
    "/azure/azure-cli",
    "/gcp/gcloud-commands",
    "/terraform/terraform-commands",
    "/jenkins/jenkins-commands",
    "/helm/helm-commands",
    "/prometheus/prometheus-commands",
    "/autosys/autosys-commands",
    "/ibm/ibm-cli",
    "/oci/oci-cli",
    "/git/git-commands",

    // Kubernetes troubleshooting
    "/kubernetes/troubleshooting/crashloopbackoff",

    // SRE and DevOps troubleshooting
    "/sre/sre-troubleshooting",
    "/troubleshooting/devops-troubleshooting",

    // DevOps learning
    "/interview/devops-interview",

    // Interactive tools
    "/command-builder",
    "/scenarios",

    // DevOps utilities
    "/tools/yaml-validator",
    "/tools/json-formatter",
    "/tools/cron-generator",
    "/tools/cidr-calculator",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}