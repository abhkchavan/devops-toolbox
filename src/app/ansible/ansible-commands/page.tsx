import type { Metadata } from "next";
import AnsibleCommandSearch from "./AnsibleCommandSearch";
export const metadata: Metadata = {
  title: "Ansible Commands Cheat Sheet | Ansible CLI Reference",
  description:
    "Practical Ansible commands for inventory, ad-hoc automation, modules, playbooks, variables, facts, roles, collections, troubleshooting and server automation.",
};

const commandSections = [
  {
    title: "1. Ansible Information",
    commands: [
      {
        command: "ansible --version",
        description: "Displays the installed Ansible version and configuration paths.",
      },
      {
        command: "ansible --help",
        description: "Displays help for the Ansible ad-hoc command.",
      },
      {
        command: "ansible-config list",
        description: "Lists available Ansible configuration settings.",
      },
      {
        command: "ansible-config dump",
        description: "Displays the active Ansible configuration values.",
      },
    ],
  },
  {
    title: "2. Inventory Management",
    commands: [
      {
        command: "ansible-inventory -i inventory.ini --list",
        description: "Displays the inventory in JSON format.",
      },
      {
        command: "ansible-inventory -i inventory.ini --graph",
        description: "Displays inventory groups and hosts as a tree.",
      },
      {
        command: "ansible-inventory -i inventory.ini --host <host>",
        description: "Displays variables associated with a specific inventory host.",
      },
      {
        command: "ansible all -i inventory.ini --list-hosts",
        description: "Lists all hosts that match the selected inventory pattern.",
      },
      {
        command: "ansible servers -i inventory.ini --list-hosts",
        description: "Lists hosts belonging to the servers group.",
      },
    ],
  },
  {
    title: "3. Connectivity and Ad-Hoc Commands",
    commands: [
      {
        command: "ansible all -i inventory.ini -m ping",
        description: "Tests Ansible connectivity to all inventory hosts.",
      },
      {
        command: "ansible servers -i inventory.ini -m ping",
        description: "Tests connectivity to hosts in the servers group.",
      },
      {
        command: "ansible servers -i inventory.ini -m command -a 'uptime'",
        description: "Runs a command on remote servers using the command module.",
      },
      {
        command: "ansible servers -i inventory.ini -m shell -a 'df -h'",
        description: "Runs a shell command on remote servers.",
      },
      {
        command: "ansible servers -i inventory.ini -m setup",
        description: "Collects system facts from remote hosts.",
      },
      {
        command: "ansible servers -i inventory.ini -m gather_facts",
        description: "Runs fact gathering against the selected hosts.",
      },
    ],
  },
  {
    title: "4. Common Ansible Modules",
    commands: [
      {
        command: "ansible servers -i inventory.ini -m package -a 'name=nginx state=present'",
        description: "Installs a package using the package module.",
      },
      {
        command: "ansible servers -i inventory.ini -m service -a 'name=nginx state=started'",
        description: "Starts or manages a service.",
      },
      {
        command: "ansible servers -i inventory.ini -m file -a 'path=/tmp/test state=touch'",
        description: "Creates or manages files and directories.",
      },
      {
        command: "ansible servers -i inventory.ini -m copy -a 'src=app.conf dest=/etc/app.conf'",
        description: "Copies a file from the control node to remote hosts.",
      },
      {
        command: "ansible servers -i inventory.ini -m command -a 'whoami'",
        description: "Runs a command without shell-specific processing.",
      },
      {
        command: "ansible servers -i inventory.ini -m shell -a 'echo $HOME'",
        description: "Runs a command through the remote shell.",
      },
    ],
  },
  {
    title: "5. Playbooks",
    commands: [
      {
        command: "ansible-playbook -i inventory.ini site.yml",
        description: "Runs an Ansible playbook against the specified inventory.",
      },
      {
        command: "ansible-playbook --syntax-check site.yml",
        description: "Checks playbook syntax without executing tasks.",
      },
      {
        command: "ansible-playbook --check site.yml",
        description: "Runs the playbook in check mode to preview changes.",
      },
      {
        command: "ansible-playbook --diff site.yml",
        description: "Shows differences for tasks that modify files.",
      },
      {
        command: "ansible-playbook -i inventory.ini site.yml -v",
        description: "Runs a playbook with verbose output.",
      },
      {
        command: "ansible-playbook -i inventory.ini site.yml -vvv",
        description: "Runs a playbook with highly detailed debugging output.",
      },
      {
        command: "ansible-playbook -i inventory.ini site.yml --limit servers",
        description: "Restricts playbook execution to the selected inventory group or hosts.",
      },
    ],
  },
  {
    title: "6. Tags and Task Control",
    commands: [
      {
        command: "ansible-playbook site.yml --list-tasks",
        description: "Lists the tasks that would be executed by a playbook.",
      },
      {
        command: "ansible-playbook site.yml --list-tags",
        description: "Lists tags available in the playbook.",
      },
      {
        command: "ansible-playbook site.yml --tags deploy",
        description: "Runs only tasks matching the specified tag.",
      },
      {
        command: "ansible-playbook site.yml --skip-tags deploy",
        description: "Skips tasks matching the specified tag.",
      },
      {
        command: "ansible-playbook site.yml --start-at-task 'Install Nginx'",
        description: "Starts playbook execution at a specified task.",
      },
    ],
  },
  {
    title: "7. Variables and Facts",
    commands: [
      {
        command: "ansible servers -i inventory.ini -m debug -a 'var=hostvars[inventory_hostname]'",
        description: "Displays host variables available to the selected host.",
      },
      {
        command: "ansible servers -i inventory.ini -m debug -a 'var=ansible_facts'",
        description: "Displays gathered Ansible facts.",
      },
      {
        command: "ansible-playbook site.yml -e 'app_env=production'",
        description: "Passes an extra variable to a playbook.",
      },
      {
        command: "ansible-playbook site.yml -e '@vars.yml'",
        description: "Loads extra variables from a YAML file.",
      },
    ],
  },
  {
    title: "8. Privilege Escalation",
    commands: [
      {
        command: "ansible servers -i inventory.ini -b -m command -a 'whoami'",
        description: "Runs a command with privilege escalation.",
      },
      {
        command: "ansible-playbook site.yml --become",
        description: "Enables privilege escalation for a playbook.",
      },
      {
        command: "ansible-playbook site.yml --ask-become-pass",
        description: "Prompts for the privilege escalation password.",
      },
    ],
  },
  {
    title: "9. Roles and Collections",
    commands: [
      {
        command: "ansible-galaxy role list",
        description: "Lists installed Ansible roles.",
      },
      {
        command: "ansible-galaxy role install <role>",
        description: "Installs an Ansible role from Ansible Galaxy or another configured source.",
      },
      {
        command: "ansible-galaxy collection list",
        description: "Lists installed Ansible collections.",
      },
      {
        command: "ansible-galaxy collection install <collection>",
        description: "Installs an Ansible collection.",
      },
      {
        command: "ansible-galaxy init myrole",
        description: "Creates the standard directory structure for a new role.",
      },
    ],
  },
  {
    title: "10. Vault and Secrets",
    commands: [
      {
        command: "ansible-vault create secrets.yml",
        description: "Creates a new encrypted Ansible Vault file.",
      },
      {
        command: "ansible-vault view secrets.yml",
        description: "Displays the decrypted contents of a Vault file.",
      },
      {
        command: "ansible-vault edit secrets.yml",
        description: "Edits an encrypted Vault file.",
      },
      {
        command: "ansible-vault encrypt vars.yml",
        description: "Encrypts an existing YAML file with Ansible Vault.",
      },
      {
        command: "ansible-vault decrypt secrets.yml",
        description: "Decrypts an Ansible Vault file.",
      },
      {
        command: "ansible-playbook site.yml --ask-vault-pass",
        description: "Prompts for the Vault password when running a playbook.",
      },
    ],
  },
  {
    title: "11. SSH and Connection Options",
    commands: [
      {
        command: "ansible servers -i inventory.ini -u ubuntu -m ping",
        description: "Connects to remote hosts using a specified SSH user.",
      },
      {
        command: "ansible servers -i inventory.ini --private-key ~/.ssh/id_rsa -m ping",
        description: "Uses a specific SSH private key for authentication.",
      },
      {
        command: "ansible servers -i inventory.ini -c local -m ping",
        description: "Uses the local connection method instead of SSH.",
      },
      {
        command: "ansible servers -i inventory.ini -m ping -vvvv",
        description: "Enables very detailed connection debugging output.",
      },
    ],
  },
  {
    title: "12. Server Troubleshooting",
    commands: [
      {
        command: "ansible servers -i inventory.ini -m shell -a 'uptime'",
        description: "Checks system uptime on remote servers.",
      },
      {
        command: "ansible servers -i inventory.ini -m shell -a 'free -h'",
        description: "Checks memory usage on remote servers.",
      },
      {
        command: "ansible servers -i inventory.ini -m shell -a 'df -h /'",
        description: "Checks root filesystem disk usage.",
      },
      {
        command: "ansible servers -i inventory.ini -m shell -a 'systemctl --failed'",
        description: "Lists failed systemd services.",
      },
      {
        command: "ansible servers -i inventory.ini -m shell -a 'ss -tulpn'",
        description: "Displays listening TCP and UDP ports.",
      },
    ],
  },
  {
    title: "13. Performance and Execution",
    commands: [
      {
        command: "ansible-playbook site.yml -f 10",
        description: "Sets the number of parallel forks used during playbook execution.",
      },
      {
        command: "ansible-playbook site.yml --flush-cache",
        description: "Clears the fact cache before playbook execution when a fact cache is configured.",
      },
      {
        command: "ansible-playbook site.yml --step",
        description: "Runs a playbook interactively, prompting before each task.",
      },
    ],
  },
  {
    title: "14. Troubleshooting",
    commands: [
      {
        command: "ansible-inventory -i inventory.ini --graph",
        description: "Verify that inventory groups and hosts are structured as expected.",
      },
      {
        command: "ansible all -i inventory.ini -m ping",
        description: "Verify SSH connectivity and Ansible access to hosts.",
      },
      {
        command: "ansible servers -i inventory.ini -m setup",
        description: "Verify that Ansible can collect facts from remote hosts.",
      },
      {
        command: "ansible-playbook --syntax-check site.yml",
        description: "Check the playbook for syntax errors before execution.",
      },
      {
        command: "ansible-playbook site.yml -vvv",
        description: "Use detailed output to investigate task and connection failures.",
      },
      {
        command: "ansible-playbook site.yml --check --diff",
        description: "Preview configuration changes and file differences without applying them.",
      },
    ],
  },
];

export default function AnsibleCommands() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
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

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Ansible Commands Cheat Sheet
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            A practical Ansible CLI reference for inventory management,
            connectivity, modules, playbooks, variables, roles, Vault,
            troubleshooting and server automation.
          </p>
        </header>

        <section className="mt-10 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
          <h2 className="text-xl font-bold">Ansible Command Syntax</h2>

          <div className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4">
            <code className="whitespace-nowrap text-cyan-400">
              ansible [pattern] -i [inventory] -m [module] -a [arguments]
            </code>
          </div>

          <p className="mt-4 leading-7 text-slate-400">
            Use ad-hoc commands for quick operations and
            <code className="mx-1 text-cyan-400">ansible-playbook</code>
            for repeatable automation workflows.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Quick Ansible Command Reference
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "ansible --version",
              "ansible-inventory -i inventory.ini --list",
              "ansible all -i inventory.ini -m ping",
              "ansible servers -i inventory.ini -m setup",
              "ansible-playbook -i inventory.ini site.yml",
              "ansible-playbook --syntax-check site.yml",
              "ansible-playbook --check site.yml",
              "ansible-playbook site.yml -vvv",
              "ansible-galaxy collection list",
              "ansible-vault view secrets.yml",
              "ansible servers -i inventory.ini -m shell -a 'df -h'",
              "ansible-playbook site.yml --check --diff",
            ].map((command) => (
              <div
                key={command}
                className="rounded-lg border border-slate-800 bg-slate-900 p-4"
              >
                <code className="break-all text-sm text-cyan-400">
                  {command}
                </code>
              </div>
            ))}
          </div>
        </section>

        <AnsibleCommandSearch sections={commandSections} />

        <section className="mt-12 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Ansible Troubleshooting Workflow
          </h2>

          <div className="mt-5 overflow-x-auto rounded-xl bg-slate-950 p-6">
            <pre className="text-sm leading-8 text-slate-300">
{`# Check Ansible installation
ansible --version

# Check inventory
ansible-inventory -i inventory.ini --graph

# Test connectivity
ansible all -i inventory.ini -m ping

# Check server facts
ansible servers -i inventory.ini -m setup

# Check disk usage
ansible servers -i inventory.ini -m shell -a "df -h"

# Check failed services
ansible servers -i inventory.ini -m shell -a "systemctl --failed"

# Check playbook syntax
ansible-playbook --syntax-check site.yml

# Preview changes
ansible-playbook site.yml --check --diff

# Run with detailed output
ansible-playbook site.yml -vvv`}
            </pre>
          </div>

          <p className="mt-5 leading-7 text-slate-400">
            Start with the inventory and
            <code className="mx-1 text-cyan-400">ping</code>
            module. If connectivity works, inspect facts, permissions,
            variables and playbook syntax before troubleshooting individual
            tasks.
          </p>
        </section>

        <section className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
          <h2 className="text-xl font-bold">DevOpsToolbox Tip</h2>

          <p className="mt-3 leading-7 text-slate-400">
            For safer automation, validate a playbook with
            <code className="mx-1 text-cyan-400">--syntax-check</code>
            first, then use
            <code className="mx-1 text-cyan-400">--check --diff</code>
            to preview changes before applying them to servers.
          </p>
        </section>

        <footer className="mt-12 border-t border-slate-800 pt-6">
          <p className="text-sm text-slate-500">
            Ansible command reference for DevOps, SRE and infrastructure
            automation workflows.
          </p>
        </footer>
      </div>
    </main>
  );
}