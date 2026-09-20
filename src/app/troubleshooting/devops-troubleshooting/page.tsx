import DevopsTroubleshootingSearch from "./DevopsTroubleshootingSearch";

export const metadata = {
  title:
    "DevOps Troubleshooting Guide | Linux, Kubernetes, Docker, Jenkins & SRE",
  description:
    "Solve common DevOps and production issues with practical troubleshooting workflows for Linux, Kubernetes, Docker, Jenkins, Terraform, networking, monitoring and SRE.",
};

const sections = [
  {
    title: "Linux CPU High",
    commands: [
      {
        command: "top",
        description: "Find processes consuming CPU in real time.",
      },
      {
        command: "ps aux --sort=-%cpu | head",
        description: "Show the highest CPU-consuming processes.",
      },
      {
        command: "uptime",
        description: "Check system load averages.",
      },
      {
        command: "pidstat 1",
        description: "Monitor CPU usage by process over time.",
      },
    ],
  },
  {
    title: "Linux Memory High",
    commands: [
      {
        command: "free -h",
        description: "Check total, used and available memory.",
      },
      {
        command: "ps aux --sort=-%mem | head",
        description: "Find processes consuming the most memory.",
      },
      {
        command: "vmstat 1",
        description: "Inspect memory, processes, paging and CPU activity.",
      },
      {
        command: "dmesg | grep -i oom",
        description: "Look for out-of-memory killer events.",
      },
    ],
  },
  {
    title: "Disk 100 Percent",
    commands: [
      {
        command: "df -h",
        description: "Find filesystems that are running out of space.",
      },
      {
        command: "df -i",
        description: "Check inode consumption.",
      },
      {
        command: "du -xh / | sort -h | tail -20",
        description: "Find large directories and files.",
      },
      {
        command: "journalctl --disk-usage",
        description: "Check how much disk space systemd journals use.",
      },
    ],
  },
  {
    title: "Linux Service Not Starting",
    commands: [
      {
        command: "systemctl status nginx",
        description: "Check the current service state and recent errors.",
      },
      {
        command: "journalctl -u nginx -n 100",
        description: "Read recent logs for the service.",
      },
      {
        command: "systemctl cat nginx",
        description: "Inspect the service unit configuration.",
      },
      {
        command: "systemctl daemon-reload",
        description: "Reload systemd after changing unit files.",
      },
    ],
  },
  {
    title: "Port Already In Use",
    commands: [
      {
        command: "ss -lntp",
        description: "List listening TCP ports and owning processes.",
      },
      {
        command: "ss -lntup",
        description: "List listening TCP and UDP ports.",
      },
      {
        command: "lsof -i :8080",
        description: "Find the process using port 8080.",
      },
      {
        command: "fuser -v 8080/tcp",
        description: "Identify processes using a TCP port.",
      },
    ],
  },
  {
    title: "SSH Troubleshooting",
    commands: [
      {
        command: "ssh -vvv user@server",
        description: "Enable verbose SSH debugging.",
      },
      {
        command: "nc -vz server 22",
        description: "Check whether TCP port 22 is reachable.",
      },
      {
        command: "systemctl status ssh",
        description: "Check the SSH server service.",
      },
      {
        command: "ss -lntp | grep :22",
        description: "Verify that SSH is listening.",
      },
    ],
  },
  {
    title: "DNS Troubleshooting",
    commands: [
      {
        command: "dig example.com",
        description: "Inspect DNS resolution details.",
      },
      {
        command: "dig +short example.com",
        description: "Return a concise DNS answer.",
      },
      {
        command: "nslookup example.com",
        description: "Perform a basic DNS lookup.",
      },
      {
        command: "cat /etc/resolv.conf",
        description: "Check configured DNS resolvers on Linux.",
      },
    ],
  },
  {
    title: "Network Connectivity",
    commands: [
      {
        command: "ping -c 4 8.8.8.8",
        description: "Check basic IP connectivity.",
      },
      {
        command: "curl -I https://example.com",
        description: "Check HTTP connectivity and response headers.",
      },
      {
        command: "traceroute example.com",
        description: "Inspect the network path toward a destination.",
      },
      {
        command: "ip route",
        description: "Inspect the local routing table.",
      },
    ],
  },
  {
    title: "Docker Container Crashing",
    commands: [
      {
        command: "docker ps -a",
        description: "Check running and stopped containers.",
      },
      {
        command: "docker logs <container>",
        description: "Read container application logs.",
      },
      {
        command: "docker inspect <container>",
        description: "Inspect container configuration and state.",
      },
      {
        command: "docker stats",
        description: "Check container CPU and memory usage.",
      },
    ],
  },
  {
    title: "Docker Image Problems",
    commands: [
      {
        command: "docker images",
        description: "List locally available images.",
      },
      {
        command: "docker history <image>",
        description: "Inspect image layers.",
      },
      {
        command: "docker image inspect <image>",
        description: "Inspect image metadata and configuration.",
      },
      {
        command: "docker system df",
        description: "Check Docker disk consumption.",
      },
    ],
  },
  {
    title: "Kubernetes CrashLoopBackOff",
    commands: [
      {
        command: "kubectl get pods",
        description: "Identify pods that are repeatedly restarting.",
      },
      {
        command: "kubectl describe pod <pod>",
        description: "Inspect events, container state and configuration.",
      },
      {
        command: "kubectl logs <pod> --previous",
        description: "Read logs from the previous crashed container.",
      },
      {
        command: "kubectl get events --sort-by=.lastTimestamp",
        description: "Review recent Kubernetes events.",
      },
    ],
  },
  {
    title: "Kubernetes ImagePullBackOff",
    commands: [
      {
        command: "kubectl describe pod <pod>",
        description: "Check image pull errors and events.",
      },
      {
        command: "kubectl get secret",
        description: "Check whether image pull secrets exist.",
      },
      {
        command: "kubectl get pod <pod> -o yaml",
        description:
          "Inspect the pod image and imagePullSecrets configuration.",
      },
      {
        command: "kubectl get events --sort-by=.lastTimestamp",
        description: "Find registry authentication or image errors.",
      },
    ],
  },
  {
    title: "Kubernetes Pod Pending",
    commands: [
      {
        command: "kubectl get pods -o wide",
        description: "Check where pending pods are scheduled or waiting.",
      },
      {
        command: "kubectl describe pod <pod>",
        description: "Inspect scheduler events and resource constraints.",
      },
      {
        command: "kubectl get nodes",
        description: "Check available cluster nodes.",
      },
      {
        command: "kubectl describe node <node>",
        description: "Inspect node capacity, conditions and taints.",
      },
    ],
  },
  {
    title: "Kubernetes Service Not Reachable",
    commands: [
      {
        command: "kubectl get svc",
        description: "Check service configuration and ports.",
      },
      {
        command: "kubectl get endpoints <service>",
        description: "Verify that the service has backend endpoints.",
      },
      {
        command: "kubectl get pods --show-labels",
        description: "Compare pod labels with the service selector.",
      },
      {
        command: "kubectl describe svc <service>",
        description: "Inspect service selectors, ports and endpoints.",
      },
    ],
  },
  {
    title: "Kubernetes Node NotReady",
    commands: [
      {
        command: "kubectl get nodes",
        description: "Identify nodes reporting NotReady.",
      },
      {
        command: "kubectl describe node <node>",
        description: "Inspect node conditions and recent events.",
      },
      {
        command: "kubectl get pods -A -o wide",
        description: "Check workloads running on affected nodes.",
      },
      {
        command: "kubectl get events -A --sort-by=.lastTimestamp",
        description: "Review cluster-wide events.",
      },
    ],
  },
  {
    title: "Jenkins Build Failure",
    commands: [
      {
        command: "docker logs <jenkins-container>",
        description:
          "Inspect Jenkins container logs when Jenkins runs in Docker.",
      },
      {
        command: "java -version",
        description: "Verify the Java runtime used by Jenkins.",
      },
      {
        command: "df -h",
        description: "Check whether disk exhaustion is affecting builds.",
      },
      {
        command: "free -h",
        description: "Check available memory on the Jenkins host.",
      },
    ],
  },
  {
    title: "Terraform State Problems",
    commands: [
      {
        command: "terraform state list",
        description: "List resources tracked in Terraform state.",
      },
      {
        command: "terraform state show <resource>",
        description: "Inspect a resource stored in state.",
      },
      {
        command: "terraform plan",
        description:
          "Compare configuration against current state and infrastructure.",
      },
      {
        command: "terraform refresh",
        description:
          "Refresh state from infrastructure when supported by the workflow.",
      },
    ],
  },
  {
    title: "Prometheus Target Down",
    commands: [
      {
        command: "curl http://localhost:9090/-/healthy",
        description: "Check Prometheus health.",
      },
      {
        command: "curl http://localhost:9090/api/v1/targets",
        description: "Inspect target states through the Prometheus API.",
      },
      {
        command: "curl http://target:9100/metrics",
        description: "Check whether an exporter endpoint responds.",
      },
      {
        command: "promtool check config prometheus.yml",
        description: "Validate Prometheus configuration.",
      },
    ],
  },
  {
    title: "Production Incident Workflow",
    commands: [
      {
        command: "date",
        description:
          "Record the current time when beginning incident investigation.",
      },
      {
        command: "uptime",
        description: "Check host uptime and system load.",
      },
      {
        command: "df -h",
        description: "Check for disk exhaustion.",
      },
      {
        command: "free -h",
        description: "Check memory pressure.",
      },
      {
        command: "ss -lntup",
        description: "Inspect listening network services.",
      },
      {
        command: "journalctl -p err -n 100",
        description: "Review recent high-priority system errors.",
      },
    ],
  },
];

const categories = [
  {
    name: "Kubernetes",
    description:
      "Pods, scheduling, services, nodes, images and cluster failures.",
    problems: "5 troubleshooting areas",
  },
  {
    name: "Linux",
    description:
      "CPU, memory, disk, services, ports, SSH and system problems.",
    problems: "6 troubleshooting areas",
  },
  {
    name: "Docker",
    description:
      "Containers, images, logs, resources and runtime problems.",
    problems: "2 troubleshooting areas",
  },
  {
    name: "Jenkins",
    description:
      "Build failures, agents, Java, disk and CI/CD problems.",
    problems: "1 troubleshooting area",
  },
  {
    name: "Terraform",
    description:
      "State, planning, infrastructure drift and deployment issues.",
    problems: "1 troubleshooting area",
  },
  {
    name: "Networking",
    description:
      "DNS, ports, connectivity, routes and SSH investigation.",
    problems: "4 troubleshooting areas",
  },
  {
    name: "Monitoring",
    description:
      "Prometheus health, targets, exporters and monitoring checks.",
    problems: "1 troubleshooting area",
  },
  {
    name: "Production Support",
    description:
      "A structured first-response workflow for production incidents.",
    problems: "Incident workflow",
  },
];

const popularProblems = [
  {
    title: "Kubernetes CrashLoopBackOff",
    description:
      "Check logs, previous container logs, events, probes, configuration and resources.",
    category: "Kubernetes",
  },
  {
    title: "Kubernetes Pod Pending",
    description:
      "Investigate scheduling, resources, taints, node availability and events.",
    category: "Kubernetes",
  },
  {
    title: "Linux Disk Full",
    description:
      "Find full filesystems, large directories, inode exhaustion and journal usage.",
    category: "Linux",
  },
  {
    title: "Linux High CPU",
    description:
      "Identify CPU-heavy processes and investigate application behaviour.",
    category: "Linux",
  },
  {
    title: "Docker Container Not Starting",
    description:
      "Inspect container state, logs, images, configuration, ports and volumes.",
    category: "Docker",
  },
  {
    title: "Jenkins Build Failure",
    description:
      "Check console output, Java, workspace, disk, memory and build environment.",
    category: "Jenkins",
  },
  {
    title: "Terraform State Problems",
    description:
      "Inspect state, identify drift and investigate state-related failures safely.",
    category: "Terraform",
  },
  {
    title: "Application Port Not Responding",
    description:
      "Check listeners, processes, firewall rules, routes and network connectivity.",
    category: "Networking",
  },
];

export default function DevopsTroubleshootingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              DevOps • SRE • Production Support
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              DevOps Troubleshooting Guide
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Find the right commands, understand common failure symptoms and
              follow practical investigation workflows for DevOps,
              application support, SRE and production environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {[
                "Kubernetes",
                "Linux",
                "Docker",
                "Jenkins",
                "Terraform",
                "Networking",
                "Monitoring",
                "Production Support",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="mb-5">
            <h2 className="text-2xl font-bold">What are you troubleshooting?</h2>

            <p className="mt-2 text-sm text-slate-400">
              Search for a symptom, technology, command or production issue.
            </p>
          </div>

          <DevopsTroubleshootingSearch sections={sections} />
        </div>
      </section>

      {/* Quick incident workflow */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-2xl border border-cyan-900/50 bg-cyan-950/20 p-6 sm:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Production Incident
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Where should you start?
            </h2>

            <p className="mt-3 text-slate-300">
              When an application or server is failing, start broad and narrow
              the investigation instead of immediately changing configuration.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["1", "Confirm the symptom", "What exactly is failing?"],
              ["2", "Check recent changes", "Deployment, config, code or infrastructure?"],
              ["3", "Check health signals", "CPU, memory, disk, logs and network."],
              ["4", "Isolate the cause", "Use targeted commands before applying a fix."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-xl border border-slate-800 bg-slate-950 p-5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-bold text-cyan-400">
                  {number}
                </div>

                <h3 className="mt-4 font-semibold text-white">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Troubleshoot by Technology
          </h2>

          <p className="mt-3 max-w-2xl text-slate-400">
            Start with the technology closest to the problem and work through
            the relevant checks.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-700"
            >
              <h3 className="text-xl font-bold text-white">
                {category.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {category.description}
              </p>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-cyan-400">
                {category.problems}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular problems */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Popular Problems
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Start with a Common Production Issue
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
              These are common symptoms that DevOps, SRE and application
              support engineers investigate during incidents.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {popularProblems.map((problem) => (
              <article
                key={problem.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-cyan-700"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {problem.category}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {problem.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {problem.description}
                </p>

                <a
  href="#troubleshooting-commands"
  className="mt-5 inline-block text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
>
  Find troubleshooting commands →
</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Command reference */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Command Reference
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Practical Troubleshooting Commands
          </h2>

          <p className="mt-3 max-w-2xl text-slate-400">
            Searchable commands grouped by the production problems they help
            investigate.
          </p>
        </div>

        <DevopsTroubleshootingSearch sections={sections} />
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">
            Need the command, not the explanation?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Explore the DevOps command references for Kubernetes, Linux,
            Docker, AWS, Terraform, Ansible, Jenkins and more.
          </p>

          <a
            href="/"
            className="mt-7 inline-flex rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Explore DevOps Commands →
          </a>
        </div>
      </section>
    </main>
  );
}