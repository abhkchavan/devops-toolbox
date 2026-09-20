[1mdiff --git a/src/app/sre/sre-troubleshooting/page.tsx b/src/app/sre/sre-troubleshooting/page.tsx[m
[1mindex 92417dd..304f6fd 100644[m
[1m--- a/src/app/sre/sre-troubleshooting/page.tsx[m
[1m+++ b/src/app/sre/sre-troubleshooting/page.tsx[m
[36m@@ -1,155 +1,132 @@[m
[31m-import type { Metadata } from "next";[m
[32m+[m[32m"use client";[m
 [m
[31m-export const metadata: Metadata = {[m
[31m-  title: "SRE Server Troubleshooting Guide",[m
[31m-  description:[m
[31m-    "Practical SRE troubleshooting for CPU, memory, disk, processes, services, logs and network issues on Linux servers.",[m
[32m+[m[32mimport { useMemo, useState } from "react";[m
[32m+[m
[32m+[m[32mtype Command = {[m
[32m+[m[32m  command: string;[m
[32m+[m[32m  description: string;[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mtype CommandSection = {[m
[32m+[m[32m  title: string;[m
[32m+[m[32m  commands: Command[];[m
 };[m
[31m-export default function SRETroubleshooting() {[m
[31m-    const checks = [[m
[31m-      {[m
[31m-        title: "1. Check CPU",[m
[31m-        command: "top",[m
[31m-        description:[m
[31m-          "Check whether CPU usage is unusually high and identify processes consuming CPU.",[m
[31m-      },[m
[31m-      {[m
[31m-        title: "2. Check Memory",[m
[31m-        command: "free -h",[m
[31m-        description:[m
[31m-          "Check total, used and available memory on the server.",[m
[31m-      },[m
[31m-      {[m
[31m-        title: "3. Check Disk",[m
[31m-        command: "df -h",[m
[31m-        description:[m
[31m-          "Check filesystem usage and identify disks approaching capacity.",[m
[31m-      },[m
[31m-      {[m
[31m-        title: "4. Check Processes",[m
[31m-        command: "ps aux",[m
[31m-        description:[m
[31m-          "List running processes and identify unexpected or resource-heavy processes.",[m
[31m-      },[m
[31m-      {[m
[31m-        title: "5. Check Services",[m
[31m-        command: "systemctl status <service>",[m
[31m-        description:[m
[31m-          "Verify whether the required system service is running.",[m
[31m-      },[m
[31m-      {[m
[31m-        title: "6. Check Logs",[m
[31m-        command: "journalctl -u <service>",[m
[31m-        description:[m
[31m-          "Review systemd logs for errors and service failures.",[m
[31m-      },[m
[31m-      {[m
[31m-        title: "7. Check Network",[m
[31m-        command: "ss -tulpn",[m
[31m-        description:[m
[31m-          "Check listening ports and identify which processes are using them.",[m
[31m-      },[m
[31m-      {[m
[31m-        title: "8. Check Connectivity",[m
[31m-        command: "ping <host>",[m
[31m-        description:[m
[31m-          "Test basic network connectivity to another host.",[m
[31m-      },[m
[31m-    ];[m
[31m-  [m
[31m-    return ([m
[31m-      <main className="min-h-screen bg-slate-950 text-white">[m
[31m-        <div className="mx-auto max-w-5xl px-6 py-12">[m
[31m-          <a[m
[31m-            href="/"[m
[31m-            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"[m
[31m-          >[m
[31m-            ← Back to DevOpsToolbox[m
[31m-          </a>[m
[31m-  [m
[31m-          <header className="mt-8">[m
[31m-            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">[m
[31m-              SRE[m
[31m-            </p>[m
[31m-  [m
[31m-            <h1 className="mt-3 text-4xl font-bold">[m
[31m-              SRE Server Troubleshooting Guide[m
[31m-            </h1>[m
[31m-  [m
[31m-            <p className="mt-4 max-w-3xl text-slate-400">[m
[31m-              A practical troubleshooting workflow for investigating CPU,[m
[31m-              memory, disk, processes, services, logs and network problems.[m
[31m-            </p>[m
[31m-          </header>[m
[31m-  [m
[31m-          <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">[m
[31m-            <h2 className="text-2xl font-bold">[m
[31m-              Production Troubleshooting Workflow[m
[31m-            </h2>[m
[31m-  [m
[31m-            <div className="mt-6 space-y-5">[m
[31m-              {checks.map((item) => ([m
[32m+[m
[32m+[m[32mtype Props = {[m
[32m+[m[32m  sections: CommandSection[];[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default function DockerCommandSearch({ sections }: Props) {[m
[32m+[m[32m  const [search, setSearch] = useState("");[m
[32m+[m
[32m+[m[32m  const filteredSections = useMemo(() => {[m
[32m+[m[32m    const query = search.trim().toLowerCase();[m
[32m+[m
[32m+[m[32m    if (!query) {[m
[32m+[m[32m      return sections;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    return sections[m
[32m+[m[32m      .map((section) => {[m
[32m+[m[32m        const sectionMatches = section.title.toLowerCase().includes(query);[m
[32m+[m
[32m+[m[32m        const commands = section.commands.filter([m
[32m+[m[32m          (item) =>[m
[32m+[m[32m            item.command.toLowerCase().includes(query) ||[m
[32m+[m[32m            item.description.toLowerCase().includes(query),[m
[32m+[m[32m        );[m
[32m+[m
[32m+[m[32m        return {[m
[32m+[m[32m          ...section,[m
[32m+[m[32m          commands: sectionMatches ? section.commands : commands,[m
[32m+[m[32m        };[m
[32m+[m[32m      })[m
[32m+[m[32m      .filter((section) => section.commands.length > 0);[m
[32m+[m[32m  }, [search, sections]);[m
[32m+[m
[32m+[m[32m  const commandCount = search[m
[32m+[m[32m    ? filteredSections.reduce([m
[32m+[m[32m        (total, section) => total + section.commands.length,[m
[32m+[m[32m        0,[m
[32m+[m[32m      )[m
[32m+[m[32m    : sections.reduce([m
[32m+[m[32m        (total, section) => total + section.commands.length,[m
[32m+[m[32m        0,[m
[32m+[m[32m      );[m
[32m+[m
[32m+[m[32m  return ([m
[32m+[m[32m    <>[m
[32m+[m[32m      <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-5">[m
[32m+[m[32m        <label[m
[32m+[m[32m          htmlFor="docker-search"[m
[32m+[m[32m          className="text-sm font-semibold text-slate-300"[m
[32m+[m[32m        >[m
[32m+[m[32m          Search Docker commands[m
[32m+[m[32m        </label>[m
[32m+[m
[32m+[m[32m        <input[m
[32m+[m[32m          id="docker-search"[m
[32m+[m[32m          type="search"[m
[32m+[m[32m          value={search}[m
[32m+[m[32m          onChange={(event) => setSearch(event.target.value)}[m
[32m+[m[32m          placeholder="Search containers, images, volumes, networks..."[m
[32m+[m[32m          className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"[m
[32m+[m[32m        />[m
[32m+[m
[32m+[m[32m        <div className="mt-3 flex items-center justify-between text-sm">[m
[32m+[m[32m          <span className="text-slate-500">[m
[32m+[m[32m            {search[m
[32m+[m[32m              ? `${commandCount} matching commands`[m
[32m+[m[32m              : `${commandCount} commands`}[m
[32m+[m[32m          </span>[m
[32m+[m
[32m+[m[32m          {search && ([m
[32m+[m[32m            <button[m
[32m+[m[32m              type="button"[m
[32m+[m[32m              onClick={() => setSearch("")}[m
[32m+[m[32m              className="text-cyan-400 hover:underline"[m
[32m+[m[32m            >[m
[32m+[m[32m              Clear search[m
[32m+[m[32m            </button>[m
[32m+[m[32m          )}[m
[32m+[m[32m        </div>[m
[32m+[m[32m      </section>[m
[32m+[m
[32m+[m[32m      {search && filteredSections.length === 0 ? ([m
[32m+[m[32m        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">[m
[32m+[m[32m          <h2 className="text-xl font-bold">No commands found</h2>[m
[32m+[m
[32m+[m[32m          <p className="mt-3 text-slate-400">[m
[32m+[m[32m            Try searching for containers, images, logs, networks, volumes,[m
[32m+[m[32m            Compose, Dockerfile or troubleshooting.[m
[32m+[m[32m          </p>[m
[32m+[m[32m        </section>[m
[32m+[m[32m      ) : ([m
[32m+[m[32m        filteredSections.map((section) => ([m
[32m+[m[32m          <section key={section.title} className="mt-12">[m
[32m+[m[32m            <h2 className="text-2xl font-bold">{section.title}</h2>[m
[32m+[m
[32m+[m[32m            <div className="mt-5 space-y-4">[m
[32m+[m[32m              {section.commands.map((item) => ([m
                 <div[m
[31m-                  key={item.title}[m
[31m-                  className="rounded-lg border border-slate-800 bg-slate-950 p-5"[m
[32m+[m[32m                  key={item.command}[m
[32m+[m[32m                  className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/30"[m
                 >[m
[31m-                  <h3 className="text-lg font-semibold">{item.title}</h3>[m
[31m-  [m
[31m-                  <code className="mt-3 block text-cyan-400">[m
[31m-                    {item.command}[m
[31m-                  </code>[m
[31m-  [m
[31m-                  <p className="mt-3 text-sm leading-6 text-slate-400">[m
[32m+[m[32m                  <div className="overflow-x-auto rounded-lg bg-slate-950 p-4">[m
[32m+[m[32m                    <code className="whitespace-nowrap text-sm text-cyan-400">[m
[32m+[m[32m                      {item.command}[m
[32m+[m[32m                    </code>[m
[32m+[m[32m                  </div>[m
[32m+[m
[32m+[m[32m                  <p className="mt-4 leading-7 text-slate-400">[m
                     {item.description}[m
                   </p>[m
                 </div>[m
               ))}[m
             </div>[m
           </section>[m
[31m-  [m
[31m-          <section className="mt-8 rounded-xl border border-cyan-900 bg-slate-900 p-6">[m
[31m-            <h2 className="text-xl font-bold">[m
[31m-              Quick SRE Troubleshooting Checklist[m
[31m-            </h2>[m
[31m-  [m
[31m-            <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">[m
[31m-  {`# CPU[m
[31m-  top[m
[31m-  [m
[31m-  # Memory[m
[31m-  free -h[m
[31m-  [m
[31m-  # Disk[m
[31m-  df -h[m
[31m-  [m
[31m-  # Processes[m
[31m-  ps aux[m
[31m-  [m
[31m-  # Listening ports[m
[31m-  ss -tulpn[m
[31m-  [m
[31m-  # Service status[m
[31m-  systemctl status <service>[m
[31m-  [m
[31m-  # Service logs[m
[31m-  journalctl -u <service>[m
[31m-  [m
[31m-  # Network connectivity[m
[31m-  ping <host>`}[m
[31m-            </pre>[m
[31m-          </section>[m
[31m-  [m
[31m-          <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">[m
[31m-            <h2 className="text-xl font-bold">DevOpsToolbox Tip</h2>[m
[31m-  [m
[31m-            <p className="mt-3 leading-7 text-slate-400">[m
[31m-              Avoid changing production systems immediately when an alert fires.[m
[31m-              First collect evidence: metrics, process information, logs,[m
[31m-              service status and network information. Then identify the likely[m
[31m-              cause before making a change.[m
[31m-            </p>[m
[31m-          </section>[m
[31m-        </div>[m
[31m-      </main>[m
[31m-    );[m
[31m-  }[m
\ No newline at end of file[m
[32m+[m[32m        ))[m
[32m+[m[32m      )}[m
[32m+[m[32m    </>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
\ No newline at end of file[m
