"use client";

import { useMemo, useState } from "react";

type AwsCommand = {
  command: string;
  description: string;
};

type AwsSection = {
  title: string;
  commands: AwsCommand[];
};

type Props = {
  sections: AwsSection[];
};

export default function AwsCommandSearch({ sections }: Props) {
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();

  const filteredSections = useMemo(() => {
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
        (section): section is AwsSection => section !== null,
      );
  }, [query, sections]);

  const resultCount = filteredSections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  const totalCommands = sections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  const getSectionId = (title: string) =>
    `aws-${title
      .replace(/^\d+\.\s*/, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}`;

  return (
    <div className="mb-10">
      {!query && (
        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">
                AWS CLI Command Categories
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Jump directly to the AWS CLI commands you need.
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
          htmlFor="aws-search"
          className="text-sm font-semibold text-slate-300"
        >
          Search AWS CLI commands
        </label>

        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <input
            id="aws-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search EC2, S3, IAM, VPC, EKS, ECS, Lambda..."
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 transition focus:border-cyan-400"
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

        <p className="mt-3 text-sm text-slate-400">
          {query ? (
            <>
              Found{" "}
              <span className="font-semibold text-cyan-400">
                {resultCount}
              </span>{" "}
              matching command{resultCount === 1 ? "" : "s"}.
            </>
          ) : (
            <>
              Showing{" "}
              <span className="font-semibold text-cyan-400">
                {totalCommands}
              </span>{" "}
              commands across{" "}
              <span className="font-semibold text-cyan-400">
                {sections.length}
              </span>{" "}
              categories.
            </>
          )}
        </p>
      </section>

      {query && filteredSections.length === 0 && (
        <div className="mt-6 rounded-lg border border-slate-800 bg-slate-900 p-6 text-center">
          <p className="font-semibold text-white">
            No AWS CLI commands found
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Try searching for EC2, S3, IAM, VPC, EKS, ECS, Lambda,
            RDS, CloudWatch, Route 53 or ECR.
          </p>

          <button
            type="button"
            onClick={() => setSearch("")}
            className="mt-5 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline"
          >
            Show all AWS CLI commands
          </button>
        </div>
      )}

      {filteredSections.length > 0 && (
        <div className="mt-8 space-y-10">
          {filteredSections.map((section) => (
            <section
              key={section.title}
              id={getSectionId(section.title)}
              className="scroll-mt-24"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="mb-4 text-2xl font-bold text-white">
                  {section.title}
                </h2>

                <span className="text-sm text-slate-500">
                  {section.commands.length}{" "}
                  {section.commands.length === 1
                    ? "command"
                    : "commands"}
                </span>
              </div>

              <div className="space-y-4">
                {section.commands.map((item) => (
                  <div
                    key={`${section.title}-${item.command}`}
                    className="rounded-lg border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/30"
                  >
                    <code className="break-all text-sm font-semibold text-cyan-400">
                      {item.command}
                    </code>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}