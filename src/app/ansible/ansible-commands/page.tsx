import type { Metadata } from "next";
import AnsibleCommandSearch from "./AnsibleCommandSearch";

export const metadata: Metadata = {
  title: "Ansible Commands Cheat Sheet | Ansible CLI Reference",
  description:
    "Practical Ansible commands for inventory, ad-hoc automation, modules, playbooks, variables, facts, roles, collections, templates, Vault, troubleshooting and server automation.",
};

const commandSections = [
  {
    title: "1. Ansible Information",
    commands: [
      {
        command: "ansible --version",
        description:
          "Displays the installed Ansible version and configuration paths.",
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
      {
        command: "ansible-config view",
        description: "Displays the current ansible.cfg configuration file.",
      },
      {
        command: "ansible-doc ping",
        description: "Displays documentation for the ping module.",
      },
      {
        command: "ansible-doc -l",
        description: "Lists available Ansible modules.",
      },
      {
        command: "ansible-doc -s ansible.builtin.copy",
        description:
          "Displays the module arguments and usage examples for the copy module.",
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
        description:
          "Displays variables associated with a specific inventory host.",
      },
      {
        command: "ansible all -i inventory.ini --list-hosts",
        description:
          "Lists all hosts that match the selected inventory pattern.",
      },
      {
        command: "ansible servers -i inventory.ini --list-hosts",
        description: "Lists hosts belonging to the servers group.",
      },
      {
        command: "ansible all -i inventory.ini -m ping",
        description:
          "Runs a module against all hosts in the specified inventory.",
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
        command:
          "ansible servers -i inventory.ini -m command -a 'uptime'",
        description:
          "Runs a command on remote servers using the command module.",
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
      {
        command: "ansible servers -i inventory.ini -m command -a 'hostname'",
        description: "Displays the hostname of remote servers.",
      },
      {
        command: "ansible servers -i inventory.ini -m command -a 'whoami'",
        description: "Displays the remote execution user.",
      },
    ],
  },
  {
    title: "4. Common Ansible Modules",
    commands: [
      {
        command:
          "ansible servers -i inventory.ini -m package -a 'name=nginx state=present'",
        description: "Installs a package using the package module.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m service -a 'name=nginx state=started'",
        description: "Starts or manages a service.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m file -a 'path=/tmp/test state=touch'",
        description: "Creates or manages files and directories.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m copy -a 'src=app.conf dest=/etc/app.conf'",
        description:
          "Copies a file from the control node to remote hosts.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m template -a 'src=app.conf.j2 dest=/etc/app.conf'",
        description:
          "Renders a Jinja2 template and copies it to remote hosts.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m command -a 'whoami'",
        description:
          "Runs a command without shell-specific processing.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m shell -a 'echo $HOME'",
        description: "Runs a command through the remote shell.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m debug -a 'msg=\"Hello Ansible\"'",
        description: "Prints a debugging message during execution.",
      },
    ],
  },
  {
    title: "5. Playbooks",
    commands: [
      {
        command: "ansible-playbook -i inventory.ini site.yml",
        description:
          "Runs an Ansible playbook against the specified inventory.",
      },
      {
        command: "ansible-playbook --syntax-check site.yml",
        description: "Checks playbook syntax without executing tasks.",
      },
      {
        command: "ansible-playbook --check site.yml",
        description:
          "Runs the playbook in check mode to preview changes.",
      },
      {
        command: "ansible-playbook --diff site.yml",
        description:
          "Shows differences for tasks that modify files.",
      },
      {
        command: "ansible-playbook -i inventory.ini site.yml -v",
        description: "Runs a playbook with verbose output.",
      },
      {
        command: "ansible-playbook -i inventory.ini site.yml -vvv",
        description:
          "Runs a playbook with highly detailed debugging output.",
      },
      {
        command:
          "ansible-playbook -i inventory.ini site.yml --limit servers",
        description:
          "Restricts playbook execution to the selected inventory group or hosts.",
      },
      {
        command:
          "ansible-playbook -i inventory.ini site.yml --limit web01",
        description: "Runs the playbook against a specific host.",
      },
    ],
  },
  {
    title: "6. Tags and Task Control",
    commands: [
      {
        command: "ansible-playbook site.yml --list-tasks",
        description:
          "Lists the tasks that would be executed by a playbook.",
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
        command:
          "ansible-playbook site.yml --start-at-task 'Install Nginx'",
        description:
          "Starts playbook execution at a specified task.",
      },
      {
        command: "ansible-playbook site.yml --step",
        description:
          "Runs a playbook interactively, prompting before each task.",
      },
    ],
  },
  {
    title: "7. Variables and Facts",
    commands: [
      {
        command:
          "ansible servers -i inventory.ini -m debug -a 'var=hostvars[inventory_hostname]'",
        description:
          "Displays host variables available to the selected host.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m debug -a 'var=ansible_facts'",
        description: "Displays gathered Ansible facts.",
      },
      {
        command:
          "ansible-playbook site.yml -e 'app_env=production'",
        description:
          "Passes an extra variable to a playbook.",
      },
      {
        command: "ansible-playbook site.yml -e '@vars.yml'",
        description:
          "Loads extra variables from a YAML file.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m debug -a 'var=ansible_hostname'",
        description:
          "Displays the hostname gathered by Ansible facts.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m debug -a 'var=ansible_distribution'",
        description:
          "Displays the remote operating system distribution.",
      },
    ],
  },
  {
    title: "8. Conditionals",
    commands: [
      {
        command:
          "ansible-playbook site.yml -e 'deploy=true'",
        description:
          "Provides a variable that can be evaluated by task conditions.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m setup",
        description:
          "Collects facts that can be used by when conditions.",
      },
      {
        command:
          "ansible-playbook site.yml --check",
        description:
          "Tests conditional task behavior without applying changes.",
      },
    ],
  },
  {
    title: "9. Loops and Repeated Tasks",
    commands: [
      {
        command:
          "ansible-playbook site.yml --list-tasks",
        description:
          "Reviews tasks before executing loop-based automation.",
      },
      {
        command:
          "ansible-playbook site.yml --check --diff",
        description:
          "Previews changes made by repeated tasks.",
      },
      {
        command:
          "ansible-playbook site.yml -vvv",
        description:
          "Displays detailed information useful when debugging loops.",
      },
    ],
  },
  {
    title: "10. Handlers",
    commands: [
      {
        command:
          "ansible-playbook site.yml --list-tasks",
        description:
          "Lists tasks and helps verify handler-triggering tasks.",
      },
      {
        command:
          "ansible-playbook site.yml --check",
        description:
          "Previews playbook execution involving handlers.",
      },
      {
        command:
          "ansible-playbook site.yml -vvv",
        description:
          "Provides detailed output for handler execution debugging.",
      },
    ],
  },
  {
    title: "11. Privilege Escalation",
    commands: [
      {
        command:
          "ansible servers -i inventory.ini -b -m command -a 'whoami'",
        description:
          "Runs a command with privilege escalation.",
      },
      {
        command: "ansible-playbook site.yml --become",
        description:
          "Enables privilege escalation for a playbook.",
      },
      {
        command: "ansible-playbook site.yml --ask-become-pass",
        description:
          "Prompts for the privilege escalation password.",
      },
      {
        command:
          "ansible servers -i inventory.ini -b -m shell -a 'systemctl status nginx'",
        description:
          "Runs a privileged service-management command.",
      },
    ],
  },
  {
    title: "12. Roles and Collections",
    commands: [
      {
        command: "ansible-galaxy role list",
        description: "Lists installed Ansible roles.",
      },
      {
        command: "ansible-galaxy role install <role>",
        description:
          "Installs an Ansible role from Ansible Galaxy or another configured source.",
      },
      {
        command: "ansible-galaxy collection list",
        description:
          "Lists installed Ansible collections.",
      },
      {
        command: "ansible-galaxy collection install <collection>",
        description: "Installs an Ansible collection.",
      },
      {
        command: "ansible-galaxy init myrole",
        description:
          "Creates the standard directory structure for a new role.",
      },
      {
        command: "ansible-galaxy search nginx",
        description:
          "Searches Ansible Galaxy for roles matching a keyword.",
      },
      {
        command:
          "ansible-galaxy install -r requirements.yml",
        description:
          "Installs roles or collections listed in a requirements file.",
      },
    ],
  },
  {
    title: "13. Vault and Secrets",
    commands: [
      {
        command: "ansible-vault create secrets.yml",
        description:
          "Creates a new encrypted Ansible Vault file.",
      },
      {
        command: "ansible-vault view secrets.yml",
        description:
          "Displays the decrypted contents of a Vault file.",
      },
      {
        command: "ansible-vault edit secrets.yml",
        description:
          "Edits an encrypted Vault file.",
      },
      {
        command: "ansible-vault encrypt vars.yml",
        description:
          "Encrypts an existing YAML file with Ansible Vault.",
      },
      {
        command: "ansible-vault decrypt secrets.yml",
        description:
          "Decrypts an Ansible Vault file.",
      },
      {
        command:
          "ansible-vault rekey secrets.yml",
        description:
          "Changes the password used to encrypt a Vault file.",
      },
      {
        command:
          "ansible-playbook site.yml --ask-vault-pass",
        description:
          "Prompts for the Vault password when running a playbook.",
      },
    ],
  },
  {
    title: "14. SSH and Connection Options",
    commands: [
      {
        command:
          "ansible servers -i inventory.ini -u ubuntu -m ping",
        description:
          "Connects to remote hosts using a specified SSH user.",
      },
      {
        command:
          "ansible servers -i inventory.ini --private-key ~/.ssh/id_rsa -m ping",
        description:
          "Uses a specific SSH private key for authentication.",
      },
      {
        command:
          "ansible servers -i inventory.ini -c local -m ping",
        description:
          "Uses the local connection method instead of SSH.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m ping -vvvv",
        description:
          "Enables very detailed connection debugging output.",
      },
      {
        command:
          "ansible servers -i inventory.ini -u ubuntu --become -m ping",
        description:
          "Connects using a specific user with privilege escalation enabled.",
      },
    ],
  },
  {
    title: "15. Templates and Configuration Files",
    commands: [
      {
        command:
          "ansible servers -i inventory.ini -m template -a 'src=app.conf.j2 dest=/etc/app.conf'",
        description:
          "Renders a Jinja2 template and deploys the resulting file.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m copy -a 'src=app.conf dest=/etc/app.conf'",
        description:
          "Copies a static configuration file to remote hosts.",
      },
      {
        command:
          "ansible-playbook site.yml --check --diff",
        description:
          "Previews configuration changes before deployment.",
      },
    ],
  },
  {
    title: "16. Server Troubleshooting",
    commands: [
      {
        command:
          "ansible servers -i inventory.ini -m shell -a 'uptime'",
        description:
          "Checks system uptime on remote servers.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m shell -a 'free -h'",
        description:
          "Checks memory usage on remote servers.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m shell -a 'df -h /'",
        description:
          "Checks root filesystem disk usage.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m shell -a 'systemctl --failed'",
        description:
          "Lists failed systemd services.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m shell -a 'ss -tulpn'",
        description:
          "Displays listening TCP and UDP ports.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m shell -a 'journalctl -p err -n 50'",
        description:
          "Displays recent high-priority system logs.",
      },
    ],
  },
  {
    title: "17. Performance and Execution",
    commands: [
      {
        command: "ansible-playbook site.yml -f 10",
        description:
          "Sets the number of parallel forks used during playbook execution.",
      },
      {
        command:
          "ansible-playbook site.yml --flush-cache",
        description:
          "Clears the fact cache before playbook execution when a fact cache is configured.",
      },
      {
        command: "ansible-playbook site.yml --step",
        description:
          "Runs a playbook interactively, prompting before each task.",
      },
      {
        command:
          "ansible-playbook site.yml --start-at-task 'Deploy application'",
        description:
          "Starts execution at a specific task.",
      },
    ],
  },
  {
    title: "18. Dynamic Inventory and Cloud Automation",
    commands: [
      {
        command:
          "ansible-inventory -i inventory.yml --list",
        description:
          "Loads and displays inventory generated from a YAML inventory source.",
      },
      {
        command:
          "ansible-inventory -i inventory.yml --graph",
        description:
          "Displays groups and hosts from a dynamic inventory source.",
      },
      {
        command:
          "ansible all -i inventory.yml --list-hosts",
        description:
          "Lists hosts discovered by the inventory source.",
      },
    ],
  },
  {
    title: "19. CI/CD Automation",
    commands: [
      {
        command:
          "ansible-playbook -i inventory.ini deploy.yml",
        description:
          "Runs a deployment playbook from a CI/CD pipeline.",
      },
      {
        command:
          "ansible-playbook -i inventory.ini deploy.yml --check --diff",
        description:
          "Validates expected deployment changes before applying them.",
      },
      {
        command:
          "ansible-playbook -i inventory.ini deploy.yml --limit production",
        description:
          "Restricts automated deployment to the production inventory group.",
      },
      {
        command:
          "ansible-playbook -i inventory.ini deploy.yml -e 'image_tag=latest'",
        description:
          "Passes a deployment variable from a CI/CD workflow.",
      },
    ],
  },
  {
    title: "20. Troubleshooting",
    commands: [
      {
        command:
          "ansible-inventory -i inventory.ini --graph",
        description:
          "Verifies that inventory groups and hosts are structured as expected.",
      },
      {
        command:
          "ansible all -i inventory.ini -m ping",
        description:
          "Verifies SSH connectivity and Ansible access to hosts.",
      },
      {
        command:
          "ansible servers -i inventory.ini -m setup",
        description:
          "Verifies that Ansible can collect facts from remote hosts.",
      },
      {
        command:
          "ansible-playbook --syntax-check site.yml",
        description:
          "Checks the playbook for syntax errors before execution.",
      },
      {
        command:
          "ansible-playbook site.yml -vvv",
        description:
          "Uses detailed output to investigate task and connection failures.",
      },
      {
        command:
          "ansible-playbook site.yml --check --diff",
        description:
          "Previews configuration changes and file differences without applying them.",
      },
      {
        command:
          "ansible-config dump --only-changed",
        description:
          "Displays only Ansible configuration values that differ from defaults.",
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
            connectivity, modules, playbooks, variables, facts, roles,
            collections, Vault, templates, troubleshooting and server
            automation.
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
              "ansible-doc -l",
              "ansible-inventory -i inventory.ini --list",
              "ansible all -i inventory.ini -m ping",
              "ansible servers -i inventory.ini -m setup",
              "ansible-playbook -i inventory.ini site.yml",
              "ansible-playbook --syntax-check site.yml",
              "ansible-playbook --check --diff site.yml",
              "ansible-playbook site.yml -vvv",
              "ansible-galaxy collection list",
              "ansible-vault view secrets.yml",
              "ansible servers -i inventory.ini -m shell -a 'df -h'",
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

# Check available modules
ansible-doc -l

# Check inventory
ansible-inventory -i inventory.ini --graph

# Check a specific host
ansible-inventory -i inventory.ini --host web01

# Test connectivity
ansible all -i inventory.ini -m ping

# Check server facts
ansible servers -i inventory.ini -m setup

# Check disk usage
ansible servers -i inventory.ini -m shell -a "df -h"

# Check memory
ansible servers -i inventory.ini -m shell -a "free -h"

# Check failed services
ansible servers -i inventory.ini -m shell -a "systemctl --failed"

# Check listening ports
ansible servers -i inventory.ini -m shell -a "ss -tulpn"

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