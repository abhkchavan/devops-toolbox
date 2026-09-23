"use client";

import { useMemo, useState } from "react";

type AzureCommand = {
  command: string;
  description: string;
};

type AzureSection = {
  title: string;
  commands: AzureCommand[];
};

type Props = {
  sections: AzureSection[];
};

export default function AzureCommandSearch({ sections }: Props) {
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();

  const getSectionId = (title: string) =>
    `azure-${title
      .replace(/^\d+\.\s*/, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}`;

  const filteredSections = useMemo<AzureSection[]>(() => {
    if (!query) {
      return sections;
    }

    return sections
      .map((section) => {
        const sectionMatches = section.title
          .toLowerCase()
          .includes(query);

        const commands = sectionMatches
          ? section.commands
          : section.commands.filter(
              (item) =>
                item.command.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query),
            );

        return {
          ...section,
          commands,
        };
      })
      .filter((section) => section.commands.length > 0);
  }, [query, sections]);

  const resultCount = filteredSections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  const totalCommands = sections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  return (
    <>
      {!query && (
        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-white">
              Azure CLI Command Categories
            </h2>

            <p className="mt-2 text-slate-400">
              Jump directly to the Azure CLI commands you need.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <a
                key={section.title}
                href={`#${getSectionId(section.title)}`}
                className="group rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/50 hover:bg-slate-800/70"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-white transition group-hover:text-cyan-400">
                    {section.title}
                  </h3>

                  <span className="shrink-0 rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                    {section.commands.length}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Azure CLI commands for {section.title.toLowerCase()}.
                </p>

                <span className="mt-4 inline-block text-sm font-medium text-cyan-400">
                  View commands →
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-5">
        <label
          htmlFor="azure-search"
          className="text-sm font-semibold text-slate-300"
        >
          Search Azure CLI commands
        </label>

        <div className="relative mt-3">
          <input
            id="azure-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search VM, Storage, VNet, AKS, ACR, Key Vault, Monitor..."
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 pr-12 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
            aria-describedby="azure-search-results"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear Azure CLI command search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-lg text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              {"\u00D7"}
            </button>
          )}
        </div>

        <div
          id="azure-search-results"
          className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm"
        >
          <span className="text-slate-500">
            {query
              ? resultCount +
                " matching " +
                (resultCount === 1 ? "command" : "commands")
              : totalCommands +
                " commands across " +
                sections.length +
                " categories"}
          </span>

          {query && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-cyan-400 transition hover:text-cyan-300 hover:underline"
            >
              Clear search
            </button>
          )}
        </div>
      </section>

      {query && filteredSections.length === 0 ? (
        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h2 className="text-xl font-bold text-white">
            No Azure CLI commands found
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            Try searching for VM, Storage, Blob, VNet, NSG, AKS, ACR,
            App Service, Functions, SQL, Key Vault, RBAC, Monitor,
            Log Analytics, Container Apps or troubleshooting.
          </p>

          <button
            type="button"
            onClick={() => setSearch("")}
            className="mt-5 rounded-lg border border-cyan-500/40 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
          >
            Show all commands
          </button>
        </section>
      ) : (
        filteredSections.map((section) => (
          <section
            key={section.title}
            id={getSectionId(section.title)}
            className="mt-12 scroll-mt-24"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl font-bold text-white">
                {section.title}
              </h2>

              <span className="text-sm text-slate-500">
                {section.commands.length}{" "}
                {section.commands.length === 1 ? "command" : "commands"}
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {section.commands.map((item) => (
                <div
                  key={`${section.title}-${item.command}`}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/30"
                >
                  <div className="overflow-x-auto rounded-lg bg-slate-950 p-4">
                    <code className="whitespace-nowrap text-sm font-semibold text-cyan-400">
                      {item.command}
                    </code>
                  </div>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))
      )}
    </>
  );
}