"use client";

import { useState } from "react";

function ipToNumber(ip: string): number {
  const parts = ip.split(".").map(Number);

  return (
    ((parts[0] << 24) |
      (parts[1] << 16) |
      (parts[2] << 8) |
      parts[3]) >>>
    0
  );
}

function numberToIp(num: number): string {
  return [
    (num >>> 24) & 255,
    (num >>> 16) & 255,
    (num >>> 8) & 255,
    num & 255,
  ].join(".");
}

export default function CIDRCalculator() {
  const [cidr, setCidr] = useState("");
  const [result, setResult] = useState<{
    network: string;
    broadcast: string;
    subnetMask: string;
    firstHost: string;
    lastHost: string;
    usableHosts: number;
  } | null>(null);

  const [error, setError] = useState("");

  function calculateCIDR() {
    setError("");
    setResult(null);

    const parts = cidr.trim().split("/");

    if (parts.length !== 2) {
      setError("Please enter CIDR in format: 192.168.1.0/24");
      return;
    }

    const ip = parts[0];
    const prefix = Number(parts[1]);

    const ipParts = ip.split(".").map(Number);

    if (
      ipParts.length !== 4 ||
      ipParts.some(
        (part) => !Number.isInteger(part) || part < 0 || part > 255
      )
    ) {
      setError("Invalid IP address.");
      return;
    }

    if (
      !Number.isInteger(prefix) ||
      prefix < 0 ||
      prefix > 32
    ) {
      setError("CIDR prefix must be between 0 and 32.");
      return;
    }

    const ipNumber = ipToNumber(ip);

    const mask =
      prefix === 0
        ? 0
        : (0xffffffff << (32 - prefix)) >>> 0;

    const networkNumber = (ipNumber & mask) >>> 0;
    const broadcastNumber = (networkNumber | (~mask >>> 0)) >>> 0;

    const network = numberToIp(networkNumber);
    const broadcast = numberToIp(broadcastNumber);

    let subnetMask = "0.0.0.0";

    if (prefix > 0) {
      subnetMask = numberToIp(mask);
    }

    let firstHost = network;
    let lastHost = broadcast;
    let usableHosts = 0;

    if (prefix === 32) {
      firstHost = network;
      lastHost = network;
      usableHosts = 1;
    } else if (prefix === 31) {
      firstHost = network;
      lastHost = broadcast;
      usableHosts = 2;
    } else {
      firstHost = numberToIp(networkNumber + 1);
      lastHost = numberToIp(broadcastNumber - 1);
      usableHosts = broadcastNumber - networkNumber - 1;
    }

    setResult({
      network,
      broadcast,
      subnetMask,
      firstHost,
      lastHost,
      usableHosts,
    });
  }

  function loadExample() {
    setCidr("192.168.1.0/24");
    setError("");
    setResult(null);
  }

  function clearAll() {
    setCidr("");
    setError("");
    setResult(null);
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
          CIDR Calculator
        </h1>

        <p className="mt-3 text-slate-400">
          Calculate network ranges, subnet masks and usable hosts.
        </p>

        <div className="mt-8">
          <label className="mb-3 block text-sm font-semibold text-slate-300">
            Enter CIDR
          </label>

          <input
            type="text"
            value={cidr}
            onChange={(e) => {
              setCidr(e.target.value);
              setError("");
              setResult(null);
            }}
            placeholder="192.168.1.0/24"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-5 py-4 font-mono text-white outline-none focus:border-cyan-400"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={calculateCIDR}
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Calculate
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

        {error && (
          <div className="mt-6 rounded-xl border border-red-500/40 bg-red-500/10 p-5">
            <p className="font-semibold text-red-400">
              ❌ {error}
            </p>
          </div>
        )}

        {result && (
          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">
              CIDR Results
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-950 p-4">
                <p className="text-sm text-slate-500">
                  Network Address
                </p>
                <p className="mt-1 font-mono text-cyan-400">
                  {result.network}
                </p>
              </div>

              <div className="rounded-lg bg-slate-950 p-4">
                <p className="text-sm text-slate-500">
                  Broadcast Address
                </p>
                <p className="mt-1 font-mono text-cyan-400">
                  {result.broadcast}
                </p>
              </div>

              <div className="rounded-lg bg-slate-950 p-4">
                <p className="text-sm text-slate-500">
                  Subnet Mask
                </p>
                <p className="mt-1 font-mono text-cyan-400">
                  {result.subnetMask}
                </p>
              </div>

              <div className="rounded-lg bg-slate-950 p-4">
                <p className="text-sm text-slate-500">
                  Usable Hosts
                </p>
                <p className="mt-1 font-mono text-cyan-400">
                  {result.usableHosts}
                </p>
              </div>

              <div className="rounded-lg bg-slate-950 p-4">
                <p className="text-sm text-slate-500">
                  First Host
                </p>
                <p className="mt-1 font-mono text-cyan-400">
                  {result.firstHost}
                </p>
              </div>

              <div className="rounded-lg bg-slate-950 p-4">
                <p className="text-sm text-slate-500">
                  Last Host
                </p>
                <p className="mt-1 font-mono text-cyan-400">
                  {result.lastHost}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">
            Example
          </h2>

          <p className="mt-3 text-slate-400">
            Try:
          </p>

          <code className="mt-2 block text-cyan-400">
            192.168.1.0/24
          </code>
        </div>
      </div>
    </main>
  );
}