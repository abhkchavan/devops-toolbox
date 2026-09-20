import DevopsTroubleshootingSearch from "./DevopsTroubleshootingSearch";

export const metadata = {
  title: "DevOps Troubleshooting Guide | Linux, Docker, Kubernetes, Jenkins & SRE",
  description:
    "Practical DevOps troubleshooting guide for Linux, Docker, Kubernetes, Jenkins, Terraform, networking, DNS, monitoring and production incidents.",
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
        description: "Inspect the pod image and imagePullSecrets configuration.",
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
        description: "Inspect Jenkins container logs when Jenkins runs in Docker.",
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
        description: "Compare configuration against current state and infrastructure.",
      },
      {
        command: "terraform refresh",
        description: "Refresh state from infrastructure when supported by the workflow.",
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
        description: "Record the current time when beginning incident investigation.",
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

export default function DevopsTroubleshootingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            DevOps Troubleshooting
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            DevOps Troubleshooting Guide
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Practical troubleshooting commands and investigation workflows for
            Linux, Docker, Kubernetes, Jenkins, Terraform, Prometheus and
            production incidents.
          </p>
        </div>

        <div className="mt-10">
          <DevopsTroubleshootingSearch sections={sections} />
        </div>
      </section>
    </main>
  );
}
