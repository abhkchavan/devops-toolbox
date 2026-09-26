import DevopsTroubleshootingSearch from "./DevopsTroubleshootingSearch";

export const metadata = {
  title:
    "DevOps Troubleshooting Guide | Linux, Kubernetes, Docker, Jenkins & SRE",
  description:
    "Troubleshoot common DevOps and production issues with practical commands and evidence-first workflows for Linux, Kubernetes, Docker, Jenkins, Terraform, networking, monitoring and SRE.",
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
        description: "Check system load averages and system pressure.",
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
        description: "Check image pull errors and related events.",
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
      "Investigate pods, scheduling, services, images, nodes, events and cluster failures.",
  },
  {
    name: "Linux",
    description:
      "Troubleshoot CPU, memory, disk, services, ports, SSH and operating-system problems.",
  },
  {
    name: "Docker",
    description:
      "Investigate containers, images, logs, resources, runtime state and startup failures.",
  },
  {
    name: "Jenkins",
    description:
      "Investigate CI/CD build failures, Java compatibility, agents, workspace and host resources.",
  },
  {
    name: "Terraform",
    description:
      "Investigate state, plans, infrastructure drift and infrastructure deployment problems.",
  },
  {
    name: "Networking",
    description:
      "Trace DNS, ports, routes, connectivity, SSH and HTTP communication problems.",
  },
  {
    name: "Monitoring",
    description:
      "Investigate Prometheus health, targets, exporters and monitoring signal failures.",
  },
  {
    name: "Production Support",
    description:
      "Follow an evidence-first workflow for incidents affecting applications and infrastructure.",
  },
];

const popularProblems = [
  {
    title: "Kubernetes CrashLoopBackOff",
    description:
      "Check container logs, previous logs, events, probes, configuration and resource limits.",
    category: "Kubernetes",
  },
  {
    title: "Kubernetes Pod Pending",
    description:
      "Investigate scheduling constraints, resources, taints, node availability and events.",
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
      "Identify CPU-heavy processes, system load and application behaviour.",
    category: "Linux",
  },
  {
    title: "Docker Container Not Starting",
    description:
      "Inspect container state, logs, images, configuration, ports and runtime resources.",
    category: "Docker",
  },
  {
    title: "Jenkins Build Failure",
    description:
      "Check build output, Java, workspace, disk, memory and the build environment.",
    category: "Jenkins",
  },
  {
    title: "Terraform State Problems",
    description:
      "Inspect state and plan output and investigate drift without making uncontrolled changes.",
    category: "Terraform",
  },
  {
    title: "Application Port Not Responding",
    description:
      "Check listeners, processes, firewall rules, routes, DNS and network connectivity.",
    category: "Networking",
  },
];

const incidentSteps = [
  {
    number: "1",
    title: "Confirm the symptom",
    description:
      "Define exactly what is failing, when it started and which users, services or hosts are affected.",
  },
  {
    number: "2",
    title: "Scope the impact",
    description:
      "Determine whether the problem affects one process, host, pod, service, region or the wider platform.",
  },
  {
    number: "3",
    title: "Check recent changes",
    description:
      "Review deployments, configuration changes, infrastructure updates, patches and scheduled jobs.",
  },
  {
    number: "4",
    title: "Collect evidence",
    description:
      "Use logs, metrics, events, process state, network checks and configuration inspection.",
  },
  {
    number: "5",
    title: "Form a hypothesis",
    description:
      "Connect the observed evidence to a likely failure domain before changing the environment.",
  },
  {
    number: "6",
    title: "Apply a controlled fix",
    description:
      "Choose the smallest safe remediation and understand its expected impact before execution.",
  },
  {
    number: "7",
    title: "Verify recovery",
    description:
      "Confirm service health, application behaviour, error rates and dependent systems after the change.",
  },
  {
    number: "8",
    title: "Prevent recurrence",
    description:
      "Document the root cause, improve monitoring or automation and capture the permanent corrective action.",
  },
];

const troubleshootingPrinciples = [
  {
    title: "Evidence before action",
    description:
      "Capture useful logs, metrics, events and system state before restarting, deleting or changing configuration.",
  },
  {
    title: "Separate symptom from cause",
    description:
      "A restart may restore service without explaining why the application failed. Treat recovery and root-cause analysis as separate steps.",
  },
  {
    title: "Check recent changes",
    description:
      "Deployment, configuration, infrastructure and dependency changes are important signals during incident investigation.",
  },
  {
    title: "Change one thing at a time",
    description:
      "Controlled changes make it easier to determine which action affected the system and reduce troubleshooting noise.",
  },
];

const totalCommands = sections.reduce(
  (total, section) => total + section.commands.length,
  0,
);

const totalAreas = sections.filter(
  (section) => section.title !== "Production Incident Workflow",
).length;

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
              Troubleshoot common DevOps and production problems using
              practical commands, evidence-first investigation and structured
              incident workflows across Linux, Kubernetes, Docker, Jenkins,
              Terraform, networking and monitoring.
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

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                [String(totalAreas), "Troubleshooting areas"],
                [String(totalCommands), "Practical commands"],
                ["8", "Incident investigation steps"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <div className="text-2xl font-bold text-cyan-400">
                    {value}
                  </div>
                  <div className="mt-1 text-xs text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="mb-5">
            <h2 className="text-2xl font-bold">
              What are you troubleshooting?
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Search by symptom, technology, command or production problem.
            </p>
          </div>

          <DevopsTroubleshootingSearch sections={sections} />
        </div>
      </section>

      {/* Investigation methodology */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-cyan-900/50 bg-cyan-950/20 p-6 sm:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Production Troubleshooting Method
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Troubleshoot from symptom to verified recovery
            </h2>

            <p className="mt-3 leading-7 text-slate-300">
              Production troubleshooting is more than finding a command that
              returns an error. First establish the symptom and impact, then
              collect evidence, isolate the failure domain, apply a controlled
              remediation and verify the result.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {incidentSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-slate-800 bg-slate-950 p-5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-bold text-cyan-400">
                  {step.number}
                </div>

                <h3 className="mt-4 font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting principles */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            SRE Mindset
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Principles for safer production troubleshooting
          </h2>

          <p className="mt-3 max-w-3xl text-slate-400">
            Good incident investigation reduces uncertainty before making
            changes to a live system.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {troubleshootingPrinciples.map((principle) => (
            <article
              key={principle.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-bold text-white">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {principle.description}
              </p>
            </article>
          ))}
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
            <article
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
                Troubleshooting reference
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Popular problems */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Common Production Problems
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Start with a Common Failure Symptom
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
              Use these problem areas to quickly locate commands and
              investigation checks relevant to an incident.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {popularProblems.map((problem) => (
              <article
                key={problem.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-cyan-700"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {problem.category}
                </span>

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

      {/* Evidence collection */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Evidence Collection
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            What evidence should you collect during an incident?
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-400">
            Before changing a production system, capture enough information to
            understand the failure and preserve useful evidence for later root
            cause analysis.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Logs",
                "Application, system, container and platform logs around the failure window.",
              ],
              [
                "Metrics",
                "CPU, memory, disk, latency, throughput, errors and saturation signals.",
              ],
              [
                "Events",
                "Kubernetes events, deployment events, alerts and infrastructure changes.",
              ],
              [
                "Changes",
                "Deployments, configuration updates, patches, releases and scheduled jobs.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-800 bg-slate-950 p-5"
              >
                <h3 className="font-semibold text-white">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-amber-900/50 bg-amber-950/20 p-5">
            <h3 className="font-semibold text-amber-300">
              Avoid blind remediation
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Restarting a service, deleting a pod, increasing resources or
              rolling back a deployment may restore availability, but those
              actions can also remove evidence. Capture the relevant state
              first whenever the incident allows it.
            </p>
          </div>
        </div>
      </section>

      {/* Command reference */}
      <section
        id="troubleshooting-commands"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 py-16"
      >
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Command Reference
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Practical DevOps Troubleshooting Commands
          </h2>

          <p className="mt-3 max-w-3xl text-slate-400">
            Searchable commands grouped by the production problems they help
            investigate. Use the commands to collect evidence and narrow the
            failure domain before applying remediation.
          </p>
        </div>

        <DevopsTroubleshootingSearch sections={sections} />
      </section>

      {/* FAQ / SEO content */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Troubleshooting Guide
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Common DevOps troubleshooting questions
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-lg font-bold">
                How should I troubleshoot a production issue?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Start by confirming the symptom and impact, check recent
                changes, collect logs and metrics, isolate the failure domain,
                apply a controlled remediation and verify that the service has
                recovered.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-lg font-bold">
                What should I check first when a server is slow?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Check CPU, load average, memory, disk usage, I/O, processes and
                network activity. Then correlate those signals with application
                logs and recent changes.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-lg font-bold">
                How do I troubleshoot Kubernetes pod failures?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Start with pod status, describe the pod, inspect current and
                previous container logs, review Kubernetes events and then
                investigate configuration, probes, resources, scheduling and
                dependencies.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-lg font-bold">
                What is the difference between troubleshooting and RCA?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Troubleshooting focuses on identifying and resolving the
                immediate failure. Root cause analysis goes further by
                establishing why the failure occurred and what permanent
                corrective or preventive actions are required.
              </p>
            </article>
          </div>
        </div>
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
