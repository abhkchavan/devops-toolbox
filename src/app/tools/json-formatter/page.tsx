"use client";

import { useState } from "react";

export default function JSONFormatter() {
  const [jsonText, setJsonText] = useState("");
  const [result, setResult] = useState("");
  const [valid, setValid] = useState<boolean | null>(null);
  const [copied, setCopied] = useState(false);

  function formatJSON() {
    if (!jsonText.trim()) {
      setResult("Please enter some JSON.");
      setValid(false);
      return;
    }

    try {
      const parsed = JSON.parse(jsonText);
      const formatted = JSON.stringify(parsed, null, 2);

      setResult(formatted);
      setValid(true);
    } catch (error) {
      setValid(false);

      if (error instanceof Error) {
        setResult(error.message);
      } else {
        setResult("Invalid JSON.");
      }
    }
  }

  function minifyJSON() {
    if (!jsonText.trim()) {
      setResult("Please enter some JSON.");
      setValid(false);
      return;
    }

    try {
      const parsed = JSON.parse(jsonText);
      const minified = JSON.stringify(parsed);

      setResult(minified);
      setValid(true);
    } catch (error) {
      setValid(false);

      if (error instanceof Error) {
        setResult(error.message);
      } else {
        setResult("Invalid JSON.");
      }
    }
  }

  function loadExample() {
    const example = `{
  "server": {
    "name": "web01",
    "port": 8080,
    "environment": "production",
    "enabled": true
  }
}`;

    setJsonText(example);
    setResult("");
    setValid(null);
    setCopied(false);
  }

  function clearAll() {
    setJsonText("");
    setResult("");
    setValid(null);
    setCopied(false);
  }

  async function copyResult() {
    if (!result) return;

    await navigator.clipboard.writeText(result);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="text-sm text-cyan-400 hover:underline"
        >
          ← Back to DevOpsToolbox
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          JSON Formatter
        </h1>

        <p className="mt-3 text-slate-400">
          Format, validate and minify JSON instantly.
        </p>

        <textarea
          value={jsonText}
          onChange={(e) => {
            setJsonText(e.target.value);
            setResult("");
            setValid(null);
          }}
          placeholder={`{
  "server": {
    "name": "web01",
    "port": 8080
  }
}`}
          className="mt-8 h-80 w-full rounded-xl border border-slate-700 bg-slate-900 p-5 font-mono text-sm text-white outline-none focus:border-cyan-400"
        />

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={formatJSON}
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Format JSON
          </button>

          <button
            onClick={minifyJSON}
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-300 hover:border-cyan-400 hover:text-white"
          >
            Minify
          </button>

          <button
            onClick={loadExample}
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-300 hover:border-cyan-400 hover:text-white"
          >
            Load Example
          </button>

          <button
            onClick={clearAll}
            className="rounded-lg border border-red-900 px-6 py-3 font-semibold text-red-400 hover:bg-red-950"
          >
            Clear
          </button>
        </div>

        {result && (
          <div
            className={`mt-6 rounded-xl border p-5 ${
              valid
                ? "border-green-500/40 bg-green-500/10"
                : "border-red-500/40 bg-red-500/10"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <p
                className={`font-semibold ${
                  valid ? "text-green-400" : "text-red-400"
                }`}
              >
                {valid ? "✅ Valid JSON" : "❌ Invalid JSON"}
              </p>

              {valid && (
                <button
                  onClick={copyResult}
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-cyan-400 hover:text-white"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              )}
            </div>

            <pre className="mt-4 overflow-x-auto whitespace-pre-wrap text-sm text-slate-300">
              {result}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}