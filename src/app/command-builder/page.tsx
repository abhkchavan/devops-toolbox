"use client";

import { useMemo, useState } from "react";

type Action =
  | "get"
  | "describe"
  | "logs"
  | "delete"
  | "run"
  | "exec";

type Resource = "pods" | "deployments" | "services" | "nodes";

type OutputFormat = "" | "wide" | "yaml" | "json";

const actions: {
  value: Action;
  label: string;
  description: string;
}[] = [
  {
    value: "get",
    label: "Get",
    description: "Display one or more Kubernetes resources",
  },
  {
    value: "describe",
    label: "Describe",
    description: "Show detailed information about a Kubernetes resource",
  },
  {
    value: "logs",
    label: "Logs",
    description: "Print the logs for a Pod",
  },
  {
    value: "delete",
    label: "Delete",
    description: "Delete a Kubernetes resource",
  },
  {
    value: "run",
    label: "Run",
    description: "Create and run a new Pod",
  },
  {
    value: "exec",
    label: "Exec",
    description: "Execute a command inside a Pod container",
  },
];

const resources: {
  value: Resource;
  label: string;
}[] = [
  {
    value: "pods",
    label: "Pods",
  },
  {
    value: "deployments",
    label: "Deployments",
  },
  {
    value: "services",
    label: "Services",
  },
  {
    value: "nodes",
    label: "Nodes",
  },
];

const outputFormats: {
  value: OutputFormat;
  label: string;
}[] = [
  {
    value: "",
    label: "Default",
  },
  {
    value: "wide",
    label: "Wide",
  },
  {
    value: "yaml",
    label: "YAML",
  },
  {
    value: "json",
    label: "JSON",
  },
];

export default function CommandBuilderPage() {
  const [action, setAction] = useState<Action>("get");
  const [resource, setResource] = useState<Resource>("pods");
  const [name, setName] = useState("");
  const [namespace, setNamespace] = useState("");
  const [image, setImage] = useState("nginx:latest");
  const [port, setPort] = useState("");
  const [output, setOutput] = useState<OutputFormat>("");
  const [containerCommand, setContainerCommand] = useState("sh");

  const [allNamespaces, setAllNamespaces] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [selector, setSelector] = useState("");
  const [fieldSelector, setFieldSelector] = useState("");
  const [tail, setTail] = useState("");
  const [follow, setFollow] = useState(false);
  const [container, setContainer] = useState("");
  const [force, setForce] = useState(false);
  const [gracePeriod, setGracePeriod] = useState("");
  const [dryRun, setDryRun] = useState(false);

  const [copied, setCopied] = useState(false);

  const showName =
    action === "describe" ||
    action === "logs" ||
    action === "delete" ||
    action === "exec";

  const showNamespace = true;

  const showOutput =
    action === "get" ||
    action === "describe";

  const showImage = action === "run";

  const showPort = action === "run";

  const showContainerCommand = action === "exec";

  const showGetOptions = action === "get";

  const showLogsOptions = action === "logs";

  const showDeleteOptions = action === "delete";

  const showExecOptions = action === "exec";

  const showRunOptions = action === "run";

  const command = useMemo(() => {
    if (action === "run") {
      const podName = name.trim() || "my-pod";

      const parts = [
        "kubectl",
        "run",
        podName,
      ];

      if (image.trim()) {
        parts.push(`--image=${image.trim()}`);
      }

      if (port.trim()) {
        parts.push(`--port=${port.trim()}`);
      }

      if (namespace.trim()) {
        parts.push(`-n ${namespace.trim()}`);
      }

      if (dryRun) {
        parts.push("--dry-run=client");
      }

      return parts.join(" ");
    }

    if (action === "logs") {
      const podName = name.trim() || "<pod-name>";

      const parts = [
        "kubectl",
        "logs",
        podName,
      ];

      if (namespace.trim()) {
        parts.push(`-n ${namespace.trim()}`);
      }

      if (container.trim()) {
        parts.push(`-c ${container.trim()}`);
      }

      if (tail.trim()) {
        parts.push(`--tail=${tail.trim()}`);
      }

      if (follow) {
        parts.push("-f");
      }

      return parts.join(" ");
    }

    if (action === "exec") {
      const podName = name.trim() || "<pod-name>";

      const parts = [
        "kubectl",
        "exec",
        podName,
      ];

      if (namespace.trim()) {
        parts.push(`-n ${namespace.trim()}`);
      }

      if (container.trim()) {
        parts.push(`-c ${container.trim()}`);
      }

      parts.push("--");

      if (containerCommand.trim()) {
        parts.push(containerCommand.trim());
      }

      return parts.join(" ");
    }

    const parts: string[] = [
      "kubectl",
      action,
      resource,
    ];

    if (name.trim()) {
      parts.push(name.trim());
    }

    if (namespace.trim() && !allNamespaces) {
      parts.push(`-n ${namespace.trim()}`);
    }

    if (allNamespaces) {
      parts.push("-A");
    }

    if (output) {
      parts.push(`-o ${output}`);
    }

    if (showLabels) {
      parts.push("--show-labels");
    }

    if (selector.trim()) {
      parts.push(`-l ${selector.trim()}`);
    }

    if (fieldSelector.trim()) {
      parts.push(`--field-selector=${fieldSelector.trim()}`);
    }

    if (action === "delete") {
      if (force) {
        parts.push("--force");
      }

      if (gracePeriod.trim()) {
        parts.push(`--grace-period=${gracePeriod.trim()}`);
      }
    }

    return parts.join(" ");
  }, [
    action,
    resource,
    name,
    namespace,
    image,
    port,
    output,
    containerCommand,
    allNamespaces,
    showLabels,
    selector,
    fieldSelector,
    tail,
    follow,
    container,
    force,
    gracePeriod,
    dryRun,
  ]);

  const explanation = useMemo(() => {
    const explanations: string[] = [];

    explanations.push(
      "kubectl is the Kubernetes command-line tool used to communicate with a Kubernetes cluster."
    );

    if (action === "run") {
      explanations.push(
        "run creates a new Pod using the container image you specify."
      );

      if (name.trim()) {
        explanations.push(
          `${name.trim()} is the name assigned to the new Pod.`
        );
      } else {
        explanations.push(
          "my-pod is used as the default Pod name because no name was entered."
        );
      }

      if (image.trim()) {
        explanations.push(
          `The image ${image.trim()} is used as the container image.`
        );
      }

      if (port.trim()) {
        explanations.push(
          `The --port=${port.trim()} option declares the container port.`
        );
      }

      if (namespace.trim()) {
        explanations.push(
          `-n ${namespace.trim()} tells kubectl to create the Pod in the ${namespace.trim()} namespace.`
        );
      }

      if (dryRun) {
        explanations.push(
          "--dry-run=client generates the resource configuration without sending it to the Kubernetes API server."
        );
      }
    } else if (action === "logs") {
      explanations.push(
        "logs retrieves the logs produced by the specified Pod."
      );

      if (name.trim()) {
        explanations.push(
          `${name.trim()} identifies the Pod whose logs will be displayed.`
        );
      } else {
        explanations.push(
          "<pod-name> is a placeholder. Enter the name of the Pod you want to inspect."
        );
      }

      if (namespace.trim()) {
        explanations.push(
          `-n ${namespace.trim()} tells kubectl to look for the Pod in the ${namespace.trim()} namespace.`
        );
      }

      if (container.trim()) {
        explanations.push(
          `-c ${container.trim()} selects the ${container.trim()} container.`
        );
      }

      if (tail.trim()) {
        explanations.push(
          `--tail=${tail.trim()} limits the number of log lines returned.`
        );
      }

      if (follow) {
        explanations.push(
          "-f continuously follows new log output from the Pod."
        );
      }
    } else if (action === "exec") {
      explanations.push(
        "exec runs a command inside a container belonging to the specified Pod."
      );

      if (name.trim()) {
        explanations.push(
          `${name.trim()} identifies the Pod where the command will run.`
        );
      } else {
        explanations.push(
          "<pod-name> is a placeholder. Enter the name of the Pod you want to access."
        );
      }

      if (container.trim()) {
        explanations.push(
          `-c ${container.trim()} selects the container where the command will run.`
        );
      }

      if (containerCommand.trim()) {
        explanations.push(
          `${containerCommand.trim()} is the command executed inside the container.`
        );
      }

      if (namespace.trim()) {
        explanations.push(
          `-n ${namespace.trim()} tells kubectl to use the ${namespace.trim()} namespace.`
        );
      }
    } else {
      explanations.push(
        `${action} tells kubectl what operation you want to perform.`
      );

      explanations.push(
        `${resource} tells kubectl which Kubernetes resource to operate on.`
      );

      if (name.trim()) {
        explanations.push(
          `${name.trim()} limits the operation to the specified resource name.`
        );
      }

      if (namespace.trim() && !allNamespaces) {
        explanations.push(
          `-n ${namespace.trim()} tells kubectl to use the ${namespace.trim()} namespace.`
        );
      }

      if (allNamespaces) {
        explanations.push(
          "-A searches across all namespaces instead of limiting the command to one namespace."
        );
      }

      if (output) {
        explanations.push(
          `-o ${output} controls the format of the command output.`
        );
      }

      if (showLabels) {
        explanations.push(
          "--show-labels includes resource labels in the output."
        );
      }

      if (selector.trim()) {
        explanations.push(
          `-l ${selector.trim()} filters resources using the specified label selector.`
        );
      }

      if (fieldSelector.trim()) {
        explanations.push(
          `--field-selector=${fieldSelector.trim()} filters resources using Kubernetes field selectors.`
        );
      }

      if (action === "delete" && force) {
        explanations.push(
          "--force forces deletion when supported by the selected resource and Kubernetes version."
        );
      }

      if (action === "delete" && gracePeriod.trim()) {
        explanations.push(
          `--grace-period=${gracePeriod.trim()} specifies the grace period for deletion.`
        );
      }
    }

    return explanations;
  }, [
    action,
    resource,
    name,
    namespace,
    image,
    port,
    output,
    containerCommand,
    allNamespaces,
    showLabels,
    selector,
    fieldSelector,
    tail,
    follow,
    container,
    force,
    gracePeriod,
    dryRun,
  ]);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  const resetBuilder = () => {
    setAction("get");
    setResource("pods");
    setName("");
    setNamespace("");
    setImage("nginx:latest");
    setPort("");
    setOutput("");

    setContainerCommand("sh");

    setAllNamespaces(false);
    setShowLabels(false);
    setSelector("");
    setFieldSelector("");
    setTail("");
    setFollow(false);
    setContainer("");
    setForce(false);
    setGracePeriod("");
    setDryRun(false);

    setCopied(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="text-lg font-bold tracking-tight text-white"
          >
            DevOps<span className="text-cyan-400">Commands</span>
          </a>

          <a
            href="/kubernetes/kubectl-commands"
            className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
          >
            ← Kubectl Commands
          </a>
        </div>
      </nav>

      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Interactive Tool
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Kubernetes Command Builder
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Build kubectl commands interactively. Select your operation,
              resource, namespace and options, and get a ready-to-copy command
              instantly.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  Build Your Command
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Configure the options below.
                </p>
              </div>

              <button
                type="button"
                onClick={resetBuilder}
                className="rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white"
              >
                Reset
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="action"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Action
                </label>

                <select
                  id="action"
                  value={action}
                  onChange={(event) =>
                    setAction(event.target.value as Action)
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500"
                >
                  {actions.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>

                <p className="mt-2 text-xs text-slate-500">
                  {
                    actions.find((item) => item.value === action)
                      ?.description
                  }
                </p>
              </div>

              {action !== "run" &&
                action !== "logs" &&
                action !== "exec" && (
                  <div>
                    <label
                      htmlFor="resource"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Resource
                    </label>

                    <select
                      id="resource"
                      value={resource}
                      onChange={(event) =>
                        setResource(event.target.value as Resource)
                      }
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500"
                    >
                      {resources.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

              {(action === "logs" || action === "exec") && (
                <div>
                  <div className="mb-2 block text-sm font-medium text-slate-300">
                    Resource
                  </div>

                  <div className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-400">
                    Pods
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    {action === "logs"
                      ? "kubectl logs operates on a Pod."
                      : "kubectl exec runs commands inside a Pod container."}
                  </p>
                </div>
              )}

              {action === "run" && (
                <div>
                  <label
                    htmlFor="pod-name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Pod Name
                  </label>

                  <input
                    id="pod-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="my-pod"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-500"
                  />
                </div>
              )}

              {showName && (
                <div>
                  <label
                    htmlFor="resource-name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    {action === "logs" || action === "exec"
                      ? "Pod Name"
                      : "Resource Name"}
                  </label>

                  <input
                    id="resource-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder={
                      action === "logs" || action === "exec"
                        ? "nginx-pod"
                        : resource === "pods"
                          ? "nginx-pod"
                          : resource === "deployments"
                            ? "nginx-deployment"
                            : resource === "services"
                              ? "nginx-service"
                              : "node-name"
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-500"
                  />
                </div>
              )}

              {showNamespace && (
                <div>
                  <label
                    htmlFor="namespace"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Namespace
                  </label>

                  <input
                    id="namespace"
                    type="text"
                    value={namespace}
                    onChange={(event) => setNamespace(event.target.value)}
                    placeholder="production"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-500"
                  />
                </div>
              )}

              {showImage && (
                <div>
                  <label
                    htmlFor="image"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Container Image
                  </label>

                  <input
                    id="image"
                    type="text"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                    placeholder="nginx:latest"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-500"
                  />
                </div>
              )}

              {showPort && (
                <div>
                  <label
                    htmlFor="port"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Container Port
                  </label>

                  <input
                    id="port"
                    type="number"
                    min="1"
                    max="65535"
                    value={port}
                    onChange={(event) => setPort(event.target.value)}
                    placeholder="80"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-500"
                  />
                </div>
              )}

              {showOutput && (
                <div>
                  <label
                    htmlFor="output"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Output Format
                  </label>

                  <select
                    id="output"
                    value={output}
                    onChange={(event) =>
                      setOutput(event.target.value as OutputFormat)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500"
                  >
                    {outputFormats.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {showGetOptions && (
                <div className="space-y-5 rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Get Options
                  </h3>

                  <label className="flex items-center gap-3 text-sm text-slate-300">
                    <input
                      type="checkbox"
                      checked={allNamespaces}
                      onChange={(event) =>
                        setAllNamespaces(event.target.checked)
                      }
                      className="h-4 w-4 rounded border-slate-700 bg-slate-950"
                    />
                    All namespaces
                  </label>

                  <label className="flex items-center gap-3 text-sm text-slate-300">
                    <input
                      type="checkbox"
                      checked={showLabels}
                      onChange={(event) =>
                        setShowLabels(event.target.checked)
                      }
                      className="h-4 w-4 rounded border-slate-700 bg-slate-950"
                    />
                    Show labels
                  </label>

                  <div>
                    <label
                      htmlFor="selector"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Label Selector
                    </label>

                    <input
                      id="selector"
                      type="text"
                      value={selector}
                      onChange={(event) =>
                        setSelector(event.target.value)
                      }
                      placeholder="app=nginx"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="field-selector"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Field Selector
                    </label>

                    <input
                      id="field-selector"
                      type="text"
                      value={fieldSelector}
                      onChange={(event) =>
                        setFieldSelector(event.target.value)
                      }
                      placeholder="status.phase=Running"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-500"
                    />
                  </div>
                </div>
              )}

              {showLogsOptions && (
                <div className="space-y-5 rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Logs Options
                  </h3>

                  <div>
                    <label
                      htmlFor="container"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Container
                    </label>

                    <input
                      id="container"
                      type="text"
                      value={container}
                      onChange={(event) =>
                        setContainer(event.target.value)
                      }
                      placeholder="nginx"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="tail"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Tail Lines
                    </label>

                    <input
                      id="tail"
                      type="number"
                      min="0"
                      value={tail}
                      onChange={(event) => setTail(event.target.value)}
                      placeholder="100"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-500"
                    />
                  </div>

                  <label className="flex items-center gap-3 text-sm text-slate-300">
                    <input
                      type="checkbox"
                      checked={follow}
                      onChange={(event) =>
                        setFollow(event.target.checked)
                      }
                      className="h-4 w-4 rounded border-slate-700 bg-slate-950"
                    />
                    Follow logs
                  </label>
                </div>
              )}

              {showExecOptions && (
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                  <div>
                    <label
                      htmlFor="exec-container"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Container
                    </label>

                    <input
                      id="exec-container"
                      type="text"
                      value={container}
                      onChange={(event) =>
                        setContainer(event.target.value)
                      }
                      placeholder="nginx"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-500"
                    />
                  </div>
                </div>
              )}

              {showDeleteOptions && (
                <div className="space-y-5 rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Delete Options
                  </h3>

                  <label className="flex items-center gap-3 text-sm text-slate-300">
                    <input
                      type="checkbox"
                      checked={force}
                      onChange={(event) =>
                        setForce(event.target.checked)
                      }
                      className="h-4 w-4 rounded border-slate-700 bg-slate-950"
                    />
                    Force deletion
                  </label>

                  <div>
                    <label
                      htmlFor="grace-period"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Grace Period
                    </label>

                    <input
                      id="grace-period"
                      type="number"
                      min="0"
                      value={gracePeriod}
                      onChange={(event) =>
                        setGracePeriod(event.target.value)
                      }
                      placeholder="30"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-500"
                    />
                  </div>
                </div>
              )}

              {showRunOptions && (
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                  <label className="flex items-center gap-3 text-sm text-slate-300">
                    <input
                      type="checkbox"
                      checked={dryRun}
                      onChange={(event) =>
                        setDryRun(event.target.checked)
                      }
                      className="h-4 w-4 rounded border-slate-700 bg-slate-950"
                    />
                    Dry run
                  </label>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Generate the command without creating the Pod on the
                    cluster.
                  </p>
                </div>
              )}

              {showContainerCommand && (
                <div>
                  <label
                    htmlFor="container-command"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Container Command
                  </label>

                  <input
                    id="container-command"
                    type="text"
                    value={containerCommand}
                    onChange={(event) =>
                      setContainerCommand(event.target.value)
                    }
                    placeholder="sh"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-500"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Generated Command
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-white">
                    Ready to use
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={copyCommand}
                  className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  {copied ? "✓ Copied" : "Copy"}
                </button>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 p-5">
                <code className="whitespace-pre-wrap break-all font-mono text-sm leading-7 text-cyan-300">
                  {command}
                </code>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-lg font-semibold">
                Command Explanation
              </h2>

              <div className="mt-5 space-y-4">
                {explanation.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex gap-3"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-400">
                      {index + 1}
                    </div>

                    <p className="text-sm leading-6 text-slate-400">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
              <h3 className="font-semibold text-amber-300">
                ⚠️ Before running commands
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Review generated commands before running them against a
                production Kubernetes cluster. Commands such as delete and
                exec can have significant effects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center">
            <h2 className="text-2xl font-bold">
              Need the complete kubectl reference?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              Browse kubectl commands, options, examples and practical
              Kubernetes usage.
            </p>

            <a
              href="/kubernetes/kubectl-commands"
              className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Browse kubectl Commands
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} DevOpsCommands.com
          </p>

          <a
            href="/"
            className="transition hover:text-cyan-400"
          >
            Back to DevOps Commands
          </a>
        </div>
      </footer>
    </main>
  );
}