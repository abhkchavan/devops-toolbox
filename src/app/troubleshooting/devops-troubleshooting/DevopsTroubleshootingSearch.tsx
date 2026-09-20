"use client";

import { useMemo, useState } from "react";

type Command = {
  command: string;
  description: string;
};

type Section = {
  title: string;
  commands: Command[];
};

export default function DevopsTroubleshootingSearch({
  sections,
}: {
  sections: Section[];
}) {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return sections;
    }

    return sections
      .map((section) => {
        const sectionMatches = section.title.toLowerCase().includes(normalized);

        const commands = section.commands.filter(
          (item) =>
            item.command.toLowerCase().includes(normalized) ||
            item.description.toLowerCase().includes(normalized),
        );

        return {
          ...section,
          commands: sectionMatches ? section.commands : commands,
        };
      })
      .filter((section) => section.commands.length > 0);
  }, [query, sections]);

  const resultCount = filteredSections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  return (
    <div>
      <div className="sticky top-4 z-10 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search CPU, memory, Kubernetes, Docker, DNS..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <div className="mt-2 text-sm text-slate-500">
          {query
            ? `${resultCount} matching commands`
            : `${resultCount} troubleshooting commands`}
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {filteredSections.map((section) => (
          <section
            key={section.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
          >
            <div className="border-b border-slate-200 bg-white px-5 py-4">
              <h2 className="text-xl font-bold">{section.title}</h2>
            </div>

            <div className="divide-y divide-slate-200">
              {section.commands.map((item) => (
                <div key={`${section.title}-${item.command}`} className="p-5">
                  <code className="block overflow-x-auto rounded-xl bg-slate-950 px-4 py-3 text-sm text-slate-100">
                    {item.command}
                  </code>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {filteredSections.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center">
            <h2 className="text-lg font-semibold">No troubleshooting match</h2>
            <p className="mt-2 text-slate-500">
              Try Kubernetes, Docker, CPU, memory, disk, DNS, SSH or network.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
