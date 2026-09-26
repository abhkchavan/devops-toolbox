import type { Metadata } from "next";
import KubectlCommandSearch from "./KubectlCommandSearch";

export const metadata: Metadata = {
  title: "kubectl Commands Cheat Sheet | Kubernetes CLI Reference",
  description:
    "Complete kubectl commands cheat sheet for Kubernetes administration, DevOps, SRE and production troubleshooting. Learn kubectl commands for Pods, Deployments, Services, Nodes, logs, networking, RBAC, storage, rollouts and cluster operations.",
  keywords: [
    "kubectl commands",
    "kubectl cheat sheet",
    "Kubernetes commands",
    "Kubernetes CLI",
    "kubectl command reference",
    "kubectl examples",
    "kubectl troubleshooting",
    "Kubernetes troubleshooting",
    "kubectl get pods",
    "kubectl logs",
    "kubectl exec",
    "kubectl apply",
    "kubectl rollout",
    "kubectl describe",
    "kubectl delete pod",
    "kubectl get nodes",
    "kubectl commands for DevOps",
    "kubectl commands for SRE",
    "Kubernetes DevOps commands",
    "Kubernetes production troubleshooting",
    "Kubernetes production commands",
    "kubectl production troubleshooting",
    "Kubernetes CLI cheat sheet",
  ],
  alternates: {
    canonical: "/kubernetes/kubectl-commands",
  },
  openGraph: {
    type: "article",
    url: "https://www.devopscommands.com/kubernetes/kubectl-commands",
    siteName: "DevOps Commands",
    title: "kubectl Commands Cheat Sheet | Kubernetes CLI Reference",
    description:
      "Practical kubectl command reference for Kubernetes administration, DevOps, SRE, application support and production troubleshooting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "kubectl Commands Cheat Sheet | Kubernetes CLI Reference",
    description:
      "Practical kubectl commands for Kubernetes administration, DevOps, SRE troubleshooting and cluster management.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const commandSections = [
  {
    title: "1. Kubernetes Cluster Information",
    commands: [
      {
        command: "kubectl cluster-info",
        description:
          "Displays the Kubernetes control plane and cluster service endpoints.",
      },
      {
        command: "kubectl version",
        description:
          "Displays client and server Kubernetes version information.",
      },
      {
        command: "kubectl version --output=yaml",
        description:
          "Displays Kubernetes client and server version information in YAML format.",
      },
      {
        command: "kubectl api-versions",
        description:
          "Lists API versions available from the Kubernetes API server.",
      },
      {
        command: "kubectl api-resources",
        description:
          "Lists supported Kubernetes resource types and their API groups.",
      },
      {
        command: "kubectl get --raw=/healthz",
        description:
          "Queries the Kubernetes API health endpoint.",
      },
      {
        command: "kubectl get nodes",
        description:
          "Lists all nodes in the current cluster.",
      },
      {
        command: "kubectl get nodes -o wide",
        description:
          "Shows additional node information such as IP address, OS and container runtime.",
      },
    ],
  },

  {
    title: "2. Get Kubernetes Resources",
    commands: [
      {
        command: "kubectl get pods",
        description:
          "Lists Pods in the current namespace.",
      },
      {
        command: "kubectl get pods -A",
        description:
          "Lists Pods across all namespaces.",
      },
      {
        command: "kubectl get pods -o wide",
        description:
          "Shows additional Pod information including IP address and node.",
      },
      {
        command: "kubectl get all",
        description:
          "Displays common resources such as Pods, Services, Deployments and ReplicaSets in the current namespace.",
      },
      {
        command: "kubectl get namespaces",
        description:
          "Lists all namespaces in the cluster.",
      },
      {
        command: "kubectl get svc",
        description:
          "Lists Services in the current namespace.",
      },
      {
        command: "kubectl get deployments",
        description:
          "Lists Deployments in the current namespace.",
      },
      {
        command: "kubectl get replicasets",
        description:
          "Lists ReplicaSets in the current namespace.",
      },
      {
        command: "kubectl get daemonsets",
        description:
          "Lists DaemonSets in the current namespace.",
      },
      {
        command: "kubectl get statefulsets",
        description:
          "Lists StatefulSets in the current namespace.",
      },
      {
        command: "kubectl get jobs",
        description:
          "Lists Jobs in the current namespace.",
      },
      {
        command: "kubectl get cronjobs",
        description:
          "Lists CronJobs in the current namespace.",
      },
      {
        command: "kubectl get ingress",
        description:
          "Lists Ingress resources.",
      },
      {
        command: "kubectl get pvc",
        description:
          "Lists PersistentVolumeClaims.",
      },
      {
        command: "kubectl get pv",
        description:
          "Lists PersistentVolumes in the cluster.",
      },
    ],
  },

  {
    title: "3. Namespaces",
    commands: [
      {
        command: "kubectl get ns",
        description:
          "Lists all namespaces.",
      },
      {
        command: "kubectl create namespace <namespace>",
        description:
          "Creates a namespace.",
      },
      {
        command: "kubectl get pods -n <namespace>",
        description:
          "Lists Pods in a specific namespace.",
      },
      {
        command: "kubectl get all -n <namespace>",
        description:
          "Lists common resources inside a specific namespace.",
      },
      {
        command:
          "kubectl config set-context --current --namespace=<namespace>",
        description:
          "Sets the default namespace for the current kubectl context.",
      },
      {
        command: "kubectl delete namespace <namespace>",
        description:
          "Deletes a namespace and the resources contained within it. Treat as a destructive production operation.",
      },
    ],
  },

  {
    title: "4. Describe and Inspect Resources",
    commands: [
      {
        command: "kubectl describe pod <pod-name>",
        description:
          "Shows detailed Pod information including events, containers, volumes and scheduling details.",
      },
      {
        command: "kubectl describe node <node-name>",
        description:
          "Shows detailed information about a Kubernetes node.",
      },
      {
        command: "kubectl describe deployment <deployment-name>",
        description:
          "Shows detailed Deployment configuration, replica status and events.",
      },
      {
        command: "kubectl describe svc <service-name>",
        description:
          "Shows detailed Service configuration, ports and endpoint information.",
      },
      {
        command: "kubectl describe ingress <ingress-name>",
        description:
          "Displays detailed Ingress configuration and routing information.",
      },
      {
        command: "kubectl get pod <pod-name> -o yaml",
        description:
          "Displays the complete Kubernetes Pod definition and status as YAML.",
      },
      {
        command: "kubectl get pod <pod-name> -o json",
        description:
          "Displays the complete Kubernetes Pod definition and status as JSON.",
      },
      {
        command:
          "kubectl get deployment <deployment-name> -o wide",
        description:
          "Displays additional Deployment information.",
      },
    ],
  },

  {
    title: "5. Pod Logs",
    commands: [
      {
        command: "kubectl logs <pod-name>",
        description:
          "Displays logs from a Pod.",
      },
      {
        command: "kubectl logs -f <pod-name>",
        description:
          "Continuously follows Pod logs.",
      },
      {
        command: "kubectl logs --tail=100 <pod-name>",
        description:
          "Displays the last 100 lines of logs.",
      },
      {
        command: "kubectl logs --since=1h <pod-name>",
        description:
          "Displays logs generated during the specified time period.",
      },
      {
        command: "kubectl logs --timestamps <pod-name>",
        description:
          "Includes timestamps in container logs.",
      },
      {
        command: "kubectl logs --previous <pod-name>",
        description:
          "Displays logs from the previous terminated container instance.",
      },
      {
        command:
          "kubectl logs <pod-name> -c <container-name>",
        description:
          "Displays logs from a specific container in a multi-container Pod.",
      },
      {
        command:
          "kubectl logs -f <pod-name> -c <container-name>",
        description:
          "Follows logs from a specific container.",
      },
    ],
  },

  {
    title: "6. Execute Commands Inside Pods",
    commands: [
      {
        command:
          "kubectl exec -it <pod-name> -- /bin/bash",
        description:
          "Opens an interactive Bash shell inside a running container.",
      },
      {
        command:
          "kubectl exec -it <pod-name> -- /bin/sh",
        description:
          "Opens a shell when Bash is not available in the container.",
      },
      {
        command:
          "kubectl exec <pod-name> -- env",
        description:
          "Displays environment variables inside the container.",
      },
      {
        command:
          "kubectl exec <pod-name> -- ls -la",
        description:
          "Runs ls inside the container.",
      },
      {
        command:
          "kubectl exec -it <pod-name> -c <container-name> -- /bin/sh",
        description:
          "Opens a shell in a specific container of a multi-container Pod.",
      },
    ],
  },

  {
    title: "7. Create and Apply Resources",
    commands: [
      {
        command: "kubectl apply -f deployment.yaml",
        description:
          "Creates or updates resources defined in a Kubernetes manifest.",
      },
      {
        command: "kubectl apply -f ./manifests/",
        description:
          "Applies supported Kubernetes manifests from a directory.",
      },
      {
        command:
          "kubectl apply -f deployment.yaml --dry-run=client",
        description:
          "Validates the manifest locally without creating the resource.",
      },
      {
        command:
          "kubectl create deployment nginx --image=nginx",
        description:
          "Creates a Deployment from the command line.",
      },
      {
        command:
          "kubectl create namespace <namespace>",
        description:
          "Creates a namespace.",
      },
      {
        command:
          "kubectl create configmap <name> --from-literal=key=value",
        description:
          "Creates a ConfigMap from a literal key-value pair.",
      },
      {
        command:
          "kubectl create secret generic <name> --from-literal=key=value",
        description:
          "Creates a generic Secret from a literal key-value pair. Avoid exposing sensitive values in shell history.",
      },
    ],
  },

  {
    title: "8. Delete Resources",
    commands: [
      {
        command:
          "kubectl delete pod <pod-name>",
        description:
          "Deletes a specific Pod. If it is managed by a Deployment or another controller, Kubernetes may create a replacement.",
      },
      {
        command:
          "kubectl delete deployment <deployment-name>",
        description:
          "Deletes a Deployment and its managed resources. Treat as a destructive operation.",
      },
      {
        command:
          "kubectl delete svc <service-name>",
        description:
          "Deletes a Service and can interrupt application connectivity.",
      },
      {
        command:
          "kubectl delete -f deployment.yaml",
        description:
          "Deletes resources defined in a Kubernetes manifest.",
      },
      {
        command:
          "kubectl delete -f ./manifests/",
        description:
          "Deletes resources represented by manifests in a directory.",
      },
      {
        command:
          "kubectl delete pod <pod-name> --grace-period=0 --force",
        description:
          "Force deletes a Pod when normal graceful deletion is not completing. Use carefully because it bypasses normal graceful termination.",
      },
      {
        command:
          "kubectl delete namespace <namespace>",
        description:
          "Deletes a namespace and its contained resources. Verify the target context before using this command.",
      },
    ],
  },

  {
    title: "9. Deployments and Rollouts",
    commands: [
      {
        command: "kubectl get deployments",
        description:
          "Lists Deployments.",
      },
      {
        command:
          "kubectl rollout status deployment/<deployment-name>",
        description:
          "Checks the rollout status of a Deployment.",
      },
      {
        command:
          "kubectl rollout history deployment/<deployment-name>",
        description:
          "Displays Deployment rollout history.",
      },
      {
        command:
          "kubectl rollout history deployment/<deployment-name> --revision=2",
        description:
          "Displays details for a specific Deployment revision.",
      },
      {
        command:
          "kubectl rollout undo deployment/<deployment-name>",
        description:
          "Rolls a Deployment back to its previous revision.",
      },
      {
        command:
          "kubectl rollout undo deployment/<deployment-name> --to-revision=2",
        description:
          "Rolls a Deployment back to a specific revision.",
      },
      {
        command:
          "kubectl rollout restart deployment/<deployment-name>",
        description:
          "Triggers a rolling restart of a Deployment. A restart does not by itself fix an underlying application, configuration or dependency problem.",
      },
      {
        command:
          "kubectl rollout pause deployment/<deployment-name>",
        description:
          "Pauses a Deployment rollout.",
      },
      {
        command:
          "kubectl rollout resume deployment/<deployment-name>",
        description:
          "Resumes a paused Deployment rollout.",
      },
    ],
  },

  {
    title: "10. Scale Applications",
    commands: [
      {
        command:
          "kubectl scale deployment <deployment-name> --replicas=3",
        description:
          "Changes the desired number of replicas for a Deployment.",
      },
      {
        command:
          "kubectl scale deployment <deployment-name> --replicas=0",
        description:
          "Scales a Deployment down to zero replicas. This stops its Pods and should be treated as a deliberate operational change.",
      },
      {
        command:
          "kubectl get deployment <deployment-name>",
        description:
          "Shows the current and desired replica counts.",
      },
      {
        command:
          "kubectl autoscale deployment <deployment-name> --min=2 --max=5 --cpu-percent=70",
        description:
          "Creates a HorizontalPodAutoscaler using CPU utilization targets.",
      },
    ],
  },

  {
    title: "11. Services and Networking",
    commands: [
      {
        command: "kubectl get svc",
        description:
          "Lists Kubernetes Services.",
      },
      {
        command:
          "kubectl describe svc <service-name>",
        description:
          "Displays Service configuration, ports and endpoints.",
      },
      {
        command:
          "kubectl get endpoints",
        description:
          "Displays endpoints associated with Services.",
      },
      {
        command:
          "kubectl get endpointslices",
        description:
          "Lists EndpointSlice resources used for Service endpoint information.",
      },
      {
        command:
          "kubectl expose deployment <deployment-name> --port=80 --type=NodePort",
        description:
          "Creates a Service exposing a Deployment.",
      },
      {
        command:
          "kubectl expose deployment <deployment-name> --port=80 --target-port=8080 --type=ClusterIP",
        description:
          "Creates a ClusterIP Service and maps the Service port to a container target port.",
      },
      {
        command:
          "kubectl port-forward svc/<service-name> 8080:80",
        description:
          "Forwards a local port to a Kubernetes Service for temporary debugging access.",
      },
      {
        command:
          "kubectl port-forward pod/<pod-name> 8080:80",
        description:
          "Forwards a local port directly to a Pod for temporary debugging.",
      },
      {
        command:
          "kubectl get networkpolicies",
        description:
          "Lists NetworkPolicy resources in the current namespace.",
      },
    ],
  },

  {
    title: "12. ConfigMaps and Secrets",
    commands: [
      {
        command:
          "kubectl get configmaps",
        description:
          "Lists ConfigMaps.",
      },
      {
        command:
          "kubectl describe configmap <name>",
        description:
          "Displays ConfigMap details.",
      },
      {
        command:
          "kubectl get configmap <name> -o yaml",
        description:
          "Displays a ConfigMap in YAML format.",
      },
      {
        command:
          "kubectl get secrets",
        description:
          "Lists Secrets.",
      },
      {
        command:
          "kubectl describe secret <name>",
        description:
          "Displays Secret metadata without directly printing decoded values.",
      },
      {
        command:
          "kubectl get secret <name> -o yaml",
        description:
          "Displays a Secret manifest containing encoded data fields. Protect the output and do not treat base64 encoding as encryption.",
      },
      {
        command:
          "kubectl create secret docker-registry <name> --docker-server=<registry> --docker-username=<username> --docker-password=<password>",
        description:
          "Creates an image-pull Secret for a private container registry. Avoid exposing credentials in shell history or process listings where possible.",
      },
    ],
  },

  {
    title: "13. Kubernetes Events",
    commands: [
      {
        command:
          "kubectl get events",
        description:
          "Lists events in the current namespace.",
      },
      {
        command:
          "kubectl get events -A",
        description:
          "Lists events across all namespaces.",
      },
      {
        command:
          "kubectl get events --sort-by=.lastTimestamp",
        description:
          "Sorts events by their latest timestamp.",
      },
      {
        command:
          "kubectl get events --field-selector type=Warning",
        description:
          "Shows warning events in the current namespace.",
      },
      {
        command:
          "kubectl get events -A --sort-by=.lastTimestamp",
        description:
          "Displays cluster-wide events ordered by timestamp.",
      },
    ],
  },

  {
    title: "14. Resource Usage and Performance",
    commands: [
      {
        command:
          "kubectl top nodes",
        description:
          "Displays CPU and memory usage for nodes when Metrics Server is available.",
      },
      {
        command:
          "kubectl top pods",
        description:
          "Displays CPU and memory usage for Pods when Metrics Server is available.",
      },
      {
        command:
          "kubectl top pods -A",
        description:
          "Displays Pod resource usage across namespaces.",
      },
      {
        command:
          "kubectl top pod <pod-name> --containers",
        description:
          "Displays CPU and memory usage for individual containers.",
      },
      {
        command:
          "kubectl top node <node-name>",
        description:
          "Displays resource usage for a specific node.",
      },
    ],
  },

  {
    title: "15. Labels, Selectors and Annotations",
    commands: [
      {
        command:
          "kubectl get pods --show-labels",
        description:
          "Displays Pod labels.",
      },
      {
        command:
          "kubectl get pods -l app=nginx",
        description:
          "Lists Pods matching the specified label selector.",
      },
      {
        command:
          "kubectl get pods -l 'environment in (production,staging)'",
        description:
          "Selects resources using a set-based label selector.",
      },
      {
        command:
          "kubectl label pod <pod-name> environment=production",
        description:
          "Adds or updates a label on a Pod.",
      },
      {
        command:
          "kubectl label pod <pod-name> environment-",
        description:
          "Removes the specified label from a Pod.",
      },
      {
        command:
          "kubectl annotate pod <pod-name> description='my pod'",
        description:
          "Adds or updates an annotation on a Pod.",
      },
      {
        command:
          "kubectl get pods -l app=nginx -o name",
        description:
          "Returns matching Pod resource names only.",
      },
    ],
  },

  {
    title: "16. Context and Kubeconfig",
    commands: [
      {
        command:
          "kubectl config get-contexts",
        description:
          "Lists available kubectl contexts.",
      },
      {
        command:
          "kubectl config current-context",
        description:
          "Displays the currently selected context. Check this before production changes.",
      },
      {
        command:
          "kubectl config use-context <context-name>",
        description:
          "Switches to another Kubernetes context.",
      },
      {
        command:
          "kubectl config view",
        description:
          "Displays the current kubeconfig configuration. Protect sensitive credentials if present.",
      },
      {
        command:
          "kubectl config view --minify",
        description:
          "Displays only the configuration for the current context.",
      },
      {
        command:
          "kubectl config set-context <context-name> --cluster=<cluster> --user=<user>",
        description:
          "Creates or updates a kubeconfig context.",
      },
      {
        command:
          "kubectl config rename-context <old-name> <new-name>",
        description:
          "Renames an existing kubeconfig context.",
      },
      {
        command:
          "kubectl config delete-context <context-name>",
        description:
          "Deletes a context from kubeconfig.",
      },
    ],
  },

  {
    title: "17. Patch and Edit Resources",
    commands: [
      {
        command:
          "kubectl edit deployment <deployment-name>",
        description:
          "Opens the live Deployment manifest in an editor. Treat direct production edits as controlled changes.",
      },
      {
        command:
          "kubectl edit service <service-name>",
        description:
          "Opens a Service manifest for live editing.",
      },
      {
        command:
          `kubectl patch deployment <deployment-name> -p '{"spec":{"replicas":3}}'`,
        description:
          "Applies a targeted patch to a Kubernetes resource.",
      },
      {
        command:
          "kubectl set image deployment/<deployment-name> <container-name>=<image>:<tag>",
        description:
          "Updates the container image used by a Deployment and normally triggers a rollout.",
      },
      {
        command:
          "kubectl set env deployment/<deployment-name> ENV=production",
        description:
          "Adds or updates an environment variable on a Deployment.",
      },
      {
        command:
          "kubectl set resources deployment/<deployment-name> -c <container-name> --requests=cpu=100m,memory=128Mi --limits=cpu=500m,memory=512Mi",
        description:
          "Updates resource requests and limits for a Deployment container.",
      },
    ],
  },

  {
    title: "18. Jobs and CronJobs",
    commands: [
      {
        command:
          "kubectl get jobs",
        description:
          "Lists Jobs.",
      },
      {
        command:
          "kubectl describe job <job-name>",
        description:
          "Displays detailed Job status, Pod information and events.",
      },
      {
        command:
          "kubectl create job <job-name> --image=busybox -- echo hello",
        description:
          "Creates a Job that runs a command.",
      },
      {
        command:
          "kubectl get cronjobs",
        description:
          "Lists CronJobs.",
      },
      {
        command:
          "kubectl describe cronjob <cronjob-name>",
        description:
          "Displays CronJob schedule and execution information.",
      },
      {
        command:
          "kubectl create job --from=cronjob/<cronjob-name> <job-name>",
        description:
          "Creates an immediate Job from an existing CronJob template.",
      },
      {
        command:
          "kubectl delete job <job-name>",
        description:
          "Deletes a Kubernetes Job.",
      },
    ],
  },

  {
    title: "19. StatefulSets and DaemonSets",
    commands: [
      {
        command:
          "kubectl get statefulsets",
        description:
          "Lists StatefulSets.",
      },
      {
        command:
          "kubectl rollout status statefulset/<name>",
        description:
          "Checks the rollout status of a StatefulSet.",
      },
      {
        command:
          "kubectl rollout restart statefulset/<name>",
        description:
          "Restarts Pods managed by a StatefulSet.",
      },
      {
        command:
          "kubectl get daemonsets",
        description:
          "Lists DaemonSets.",
      },
      {
        command:
          "kubectl rollout status daemonset/<name>",
        description:
          "Checks the rollout status of a DaemonSet.",
      },
      {
        command:
          "kubectl rollout restart daemonset/<name>",
        description:
          "Restarts Pods managed by a DaemonSet.",
      },
    ],
  },

  {
    title: "20. Storage",
    commands: [
      {
        command:
          "kubectl get pv",
        description:
          "Lists PersistentVolumes in the cluster.",
      },
      {
        command:
          "kubectl get pvc",
        description:
          "Lists PersistentVolumeClaims in the current namespace.",
      },
      {
        command:
          "kubectl describe pv <pv-name>",
        description:
          "Displays detailed PersistentVolume information.",
      },
      {
        command:
          "kubectl describe pvc <pvc-name>",
        description:
          "Displays detailed PersistentVolumeClaim information.",
      },
      {
        command:
          "kubectl get storageclass",
        description:
          "Lists available StorageClasses.",
      },
      {
        command:
          "kubectl get storageclass -o wide",
        description:
          "Displays additional StorageClass information.",
      },
    ],
  },

  {
    title: "21. Ingress and Network Policies",
    commands: [
      {
        command:
          "kubectl get ingress",
        description:
          "Lists Ingress resources.",
      },
      {
        command:
          "kubectl describe ingress <ingress-name>",
        description:
          "Displays Ingress rules, backend Services and events.",
      },
      {
        command:
          "kubectl get networkpolicy",
        description:
          "Lists NetworkPolicy resources.",
      },
      {
        command:
          "kubectl describe networkpolicy <policy-name>",
        description:
          "Displays NetworkPolicy selectors and ingress or egress rules.",
      },
      {
        command:
          "kubectl get ingressclass",
        description:
          "Lists available IngressClass resources.",
      },
    ],
  },

  {
    title: "22. RBAC and Security",
    commands: [
      {
        command:
          "kubectl get serviceaccounts",
        description:
          "Lists ServiceAccounts in the current namespace.",
      },
      {
        command:
          "kubectl get roles",
        description:
          "Lists namespace-scoped Roles.",
      },
      {
        command:
          "kubectl get rolebindings",
        description:
          "Lists namespace-scoped RoleBindings.",
      },
      {
        command:
          "kubectl get clusterroles",
        description:
          "Lists cluster-scoped ClusterRoles.",
      },
      {
        command:
          "kubectl get clusterrolebindings",
        description:
          "Lists ClusterRoleBindings.",
      },
      {
        command:
          "kubectl auth can-i get pods",
        description:
          "Checks whether the current identity can perform an action.",
      },
      {
        command:
          "kubectl auth can-i create deployments -n <namespace>",
        description:
          "Checks whether the current identity can create Deployments in a namespace.",
      },
      {
        command:
          "kubectl auth can-i --list",
        description:
          "Lists the actions permitted for the current identity.",
      },
    ],
  },

  {
    title: "23. Kubernetes Debugging and Troubleshooting",
    commands: [
      {
        command:
          "kubectl get pods -o wide",
        description:
          "Checks Pod placement, IP addresses and node assignment.",
      },
      {
        command:
          "kubectl describe pod <pod-name>",
        description:
          "Inspects scheduling, container state and Kubernetes events.",
      },
      {
        command:
          "kubectl logs <pod-name>",
        description:
          "Inspects application output from the container.",
      },
      {
        command:
          "kubectl logs --previous <pod-name>",
        description:
          "Checks logs from a previous crashed container.",
      },
      {
        command:
          "kubectl get events --sort-by=.lastTimestamp",
        description:
          "Reviews recent Kubernetes events for failures and warnings.",
      },
      {
        command:
          "kubectl get pod <pod-name> -o yaml",
        description:
          "Displays the complete Pod specification and status.",
      },
      {
        command:
          "kubectl get pods --field-selector=status.phase=Failed",
        description:
          "Lists Pods currently in the Failed phase.",
      },
      {
        command:
          "kubectl get pods --field-selector=status.phase=Pending",
        description:
          "Lists Pods currently in the Pending phase.",
      },
      {
        command:
          "kubectl get pods --field-selector=status.phase=Running",
        description:
          "Lists Pods currently in the Running phase.",
      },
      {
        command:
          "kubectl get pods -A | grep -v Running",
        description:
          "On environments with grep available, helps identify Pods that are not Running.",
      },
    ],
  },

  {
    title: "24. Debug Containers and Temporary Troubleshooting Pods",
    commands: [
      {
        command:
          "kubectl debug pod/<pod-name> -it --image=busybox",
        description:
          "Starts an ephemeral debugging container when the cluster supports ephemeral containers.",
      },
      {
        command:
          "kubectl run debug --rm -it --image=busybox -- /bin/sh",
        description:
          "Creates a temporary interactive Pod for network or application troubleshooting.",
      },
      {
        command:
          "kubectl run curl --rm -it --image=curlimages/curl -- sh",
        description:
          "Starts a temporary curl-capable container for HTTP and network diagnostics.",
      },
      {
        command:
          "kubectl exec -it <pod-name> -- nslookup <service-name>",
        description:
          "Tests DNS resolution from inside a running Pod when the required utility exists.",
      },
      {
        command:
          "kubectl exec -it <pod-name> -- wget -qO- http://<service-name>:<port>",
        description:
          "Tests HTTP connectivity from inside a Pod when wget is available.",
      },
    ],
  },

  {
    title: "25. Output, Formatting and Filtering",
    commands: [
      {
        command:
          "kubectl get pods -o name",
        description:
          "Displays resource names only.",
      },
      {
        command:
          "kubectl get pods -o wide",
        description:
          "Displays additional columns such as Pod IP and node.",
      },
      {
        command:
          "kubectl get pods -o yaml",
        description:
          "Displays matching resources as YAML.",
      },
      {
        command:
          "kubectl get pods -o json",
        description:
          "Displays matching resources as JSON.",
      },
      {
        command:
          "kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase",
        description:
          "Displays selected fields using custom columns.",
      },
      {
        command:
          "kubectl get pods -o jsonpath='{.items[*].metadata.name}'",
        description:
          "Extracts specific values using JSONPath.",
      },
      {
        command:
          "kubectl get pods --sort-by=.metadata.creationTimestamp",
        description:
          "Sorts resources by creation timestamp.",
      },
      {
        command:
          "kubectl get pods -l app=nginx --no-headers",
        description:
          "Lists matching resources without the table header.",
      },
    ],
  },

  {
    title: "26. Server-Side and Client-Side Validation",
    commands: [
      {
        command:
          "kubectl apply -f deployment.yaml --dry-run=client",
        description:
          "Performs client-side dry-run validation without creating the object.",
      },
      {
        command:
          "kubectl apply -f deployment.yaml --dry-run=server",
        description:
          "Sends the request to the API server for server-side dry-run validation.",
      },
      {
        command:
          "kubectl create deployment nginx --image=nginx --dry-run=client -o yaml",
        description:
          "Generates a Deployment manifest without creating it.",
      },
      {
        command:
          "kubectl create service clusterip nginx --tcp=80:80 --dry-run=client -o yaml",
        description:
          "Generates a Service manifest without creating it.",
      },
    ],
  },

  {
    title: "27. Recommended Kubernetes DevOps Workflow",
    commands: [
      {
        command:
          "kubectl config current-context",
        description:
          "Confirms the active cluster context before making changes.",
      },
      {
        command:
          "kubectl get nodes",
        description:
          "Verifies that cluster nodes are available.",
      },
      {
        command:
          "kubectl get pods -A",
        description:
          "Checks overall Pod health across namespaces.",
      },
      {
        command:
          "kubectl apply -f ./manifests/",
        description:
          "Applies application manifests.",
      },
      {
        command:
          "kubectl rollout status deployment/<deployment-name>",
        description:
          "Waits for a Deployment rollout to complete.",
      },
      {
        command:
          "kubectl get pods -o wide",
        description:
          "Verifies Pod placement, status and IP information.",
      },
      {
        command:
          "kubectl get svc",
        description:
          "Verifies application Services.",
      },
      {
        command:
          "kubectl get ingress",
        description:
          "Verifies external routing when Ingress is used.",
      },
      {
        command:
          "kubectl get events --sort-by=.lastTimestamp",
        description:
          "Reviews recent warnings and operational events.",
      },
    ],
  },
];

const popularCommands = [
  "kubectl get pods",
  "kubectl get pods -A",
  "kubectl get nodes",
  "kubectl describe pod <pod-name>",
  "kubectl logs <pod-name>",
  "kubectl logs --previous <pod-name>",
  "kubectl exec -it <pod-name> -- /bin/sh",
  "kubectl apply -f deployment.yaml",
  "kubectl get svc",
  "kubectl get deployments",
  "kubectl rollout status deployment/<name>",
  "kubectl rollout undo deployment/<name>",
  "kubectl get events --sort-by=.lastTimestamp",
  "kubectl top pods",
  "kubectl config current-context",
  "kubectl auth can-i --list",
];

const faqItems = [
  {
    question: "What is kubectl?",
    answer:
      "kubectl is the Kubernetes command-line interface used to communicate with the Kubernetes API server and manage Kubernetes resources such as Pods, Deployments, Services, Nodes, ConfigMaps and Secrets.",
  },
  {
    question: "What is the most commonly used kubectl command?",
    answer:
      "kubectl get pods is one of the most commonly used commands because it quickly shows Pod status in the current namespace. kubectl get pods -A can be used to inspect Pods across all namespaces.",
  },
  {
    question: "How do I check why a Kubernetes Pod is failing?",
    answer:
      "Start with kubectl config current-context to confirm the target cluster, then use kubectl get pods, kubectl describe pod <pod-name>, kubectl logs <pod-name>, kubectl logs --previous <pod-name> and kubectl get events --sort-by=.lastTimestamp to investigate status, events and application logs.",
  },
  {
    question: "How do I troubleshoot CrashLoopBackOff?",
    answer:
      "Start with kubectl get pod <pod-name>, then inspect kubectl describe pod <pod-name>, kubectl logs <pod-name>, kubectl logs --previous <pod-name> and recent events. CrashLoopBackOff can result from application failures, configuration problems, failed probes, missing dependencies or resource issues.",
  },
  {
    question: "How do I troubleshoot ImagePullBackOff?",
    answer:
      "Inspect the Pod events with kubectl describe pod <pod-name> and verify the image name, tag, registry authentication and imagePullSecrets. Registry DNS, network, TLS and authorization failures can also prevent Kubernetes from pulling an image.",
  },
  {
    question: "How do I check Kubernetes Deployment rollout status?",
    answer:
      "Use kubectl rollout status deployment/<deployment-name>. This shows whether the Deployment is progressing toward its desired state.",
  },
  {
    question: "How do I rollback a Kubernetes Deployment?",
    answer:
      "Use kubectl rollout undo deployment/<deployment-name> to roll back to the previous revision, or use --to-revision=<revision> to target a specific revision. In production, first confirm the current context, revision history and impact of the rollback.",
  },
  {
    question: "How do I check CPU and memory usage in Kubernetes?",
    answer:
      "Use kubectl top nodes and kubectl top pods when Metrics Server is available in the cluster.",
  },
  {
    question: "How do I check which Kubernetes context is active?",
    answer:
      "Run kubectl config current-context. This is especially important before executing commands against production or another critical cluster.",
  },
  {
    question: "What should I check before running a destructive kubectl command?",
    answer:
      "Confirm the active context and namespace, identify the exact resource, review its current state and understand whether a controller will recreate or modify dependent resources. For production changes, follow the applicable change-management and approval process.",
  },
];

export default function KubectlCommands() {
  const commandCount = commandSections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  const categoryLinks = [
    {
      title: "Pods",
      description:
        "Get Pods, inspect status, logs and execute commands.",
      href: "#kubectl-pod-logs",
    },
    {
      title: "Deployments",
      description:
        "Manage replicas, images, rollouts and revisions.",
      href: "#kubectl-deployments-and-rollouts",
    },
    {
      title: "Services",
      description:
        "Inspect Services, ports, endpoints and connectivity.",
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
      href: "#kubectl-services-and-networking",
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

  const quickStartSteps = [
    [
      "1",
      "Confirm the cluster",
      "kubectl config current-context",
      "Always confirm where kubectl is connected before production changes.",
    ],
    [
      "2",
      "Check nodes",
      "kubectl get nodes",
      "Verify that the cluster has healthy and schedulable nodes.",
    ],
    [
      "3",
      "Check workloads",
      "kubectl get pods -A",
      "Get a quick view of workload health across namespaces.",
    ],
    [
      "4",
      "Inspect the failure",
      "kubectl describe pod <pod-name>",
      "Review container state, scheduling details and Kubernetes events.",
    ],
    [
      "5",
      "Check application logs",
      "kubectl logs <pod-name>",
      "Use current or previous container logs to identify application failures.",
    ],
    [
      "6",
      "Check recent events",
      "kubectl get events -A --sort-by=.lastTimestamp",
      "Correlate warnings, scheduling failures and recent cluster activity.",
    ],
  ];

  const productionSafetyRules = [
    {
      title: "Verify context first",
      description:
        "Run kubectl config current-context before operational changes. A correct command against the wrong cluster is still an incident.",
    },
    {
      title: "Prefer evidence before changes",
      description:
        "Collect status, events, logs and resource definitions before restarting, deleting or modifying workloads.",
    },
    {
      title: "Understand controllers",
      description:
        "Deleting a Pod managed by a Deployment, StatefulSet or DaemonSet can cause Kubernetes to create a replacement. Know what owns the resource.",
    },
    {
      title: "Treat direct edits carefully",
      description:
        "kubectl edit, patch, set image and scale can change live workloads. Use the appropriate change-management process for production.",
    },
    {
      title: "Protect secrets",
      description:
        "Avoid exposing credentials in shell history, command output, screenshots, tickets or shared logs.",
    },
    {
      title: "Verify after changes",
      description:
        "Use rollout status, Pod status, events, logs and application checks to confirm that the intended state was actually reached.",
    },
  ];

  const troubleshootingLinks = [
    {
      title: "CrashLoopBackOff",
      description:
        "Investigate repeated container restarts, previous logs, probes, configuration and resource failures.",
      href: "/kubernetes/troubleshooting/crashloopbackoff",
    },
    {
      title: "ImagePullBackOff / ErrImagePull",
      description:
        "Troubleshoot image names, tags, private registries, imagePullSecrets, authentication, DNS and network errors.",
      href: "/kubernetes/troubleshooting/imagepullbackoff",
    },
  ];

  const problemWorkflows = [
    {
      title: "Pod is stuck in Pending",
      commands:
        "kubectl get pod <pod-name> -o wide\nkubectl describe pod <pod-name>\nkubectl get events --sort-by=.lastTimestamp",
      explanation:
        "Look for scheduling constraints, insufficient resources, taints, affinity rules, volume binding and other scheduler events.",
    },
    {
      title: "Pod is in CrashLoopBackOff",
      commands:
        "kubectl get pod <pod-name>\nkubectl describe pod <pod-name>\nkubectl logs <pod-name>\nkubectl logs --previous <pod-name>",
      explanation:
        "Compare the current and previous container state and logs before deciding whether the issue is application code, configuration, probes, dependencies or resources.",
    },
    {
      title: "Pod is in ImagePullBackOff",
      commands:
        "kubectl get pod <pod-name>\nkubectl describe pod <pod-name>\nkubectl get events --sort-by=.lastTimestamp",
      explanation:
        "Check the exact image reference and Pod events for authentication, authorization, DNS, TLS, network or missing-image errors.",
    },
    {
      title: "Deployment rollout is failing",
      commands:
        "kubectl get deployment <deployment-name>\nkubectl rollout status deployment/<deployment-name>\nkubectl rollout history deployment/<deployment-name>\nkubectl describe deployment <deployment-name>",
      explanation:
        "Check replica availability, rollout progress, revision history and the condition that is preventing the desired state from being reached.",
    },
    {
      title: "Service is not reachable",
      commands:
        "kubectl get svc\nkubectl describe svc <service-name>\nkubectl get endpoints\nkubectl get endpointslices\nkubectl get pods -o wide",
      explanation:
        "Verify Service selectors, ports, target ports and whether healthy Pods are actually registered as endpoints.",
    },
    {
      title: "Check node health",
      commands:
        "kubectl get nodes\nkubectl get nodes -o wide\nkubectl describe node <node-name>\nkubectl top nodes",
      explanation:
        "Inspect node conditions, capacity, allocatable resources, scheduling state and current resource usage.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <a
          href="/"
          className="text-sm text-cyan-400 hover:underline"
        >
          ← Back to DevOps Commands
        </a>

        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Kubernetes CLI Reference
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            kubectl Commands Cheat Sheet
          </h1>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
            Complete kubectl commands cheat sheet for Kubernetes
            administration, DevOps, SRE, application support and production
            troubleshooting. Find practical commands for Pods, Deployments,
            Services, Nodes, namespaces, logs, networking, RBAC, storage,
            rollouts, debugging and cluster operations.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "kubectl commands",
              "Kubernetes CLI",
              "kubectl cheat sheet",
              "Kubernetes troubleshooting",
              "DevOps commands",
              "SRE commands",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <div className="text-3xl font-bold text-cyan-400">
                {commandCount}
              </div>
              <p className="mt-2 text-sm text-slate-400">
                practical kubectl commands
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <div className="text-3xl font-bold text-cyan-400">
                {commandSections.length}
              </div>
              <p className="mt-2 text-sm text-slate-400">
                command categories
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <div className="text-3xl font-bold text-cyan-400">
                L3 / SRE
              </div>
              <p className="mt-2 text-sm text-slate-400">
                production troubleshooting focus
              </p>
            </div>
          </div>
        </header>

        <section className="mt-10 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
          <h2 className="text-2xl font-bold">
            30-Second kubectl Quick Start
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-slate-400">
            If you are troubleshooting a Kubernetes application, start with
            read-only inspection commands. Confirm the cluster first, then
            move from cluster health to workload status, Pod details, logs and
            events before making a change.
          </p>

          <div className="mt-6 space-y-3">
            {quickStartSteps.map(
              ([number, title, command, description]) => (
                <div
                  key={number}
                  className="grid gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4 md:grid-cols-[auto_1fr_2fr]"
                >
                  <div className="text-2xl font-bold text-cyan-400">
                    {number}
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {description}
                    </p>
                  </div>

                  <code className="overflow-x-auto rounded-lg bg-slate-900 px-4 py-3 text-sm text-cyan-400">
                    {command}
                  </code>
                </div>
              ),
            )}
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
          <h2 className="text-2xl font-bold">
            Production kubectl Safety Guide
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            kubectl can make immediate changes to live Kubernetes resources.
            In production, use an evidence-first workflow and verify the target
            cluster, namespace and resource before executing a change.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {productionSafetyRules.map((rule) => (
              <div
                key={rule.title}
                className="rounded-xl border border-slate-800 bg-slate-950 p-5"
              >
                <h3 className="font-bold text-white">
                  {rule.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-amber-500/20 bg-slate-950 p-4">
            <p className="text-sm leading-6 text-slate-400">
              <span className="font-semibold text-amber-400">
                Production habit:
              </span>{" "}
              before a destructive or mutating command, run{" "}
              <code className="text-cyan-400">
                kubectl config current-context
              </code>{" "}
              and confirm the namespace and resource you intend to change.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            What is kubectl?
          </h2>

          <p className="mt-4 leading-8 text-slate-400">
            kubectl is the Kubernetes command-line interface used to
            communicate with Kubernetes clusters through the Kubernetes API
            server. DevOps engineers, SREs and application support teams use
            kubectl to inspect workloads, deploy applications, troubleshoot
            Pods, manage Services and monitor cluster resources.
          </p>

          <p className="mt-4 leading-8 text-slate-400">
            kubectl works against Kubernetes API resources, so the same
            command patterns can be used across managed Kubernetes platforms
            such as AKS, EKS and GKE as well as self-managed or on-premises
            Kubernetes environments, subject to the cluster configuration,
            authentication and installed resources.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
          <h2 className="text-2xl font-bold">
            kubectl Syntax
          </h2>

          <div className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4">
            <code className="text-cyan-400">
              kubectl [command] [TYPE] [NAME] [flags]
            </code>
          </div>

          <p className="mt-4 leading-7 text-slate-400">
            A typical kubectl command contains an operation such as get,
            describe, apply, delete or logs, followed by the Kubernetes
            resource type, resource name and optional flags.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
              <code className="text-cyan-400">
                kubectl get pods
              </code>
              <p className="mt-2 text-sm text-slate-400">
                Lists Pods in the current namespace.
              </p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
              <code className="text-cyan-400">
                kubectl get pods -n production
              </code>
              <p className="mt-2 text-sm text-slate-400">
                Lists Pods in the production namespace.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Quick kubectl Command Reference
          </h2>

          <p className="mt-3 text-slate-400">
            These are some of the most frequently used kubectl commands for
            Kubernetes administration, DevOps operations, SRE work and
            application support.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {popularCommands.map((command) => (
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

        <section className="mt-12" id="kubectl-category-navigation">
          <h2 className="text-2xl font-bold">
            kubectl Commands by Category
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            Use the command search below to find Kubernetes CLI commands by
            task. This reference covers commands commonly used during
            Kubernetes administration, DevOps operations, application support
            and production troubleshooting.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categoryLinks.map((category) => (
              <a
                key={category.title}
                href={category.href}
                className="group rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/50 hover:bg-slate-800/70"
              >
                <h3 className="font-bold text-white transition group-hover:text-cyan-400">
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

        <section className="mt-12">
          <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Kubernetes Command Reference
            </p>

            <p className="mt-2 text-slate-300">
              {commandCount} commands across {commandSections.length} categories
            </p>
          </div>
        </section>

        <KubectlCommandSearch sections={commandSections} />

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Most Useful kubectl Commands for Troubleshooting
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            When a Kubernetes application is not working, start with
            non-destructive inspection commands. Confirm the active context,
            then check Pod status, events, logs, Deployment state, Services
            and endpoints before making changes.
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-6">
            <pre className="text-sm leading-8 text-slate-300">
{`kubectl config current-context
kubectl get nodes
kubectl get pods -A
kubectl get pods -o wide
kubectl describe pod <pod-name>
kubectl logs <pod-name>
kubectl logs --previous <pod-name>
kubectl get events --sort-by=.lastTimestamp
kubectl get deployment
kubectl rollout status deployment/<deployment-name>
kubectl get svc
kubectl get endpoints
kubectl describe node <node-name>`}
            </pre>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">
                Kubernetes Troubleshooting Workflows
              </h2>

              <p className="mt-3 max-w-4xl leading-7 text-slate-400">
                Use the symptom to choose the first diagnostic commands. The
                goal is to collect evidence before changing the workload.
              </p>
            </div>

            <a
              href="/kubernetes/troubleshooting/crashloopbackoff"
              className="text-sm font-semibold text-cyan-400 hover:underline"
            >
              View Kubernetes troubleshooting guides →
            </a>
          </div>

          <div className="mt-6 space-y-4">
            {problemWorkflows.map((problem) => (
              <div
                key={problem.title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <h3 className="font-bold text-white">
                  {problem.title}
                </h3>

                <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm leading-7 text-cyan-400">
                  {problem.commands}
                </pre>

                <p className="mt-4 leading-7 text-slate-400">
                  {problem.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Kubernetes Troubleshooting Guides
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            For common Kubernetes failure states, use the dedicated
            troubleshooting workflows after collecting the initial Pod,
            events and log evidence.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {troubleshootingLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/40 hover:bg-slate-800/70"
              >
                <h3 className="font-bold text-white transition group-hover:text-cyan-400">
                  {item.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-400">
                  {item.description}
                </p>

                <span className="mt-4 inline-block text-sm font-semibold text-cyan-400">
                  Open troubleshooting guide →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Kubernetes Production Troubleshooting Workflow
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            A repeatable troubleshooting workflow helps separate symptoms from
            causes and reduces unnecessary production changes.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {[
              ["1", "Context", "Confirm the cluster and namespace."],
              ["2", "Status", "Check Nodes, Pods and Deployments."],
              ["3", "Events", "Look for scheduling and Kubernetes warnings."],
              ["4", "Logs", "Check current and previous container logs."],
              ["5", "Network", "Check Services, endpoints and routing."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <div className="text-2xl font-bold text-cyan-400">
                  {number}
                </div>

                <h3 className="mt-3 font-bold">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Read-Only vs Change Commands
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            During an incident, start with commands that collect evidence.
            Move to mutating commands only after the failure mode is
            understood and the intended change is clear.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <h3 className="font-bold text-cyan-400">
                Inspect
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Examples: get, describe, logs, events, top, auth can-i and
                config current-context.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <h3 className="font-bold text-cyan-400">
                Change
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Examples: apply, set image, scale, patch, edit and rollout
                restart.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <h3 className="font-bold text-amber-400">
                Destructive
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Examples: delete resources, force-delete Pods and delete
                namespaces. Confirm scope and impact before execution.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            kubectl FAQ
          </h2>

          <div className="mt-5 space-y-4">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <summary className="cursor-pointer font-semibold text-white">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
          <h2 className="text-xl font-bold">
            DevOps Commands Tip
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            Before running a destructive kubectl command, confirm the active
            context and namespace. During incidents, collect status, events,
            logs and resource definitions first. This preserves useful
            diagnostic information and makes troubleshooting more systematic.
          </p>
        </section>

        <footer className="mt-12 border-t border-slate-800 pt-6">
          <p className="text-sm text-slate-500">
            Kubernetes kubectl command reference for DevOps, SRE,
            application support and production troubleshooting workflows.
          </p>
        </footer>
      </div>
    </main>
  );
}