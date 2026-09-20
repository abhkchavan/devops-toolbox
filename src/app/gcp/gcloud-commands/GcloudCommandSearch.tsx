"use client";

import { useMemo, useState } from "react";

type GcloudCommand = {
  command: string;
  description: string;
};

type GcloudSection = {
  title: string;
  commands: GcloudCommand[];
};

type Props = {
  sections: GcloudSection[];
};

export default function GcloudCommandSearch({ sections }: Props) {
  const [search, setSearch] = useState("");

  const filteredSections = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return sections;
    }

    return sections
      .map((section) => {
        const sectionMatches = section.title
          .toLowerCase()
          .includes(query);

        const filteredCommands = section.commands.filter(
          (item) =>
            item.command.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query),
        );

        if (sectionMatches) {
          return section;
        }

        if (filteredCommands.length > 0) {
          return {
            ...section,
            commands: filteredCommands,
          };
        }

        return null;
      })
      .filter(
        (section): section is GcloudSection => section !== null,
      );
  }, [search, sections]);

  const resultCount = filteredSections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  return (
    <div className="mb-10">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search gcloud commands..."
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
        />

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
          >
            Clear
          </button>
        )}
      </div>

      {search && (
        <p className="mt-3 text-sm text-slate-400">
          Found{" "}
          <span className="font-semibold text-cyan-400">
            {resultCount}
          </span>{" "}
          matching command{resultCount === 1 ? "" : "s"}.
        </p>
      )}

      {search && filteredSections.length === 0 && (
        <div className="mt-6 rounded-lg border border-slate-800 bg-slate-900 p-6 text-center">
          <p className="font-semibold text-white">
            No Google Cloud CLI commands found
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Try searching for Compute, Storage, GKE, Artifact Registry,
            Cloud Run, Cloud SQL, IAM, VPC, DNS, Logging, Monitoring,
            Secret Manager or BigQuery.
          </p>
        </div>
      )}

      {search && filteredSections.length > 0 && (
        <div className="mt-6 space-y-8">
          {filteredSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-xl font-bold text-white">
                {section.title}
              </h3>

              <div className="space-y-4">
                {section.commands.map((item) => (
                  <div
                    key={`${section.title}-${item.command}`}
                    className="rounded-lg border border-slate-800 bg-slate-900 p-5"
                  >
                    <code className="break-all text-sm font-semibold text-cyan-400">
                      {item.command}
                    </code>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}