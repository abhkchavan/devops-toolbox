import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linux Commands Cheat Sheet",
  description:
    "Essential Linux commands for files, processes, disk usage, services, logs, permissions and DevOps troubleshooting.",
};
export default function LinuxCommands() {
    const commands = [
      {
        command: "pwd",
        description: "Show the current working directory.",
      },
      {
        command: "ls",
        description: "List files and directories.",
      },
      {
        command: "ls -la",
        description: "List all files, including hidden files, with detailed information.",
      },
      {
        command: "cd /var/log",
        description: "Change to the /var/log directory.",
      },
      {
        command: "mkdir app",
        description: "Create a new directory named app.",
      },
      {
        command: "touch app.log",
        description: "Create an empty file named app.log.",
      },
      {
        command: "cp file.txt backup.txt",
        description: "Copy a file.",
      },
      {
        command: "mv old.txt new.txt",
        description: "Move or rename a file.",
      },
      {
        command: "rm file.txt",
        description: "Delete a file.",
      },
      {
        command: "cat app.log",
        description: "Display the contents of a file.",
      },
      {
        command: "less app.log",
        description: "Read a large file page by page.",
      },
      {
        command: "head -n 20 app.log",
        description: "Show the first 20 lines of a file.",
      },
      {
        command: "tail -n 20 app.log",
        description: "Show the last 20 lines of a file.",
      },
      {
        command: "tail -f app.log",
        description: "Continuously monitor new log entries.",
      },
      {
        command: "grep 'ERROR' app.log",
        description: "Search a file for lines containing ERROR.",
      },
      {
        command: "find /var/log -name '*.log'",
        description: "Find log files under /var/log.",
      },
      {
        command: "df -h",
        description: "Check disk space usage in human-readable format.",
      },
      {
        command: "du -sh /var/log",
        description: "Show the total size of a directory.",
      },
      {
        command: "free -h",
        description: "Check memory usage.",
      },
      {
        command: "top",
        description: "Monitor running processes and system resources.",
      },
      {
        command: "ps aux",
        description: "Display running processes.",
      },
      {
        command: "kill <PID>",
        description: "Terminate a process using its process ID.",
      },
      {
        command: "systemctl status nginx",
        description: "Check the status of a systemd service.",
      },
      {
        command: "systemctl restart nginx",
        description: "Restart a systemd service.",
      },
      {
        command: "journalctl -u nginx",
        description: "View logs for a systemd service.",
      },
      {
        command: "chmod 755 script.sh",
        description: "Change file permissions.",
      },
      {
        command: "chown user:user file.txt",
        description: "Change file ownership.",
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
              Linux
            </p>
  
            <h1 className="mt-3 text-4xl font-bold">
              Linux Commands Cheat Sheet
            </h1>
  
            <p className="mt-4 max-w-3xl text-slate-400">
              Essential Linux commands for system administration, DevOps,
              troubleshooting and SRE work.
            </p>
          </header>
  
          <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Essential Linux Commands</h2>
  
            <div className="mt-6 space-y-4">
              {commands.map((item) => (
                <div
                  key={item.command}
                  className="rounded-lg border border-slate-800 bg-slate-950 p-4"
                >
                  <code className="text-cyan-400">{item.command}</code>
  
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
  
          <section className="mt-8 rounded-xl border border-cyan-900 bg-slate-900 p-6">
            <h2 className="text-xl font-bold">DevOps Troubleshooting Workflow</h2>
  
            <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
  {`# Check disk
  df -h
  
  # Check memory
  free -h
  
  # Check running processes
  ps aux
  
  # Monitor system
  top
  
  # Check service
  systemctl status nginx
  
  # Check service logs
  journalctl -u nginx
  
  # Monitor application log
  tail -f /var/log/app.log`}
            </pre>
          </section>
  
          <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold">DevOpsToolbox Tip</h2>
  
            <p className="mt-3 leading-7 text-slate-400">
              When troubleshooting a Linux server, start by checking disk,
              memory, CPU, running processes, services and logs. This gives you
              a quick picture of the server&apos;s health before making changes.
            </p>
          </section>
        </div>
      </main>
    );
  }