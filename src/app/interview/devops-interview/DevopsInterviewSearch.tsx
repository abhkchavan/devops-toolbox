"use client";

import { useMemo, useState } from "react";

type Question = {
  question: string;
  answer: string;
};

type Section = {
  title: string;
  questions: Question[];
};

export default function DevopsInterviewSearch({
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

        const questions = section.questions.filter(
          (item) =>
            item.question.toLowerCase().includes(normalized) ||
            item.answer.toLowerCase().includes(normalized),
        );

        return {
          ...section,
          questions: sectionMatches ? section.questions : questions,
        };
      })
      .filter((section) => section.questions.length > 0);
  }, [query, sections]);

  const resultCount = filteredSections.reduce(
    (total, section) => total + section.questions.length,
    0,
  );

  return (
    <div>
      <div className="sticky top-4 z-10 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Kubernetes, Docker, AWS, Terraform, SRE..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <div className="mt-2 text-sm text-slate-500">
          {query
            ? `${resultCount} matching questions`
            : `${resultCount} interview questions`}
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
              {section.questions.map((item) => (
                <article
                  key={`${section.title}-${item.question}`}
                  className="p-5"
                >
                  <h3 className="text-lg font-semibold">
                    {item.question}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}

        {filteredSections.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center">
            <h2 className="text-lg font-semibold">No interview match</h2>
            <p className="mt-2 text-slate-500">
              Try Linux, Kubernetes, Docker, AWS, Terraform, Jenkins or SRE.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
