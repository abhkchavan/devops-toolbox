"use client";

import { useState } from "react";
import { load } from "js-yaml";

export default function YAMLValidator() {
  const [yamlText, setYamlText] = useState("");
  const [result, setResult] = useState("");
  const [valid, setValid] = useState<boolean | null>(null);

  function validateYAML() {
    if (!yamlText.trim()) {
      setResult("Please enter some YAML.");
      setValid(false);
      return;
    }

    try {
      load(yamlText);

      setResult("YAML is valid.");
      setValid(true);
    } catch (error) {
      setValid(false);

      if (error instanceof Error) {
        setResult(error.message);
      } else {
        setResult("Invalid YAML.");
      }
    }
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
          YAML Validator
        </h1>

        <p className="mt-3 text-slate-400">
          Validate YAML syntax instantly with a real YAML parser.
        </p>

        <textarea
          value={yamlText}
          onChange={(e) => {
            setYamlText(e.target.value);
            setResult("");
            setValid(null);
          }}
          placeholder={`server:
  name: web01
  port: 8080`}
          className="mt-8 h-80 w-full rounded-xl border border-slate-700 bg-slate-900 p-5 font-mono text-sm text-white outline-none focus:border-cyan-400"
        />

        <button
          onClick={validateYAML}
          className="mt-5 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
        >
          Validate YAML
        </button>

        {result && (
          <div
            className={`mt-6 rounded-xl border p-5 ${
              valid
                ? "border-green-500/40 bg-green-500/10"
                : "border-red-500/40 bg-red-500/10"
            }`}
          >
            <p
              className={`font-semibold ${
                valid ? "text-green-400" : "text-red-400"
              }`}
            >
              {valid ? "✅ Valid YAML" : "❌ Invalid YAML"}
            </p>

            <pre className="mt-3 whitespace-pre-wrap text-sm text-slate-300">
              {result}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}