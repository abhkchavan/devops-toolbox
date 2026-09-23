"use client";

import { useMemo, useState } from "react";

type Command = {
  command: string;
  description: string;
};

type CommandSection = {
  title: string;
  commands: Command[];
};

type Props = {
  sections: CommandSection[];
};

export default function DockerCommandSearch({ sections }: Props) {
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();

  const filteredSections = useMemo<CommandSection[]>(() => {
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

  const commandCount = filteredSections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  const totalCommands = sections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  const getSectionId = (title: string) =>
    `docker-${title
      .replace(/^\d+\.\s*/, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}`;

  return (
    <>
      {!query && (
        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Docker Command Categories
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Jump directly to the Docker commands you need.
              </p>
            </div>

            <span className="hidden text-sm text-slate-500 sm:block">
              {sections.length} categories
            </span>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <a
                key={section.title}
                href={`#${getSectionId(section.title)}`}
                className="group rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/50 hover:bg-slate-800/70"
              >
                <h3 className="font-bold text-white transition group-hover:text-cyan-400">
                  {section.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {section.commands.length}{" "}
                  {section.commands.length === 1
                    ? "command"
                    : "commands"}
                </p>

                <span className="mt-4 inline-block text-sm font-semibold text-cyan-400">
                  View commands →
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-5">
        <label
          htmlFor="docker-search"
          className="text-sm font-semibold text-slate-300"
        >
          Search Docker commands
        </label>

        <div className="relative mt-3">
          <input
            id="docker-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search containers, images, volumes, networks, Compose..."
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 pr-12 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
            aria-describedby="docker-search-results"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear Docker command search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-lg text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              {"\u00D7"}
            </button>
          )}
        </div>

        <div
          id="docker-search-results"
          className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm"
        >
          <span className="text-slate-500">
            {query
              ? commandCount +
                " matching " +
                (commandCount === 1 ? "command" : "commands")
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
            No commands found
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            Try searching for containers, images, builds, networks,
            volumes, Compose, Dockerfile, BuildKit, contexts,
            registries, resources, health checks or troubleshooting.
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
                {section.commands.length === 1
                  ? "command"
                  : "commands"}
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {section.commands.map((item) => (
                <div
                  key={item.command}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/30"
                >
                  <div className="overflow-x-auto rounded-lg bg-slate-950 p-4">
                    <code className="whitespace-nowrap text-sm text-cyan-400">
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