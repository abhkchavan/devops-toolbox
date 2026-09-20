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

export default function AnsibleCommandSearch({ sections }: Props) {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return sections;
    }

    return sections
      .map((section) => ({
        ...section,
        commands: section.commands.filter(
          (item) =>
            item.command.toLowerCase().includes(normalizedQuery) ||
            item.description.toLowerCase().includes(normalizedQuery)
        ),
      }))
      .filter((section) => section.commands.length > 0);
  }, [query, sections]);

  const resultCount = filteredSections.reduce(
    (total, section) => total + section.commands.length,
    0
  );

  return (
    <section className="mt-12">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Search Ansible Commands
            </h2>

            <p className="mt-2 text-slate-400">
              Search commands by command name, option, module, or description.
            </p>
          </div>

          <p className="text-sm font-semibold text-cyan-400">
            {resultCount}{" "}
            {resultCount === 1 ? "command" : "commands"}
          </p>
        </div>

        <div className="relative mt-5">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Ansible commands..."
            aria-label="Search Ansible commands"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 pr-12 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-lg text-slate-400 hover:bg-slate-800 hover:text-white"
            >
              {"\u00D7"}
            </button>
          )}
        </div>
      </div>

      {query && filteredSections.length === 0 ? (
        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h3 className="text-lg font-semibold text-white">
            No Ansible commands found
          </h3>

          <p className="mt-2 text-slate-400">
            Try searching for a module, command, option, or keyword such as
            <code className="mx-1 text-cyan-400">playbook</code>,
            <code className="mx-1 text-cyan-400">inventory</code>,
            <code className="mx-1 text-cyan-400">vault</code>, or
            <code className="mx-1 text-cyan-400">docker</code>.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-8">
          {filteredSections.map((section) => (
            <section key={section.title}>
              <h3 className="text-xl font-bold text-white">
                {section.title}
              </h3>

              <div className="mt-4 space-y-3">
                {section.commands.map((item) => (
                  <div
                    key={`${section.title}-${item.command}`}
                    className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/30"
                  >
                    <code className="block break-all text-sm leading-6 text-cyan-400">
                      {item.command}
                    </code>

                    <p className="mt-3 leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </section>
  );
}