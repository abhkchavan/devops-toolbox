import type { Metadata } from "next";
import KubectlCommandSearch from "./KubectlCommandSearch";

export const metadata: Metadata = {
  title: "kubectl Commands Cheat Sheet | Kubernetes CLI Reference",
  description:
    "Complete kubectl commands cheat sheet for Kubernetes administrators, DevOps engineers and SREs. Includes pods, deployments, services, networking, RBAC, storage, troubleshooting, logs, scaling, rollouts and production workflows.",
  keywords: [
    "kubectl commands",
    "kubectl cheat sheet",
    "Kubernetes commands",
    "kubectl command reference",
    "Kubernetes CLI",
    "kubectl troubleshooting",
    "kubectl logs",
    "kubectl pods",
    "kubectl deployments",
    "kubectl services",
    "kubectl networking",
    "kubectl RBAC",
    "kubectl storage",
    "Kubernetes DevOps commands",
    "Kubernetes SRE commands",
  ],
  alternates: {
    canonical: "https://www.devopscommands.com/kubernetes/kubectl-commands",
  },
  openGraph: {
    title: "kubectl Commands Cheat Sheet | Kubernetes CLI Reference",
    description:
      "Practical kubectl command reference for Kubernetes operations, troubleshooting, deployments, networking, RBAC, storage and production support.",
    url: "https://www.devopscommands.com/kubernetes/kubectl-commands",
    type: "article",
  },
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
    title: "1. Kubernetes Cluster Information",
    commands: [
      {
        command: "kubectl cluster-info",
        description: "Display Kubernetes control plane and service endpoints.",
      },
      {
        command: "kubectl version",
        description: "Display client and server Kubernetes versions.",
      },
      {
        command: "kubectl get nodes",
        description: "List all nodes in the Kubernetes cluster.",
      },
      {
        command: "kubectl get nodes -o wide",
        description: "Display nodes with IP addresses, OS, kernel and runtime information.",
      },
      {
        command: "kubectl describe node <node-name>",
        description: "Show detailed information, conditions, capacity, pods and events for a node.",
      },
      {
        command: "kubectl get componentstatuses",
        description: "Check legacy Kubernetes component health information.",
      },
    ],
  },

  {
    title: "2. Get Kubernetes Resources",
    commands: [
      {
        command: "kubectl get pods",
        description: "List pods in the current namespace.",
      },
      {
        command: "kubectl get pods -A",
        description: "List pods across all namespaces.",
      },
      {
        command: "kubectl get pods -o wide",
        description: "Show pods with node and IP information.",
      },
      {
        command: "kubectl get deployments",
        description: "List deployments in the current namespace.",
      },
      {
        command: "kubectl get services",
        description: "List Services in the current namespace.",
      },
      {
        command: "kubectl get namespaces",
        description: "List all Kubernetes namespaces.",
      },
      {
        command: "kubectl get all",
        description: "Display common workload resources in the current namespace.",
      },
      {
        command: "kubectl get <resource> <name> -o yaml",
        description: "Display a resource definition in YAML format.",
      },
      {
        command: "kubectl get <resource> <name> -o json",
        description: "Display a resource definition in JSON format.",
      },
    ],
  },

  {
    title: "3. Namespaces",
    commands: [
      {
        command: "kubectl get namespaces",
        description: "List namespaces.",
      },
      {
        command: "kubectl get pods -n <namespace>",
        description: "List pods in a specific namespace.",
      },
      {
        command: "kubectl get all -n <namespace>",
        description: "List common resources in a namespace.",
      },
      {
        command: "kubectl create namespace <namespace>",
        description: "Create a namespace.",
      },
      {
        command: "kubectl delete namespace <namespace>",
        description: "Delete a namespace and its namespaced resources.",
      },
      {
        command: "kubectl config set-context --current --namespace=<namespace>",
        description: "Set the default namespace for the current kubectl context.",
      },
    ],
  },

  {
    title: "4. Describe and Inspect Resources",
    commands: [
      {
        command: "kubectl describe pod <pod-name>",
        description: "Inspect pod state, containers, probes, mounts, scheduling and events.",
      },
      {
        command: "kubectl describe deployment <deployment-name>",
        description: "Inspect deployment configuration, replicas and rollout state.",
      },
      {
        command: "kubectl describe service <service-name>",
        description: "Inspect Service type, ports, selectors and endpoints.",
      },
      {
        command: "kubectl describe node <node-name>",
        description: "Inspect node capacity, conditions, taints and workloads.",
      },
      {
        command: "kubectl explain pod",
        description: "Display Kubernetes API documentation for a resource.",
      },
      {
        command: "kubectl explain pod.spec.containers",
        description: "Display documentation for a specific resource field.",
      },
    ],
  },

  {
    title: "5. Pod Logs",
    commands: [
      {
        command: "kubectl logs <pod-name>",
        description: "View logs from a pod.",
      },
      {
        command: "kubectl logs -f <pod-name>",
        description: "Follow pod logs in real time.",
      },
      {
        command: "kubectl logs <pod-name> --previous",
        description: "View logs from the previous terminated container instance.",
      },
      {
        command: "kubectl logs <pod-name> -c <container-name>",
        description: "View logs from a specific container in a multi-container pod.",
      },
      {
        command: "kubectl logs deployment/<deployment-name>",
        description: "View logs from pods managed by a deployment.",
      },
      {
        command: "kubectl logs -l app=<label>",
        description: "View logs from pods matching a label selector.",
      },
    ],
  },

  {
    title: "6. Execute Commands Inside Pods",
    commands: [
      {
        command: "kubectl exec -it <pod-name> -- /bin/sh",
        description: "Open an interactive shell inside a pod.",
      },
      {
        command: "kubectl exec -it <pod-name> -- /bin/bash",
        description: "Open a Bash shell when Bash is available.",
      },
      {
        command: "kubectl exec <pod-name> -- env",
        description: "Display environment variables inside a container.",
      },
      {
        command: "kubectl exec <pod-name> -- ps aux",
        description: "Inspect running processes inside a container.",
      },
      {
        command: "kubectl exec <pod-name> -- df -h",
        description: "Check filesystem usage inside a container.",
      },
      {
        command: "kubectl exec <pod-name> -c <container-name> -- <command>",
        description: "Run a command in a specific container.",
      },
    ],
  },

  {
    title: "7. Create and Apply Resources",
    commands: [
      {
        command: "kubectl apply -f deployment.yaml",
        description: "Create or update resources defined in a YAML manifest.",
      },
      {
        command: "kubectl apply -f .",
        description: "Apply YAML manifests from the current directory.",
      },
      {
        command: "kubectl create deployment <name> --image=<image>",
        description: "Create a deployment from the command line.",
      },
      {
        command: "kubectl create service clusterip <name> --tcp=80:8080",
        description: "Create a ClusterIP Service.",
      },
      {
        command: "kubectl create namespace <namespace>",
        description: "Create a namespace.",
      },
      {
        command: "kubectl create configmap <name> --from-literal=key=value",
        description: "Create a ConfigMap from a literal value.",
      },
      {
        command: "kubectl create secret generic <name> --from-literal=key=value",
        description: "Create a generic Secret from a literal value.",
      },
    ],
  },

  {
    title: "8. Delete Resources",
    commands: [
      {
        command: "kubectl delete pod <pod-name>",
        description: "Delete a pod.",
      },
      {
        command: "kubectl delete deployment <deployment-name>",
        description: "Delete a deployment.",
      },
      {
        command: "kubectl delete service <service-name>",
        description: "Delete a Service.",
      },
      {
        command: "kubectl delete -f deployment.yaml",
        description: "Delete resources defined in a YAML manifest.",
      },
      {
        command: "kubectl delete pods --all",
        description: "Delete all pods in the current namespace.",
      },
      {
        command: "kubectl delete namespace <namespace>",
        description: "Delete a namespace and its resources.",
      },
    ],
  },

  {
    title: "9. Deployments and Rollouts",
    commands: [
      {
        command: "kubectl get deployments",
        description: "List deployments and replica status.",
      },
      {
        command: "kubectl describe deployment <name>",
        description: "Inspect deployment configuration and events.",
      },
      {
        command: "kubectl rollout status deployment/<name>",
        description: "Watch the deployment rollout status.",
      },
      {
        command: "kubectl rollout history deployment/<name>",
        description: "View deployment revision history.",
      },
      {
        command: "kubectl rollout undo deployment/<name>",
        description: "Roll back a deployment to the previous revision.",
      },
      {
        command: "kubectl rollout undo deployment/<name> --to-revision=<revision>",
        description: "Roll back to a specific deployment revision.",
      },
      {
        command: "kubectl rollout restart deployment/<name>",
        description: "Restart all pods managed by a deployment.",
      },
      {
        command: "kubectl set image deployment/<name> <container>=<image>",
        description: "Update a deployment container image.",
      },
      {
        command: "kubectl pause deployment/<name>",
        description: "Pause deployment rollouts.",
      },
      {
        command: "kubectl resume deployment/<name>",
        description: "Resume a paused deployment.",
      },
    ],
  },

  {
    title: "10. Scale Applications",
    commands: [
      {
        command: "kubectl scale deployment <name> --replicas=3",
        description: "Scale a deployment to the specified number of replicas.",
      },
      {
        command: "kubectl scale deployment <name> --replicas=0",
        description: "Scale a deployment down to zero replicas.",
      },
      {
        command: "kubectl autoscale deployment <name> --min=2 --max=10 --cpu-percent=70",
        description: "Create a HorizontalPodAutoscaler based on CPU utilization.",
      },
      {
        command: "kubectl get hpa",
        description: "List HorizontalPodAutoscalers.",
      },
      {
        command: "kubectl describe hpa <name>",
        description: "Inspect HPA configuration and current metrics.",
      },
    ],
  },

  {
    title: "11. Services and Networking",
    commands: [
      {
        command: "kubectl get services",
        description: "List Services.",
      },
      {
        command: "kubectl get svc -o wide",
        description: "Display Services with additional information.",
      },
      {
        command: "kubectl describe service <name>",
        description: "Inspect Service selectors, ports and endpoints.",
      },
      {
        command: "kubectl get endpoints <service-name>",
        description: "Inspect endpoints associated with a Service.",
      },
      {
        command: "kubectl get endpointslices",
        description: "List EndpointSlices used by Services.",
      },
      {
        command: "kubectl expose deployment <name> --port=80 --type=ClusterIP",
        description: "Expose a deployment through a Service.",
      },
      {
        command: "kubectl port-forward service/<service-name> 8080:80",
        description: "Forward a local port to a Service for troubleshooting.",
      },
      {
        command: "kubectl get networkpolicies",
        description: "List NetworkPolicies.",
      },
    ],
  },

  {
    title: "12. ConfigMaps and Secrets",
    commands: [
      {
        command: "kubectl get configmaps",
        description: "List ConfigMaps.",
      },
      {
        command: "kubectl describe configmap <name>",
        description: "Inspect a ConfigMap.",
      },
      {
        command: "kubectl get configmap <name> -o yaml",
        description: "Display a ConfigMap as YAML.",
      },
      {
        command: "kubectl get secrets",
        description: "List Secrets.",
      },
      {
        command: "kubectl describe secret <name>",
        description: "Inspect Secret metadata without directly displaying decoded values.",
      },
      {
        command: "kubectl get secret <name> -o jsonpath='{.data.<key>}' | base64 --decode",
        description: "Decode a specific Secret value when authorized to do so.",
      },
      {
        command: "kubectl create configmap <name> --from-file=<file>",
        description: "Create a ConfigMap from a file.",
      },
      {
        command: "kubectl create secret generic <name> --from-file=<file>",
        description: "Create a generic Secret from a file.",
      },
    ],
  },

  {
    title: "13. Kubernetes Events",
    commands: [
      {
        command: "kubectl get events",
        description: "List events in the current namespace.",
      },
      {
        command: "kubectl get events --sort-by=.lastTimestamp",
        description: "Sort events by the latest timestamp.",
      },
      {
        command: "kubectl get events -A",
        description: "List events across all namespaces.",
      },
      {
        command: "kubectl get events --field-selector type=Warning",
        description: "Display warning events.",
      },
      {
        command: "kubectl describe pod <pod-name>",
        description: "Inspect pod-specific events at the bottom of the output.",
      },
    ],
  },

  {
    title: "14. Resource Usage and Performance",
    commands: [
      {
        command: "kubectl top nodes",
        description: "Display CPU and memory usage for nodes.",
      },
      {
        command: "kubectl top pods",
        description: "Display CPU and memory usage for pods.",
      },
      {
        command: "kubectl top pods -A",
        description: "Display pod resource usage across namespaces.",
      },
      {
        command: "kubectl top pod <pod-name> --containers",
        description: "Display resource usage for individual containers.",
      },
      {
        command: "kubectl describe node <node-name>",
        description: "Inspect node capacity, allocatable resources and conditions.",
      },
    ],
  },

  {
    title: "15. Labels, Selectors and Annotations",
    commands: [
      {
        command: "kubectl get pods --show-labels",
        description: "Display pods together with their labels.",
      },
      {
        command: "kubectl get pods -l app=nginx",
        description: "Filter pods using a label selector.",
      },
      {
        command: "kubectl label pod <pod-name> environment=prod",
        description: "Add or update a label on a pod.",
      },
      {
        command: "kubectl label pod <pod-name> environment-",
        description: "Remove a label from a pod.",
      },
      {
        command: "kubectl annotate deployment <name> owner=platform",
        description: "Add an annotation to a deployment.",
      },
    ],
  },

  {
    title: "16. Context and Kubeconfig",
    commands: [
      {
        command: "kubectl config get-contexts",
        description: "List available Kubernetes contexts.",
      },
      {
        command: "kubectl config current-context",
        description: "Display the currently selected context.",
      },
      {
        command: "kubectl config use-context <context>",
        description: "Switch to a different Kubernetes context.",
      },
      {
        command: "kubectl config view",
        description: "Display kubeconfig information.",
      },
      {
        command: "kubectl config set-context --current --namespace=<namespace>",
        description: "Set the default namespace for the current context.",
      },
      {
        command: "kubectl config rename-context <old> <new>",
        description: "Rename an existing context.",
      },
    ],
  },

  {
    title: "17. Patch and Edit Resources",
    commands: [
      {
        command: "kubectl edit deployment <name>",
        description: "Open a live deployment definition for editing.",
      },
      {
        command: "kubectl edit service <name>",
        description: "Edit a Service definition.",
      },
      {
        command: "kubectl patch deployment <name> -p '{...}'",
        description: "Apply a targeted patch to a resource.",
      },
      {
        command: "kubectl patch deployment <name> --type=json -p='[...]'",
        description: "Apply a JSON patch to a resource.",
      },
    ],
  },

  {
    title: "18. Jobs and CronJobs",
    commands: [
      {
        command: "kubectl get jobs",
        description: "List Jobs.",
      },
      {
        command: "kubectl describe job <name>",
        description: "Inspect Job execution status and events.",
      },
      {
        command: "kubectl get cronjobs",
        description: "List CronJobs.",
      },
      {
        command: "kubectl describe cronjob <name>",
        description: "Inspect CronJob schedule and configuration.",
      },
      {
        command: "kubectl create job <job-name> --image=<image>",
        description: "Create a Job from the command line.",
      },
      {
        command: "kubectl create job --from=cronjob/<cronjob-name> <job-name>",
        description: "Create an immediate Job from a CronJob.",
      },
    ],
  },

  {
    title: "19. StatefulSets and DaemonSets",
    commands: [
      {
        command: "kubectl get statefulsets",
        description: "List StatefulSets.",
      },
      {
        command: "kubectl describe statefulset <name>",
        description: "Inspect StatefulSet configuration and status.",
      },
      {
        command: "kubectl get daemonsets",
        description: "List DaemonSets.",
      },
      {
        command: "kubectl describe daemonset <name>",
        description: "Inspect DaemonSet configuration and pod scheduling.",
      },
      {
        command: "kubectl rollout status statefulset/<name>",
        description: "Check StatefulSet rollout status.",
      },
      {
        command: "kubectl rollout status daemonset/<name>",
        description: "Check DaemonSet rollout status.",
      },
    ],
  },

  {
    title: "20. Storage",
    commands: [
      {
        command: "kubectl get pv",
        description: "List PersistentVolumes.",
      },
      {
        command: "kubectl get pvc",
        description: "List PersistentVolumeClaims.",
      },
      {
        command: "kubectl get storageclass",
        description: "List StorageClasses.",
      },
      {
        command: "kubectl describe pv <pv-name>",
        description: "Inspect PersistentVolume configuration and status.",
      },
      {
        command: "kubectl describe pvc <pvc-name>",
        description: "Inspect PersistentVolumeClaim status and events.",
      },
      {
        command: "kubectl get pvc -o wide",
        description: "Display PVC information with additional details.",
      },
    ],
  },

  {
    title: "21. Ingress and Network Policies",
    commands: [
      {
        command: "kubectl get ingress",
        description: "List Ingress resources.",
      },
      {
        command: "kubectl describe ingress <name>",
        description: "Inspect Ingress rules, backend services and events.",
      },
      {
        command: "kubectl get networkpolicies",
        description: "List NetworkPolicies.",
      },
      {
        command: "kubectl describe networkpolicy <name>",
        description: "Inspect NetworkPolicy rules and selectors.",
      },
      {
        command: "kubectl get endpointslices",
        description: "Inspect Service endpoint discovery.",
      },
    ],
  },

  {
    title: "22. RBAC and Security",
    commands: [
      {
        command: "kubectl get serviceaccounts",
        description: "List ServiceAccounts.",
      },
      {
        command: "kubectl get roles",
        description: "List namespace-scoped Roles.",
      },
      {
        command: "kubectl get rolebindings",
        description: "List RoleBindings.",
      },
      {
        command: "kubectl get clusterroles",
        description: "List ClusterRoles.",
      },
      {
        command: "kubectl get clusterrolebindings",
        description: "List ClusterRoleBindings.",
      },
      {
        command: "kubectl auth can-i get pods",
        description: "Check whether the current identity can perform an action.",
      },
      {
        command: "kubectl auth can-i create deployments -n <namespace>",
        description: "Check whether the current identity can create deployments.",
      },
      {
        command: "kubectl auth can-i --list",
        description: "List permissions available to the current identity.",
      },
    ],
  },

  {
    title: "23. Kubernetes Debugging and Troubleshooting",
    commands: [
      {
        command: "kubectl get pods -A",
        description: "Quickly identify pods across the cluster.",
      },
      {
        command: "kubectl get pods -o wide",
        description: "Check pod placement and networking information.",
      },
      {
        command: "kubectl describe pod <pod-name>",
        description: "Inspect pod events, scheduling and container state.",
      },
      {
        command: "kubectl logs <pod-name>",
        description: "Inspect application logs.",
      },
      {
        command: "kubectl logs <pod-name> --previous",
        description: "Inspect logs from a previously crashed container.",
      },
      {
        command: "kubectl get events --sort-by=.lastTimestamp",
        description: "Review recent cluster events.",
      },
      {
        command: "kubectl top pod <pod-name>",
        description: "Check pod CPU and memory consumption.",
      },
      {
        command: "kubectl get endpoints <service-name>",
        description: "Check whether a Service has backend endpoints.",
      },
      {
        command: "kubectl rollout status deployment/<name>",
        description: "Check whether a deployment rollout is progressing.",
      },
    ],
  },

  {
    title: "24. Debug Containers and Temporary Troubleshooting Pods",
    commands: [
      {
        command: "kubectl debug pod/<pod-name> -it --image=busybox",
        description: "Create a temporary debugging container for troubleshooting.",
      },
      {
        command: "kubectl run debug --rm -it --image=busybox -- sh",
        description: "Launch a temporary interactive troubleshooting pod.",
      },
      {
        command: "kubectl run curl --rm -it --image=curlimages/curl -- sh",
        description: "Launch a temporary pod for HTTP and network testing.",
      },
      {
        command: "kubectl run dns-test --rm -it --image=busybox -- nslookup kubernetes.default",
        description: "Test Kubernetes DNS resolution.",
      },
    ],
  },

  {
    title: "25. Output, Formatting and Filtering",
    commands: [
      {
        command: "kubectl get pods -o wide",
        description: "Display additional resource information.",
      },
      {
        command: "kubectl get pods -o yaml",
        description: "Output resources as YAML.",
      },
      {
        command: "kubectl get pods -o json",
        description: "Output resources as JSON.",
      },
      {
        command: "kubectl get pods -o name",
        description: "Output only resource names.",
      },
      {
        command: "kubectl get pods --sort-by=.status.startTime",
        description: "Sort resources by a JSONPath field.",
      },
      {
        command: "kubectl get pods -l app=nginx",
        description: "Filter resources by label selector.",
      },
      {
        command: "kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase",
        description: "Display selected fields using custom columns.",
      },
    ],
  },

  {
    title: "26. Server-Side and Client-Side Validation",
    commands: [
      {
        command: "kubectl apply --dry-run=client -f deployment.yaml",
        description: "Validate a manifest locally without sending it to the API server.",
      },
      {
        command: "kubectl apply --dry-run=server -f deployment.yaml",
        description: "Validate a manifest against the Kubernetes API server.",
      },
      {
        command: "kubectl create deployment nginx --image=nginx --dry-run=client -o yaml",
        description: "Generate a deployment YAML without creating it.",
      },
      {
        command: "kubectl explain deployment.spec",
        description: "Review Kubernetes API documentation for deployment fields.",
      },
    ],
  },

  {
    title: "27. Recommended Kubernetes DevOps Workflow",
    commands: [
      {
        command: "kubectl config current-context",
        description: "Confirm the target Kubernetes cluster before making changes.",
      },
      {
        command: "kubectl get nodes",
        description: "Verify cluster/node health before deployment.",
      },
      {
        command: "kubectl apply --dry-run=server -f manifest.yaml",
        description: "Validate a manifest against the API server before applying it.",
      },
      {
        command: "kubectl apply -f manifest.yaml",
        description: "Apply the approved Kubernetes configuration.",
      },
      {
        command: "kubectl rollout status deployment/<name>",
        description: "Verify rollout progress.",
      },
      {
        command: "kubectl get pods -o wide",
        description: "Verify pod placement and readiness.",
      },
      {
        command: "kubectl get events --sort-by=.lastTimestamp",
        description: "Check recent warnings and operational events.",
      },
      {
        command: "kubectl rollout history deployment/<name>",
        description: "Review deployment revision history.",
      },
    ],
  },
];

const popularCommands = [
  "kubectl get pods -A",
  "kubectl describe pod <pod-name>",
  "kubectl logs <pod-name>",
  "kubectl logs <pod-name> --previous",
  "kubectl exec -it <pod-name> -- /bin/sh",
  "kubectl get events --sort-by=.lastTimestamp",
  "kubectl rollout status deployment/<name>",
  "kubectl rollout undo deployment/<name>",
  "kubectl get svc",
  "kubectl get ingress",
  "kubectl top pods",
  "kubectl auth can-i --list",
];

const quickStartSteps = [
  {
    title: "1. Confirm the cluster",
    description:
      "Before running commands against a production cluster, confirm the active context and namespace.",
    command: "kubectl config current-context",
  },
  {
    title: "2. Check cluster health",
    description:
      "Verify nodes and basic cluster connectivity before investigating workloads.",
    command: "kubectl get nodes",
  },
  {
    title: "3. Find the workload",
    description:
      "Identify pods, their status, namespace and node placement.",
    command: "kubectl get pods -A -o wide",
  },
  {
    title: "4. Inspect before changing",
    description:
      "Use describe, logs and events to understand the failure before restarting or deleting anything.",
    command: "kubectl describe pod <pod-name>",
  },
  {
    title: "5. Apply safely",
    description:
      "Validate manifests against the API server before making changes.",
    command: "kubectl apply --dry-run=server -f manifest.yaml",
  },
];

const productionSafetyRules = [
  "Always confirm kubectl context before running production commands.",
  "Use the correct namespace explicitly when working outside your default namespace.",
  "Prefer read-only commands such as get, describe, logs and events during initial investigation.",
  "Use dry-run validation before applying unfamiliar manifests.",
  "Avoid deleting pods, deployments, namespaces or persistent resources until the impact is understood.",
  "Record the reason for production changes and verify rollout status afterward.",
];

const troubleshootingLinks = [
  {
    title: "CrashLoopBackOff",
    description:
      "Investigate containers that repeatedly start and terminate.",
    href: "/kubernetes/troubleshooting/crashloopbackoff",
  },
  {
    title: "Pending Pods",
    description:
      "Troubleshoot scheduling failures, insufficient resources, taints and PVC issues.",
    href: "/kubernetes/troubleshooting/pending-pods",
  },
];

const problemWorkflows = [
  {
    problem: "Pod is CrashLoopBackOff",
    steps: [
      "kubectl get pod <pod-name>",
      "kubectl describe pod <pod-name>",
      "kubectl logs <pod-name>",
      "kubectl logs <pod-name> --previous",
      "kubectl get events --sort-by=.lastTimestamp",
    ],
  },
  {
    problem: "Pod is Pending",
    steps: [
      "kubectl get pod <pod-name>",
      "kubectl describe pod <pod-name>",
      "kubectl get nodes",
      "kubectl get events --sort-by=.lastTimestamp",
      "kubectl get pvc",
    ],
  },
  {
    problem: "Service is not reachable",
    steps: [
      "kubectl get svc <service-name>",
      "kubectl describe svc <service-name>",
      "kubectl get endpoints <service-name>",
      "kubectl get endpointslices",
      "kubectl get pods --show-labels",
    ],
  },
];

const categoryLinks = [
  {
    title: "Pods",
    description: "Get Pods, inspect status, logs and execute commands.",
    href: "#kubectl-get-kubernetes-resources",
  },
  {
    title: "Deployments",
    description: "Manage replicas, images, rollouts and revisions.",
    href: "#kubectl-deployments-and-rollouts",
  },
  {
    title: "Services",
    description: "Inspect Services, ports, endpoints and connectivity.",
    href: "#kubectl-services-and-networking",
  },
  {
    title: "Troubleshooting",
    description:
      "Investigate events, crashes, scheduling and application errors.",
    href: "#kubectl-kubernetes-debugging-and-troubleshooting",
  },
  {
    title: "Networking",
    description:
      "Work with Services, Ingress, EndpointSlices and NetworkPolicies.",
    href: "#kubectl-ingress-and-network-policies",
  },
  {
    title: "RBAC",
    description:
      "Check permissions, Roles, ClusterRoles and ServiceAccounts.",
    href: "#kubectl-rbac-and-security",
  },
  {
    title: "Storage",
    description:
      "Inspect PersistentVolumes, PersistentVolumeClaims and StorageClasses.",
    href: "#kubectl-storage",
  },
  {
    title: "Configuration",
    description:
      "Work with ConfigMaps, Secrets and environment variables.",
    href: "#kubectl-configmaps-and-secrets",
  },
  {
    title: "Cluster Operations",
    description:
      "Inspect Nodes, contexts, namespaces and cluster resources.",
    href: "#kubectl-kubernetes-cluster-information",
  },
];

const faqItems = [
  {
    question: "What is kubectl used for?",
    answer:
      "kubectl is the command-line interface used to communicate with the Kubernetes API server. It is commonly used to inspect resources, deploy workloads, view logs, troubleshoot applications, manage configuration and perform cluster operations.",
  },
  {
    question: "What are the most important kubectl commands for troubleshooting?",
    answer:
      "A practical troubleshooting sequence is kubectl get, kubectl describe, kubectl logs, kubectl logs --previous, kubectl get events and kubectl get endpoints. These commands help identify workload state, container failures, scheduling problems and Service connectivity issues.",
  },
  {
    question: "How do I check why a Kubernetes pod is not starting?",
    answer:
      "Start with kubectl get pod <pod-name>, then use kubectl describe pod <pod-name> to inspect events and container state. If the container started and crashed, check kubectl logs and kubectl logs --previous.",
  },
  {
    question: "How do I check Kubernetes resource usage?",
    answer:
      "Use kubectl top nodes for node CPU and memory usage and kubectl top pods for pod usage. The metrics-server or an equivalent metrics provider must be available for these commands to return metrics.",
  },
  {
    question: "How do I roll back a Kubernetes deployment?",
    answer:
      "Use kubectl rollout history deployment/<name> to inspect revisions and kubectl rollout undo deployment/<name> to return to the previous revision. A specific revision can be selected with --to-revision.",
  },
  {
    question: "How do I safely apply Kubernetes YAML?",
    answer:
      "A useful workflow is to inspect the manifest, validate it with kubectl apply --dry-run=server -f manifest.yaml, apply it, then verify rollout status, pod readiness and recent events.",
  },
];

export default function KubectlCommandsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
          Kubernetes CLI Reference
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          kubectl Commands Cheat Sheet
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          A practical kubectl command reference for Kubernetes administrators,
          DevOps engineers and SREs. Use this guide to inspect workloads,
          troubleshoot pods, manage deployments, work with Services and
          networking, investigate events, manage RBAC and storage, and operate
          Kubernetes environments safely.
        </p>
      </header>

      <section className="mt-10 rounded-2xl border border-cyan-500/20 bg-slate-900/70 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Quick Start: Kubernetes Troubleshooting Workflow
            </h2>
            <p className="mt-2 text-slate-400">
              Use this sequence when investigating a production Kubernetes
              issue. Start with read-only commands before making changes.
            </p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300">
            <span className="font-semibold text-cyan-400">Tip:</span>{" "}
            Confirm your context before every production investigation.
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {quickStartSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-xl border border-slate-800 bg-slate-950 p-4"
            >
              <h3 className="font-semibold text-white">{step.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {step.description}
              </p>

              <code className="mt-4 block overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs text-cyan-300">
                {step.command}
              </code>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12" id="kubectl-category-navigation">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Browse kubectl Commands by Category
          </h2>

          <p className="mt-2 max-w-3xl text-slate-400">
            Jump directly to the Kubernetes command group you need for
            day-to-day operations, troubleshooting and production support.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryLinks.map((category) => (
            <a
              key={category.title}
              href={category.href}
              className="group rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/50 hover:bg-slate-800/70"
            >
              <h3 className="font-semibold text-white group-hover:text-cyan-300">
                {category.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {category.description}
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-cyan-400">
                View commands →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-bold text-white">
          Most Used kubectl Commands
        </h2>

        <p className="mt-2 text-slate-400">
          These commands are useful for everyday Kubernetes administration and
          first-level production troubleshooting.
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {popularCommands.map((command) => (
            <code
              key={command}
              className="block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 p-4 text-sm text-cyan-300"
            >
              {command}
            </code>
          ))}
        </div>
      </section>

      <KubectlCommandSearch sections={commandSections} />

      <section className="mt-16 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
        <h2 className="text-2xl font-bold text-white">
          Production Safety Guide
        </h2>

        <p className="mt-2 text-slate-400">
          kubectl can make immediate changes to running workloads. Treat
          production commands as operational changes, not just CLI commands.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {productionSafetyRules.map((rule) => (
            <div
              key={rule}
              className="rounded-xl border border-slate-800 bg-slate-950 p-4"
            >
              <p className="text-sm leading-6 text-slate-300">{rule}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Kubernetes Troubleshooting Guides
          </h2>

          <p className="mt-2 text-slate-400">
            Use these focused troubleshooting workflows when a Kubernetes
            workload enters an unhealthy state.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {troubleshootingLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/50 hover:bg-slate-800/70"
            >
              <h3 className="font-semibold text-white">{item.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {item.description}
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-cyan-400">
                Open troubleshooting guide →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white">
          Real-World Kubernetes Troubleshooting Workflows
        </h2>

        <p className="mt-2 text-slate-400">
          Instead of running random commands, follow a structured investigation
          sequence based on the symptom.
        </p>

        <div className="mt-6 space-y-6">
          {problemWorkflows.map((workflow) => (
            <div
              key={workflow.problem}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {workflow.problem}
              </h3>

              <div className="mt-4 space-y-2">
                {workflow.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-3 rounded-lg bg-slate-950 p-3"
                  >
                    <span className="font-mono text-sm text-slate-500">
                      {index + 1}.
                    </span>

                    <code className="overflow-x-auto text-sm text-cyan-300">
                      {step}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white">
          kubectl Frequently Asked Questions
        </h2>

        <div className="mt-6 space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <summary className="cursor-pointer list-none font-semibold text-white">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-cyan-400 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>

              <p className="mt-4 leading-7 text-slate-400">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-slate-800 pt-8">
        <p className="text-sm leading-6 text-slate-500">
          This kubectl reference is designed for Kubernetes administration,
          DevOps, SRE and production support workflows. Always verify commands
          against your Kubernetes version and environment before using them in
          production.
        </p>
      </section>
    </main>
  );
}