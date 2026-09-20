import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://YOUR-DOMAIN.com",
      lastModified: new Date(),
    },
    {
      url: "https://YOUR-DOMAIN.com/kubernetes/kubectl-commands",
      lastModified: new Date(),
    },
    {
      url: "https://YOUR-DOMAIN.com/linux/linux-commands",
      lastModified: new Date(),
    },
    {
      url: "https://YOUR-DOMAIN.com/docker/docker-commands",
      lastModified: new Date(),
    },
    {
      url: "https://YOUR-DOMAIN.com/ansible/ansible-commands",
      lastModified: new Date(),
    },
    {
      url: "https://YOUR-DOMAIN.com/sre/sre-troubleshooting",
      lastModified: new Date(),
    },
    {
      url: "https://YOUR-DOMAIN.com/tools/yaml-validator",
      lastModified: new Date(),
    },
    {
      url: "https://YOUR-DOMAIN.com/tools/json-formatter",
      lastModified: new Date(),
    },
    {
      url: "https://YOUR-DOMAIN.com/tools/cron-generator",
      lastModified: new Date(),
    },
    {
      url: "https://YOUR-DOMAIN.com/tools/cidr-calculator",
      lastModified: new Date(),
    },
  ];
}