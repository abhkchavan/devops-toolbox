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

export default function LinuxCommandSearch({ sections }: Props) {
  const [search, setSearch] = useState("");

  const filteredSections = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return sections;
    }

    return sections
      .map((section) => {
        const sectionMatches = section.title.toLowerCase().includes(query);

        const commands = section.commands.filter(
          (item) =>
            item.command.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query),
        );

        return {
          ...section,
          commands: sectionMatches ? section.commands : commands,
        };
      })
      .filter((section) => section.commands.length > 0);
  }, [search, sections]);

  const commandCount = search
    ? filteredSections.reduce(
        (total, section) => total + section.commands.length,
        0,
      )
    : sections.reduce(
        (total, section) => total + section.commands.length,
        0,
      );

  return (
    <>
      <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-5">
        <label
          htmlFor="linux-search"
          className="text-sm font-semibold text-slate-300"
        >
          Search Linux commands
        </label>

        <input
          id="linux-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search files, permissions, processes, networking..."
          className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
        />

        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-slate-500">
            {search
              ? `${commandCount} matching commands`
              : `${commandCount} commands`}
          </span>

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-cyan-400 hover:underline"
            >
              Clear search
            </button>
          )}
        </div>
      </section>

      {search && filteredSections.length === 0 ? (
        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h2 className="text-xl font-bold">No commands found</h2>

          <p className="mt-3 text-slate-400">
            Try searching for files, permissions, processes, networking,
            SSH, systemd, logs, disk, packages or troubleshooting.
          </p>
        </section>
      ) : (
        filteredSections.map((section) => (
          <section key={section.title} className="mt-12">
            <h2 className="text-2xl font-bold">{section.title}</h2>

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