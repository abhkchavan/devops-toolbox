import type { Metadata } from "next";
import LinuxCommandSearch from "./LinuxCommandSearch";
export const metadata: Metadata = {
  title: "Linux Commands Cheat Sheet",
  description:
    "Comprehensive Linux commands for files, permissions, users, processes, networking, disk, services, logs, SSH, packages and DevOps troubleshooting.",
};

type Command = {
  command: string;
  description: string;
};

type CommandSection = {
  title: string;
  commands: Command[];
};

const commandSections: CommandSection[] = [
  {
    title: "Linux System Information",
    commands: [
      {
        command: "uname -a",
        description: "Display detailed Linux kernel and system information.",
      },
      {
        command: "hostname",
        description: "Show the current system hostname.",
      },
      {
        command: "hostnamectl",
        description: "Display or manage hostname and operating system information.",
      },
      {
        command: "uptime",
        description: "Show how long the system has been running and load averages.",
      },
      {
        command: "whoami",
        description: "Display the currently logged-in username.",
      },
      {
        command: "id",
        description: "Display the current user's UID, GID and group memberships.",
      },
      {
        command: "date",
        description: "Display the current system date and time.",
      },
      {
        command: "timedatectl",
        description: "Display system time, timezone and time synchronization information.",
      },
      {
        command: "lsb_release -a",
        description: "Display Linux distribution information on systems that provide lsb_release.",
      },
    ],
  },
  {
    title: "Files and Directories",
    commands: [
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
        command: "cd ..",
        description: "Move to the parent directory.",
      },
      {
        command: "mkdir app",
        description: "Create a directory named app.",
      },
      {
        command: "mkdir -p app/config/logs",
        description: "Create a directory structure including missing parent directories.",
      },
      {
        command: "touch app.log",
        description: "Create an empty file or update a file's timestamp.",
      },
      {
        command: "cp file.txt backup.txt",
        description: "Copy a file.",
      },
      {
        command: "cp -r app backup-app",
        description: "Copy a directory and its contents recursively.",
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
        command: "rm -r app",
        description: "Delete a directory and its contents recursively.",
      },
      {
        command: "rm -rf app",
        description: "Forcefully remove a directory and its contents. Use carefully.",
      },
      {
        command: "file app.log",
        description: "Identify the type of a file.",
      },
      {
        command: "stat app.log",
        description: "Display detailed file metadata such as permissions, size and timestamps.",
      },
    ],
  },
  {
    title: "File Permissions and Ownership",
    commands: [
      {
        command: "ls -l",
        description: "View file permissions, ownership and other metadata.",
      },
      {
        command: "chmod 755 script.sh",
        description: "Set read, write and execute permissions using numeric mode.",
      },
      {
        command: "chmod +x script.sh",
        description: "Add execute permission to a file.",
      },
      {
        command: "chmod -R 755 app",
        description: "Recursively change permissions under a directory.",
      },
      {
        command: "chown user:user file.txt",
        description: "Change the owner and group of a file.",
      },
      {
        command: "chown -R user:user app",
        description: "Recursively change ownership of a directory and its contents.",
      },
      {
        command: "chgrp developers file.txt",
        description: "Change the group ownership of a file.",
      },
      {
        command: "umask",
        description: "Display the current default permission mask for newly created files.",
      },
    ],
  },
  {
    title: "Users and Groups",
    commands: [
      {
        command: "who",
        description: "Show users currently logged into the system.",
      },
      {
        command: "w",
        description: "Show logged-in users and their current activity.",
      },
      {
        command: "last",
        description: "Display recent login history.",
      },
      {
        command: "cat /etc/passwd",
        description: "View local user account information.",
      },
      {
        command: "cat /etc/group",
        description: "View local group information.",
      },
      {
        command: "sudo -l",
        description: "Show commands the current user is allowed to run with sudo.",
      },
      {
        command: "useradd devops",
        description: "Create a new user account.",
      },
      {
        command: "passwd devops",
        description: "Set or change a user's password.",
      },
      {
        command: "usermod -aG docker devops",
        description: "Add a user to an additional group without removing existing memberships.",
      },
      {
        command: "groupadd developers",
        description: "Create a new group.",
      },
    ],
  },
  {
    title: "Processes and Jobs",
    commands: [
      {
        command: "ps aux",
        description: "Display running processes for all users.",
      },
      {
        command: "ps -ef",
        description: "Display processes using the full-format listing.",
      },
      {
        command: "top",
        description: "Interactively monitor running processes and system resources.",
      },
      {
        command: "htop",
        description: "Interactive process viewer with a more user-friendly interface when installed.",
      },
      {
        command: "pgrep nginx",
        description: "Find process IDs matching a process name or pattern.",
      },
      {
        command: "pkill nginx",
        description: "Send a signal to processes matching a name or pattern.",
      },
      {
        command: "kill <PID>",
        description: "Send the default termination signal to a process.",
      },
      {
        command: "kill -9 <PID>",
        description: "Forcefully terminate a process when normal termination does not work.",
      },
      {
        command: "jobs",
        description: "List jobs running in the current shell.",
      },
      {
        command: "bg",
        description: "Resume a stopped shell job in the background.",
      },
      {
        command: "fg",
        description: "Bring a background shell job to the foreground.",
      },
      {
        command: "nohup ./app.sh &",
        description: "Run a command so it can continue after the terminal session ends.",
      },
    ],
  },
  {
    title: "Disk and Storage",
    commands: [
      {
        command: "df -h",
        description: "Check filesystem disk usage in human-readable format.",
      },
      {
        command: "df -i",
        description: "Check inode usage on mounted filesystems.",
      },
      {
        command: "du -sh /var/log",
        description: "Show the total size of a directory.",
      },
      {
        command: "du -sh *",
        description: "Show the size of items in the current directory.",
      },
      {
        command: "du -ah /var/log | sort -h",
        description: "Find large files and directories by sorting disk usage.",
      },
      {
        command: "lsblk",
        description: "List block devices such as disks and partitions.",
      },
      {
        command: "mount",
        description: "Display mounted filesystems.",
      },
      {
        command: "findmnt",
        description: "Display mounted filesystems in a structured view.",
      },
      {
        command: "free -h",
        description: "Check memory and swap usage in human-readable format.",
      },
    ],
  },
  {
    title: "Networking",
    commands: [
      {
        command: "ip addr",
        description: "Display network interfaces and IP addresses.",
      },
      {
        command: "ip route",
        description: "Display the system routing table.",
      },
      {
        command: "ip link",
        description: "Display and manage network interfaces.",
      },
      {
        command: "ss -tulpn",
        description: "Show listening TCP and UDP sockets with process information when permitted.",
      },
      {
        command: "ping google.com",
        description: "Test basic network connectivity to a host.",
      },
      {
        command: "curl https://example.com",
        description: "Make an HTTP request and display the response.",
      },
      {
        command: "curl -I https://example.com",
        description: "Fetch HTTP response headers without downloading the full body.",
      },
      {
        command: "wget https://example.com/file.zip",
        description: "Download a file from a URL.",
      },
      {
        command: "dig example.com",
        description: "Query DNS records when the dig utility is installed.",
      },
      {
        command: "nslookup example.com",
        description: "Query DNS information for a hostname.",
      },
      {
        command: "traceroute example.com",
        description: "Trace the network path to a destination when traceroute is installed.",
      },
    ],
  },
  {
    title: "Package Management",
    commands: [
      {
        command: "apt update",
        description: "Refresh package information on Debian and Ubuntu systems.",
      },
      {
        command: "apt upgrade",
        description: "Upgrade installed packages on Debian and Ubuntu systems.",
      },
      {
        command: "apt install nginx",
        description: "Install a package on Debian and Ubuntu systems.",
      },
      {
        command: "apt remove nginx",
        description: "Remove a package on Debian and Ubuntu systems.",
      },
      {
        command: "dnf install nginx",
        description: "Install a package on Fedora, RHEL-compatible and other DNF-based systems.",
      },
      {
        command: "dnf update",
        description: "Update packages on DNF-based systems.",
      },
      {
        command: "yum install nginx",
        description: "Install a package on older or compatible YUM-based systems.",
      },
      {
        command: "which nginx",
        description: "Show the executable path for a command when it is available in PATH.",
      },
      {
        command: "command -v nginx",
        description: "Check whether a command is available and show its resolved location.",
      },
    ],
  },
  {
    title: "systemd and Services",
    commands: [
      {
        command: "systemctl status nginx",
        description: "Check the status of a systemd service.",
      },
      {
        command: "systemctl start nginx",
        description: "Start a systemd service.",
      },
      {
        command: "systemctl stop nginx",
        description: "Stop a systemd service.",
      },
      {
        command: "systemctl restart nginx",
        description: "Restart a systemd service.",
      },
      {
        command: "systemctl reload nginx",
        description: "Reload a service configuration without fully restarting the service when supported.",
      },
      {
        command: "systemctl enable nginx",
        description: "Configure a service to start automatically during boot.",
      },
      {
        command: "systemctl disable nginx",
        description: "Prevent a service from automatically starting during boot.",
      },
      {
        command: "systemctl is-active nginx",
        description: "Check whether a service is currently active.",
      },
      {
        command: "systemctl list-units --type=service",
        description: "List loaded systemd service units.",
      },
    ],
  },
  {
    title: "Logs and Troubleshooting",
    commands: [
      {
        command: "journalctl",
        description: "View logs collected by systemd-journald.",
      },
      {
        command: "journalctl -u nginx",
        description: "View logs for a specific systemd service.",
      },
      {
        command: "journalctl -u nginx -f",
        description: "Follow new log entries for a systemd service.",
      },
      {
        command: "journalctl -b",
        description: "View logs from the current boot.",
      },
      {
        command: "dmesg",
        description: "Display kernel ring buffer messages.",
      },
      {
        command: "tail -f /var/log/app.log",
        description: "Continuously monitor new entries in an application log.",
      },
      {
        command: "grep 'ERROR' app.log",
        description: "Search a log file for lines containing ERROR.",
      },
      {
        command: "grep -i 'error' app.log",
        description: "Search for ERROR without case sensitivity.",
      },
      {
        command: "free -h",
        description: "Check available memory and swap.",
      },
      {
        command: "uptime",
        description: "Check system uptime and load averages.",
      },
    ],
  },
  {
    title: "Text Processing",
    commands: [
      {
        command: "cat app.log",
        description: "Display the contents of a file.",
      },
      {
        command: "less app.log",
        description: "Read a large file interactively page by page.",
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
        command: "grep 'ERROR' app.log",
        description: "Search for matching lines in a file.",
      },
      {
        command: "cut -d: -f1 /etc/passwd",
        description: "Extract the first colon-separated field from each line.",
      },
      {
        command: "sort names.txt",
        description: "Sort lines alphabetically.",
      },
      {
        command: "uniq names.txt",
        description: "Remove adjacent duplicate lines.",
      },
      {
        command: "wc -l app.log",
        description: "Count the number of lines in a file.",
      },
      {
        command: "awk '{print $1}' app.log",
        description: "Print the first whitespace-separated field from each line.",
      },
      {
        command: "sed 's/old/new/g' file.txt",
        description: "Replace text using sed without modifying the original file by default.",
      },
    ],
  },
  {
    title: "Search and Find",
    commands: [
      {
        command: "find /var/log -name '*.log'",
        description: "Find log files under /var/log.",
      },
      {
        command: "find . -type f -name '*.yaml'",
        description: "Find YAML files under the current directory.",
      },
      {
        command: "find . -type f -size +100M",
        description: "Find files larger than 100 MB.",
      },
      {
        command: "grep -R 'ERROR' /var/log",
        description: "Recursively search files under a directory for ERROR.",
      },
      {
        command: "grep -n 'ERROR' app.log",
        description: "Show matching lines together with their line numbers.",
      },
      {
        command: "locate nginx.conf",
        description: "Quickly search an indexed file database when locate is installed and its database is available.",
      },
      {
        command: "which docker",
        description: "Find the executable path for Docker if it is available in PATH.",
      },
    ],
  },
  {
    title: "SSH and Remote Administration",
    commands: [
      {
        command: "ssh user@server",
        description: "Connect to a remote Linux server using SSH.",
      },
      {
        command: "ssh -p 2222 user@server",
        description: "Connect to SSH using a custom port.",
      },
      {
        command: "ssh -i ~/.ssh/id_rsa user@server",
        description: "Connect using a specific private key.",
      },
      {
        command: "scp file.txt user@server:/tmp/",
        description: "Copy a local file to a remote server using SSH.",
      },
      {
        command: "scp user@server:/tmp/file.txt .",
        description: "Copy a remote file to the local directory.",
      },
      {
        command: "rsync -av ./app/ user@server:/opt/app/",
        description: "Synchronize files efficiently with a remote server.",
      },
      {
        command: "ssh-keygen -t ed25519",
        description: "Generate an Ed25519 SSH key pair.",
      },
    ],
  },
  {
    title: "Archives and Compression",
    commands: [
      {
        command: "tar -czf backup.tar.gz app/",
        description: "Create a gzip-compressed tar archive.",
      },
      {
        command: "tar -xzf backup.tar.gz",
        description: "Extract a gzip-compressed tar archive.",
      },
      {
        command: "tar -tf backup.tar.gz",
        description: "List the contents of a tar archive without extracting it.",
      },
      {
        command: "gzip app.log",
        description: "Compress a file using gzip.",
      },
      {
        command: "gunzip app.log.gz",
        description: "Decompress a gzip file.",
      },
      {
        command: "zip -r backup.zip app/",
        description: "Create a ZIP archive recursively.",
      },
      {
        command: "unzip backup.zip",
        description: "Extract a ZIP archive.",
      },
    ],
  },
  {
    title: "Environment Variables and Shell",
    commands: [
      {
        command: "env",
        description: "Display environment variables.",
      },
      {
        command: "printenv PATH",
        description: "Display the value of a specific environment variable.",
      },
      {
        command: "export APP_ENV=production",
        description: "Set an environment variable for the current shell and its child processes.",
      },
      {
        command: "echo $PATH",
        description: "Display the current executable search path.",
      },
      {
        command: "echo $HOME",
        description: "Display the current user's home directory.",
      },
      {
        command: "source ~/.bashrc",
        description: "Reload shell configuration into the current shell.",
      },
      {
        command: "history",
        description: "Display previously executed shell commands.",
      },
      {
        command: "alias ll='ls -la'",
        description: "Create a shell alias for a command.",
      },
    ],
  },
  {
    title: "Cron and Scheduling",
    commands: [
      {
        command: "crontab -l",
        description: "List the current user's cron jobs.",
      },
      {
        command: "crontab -e",
        description: "Edit the current user's cron jobs.",
      },
      {
        command: "crontab -r",
        description: "Remove the current user's cron table. Use carefully.",
      },
      {
        command: "systemctl list-timers",
        description: "List systemd timers configured on the system.",
      },
      {
        command: "date",
        description: "Check the current server date and time before troubleshooting scheduled tasks.",
      },
    ],
  },
  {
    title: "Performance and Monitoring",
    commands: [
      {
        command: "top",
        description: "Monitor CPU, memory and running processes interactively.",
      },
      {
        command: "free -h",
        description: "Display memory and swap usage.",
      },
      {
        command: "vmstat 1",
        description: "Display system performance statistics at regular intervals.",
      },
      {
        command: "iostat",
        description: "Display CPU and I/O statistics when sysstat is installed.",
      },
      {
        command: "uptime",
        description: "Display load averages and system uptime.",
      },
      {
        command: "df -h",
        description: "Check filesystem capacity.",
      },
      {
        command: "du -sh *",
        description: "Identify large files and directories in the current location.",
      },
    ],
  },
  {
    title: "Useful DevOps Commands",
    commands: [
      {
        command: "watch -n 2 'kubectl get pods'",
        description: "Repeatedly run a command at a fixed interval when watch is available.",
      },
      {
        command: "history | grep docker",
        description: "Search shell history for previously used Docker commands.",
      },
      {
        command: "curl -I http://localhost:8080",
        description: "Quickly check HTTP response headers from a local application.",
      },
      {
        command: "ss -lntp",
        description: "Check listening TCP ports and associated processes when permitted.",
      },
      {
        command: "ps aux --sort=-%cpu | head",
        description: "Show processes consuming the most CPU.",
      },
      {
        command: "ps aux --sort=-%mem | head",
        description: "Show processes consuming the most memory.",
      },
      {
        command: "df -h | sort -k5 -h",
        description: "Sort filesystem usage to help identify heavily used filesystems.",
      },
      {
        command: "grep -R 'connection refused' /var/log",
        description: "Search logs for a common service connectivity error.",
      },
    ],
  },
  {
    title: "Quick Troubleshooting",
    commands: [
      {
        command: "df -h",
        description: "Check whether a full filesystem is causing application failures.",
      },
      {
        command: "free -h",
        description: "Check whether memory or swap pressure is present.",
      },
      {
        command: "top",
        description: "Check CPU and process activity.",
      },
      {
        command: "ps aux",
        description: "Inspect currently running processes.",
      },
      {
        command: "ss -tulpn",
        description: "Check listening ports and network services.",
      },
      {
        command: "systemctl --failed",
        description: "List systemd units that are currently in a failed state.",
      },
      {
        command: "journalctl -p err -b",
        description: "View error-level journal messages from the current boot.",
      },
      {
        command: "dmesg -T | tail -n 50",
        description: "Inspect recent kernel messages with human-readable timestamps.",
      },
    ],
  },
];

export default function LinuxCommands() {
  const totalCommands = commandSections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <a
          href="/"
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Back to DevOpsCommands
        </a>

        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Linux
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Linux Commands Cheat Sheet
          </h1>

          <p className="mt-4 max-w-3xl text-slate-400">
            Practical Linux commands for system administration, DevOps,
            troubleshooting, automation and SRE work.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
              {commandSections.length} categories
            </span>

            <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
              {totalCommands}+ commands
            </span>
          </div>
        </header>

        <LinuxCommandSearch sections={commandSections} />

        <section className="mt-12 rounded-xl border border-cyan-900 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">DevOps Troubleshooting Workflow</h2>

          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
{`# 1. Check disk
df -h

# 2. Check memory
free -h

# 3. Check CPU and processes
top
ps aux

# 4. Check listening ports
ss -tulpn

# 5. Check failed services
systemctl --failed

# 6. Check service status
systemctl status nginx

# 7. Check service logs
journalctl -u nginx

# 8. Check recent system errors
journalctl -p err -b

# 9. Monitor application logs
tail -f /var/log/app.log`}
          </pre>
        </section>

        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">DevOpsCommands Tip</h2>

          <p className="mt-3 leading-7 text-slate-400">
            When troubleshooting a Linux server, start with the basics:
            disk, memory, CPU, processes, network ports, services and logs.
            Establish what is failing before making changes to the system.
          </p>
        </section>

        <footer className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          Use commands carefully, especially destructive commands such as
          rm -rf, kill -9, chmod -R and chown -R. Always verify the target
          before running commands on production systems.
        </footer>
      </div>
    </main>
  );
}