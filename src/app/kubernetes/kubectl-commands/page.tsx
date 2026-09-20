import type { Metadata } from "next";
import KubectlCommandSearch from "./KubectlCommandSearch";

export const metadata: Metadata = {
  title: "kubectl Commands Cheat Sheet | Kubernetes CLI Reference",
  description:
    "Practical kubectl commands for Kubernetes clusters, pods, deployments, services, namespaces, configmaps, secrets, networking, RBAC, debugging, rollouts and troubleshooting.",
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
        command: "kubectl version --short",
        description:
          "Displays a compact Kubernetes version summary when supported by the installed kubectl version.",
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
        description: "Lists all nodes in the current cluster.",
      },
      {
        command: "kubectl get nodes -o wide",
        description:
          "Shows additional node information such as internal IP, OS and container runtime.",
      },
    ],
  },

  {
    title: "2. Get Kubernetes Resources",
    commands: [
      {
        command: "kubectl get pods",
        description: "Lists pods in the current namespace.",
      },
      {
        command: "kubectl get pods -A",
        description: "Lists pods across all namespaces.",
      },
      {
        command: "kubectl get pods -o wide",
        description:
          "Shows additional pod information including IP and node.",
      },
      {
        command: "kubectl get all",
        description:
          "Displays common resources such as pods, services, deployments and ReplicaSets in the current namespace.",
      },
      {
        command: "kubectl get namespaces",
        description: "Lists all namespaces in the cluster.",
      },
      {
        command: "kubectl get svc",
        description: "Lists Services in the current namespace.",
      },
      {
        command: "kubectl get deployments",
        description: "Lists Deployments in the current namespace.",
      },
      {
        command: "kubectl get replicasets",
        description: "Lists ReplicaSets in the current namespace.",
      },
      {
        command: "kubectl get daemonsets",
        description: "Lists DaemonSets in the current namespace.",
      },
      {
        command: "kubectl get statefulsets",
        description: "Lists StatefulSets in the current namespace.",
      },
      {
        command: "kubectl get jobs",
        description: "Lists Jobs in the current namespace.",
      },
      {
        command: "kubectl get cronjobs",
        description: "Lists CronJobs in the current namespace.",
      },
      {
        command: "kubectl get ingress",
        description: "Lists Ingress resources.",
      },
      {
        command: "kubectl get pvc",
        description: "Lists PersistentVolumeClaims.",
      },
      {
        command: "kubectl get pv",
        description: "Lists PersistentVolumes in the cluster.",
      },
    ],
  },

  {
    title: "3. Namespaces",
    commands: [
      {
        command: "kubectl get ns",
        description: "Lists all namespaces.",
      },
      {
        command: "kubectl create namespace <namespace>",
        description: "Creates a namespace.",
      },
      {
        command: "kubectl get pods -n <namespace>",
        description: "Lists pods in a specific namespace.",
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
          "Deletes a namespace and the resources contained within it.",
      },
    ],
  },

  {
    title: "4. Describe and Inspect Resources",
    commands: [
      {
        command: "kubectl describe pod <pod-name>",
        description:
          "Shows detailed pod information including events, containers, volumes and scheduling details.",
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
          "Shows detailed Service configuration, ports and endpoints.",
      },
      {
        command: "kubectl describe ingress <ingress-name>",
        description:
          "Displays detailed Ingress configuration and routing information.",
      },
      {
        command: "kubectl get pod <pod-name> -o yaml",
        description:
          "Displays the complete Kubernetes object definition as YAML.",
      },
      {
        command: "kubectl get pod <pod-name> -o json",
        description:
          "Displays the complete Kubernetes object definition as JSON.",
      },
      {
        command: "kubectl get deployment <name> -o wide",
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
        description: "Displays logs from a pod.",
      },
      {
        command: "kubectl logs -f <pod-name>",
        description: "Continuously follows pod logs.",
      },
      {
        command: "kubectl logs --tail=100 <pod-name>",
        description: "Displays the last 100 lines of logs.",
      },
      {
        command: "kubectl logs --since=1h <pod-name>",
        description:
          "Displays logs generated during the specified time period.",
      },
      {
        command: "kubectl logs --timestamps <pod-name>",
        description: "Includes timestamps in container logs.",
      },
      {
        command: "kubectl logs --previous <pod-name>",
        description:
          "Displays logs from the previous terminated container instance.",
      },
      {
        command: "kubectl logs <pod-name> -c <container-name>",
        description:
          "Displays logs from a specific container in a multi-container pod.",
      },
      {
        command: "kubectl logs -f <pod-name> -c <container-name>",
        description:
          "Follows logs from a specific container.",
      },
    ],
  },

  {
    title: "6. Execute Commands Inside Pods",
    commands: [
      {
        command: "kubectl exec -it <pod-name> -- /bin/bash",
        description:
          "Opens an interactive Bash shell inside a running container.",
      },
      {
        command: "kubectl exec -it <pod-name> -- /bin/sh",
        description:
          "Opens a shell when Bash is not available in the container.",
      },
      {
        command: "kubectl exec <pod-name> -- env",
        description:
          "Displays environment variables inside the container.",
      },
      {
        command: "kubectl exec <pod-name> -- ls -la",
        description: "Runs ls inside the container.",
      },
      {
        command:
          "kubectl exec -it <pod-name> -c <container-name> -- /bin/sh",
        description:
          "Opens a shell in a specific container of a multi-container pod.",
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
        command: "kubectl apply -f deployment.yaml --dry-run=client",
        description:
          "Validates the manifest locally without creating the resource.",
      },
      {
        command: "kubectl create deployment nginx --image=nginx",
        description:
          "Creates a Deployment from the command line.",
      },
      {
        command: "kubectl create namespace <namespace>",
        description: "Creates a namespace.",
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
          "Creates a generic Secret from a literal key-value pair.",
      },
    ],
  },

  {
    title: "8. Delete Resources",
    commands: [
      {
        command: "kubectl delete pod <pod-name>",
        description: "Deletes a specific pod.",
      },
      {
        command: "kubectl delete deployment <deployment-name>",
        description:
          "Deletes a Deployment and its managed resources.",
      },
      {
        command: "kubectl delete svc <service-name>",
        description: "Deletes a Service.",
      },
      {
        command: "kubectl delete -f deployment.yaml",
        description:
          "Deletes resources defined in a Kubernetes manifest.",
      },
      {
        command: "kubectl delete -f ./manifests/",
        description:
          "Deletes resources represented by manifests in a directory.",
      },
      {
        command:
          "kubectl delete pod <pod-name> --grace-period=0 --force",
        description:
          "Force deletes a pod when normal graceful deletion is not completing. Use carefully.",
      },
      {
        command: "kubectl delete namespace <namespace>",
        description:
          "Deletes a namespace and resources contained within it.",
      },
    ],
  },

  {
    title: "9. Deployments and Rollouts",
    commands: [
      {
        command: "kubectl get deployment",
        description: "Lists Deployments.",
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
          "Triggers a rolling restart of a Deployment.",
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
          "Scales a Deployment down to zero replicas.",
      },
      {
        command: "kubectl get deployment <deployment-name>",
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
        description: "Lists Kubernetes Services.",
      },
      {
        command: "kubectl describe svc <service-name>",
        description:
          "Displays Service configuration, ports and endpoints.",
      },
      {
        command: "kubectl get endpoints",
        description:
          "Displays endpoints associated with Services.",
      },
      {
        command: "kubectl get endpointslices",
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
          "Forwards a local port to a Kubernetes Service.",
      },
      {
        command:
          "kubectl port-forward pod/<pod-name> 8080:80",
        description:
          "Forwards a local port directly to a pod.",
      },
      {
        command: "kubectl get networkpolicies",
        description:
          "Lists NetworkPolicy resources in the current namespace.",
      },
    ],
  },

  {
    title: "12. ConfigMaps and Secrets",
    commands: [
      {
        command: "kubectl get configmaps",
        description: "Lists ConfigMaps.",
      },
      {
        command: "kubectl describe configmap <name>",
        description: "Displays ConfigMap details.",
      },
      {
        command: "kubectl get configmap <name> -o yaml",
        description:
          "Displays a ConfigMap in YAML format.",
      },
      {
        command: "kubectl get secrets",
        description: "Lists Secrets.",
      },
      {
        command: "kubectl describe secret <name>",
        description:
          "Displays Secret metadata without directly printing decoded values.",
      },
      {
        command: "kubectl get secret <name> -o yaml",
        description:
          "Displays a Secret manifest, including encoded data fields. Protect the output.",
      },
      {
        command:
          "kubectl create secret docker-registry <name> --docker-server=<registry> --docker-username=<username> --docker-password=<password>",
        description:
          "Creates an image-pull Secret for a private container registry.",
      },
    ],
  },

  {
    title: "13. Kubernetes Events",
    commands: [
      {
        command: "kubectl get events",
        description:
          "Lists events in the current namespace.",
      },
      {
        command: "kubectl get events -A",
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
        command: "kubectl top nodes",
        description:
          "Displays CPU and memory usage for nodes when Metrics Server is available.",
      },
      {
        command: "kubectl top pods",
        description:
          "Displays CPU and memory usage for pods when Metrics Server is available.",
      },
      {
        command: "kubectl top pods -A",
        description:
          "Displays pod resource usage across namespaces.",
      },
      {
        command:
          "kubectl top pod <pod-name> --containers",
        description:
          "Displays CPU and memory usage for individual containers.",
      },
      {
        command: "kubectl top node <node-name>",
        description:
          "Displays resource usage for a specific node.",
      },
    ],
  },

  {
    title: "15. Labels, Selectors and Annotations",
    commands: [
      {
        command: "kubectl get pods --show-labels",
        description:
          "Displays pod labels.",
      },
      {
        command: "kubectl get pods -l app=nginx",
        description:
          "Lists pods matching the specified label selector.",
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
          "Adds or updates a label on a pod.",
      },
      {
        command:
          "kubectl label pod <pod-name> environment-",
        description:
          "Removes the specified label from a pod.",
      },
      {
        command:
          "kubectl annotate pod <pod-name> description='my pod'",
        description:
          "Adds or updates an annotation on a pod.",
      },
      {
        command:
          "kubectl get pods -l app=nginx -o name",
        description:
          "Returns matching pod resource names only.",
      },
    ],
  },

  {
    title: "16. Context and Kubeconfig",
    commands: [
      {
        command: "kubectl config get-contexts",
        description:
          "Lists available kubectl contexts.",
      },
      {
        command: "kubectl config current-context",
        description:
          "Displays the currently selected context.",
      },
      {
        command:
          "kubectl config use-context <context-name>",
        description:
          "Switches to another Kubernetes context.",
      },
      {
        command: "kubectl config view",
        description:
          "Displays the current kubeconfig configuration.",
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
          "kubectl config set-credentials <user> --token=<token>",
        description:
          "Configures token-based credentials in kubeconfig.",
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
    title: "17. Rollout, Patch and Edit Resources",
    commands: [
      {
        command:
          "kubectl edit deployment <deployment-name>",
        description:
          "Opens the live Deployment manifest in an editor.",
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
          "Updates the container image used by a Deployment.",
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
        command: "kubectl get jobs",
        description: "Lists Jobs.",
      },
      {
        command: "kubectl describe job <job-name>",
        description:
          "Displays detailed Job status, pod information and events.",
      },
      {
        command:
          "kubectl create job <job-name> --image=busybox -- echo hello",
        description:
          "Creates a Job that runs a command.",
      },
      {
        command: "kubectl get cronjobs",
        description: "Lists CronJobs.",
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
        command: "kubectl delete job <job-name>",
        description:
          "Deletes a Kubernetes Job.",
      },
    ],
  },

  {
    title: "19. StatefulSets and DaemonSets",
    commands: [
      {
        command: "kubectl get statefulsets",
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
          "Restarts the pods managed by a StatefulSet.",
      },
      {
        command: "kubectl get daemonsets",
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
          "Restarts pods managed by a DaemonSet.",
      },
    ],
  },

  {
    title: "20. Storage",
    commands: [
      {
        command: "kubectl get pv",
        description:
          "Lists PersistentVolumes in the cluster.",
      },
      {
        command: "kubectl get pvc",
        description:
          "Lists PersistentVolumeClaims in the current namespace.",
      },
      {
        command: "kubectl describe pv <pv-name>",
        description:
          "Displays detailed PersistentVolume information.",
      },
      {
        command: "kubectl describe pvc <pvc-name>",
        description:
          "Displays detailed PersistentVolumeClaim information.",
      },
      {
        command: "kubectl get storageclass",
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
        command: "kubectl get ingress",
        description:
          "Lists Ingress resources.",
      },
      {
        command:
          "kubectl describe ingress <ingress-name>",
        description:
          "Displays Ingress rules, backend services and events.",
      },
      {
        command: "kubectl get networkpolicy",
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
        command: "kubectl get serviceaccounts",
        description:
          "Lists ServiceAccounts in the current namespace.",
      },
      {
        command: "kubectl get roles",
        description:
          "Lists namespace-scoped Roles.",
      },
      {
        command: "kubectl get rolebindings",
        description:
          "Lists namespace-scoped RoleBindings.",
      },
      {
        command: "kubectl get clusterroles",
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
    title: "23. Debugging and Troubleshooting",
    commands: [
      {
        command: "kubectl get pods -o wide",
        description:
          "Useful first step for checking pod placement and networking information.",
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
          "Checks logs from the previous crashed container instance.",
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
          "Displays the complete pod specification and status.",
      },
      {
        command:
          "kubectl get pods --field-selector=status.phase=Failed",
        description:
          "Lists pods currently in the Failed phase.",
      },
      {
        command:
          "kubectl get pods --field-selector=status.phase=Pending",
        description:
          "Lists pods currently in the Pending phase.",
      },
      {
        command:
          "kubectl get pods --field-selector=status.phase=Running",
        description:
          "Lists pods currently in the Running phase.",
      },
      {
        command:
          "kubectl get pods -A | grep -v Running",
        description:
          "On environments with grep available, helps identify pods that are not Running.",
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
          "Creates a temporary interactive pod for network or application troubleshooting.",
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
          "Tests DNS resolution from inside a running pod when the required utility exists.",
      },
      {
        command:
          "kubectl exec -it <pod-name> -- wget -qO- http://<service-name>:<port>",
        description:
          "Tests HTTP connectivity from inside a pod when wget is available.",
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
          "Displays additional columns such as pod IP and node.",
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
          "Sorts resources by their creation timestamp.",
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
          "Performs client-side dry-run validation without contacting the API server to create the object.",
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
          "Confirm the active cluster context before making changes.",
      },
      {
        command:
          "kubectl get nodes",
        description:
          "Verify that the cluster nodes are available.",
      },
      {
        command:
          "kubectl get pods -A",
        description:
          "Check the overall pod health across namespaces.",
      },
      {
        command:
          "kubectl apply -f ./manifests/",
        description:
          "Apply the application manifests.",
      },
      {
        command:
          "kubectl rollout status deployment/<deployment-name>",
        description:
          "Wait for the Deployment rollout to complete.",
      },
      {
        command:
          "kubectl get pods -o wide",
        description:
          "Verify pod placement, status and IP information.",
      },
      {
        command:
          "kubectl get svc",
        description:
          "Verify application Services.",
      },
      {
        command:
          "kubectl get ingress",
        description:
          "Verify external routing when Ingress is used.",
      },
      {
        command:
          "kubectl get events --sort-by=.lastTimestamp",
        description:
          "Review recent warnings and operational events.",
      },
    ],
  },
];

export default function KubectlCommands() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="text-sm text-cyan-400 hover:underline"
        >
          {"←"} Back to DevOpsToolbox
        </a>

        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Kubernetes
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            kubectl Commands Cheat Sheet
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            A practical kubectl command reference for managing Kubernetes
            clusters, pods, deployments, services, namespaces, storage,
            networking, RBAC, logs and troubleshooting.
          </p>
        </header>

        <section className="mt-10 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
          <h2 className="text-xl font-bold">kubectl Syntax</h2>

          <div className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4">
            <code className="text-cyan-400">
              kubectl [command] [TYPE] [NAME] [flags]
            </code>
          </div>

          <p className="mt-4 leading-7 text-slate-400">
            kubectl is the Kubernetes command-line tool used to communicate
            with the Kubernetes API server and manage cluster resources.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Quick Command Reference
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "kubectl get pods",
              "kubectl get pods -A",
              "kubectl get nodes",
              "kubectl describe pod <pod-name>",
              "kubectl logs <pod-name>",
              "kubectl exec -it <pod-name> -- /bin/sh",
              "kubectl apply -f deployment.yaml",
              "kubectl get svc",
              "kubectl rollout status deployment/<name>",
              "kubectl rollout undo deployment/<name>",
              "kubectl get events --sort-by=.lastTimestamp",
              "kubectl top pods",
              "kubectl config current-context",
              "kubectl auth can-i --list",
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

        <KubectlCommandSearch sections={commandSections} />

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Common Kubernetes Troubleshooting Workflow
          </h2>

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

          <p className="mt-5 leading-7 text-slate-400">
            Start with the cluster context and resource status. Inspect pod
            events and logs before changing or deleting resources. Then check
            the Deployment, Service, endpoints and node state to narrow down
            whether the issue is related to scheduling, configuration,
            networking, images, resources or the application.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
          <h2 className="text-xl font-bold">
            DevOpsToolbox Tip
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
            Kubernetes kubectl reference for DevOps and SRE workflows.
          </p>
        </footer>
      </div>
    </main>
  );
}
