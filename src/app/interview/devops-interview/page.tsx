import DevopsInterviewSearch from "./DevopsInterviewSearch";

export const metadata = {
  title: "DevOps Interview Questions & Answers | DevOpsCommands",
  description:
    "Practical DevOps interview questions and answers covering Linux, Docker, Kubernetes, AWS, Terraform, Jenkins, Git, Ansible, Prometheus and SRE.",
};

const sections = [
  {
    title: "Linux Interview Questions",
    questions: [
      {
        question: "How do you find the process using the most CPU?",
        answer:
          "Use top or ps aux --sort=-%cpu. Start by identifying the process, then inspect its logs, workload and recent changes before deciding whether it should be stopped or restarted.",
      },
      {
        question: "How do you check memory usage on Linux?",
        answer:
          "Use free -h for a high-level view and ps aux --sort=-%mem to identify processes consuming memory. vmstat can help investigate memory pressure and swapping.",
      },
      {
        question: "How do you troubleshoot a service that is not starting?",
        answer:
          "Check systemctl status for the service, inspect journalctl -u for logs, validate configuration and dependencies, then verify ports, permissions and environment variables.",
      },
      {
        question: "What is the difference between a process and a thread?",
        answer:
          "A process has its own address space and resources. Threads are execution units within a process and generally share the process memory and resources.",
      },
    ],
  },
  {
    title: "Git Interview Questions",
    questions: [
      {
        question: "What is the difference between git merge and git rebase?",
        answer:
          "Merge combines histories with a merge commit when needed. Rebase moves commits onto another base and creates a more linear history. Rebasing shared commits requires care because it rewrites commit history.",
      },
      {
        question: "How do you undo the last commit?",
        answer:
          "git reset --soft HEAD~1 keeps changes staged, while git reset --mixed HEAD~1 keeps the changes in the working tree. For a pushed commit, git revert is generally used to create a new reversing commit.",
      },
      {
        question: "How do you resolve a merge conflict?",
        answer:
          "Inspect conflicted files, choose the desired changes, remove conflict markers, stage the resolved files and complete the merge or rebase. Test the resulting code before pushing.",
      },
    ],
  },
  {
    title: "Docker Interview Questions",
    questions: [
      {
        question: "What is the difference between an image and a container?",
        answer:
          "An image is an immutable template containing application files and metadata. A container is a running or stopped instance created from an image.",
      },
      {
        question: "How do you troubleshoot a Docker container that exits immediately?",
        answer:
          "Check docker ps -a, then inspect docker logs <container> and docker inspect <container>. Verify the entrypoint, command, environment variables, mounted files and application exit code.",
      },
      {
        question: "What is a Docker volume?",
        answer:
          "A volume is Docker-managed persistent storage that can survive container recreation. It is commonly used for databases and application data that should not live only in the container writable layer.",
      },
    ],
  },
  {
    title: "Kubernetes Interview Questions",
    questions: [
      {
        question: "What is a Pod in Kubernetes?",
        answer:
          "A Pod is the smallest deployable unit in Kubernetes. It contains one or more containers that share networking and storage contexts.",
      },
      {
        question: "What causes CrashLoopBackOff?",
        answer:
          "It indicates that a container repeatedly starts and exits. Common causes include application errors, invalid configuration, missing environment variables, failed dependencies and incorrect commands. kubectl logs and kubectl describe pod are key investigation commands.",
      },
      {
        question: "What is the difference between Deployment and StatefulSet?",
        answer:
          "Deployment is commonly used for stateless replicated workloads. StatefulSet provides stable identities and ordered behavior useful for stateful workloads such as databases and clustered systems.",
      },
      {
        question: "What is a Kubernetes Service?",
        answer:
          "A Service provides a stable network endpoint for a group of Pods selected by labels. Common service types include ClusterIP, NodePort and LoadBalancer.",
      },
      {
        question: "How do you troubleshoot a Pod stuck in Pending?",
        answer:
          "Use kubectl describe pod to inspect scheduler events. Check node capacity, resource requests, taints, tolerations, affinity rules and whether suitable nodes are available.",
      },
    ],
  },
  {
    title: "AWS Interview Questions",
    questions: [
      {
        question: "What is the difference between an IAM user and IAM role?",
        answer:
          "An IAM user represents a long-term identity. A role is an identity that can be assumed and is commonly used by AWS services, workloads and users who need temporary credentials.",
      },
      {
        question: "What is an Availability Zone?",
        answer:
          "An Availability Zone is an isolated location within an AWS Region. Deploying across multiple Availability Zones can improve application resilience against an issue affecting one zone.",
      },
      {
        question: "What is the difference between Security Groups and Network ACLs?",
        answer:
          "Security Groups are stateful controls associated with network interfaces. Network ACLs operate at the subnet boundary and are stateless, requiring explicit inbound and outbound rules.",
      },
    ],
  },
  {
    title: "Terraform Interview Questions",
    questions: [
      {
        question: "What is Terraform state?",
        answer:
          "Terraform state maps configuration resources to real infrastructure objects and stores information Terraform uses to determine planned changes.",
      },
      {
        question: "Why use remote Terraform state?",
        answer:
          "Remote state allows teams and automation systems to share state from a controlled backend. Many remote backends also provide locking or coordination capabilities.",
      },
      {
        question: "What is terraform plan?",
        answer:
          "terraform plan compares the desired configuration with Terraform's state and provider information and shows proposed changes without applying them.",
      },
    ],
  },
  {
    title: "Jenkins Interview Questions",
    questions: [
      {
        question: "What is a Jenkins Pipeline?",
        answer:
          "A Pipeline defines a delivery workflow as code. It can contain stages for checkout, build, testing, security scanning, packaging and deployment.",
      },
      {
        question: "What is the difference between an agent and the Jenkins controller?",
        answer:
          "The controller coordinates Jenkins workloads and manages the system. Agents execute build and pipeline workloads, allowing jobs to run on appropriate machines or environments.",
      },
      {
        question: "How do you troubleshoot a Jenkins build failure?",
        answer:
          "Start with console output, identify the failing stage, inspect environment variables and credentials, verify dependencies and tools, and check the agent's CPU, memory and disk.",
      },
    ],
  },
  {
    title: "Ansible Interview Questions",
    questions: [
      {
        question: "What is Ansible?",
        answer:
          "Ansible is an automation platform commonly used for configuration management, application deployment and operational tasks.",
      },
      {
        question: "What is an Ansible inventory?",
        answer:
          "Inventory defines the hosts and groups that Ansible can manage. It can be static or dynamically generated from infrastructure sources.",
      },
      {
        question: "What does idempotent mean in Ansible?",
        answer:
          "An idempotent task can be executed repeatedly while converging the system toward the desired state without making unnecessary changes once that state has been reached.",
      },
    ],
  },
  {
    title: "Prometheus Interview Questions",
    questions: [
      {
        question: "What is Prometheus?",
        answer:
          "Prometheus is a monitoring and alerting system that collects time-series metrics, commonly through a pull-based scraping model.",
      },
      {
        question: "What is PromQL?",
        answer:
          "PromQL is Prometheus Query Language. It is used to select, aggregate and calculate values from Prometheus time-series data.",
      },
      {
        question: "What should you check when a Prometheus target is down?",
        answer:
          "Check the target address, network connectivity, exporter availability, service discovery, scrape configuration and Prometheus target status.",
      },
    ],
  },
  {
    title: "SRE Interview Questions",
    questions: [
      {
        question: "What is an SLI?",
        answer:
          "A Service Level Indicator is a measured signal representing a service characteristic such as availability, latency or successful request rate.",
      },
      {
        question: "What is an SLO?",
        answer:
          "A Service Level Objective defines a target level of service performance or reliability over a specified measurement period.",
      },
      {
        question: "What is an error budget?",
        answer:
          "An error budget represents the amount of unreliability permitted by an SLO. Teams can use it to balance reliability work against feature delivery.",
      },
      {
        question: "What should happen during a production incident?",
        answer:
          "Establish the impact, assign roles, stabilize the service, communicate clearly, preserve useful evidence, investigate systematically and conduct a blameless review afterward.",
      },
    ],
  },
];

export default function DevopsInterviewPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            DevOps Interview
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            DevOps Interview Questions & Answers
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Practical interview questions covering Linux, Git, Docker,
            Kubernetes, AWS, Terraform, Jenkins, Ansible, Prometheus and SRE.
          </p>
        </div>

        <div className="mt-10">
          <DevopsInterviewSearch sections={sections} />
        </div>
      </section>
    </main>
  );
}
