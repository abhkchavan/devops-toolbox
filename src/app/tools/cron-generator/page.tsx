"use client";

import { useState } from "react";

const schedules = {
  "Every minute": "* * * * *",
  "Every hour": "0 * * * *",
  "Every day at midnight": "0 0 * * *",
  "Every day at 9 AM": "0 9 * * *",
  "Every Sunday": "0 0 * * 0",
  "Every month": "0 0 1 * *",
};

export default function CronGenerator() {
  const [selected, setSelected] = useState("Every minute");
  const [copied, setCopied] = useState(false);

  const cron = schedules[selected as keyof typeof schedules];

  async function copyCron() {
    await navigator.clipboard.writeText(cron);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="text-sm text-cyan-400 hover:underline"
        >
          ← Back to DevOpsToolbox
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Cron Generator
        </h1>

        <p className="mt-3 text-slate-400">
          Generate common Linux cron expressions quickly.
        </p>

        <div className="mt-10">
          <label className="mb-3 block text-sm font-semibold text-slate-300">
            Choose a schedule
          </label>

          <select
            value={selected}
            onChange={(e) => {
              setSelected(e.target.value);
              setCopied(false);
            }}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-4 text-white outline-none focus:border-cyan-400"
          >
            {Object.keys(schedules).map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-sm text-slate-400">
            Cron expression
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <code className="text-3xl font-bold tracking-widest text-cyan-400">
              {cron}
            </code>

            <button
              onClick={copyCron}
              className="rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-300 hover:border-cyan-400 hover:text-white"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">
            Cron Format
          </h2>

          <div className="mt-5 grid grid-cols-5 gap-2 text-center text-sm">
            <div>
              <div className="font-semibold text-cyan-400">Minute</div>
              <div className="mt-1 text-slate-500">0-59</div>
            </div>

            <div>
              <div className="font-semibold text-cyan-400">Hour</div>
              <div className="mt-1 text-slate-500">0-23</div>
            </div>

            <div>
              <div className="font-semibold text-cyan-400">Day</div>
              <div className="mt-1 text-slate-500">1-31</div>
            </div>

            <div>
              <div className="font-semibold text-cyan-400">Month</div>
              <div className="mt-1 text-slate-500">1-12</div>
            </div>

            <div>
              <div className="font-semibold text-cyan-400">Weekday</div>
              <div className="mt-1 text-slate-500">0-6</div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">
            Examples
          </h2>

          <div className="mt-5 space-y-4 text-sm">
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-400">
                Every minute
              </span>
              <code className="text-cyan-400">
                * * * * *
              </code>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-400">
                Every hour
              </span>
              <code className="text-cyan-400">
                0 * * * *
              </code>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-400">
                Every day at 9 AM
              </span>
              <code className="text-cyan-400">
                0 9 * * *
              </code>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-400">
                Every Sunday
              </span>
              <code className="text-cyan-400">
                0 0 * * 0
              </code>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}