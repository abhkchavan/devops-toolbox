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
      sre: "/sre/sre-troubleshooting",
      yaml: "/tools/yaml-validator",
      json: "/tools/json-formatter",
      cron: "/tools/cron-generator",
      cidr: "/tools/cidr-calculator",
      aws: "/aws/aws-cli",
    };

    const route = Object.entries(routes).find(([keyword]) =>
      query.includes(keyword)
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
          Learn Linux, Docker, Kubernetes, Ansible, Git, Terraform, Jenkins
          and SRE through practical examples, troubleshooting guides and free
          tools.
        </p>

        {/* Search */}
        <div className="mx-auto mt-10 flex max-w-2xl">
          <input
            type="text"
            placeholder="Search Kubernetes, Linux, Docker, Git, Terraform, Jenkins..."
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
      <section
        id="topics"
        className="mx-auto max-w-6xl px-6 py-12"
      >
        <h3 className="mb-8 text-2xl font-bold">
          Explore Topics
        </h3>

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
              <h4 className="text-xl font-semibold">
                {title}
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section
        id="guides"
        className="mx-auto max-w-6xl px-6 py-16"
      >
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
      <section
        id="tools"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <h3 className="mb-8 text-2xl font-bold">
          Free DevOps Tools
        </h3>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* YAML */}
          <a
            href="/tools/yaml-validator"
            className="block rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <h4 className="font-semibold">
              YAML Validator
            </h4>

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
            <h4 className="font-semibold">
              JSON Formatter
            </h4>

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
            <h4 className="font-semibold">
              Cron Generator
            </h4>

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
            <h4 className="font-semibold">
              CIDR Calculator
            </h4>

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
            <a
              href="/about"
              className="hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="/contact"
              className="hover:text-cyan-400"
            >
              Contact
            </a>

            <a
              href="/privacy"
              className="hover:text-cyan-400"
            >
              Privacy
            </a>

            <a
              href="/terms"
              className="hover:text-cyan-400"
            >
              Terms
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}