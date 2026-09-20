import type { MetadataRoute } from "next";

const baseUrl = "https://www.devopscommands.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    // Homepage
    "/",

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

    // SRE
    "/sre/sre-troubleshooting",

    // Troubleshooting
    "/troubleshooting/devops-troubleshooting",

    // DevOps tools
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