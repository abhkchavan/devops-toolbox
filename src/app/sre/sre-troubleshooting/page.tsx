import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SRE Server Troubleshooting Guide",
  description:
    "Practical SRE troubleshooting for CPU, memory, disk, processes, services, logs and network issues on Linux servers.",
};
export default function SRETroubleshooting() {
    const checks = [
      {
        title: "1. Check CPU",
        command: "top",
        description:
          "Check whether CPU usage is unusually high and identify processes consuming CPU.",
      },
      {
        title: "2. Check Memory",
        command: "free -h",
        description:
          "Check total, used and available memory on the server.",
      },
      {
        title: "3. Check Disk",
        command: "df -h",
        description:
          "Check filesystem usage and identify disks approaching capacity.",
      },
      {
        title: "4. Check Processes",
        command: "ps aux",
        description:
          "List running processes and identify unexpected or resource-heavy processes.",
      },
      {
        title: "5. Check Services",
        command: "systemctl status <service>",
        description:
          "Verify whether the required system service is running.",
      },
      {
        title: "6. Check Logs",
        command: "journalctl -u <service>",
        description:
          "Review systemd logs for errors and service failures.",
      },
      {
        title: "7. Check Network",
        command: "ss -tulpn",
        description:
          "Check listening ports and identify which processes are using them.",
      },
      {
        title: "8. Check Connectivity",
        command: "ping <host>",
        description:
          "Test basic network connectivity to another host.",
      },
    ];
  
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <a
            href="/"
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            ← Back to DevOpsToolbox
          </a>
  
          <header className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              SRE
            </p>
  
            <h1 className="mt-3 text-4xl font-bold">
              SRE Server Troubleshooting Guide
            </h1>
  
            <p className="mt-4 max-w-3xl text-slate-400">
              A practical troubleshooting workflow for investigating CPU,
              memory, disk, processes, services, logs and network problems.
            </p>
          </header>
  
          <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">
              Production Troubleshooting Workflow
            </h2>
  
            <div className="mt-6 space-y-5">
              {checks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-slate-800 bg-slate-950 p-5"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
  
                  <code className="mt-3 block text-cyan-400">
                    {item.command}
                  </code>
  
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
  
          <section className="mt-8 rounded-xl border border-cyan-900 bg-slate-900 p-6">
            <h2 className="text-xl font-bold">
              Quick SRE Troubleshooting Checklist
            </h2>
  
            <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
  {`# CPU
  top
  
  # Memory
  free -h
  
  # Disk
  df -h
  
  # Processes
  ps aux
  
  # Listening ports
  ss -tulpn
  
  # Service status
  systemctl status <service>
  
  # Service logs
  journalctl -u <service>
  
  # Network connectivity
  ping <host>`}
            </pre>
          </section>
  
          <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold">DevOpsToolbox Tip</h2>
  
            <p className="mt-3 leading-7 text-slate-400">
              Avoid changing production systems immediately when an alert fires.
              First collect evidence: metrics, process information, logs,
              service status and network information. Then identify the likely
              cause before making a change.
            </p>
          </section>
        </div>
      </main>
    );
  }