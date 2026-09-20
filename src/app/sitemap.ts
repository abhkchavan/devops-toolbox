import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.devopscommands.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.devopscommands.com/kubernetes/kubectl-commands",
      lastModified: new Date(),
    },
    {
      url: "https://www.devopscommands.com/linux/linux-commands",
      lastModified: new Date(),
    },
    {
      url: "https://www.devopscommands.com/docker/docker-commands",
      lastModified: new Date(),
    },
    {
      url: "https://www.devopscommands.com/ansible/ansible-commands",
      lastModified: new Date(),
    },
    {
      url: "https://www.devopscommands.com/sre/sre-troubleshooting",
      lastModified: new Date(),
    },
    {
      url: "https://www.devopscommands.com/tools/yaml-validator",
      lastModified: new Date(),
    },
    {
      url: "https://www.devopscommands.com/tools/json-formatter",
      lastModified: new Date(),
    },
    {
      url: "https://www.devopscommands.com/tools/cron-generator",
      lastModified: new Date(),
    },
    {
      url: "https://www.devopscommands.com/tools/cidr-calculator",
      lastModified: new Date(),
    },
  ];
}

