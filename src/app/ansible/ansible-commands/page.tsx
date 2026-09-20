import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ansible Commands Cheat Sheet",
  description:
    "Essential Ansible commands for inventory, modules, playbooks, syntax checks, troubleshooting and server automation.",
};
export default function AnsibleCommands() {
    const commands = [
      {
        command: "ansible --version",
        description: "Check the installed Ansible version.",
      },
      {
        command: "ansible-inventory -i inventory.ini --list",
        description: "Display the inventory in JSON format.",
      },
      {
        command: "ansible all -i inventory.ini -m ping",
        description: "Test connectivity to all inventory hosts.",
      },
      {
        command: "ansible servers -i inventory.ini -m ping",
        description: "Test connectivity to hosts in the servers group.",
      },
      {
        command: "ansible servers -i inventory.ini -m command -a 'uptime'",
        description: "Run a command on remote servers.",
      },
      {
        command: "ansible servers -i inventory.ini -m shell -a 'df -h'",
        description: "Execute a shell command on remote servers.",
      },
      {
        command: "ansible servers -i inventory.ini -m setup",
        description: "Collect system facts from remote hosts.",
      },
      {
        command: "ansible-playbook -i inventory.ini site.yml",
        description: "Run an Ansible playbook.",
      },
      {
        command: "ansible-playbook --syntax-check site.yml",
        description: "Check a playbook for syntax errors without executing it.",
      },
      {
        command: "ansible-playbook --check site.yml",
        description: "Run a playbook in check mode to preview changes.",
      },
      {
        command: "ansible-playbook -i inventory.ini site.yml -v",
        description: "Run a playbook with verbose output.",
      },
      {
        command: "ansible servers -i inventory.ini -m shell -a 'free -h'",
        description: "Check memory usage on remote servers.",
      },
      {
        command: "ansible servers -i inventory.ini -m shell -a 'df -h /'",
        description: "Check root filesystem disk usage.",
      },
      {
        command: "ansible-galaxy collection list",
        description: "List installed Ansible collections.",
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
              Ansible
            </p>
  
            <h1 className="mt-3 text-4xl font-bold">
              Ansible Commands Cheat Sheet
            </h1>
  
            <p className="mt-4 max-w-3xl text-slate-400">
              Practical Ansible commands for inventory management, connectivity,
              ad-hoc commands, playbooks and troubleshooting.
            </p>
          </header>
  
          <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Essential Ansible Commands</h2>
  
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
            <h2 className="text-xl font-bold">Ansible Troubleshooting Workflow</h2>
  
            <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
  {`# Check Ansible installation
  ansible --version
  
  # Check inventory
  ansible-inventory -i inventory.ini --list
  
  # Test connectivity
  ansible all -i inventory.ini -m ping
  
  # Check server facts
  ansible servers -i inventory.ini -m setup
  
  # Test disk usage
  ansible servers -i inventory.ini -m shell -a "df -h"
  
  # Check playbook syntax
  ansible-playbook --syntax-check site.yml
  
  # Preview playbook changes
  ansible-playbook --check site.yml`}
            </pre>
          </section>
  
          <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold">DevOpsToolbox Tip</h2>
  
            <p className="mt-3 leading-7 text-slate-400">
              When troubleshooting Ansible, first verify the inventory and SSH
              connectivity with the
              <code className="mx-1 text-cyan-400">ping</code> module. If
              connectivity works, check facts, permissions and the playbook
              syntax before investigating the individual task.
            </p>
          </section>
        </div>
      </main>
    );
  }