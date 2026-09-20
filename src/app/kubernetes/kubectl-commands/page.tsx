import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "kubectl Commands Cheat Sheet",
  description:
    "Practical kubectl commands for Kubernetes pods, deployments, services, logs and troubleshooting.",
};
export default function KubectlCommands() {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto max-w-5xl">
          <a
            href="/"
            className="text-sm text-cyan-400 hover:underline"
          >
            ← Back to DevOpsToolbox
          </a>
  
          <header className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Kubernetes
            </p>
  
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">
              kubectl Commands Cheat Sheet
            </h1>
  
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
              Practical kubectl commands for managing Kubernetes clusters,
              pods, deployments, services and troubleshooting.
            </p>
          </header>
  
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              What is kubectl?
            </h2>
  
            <p className="mt-4 leading-7 text-slate-400">
              kubectl is the command-line tool used to communicate with a
              Kubernetes cluster. It allows you to create, inspect, update
              and delete Kubernetes resources.
            </p>
  
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-5">
              <code className="text-cyan-400">
                kubectl [command] [TYPE] [NAME] [flags]
              </code>
            </div>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              1. Check Kubernetes Cluster
            </h2>
  
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
              <code className="text-cyan-400">
                kubectl cluster-info
              </code>
  
              <p className="mt-4 text-slate-400">
                Displays information about the Kubernetes control plane and
                cluster services.
              </p>
            </div>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              2. Get Nodes
            </h2>
  
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
              <code className="text-cyan-400">
                kubectl get nodes
              </code>
  
              <p className="mt-4 text-slate-400">
                Lists all nodes in the current Kubernetes cluster.
              </p>
  
              <pre className="mt-5 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
  {`kubectl get nodes
  
  NAME       STATUS   ROLES           AGE
  worker01   Ready    <none>          10d`}
              </pre>
            </div>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              3. Get Pods
            </h2>
  
            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <code className="text-cyan-400">
                  kubectl get pods
                </code>
  
                <p className="mt-4 text-slate-400">
                  Lists pods in the current namespace.
                </p>
              </div>
  
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <code className="text-cyan-400">
                  kubectl get pods -A
                </code>
  
                <p className="mt-4 text-slate-400">
                  Lists pods across all namespaces.
                </p>
              </div>
  
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <code className="text-cyan-400">
                  kubectl get pods -o wide
                </code>
  
                <p className="mt-4 text-slate-400">
                  Shows additional information such as pod IP and node.
                </p>
              </div>
            </div>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              4. Describe a Pod
            </h2>
  
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
              <code className="text-cyan-400">
                kubectl describe pod &lt;pod-name&gt;
              </code>
  
              <p className="mt-4 text-slate-400">
                Shows detailed information about a pod, including events,
                containers, volumes and scheduling information.
              </p>
  
              <p className="mt-4 text-sm text-slate-500">
                Useful when troubleshooting a pod that is not starting.
              </p>
            </div>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              5. View Pod Logs
            </h2>
  
            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <code className="text-cyan-400">
                  kubectl logs &lt;pod-name&gt;
                </code>
  
                <p className="mt-4 text-slate-400">
                  Displays logs from a pod's container.
                </p>
              </div>
  
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <code className="text-cyan-400">
                  kubectl logs -f &lt;pod-name&gt;
                </code>
  
                <p className="mt-4 text-slate-400">
                  Continuously follows the container logs.
                </p>
              </div>
            </div>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              6. Execute Commands Inside a Pod
            </h2>
  
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
              <code className="text-cyan-400">
                kubectl exec -it &lt;pod-name&gt; -- /bin/bash
              </code>
  
              <p className="mt-4 text-slate-400">
                Opens an interactive shell inside a running container.
              </p>
  
              <p className="mt-4 text-sm text-slate-500">
                Some minimal container images do not include bash. In those
                cases, try /bin/sh if available.
              </p>
            </div>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              7. Get Deployments
            </h2>
  
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
              <code className="text-cyan-400">
                kubectl get deployments
              </code>
  
              <p className="mt-4 text-slate-400">
                Lists deployments in the current namespace.
              </p>
            </div>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              8. Get Services
            </h2>
  
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
              <code className="text-cyan-400">
                kubectl get services
              </code>
  
              <p className="mt-4 text-slate-400">
                Lists Kubernetes Services and their networking information.
              </p>
  
              <p className="mt-4">
                <code className="text-cyan-400">
                  kubectl get svc
                </code>
                <span className="text-slate-500">
                  {" "}is the shorter form.
                </span>
              </p>
            </div>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              9. Apply a Kubernetes Manifest
            </h2>
  
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
              <code className="text-cyan-400">
                kubectl apply -f deployment.yaml
              </code>
  
              <p className="mt-4 text-slate-400">
                Creates or updates Kubernetes resources defined in a YAML
                manifest.
              </p>
            </div>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              10. Delete a Pod
            </h2>
  
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
              <code className="text-cyan-400">
                kubectl delete pod &lt;pod-name&gt;
              </code>
  
              <p className="mt-4 text-slate-400">
                Deletes the specified pod.
              </p>
  
              <p className="mt-4 text-sm text-slate-500">
                If the pod is managed by a Deployment, ReplicaSet or another
                controller, Kubernetes may create a replacement pod.
              </p>
            </div>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              Quick Troubleshooting Workflow
            </h2>
  
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
              <pre className="overflow-x-auto text-sm leading-8 text-slate-300">
  {`kubectl get pods
  kubectl describe pod <pod-name>
  kubectl logs <pod-name>
  kubectl get events
  kubectl get nodes
  kubectl get deployments
  kubectl get services`}
              </pre>
            </div>
  
            <p className="mt-5 leading-7 text-slate-400">
              A common troubleshooting approach is to first check the pod
              status, inspect its events, review application logs and then
              check the surrounding Kubernetes resources.
            </p>
          </section>
  
          <section className="mt-12 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
            <h2 className="text-xl font-bold">
              DevOpsToolbox Tip
            </h2>
  
            <p className="mt-3 leading-7 text-slate-400">
              When troubleshooting Kubernetes, don't immediately delete the
              pod. First inspect its status, events and logs. This often
              reveals the actual problem and preserves useful diagnostic
              information.
            </p>
          </section>
        </div>
      </main>
    );
  }