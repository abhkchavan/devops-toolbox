import PrometheusCommandSearch from "./PrometheusCommandSearch";

type PrometheusCommand = {
  command: string;
  description: string;
};

type PrometheusSection = {
  title: string;
  commands: PrometheusCommand[];
};

const commandSections: PrometheusSection[] = [
  {
    title: "Prometheus Setup and Version",
    commands: [
      {
        command: "prometheus --version",
        description: "Display the installed Prometheus version.",
      },
      {
        command: "prometheus --help",
        description: "Display Prometheus command-line help.",
      },
      {
        command: "prometheus --help-long",
        description: "Display detailed Prometheus command-line options.",
      },
      {
        command: "prometheus --config.file=prometheus.yml",
        description: "Start Prometheus using a specified configuration file.",
      },
      {
        command: "prometheus --web.listen-address=0.0.0.0:9090",
        description: "Configure the address and port used by the Prometheus web server.",
      },
      {
        command: "prometheus --log.level=debug",
        description: "Start Prometheus with debug-level logging.",
      },
    ],
  },

  {
    title: "Prometheus Docker",
    commands: [
      {
        command: "docker pull prom/prometheus",
        description: "Download the official Prometheus container image.",
      },
      {
        command: "docker run -p 9090:9090 prom/prometheus",
        description: "Run Prometheus in Docker and expose port 9090.",
      },
      {
        command:
          "docker run -p 9090:9090 -v ./prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus",
        description: "Run Prometheus with a custom configuration file.",
      },
      {
        command:
          "docker run -d --name prometheus -p 9090:9090 prom/prometheus",
        description: "Run Prometheus as a detached Docker container.",
      },
      {
        command: "docker logs prometheus",
        description: "View Prometheus container logs.",
      },
      {
        command: "docker restart prometheus",
        description: "Restart the Prometheus container.",
      },
    ],
  },

  {
    title: "Prometheus Configuration",
    commands: [
      {
        command: "prometheus --config.file=prometheus.yml",
        description: "Specify the Prometheus configuration file.",
      },
      {
        command: "promtool check config prometheus.yml",
        description: "Validate a Prometheus configuration file.",
      },
      {
        command: "promtool check config prometheus.yml --lint=all",
        description: "Validate configuration and apply available lint checks.",
      },
      {
        command: "prometheus --config.file=prometheus.yml --config.auto-reload",
        description: "Enable automatic configuration reload behavior.",
      },
      {
        command:
          "curl -X POST http://localhost:9090/-/reload",
        description:
          "Trigger a configuration reload when the lifecycle endpoint is enabled.",
      },
      {
        command: "kill -HUP <prometheus-pid>",
        description: "Reload Prometheus configuration by sending SIGHUP on supported systems.",
      },
    ],
  },

  {
    title: "Prometheus Targets and Scraping",
    commands: [
      {
        command: "curl http://localhost:9090/api/v1/targets",
        description: "Query Prometheus target information through the HTTP API.",
      },
      {
        command: "curl http://localhost:9090/api/v1/targets?state=active",
        description: "Query active Prometheus targets.",
      },
      {
        command: "curl http://localhost:9090/metrics",
        description: "View Prometheus's own exposed metrics.",
      },
      {
        command: "curl http://localhost:9100/metrics",
        description: "View metrics exposed by a Node Exporter endpoint.",
      },
      {
        command: "promtool check service-discovery prometheus.yml <job>",
        description: "Inspect service discovery and relabeling for a configured job.",
      },
    ],
  },

  {
    title: "PromQL Basics",
    commands: [
      {
        command: "up",
        description: "Return the health status of scraped targets.",
      },
      {
        command: "up{job=\"node\"}",
        description: "Select target health metrics for the node job.",
      },
      {
        command: "node_cpu_seconds_total",
        description: "Query the Node Exporter CPU time metric.",
      },
      {
        command: "node_memory_MemAvailable_bytes",
        description: "Query available system memory exposed by Node Exporter.",
      },
      {
        command: "node_filesystem_avail_bytes",
        description: "Query available filesystem space.",
      },
      {
        command: "http_requests_total",
        description: "Query an HTTP request counter metric.",
      },
    ],
  },

  {
    title: "PromQL Label Selectors",
    commands: [
      {
        command: "up{job=\"node\"}",
        description: "Select series where the job label equals node.",
      },
      {
        command: "up{job!=\"node\"}",
        description: "Select series where the job label is not node.",
      },
      {
        command: "up{job=~\"node|api\"}",
        description: "Select series whose job label matches a regular expression.",
      },
      {
        command: "up{job!~\"test.*\"}",
        description: "Exclude series whose job label matches a regular expression.",
      },
      {
        command: "http_requests_total{status=\"500\"}",
        description: "Select HTTP requests with a 500 status label.",
      },
      {
        command: "http_requests_total{method=\"GET\",status=\"200\"}",
        description: "Select HTTP requests matching multiple labels.",
      },
    ],
  },

  {
    title: "PromQL Aggregation",
    commands: [
      {
        command: "sum(up)",
        description: "Calculate the sum of selected series.",
      },
      {
        command: "avg(up)",
        description: "Calculate the average value across series.",
      },
      {
        command: "min(up)",
        description: "Return the minimum value across series.",
      },
      {
        command: "max(up)",
        description: "Return the maximum value across series.",
      },
      {
        command: "count(up)",
        description: "Count the number of returned series.",
      },
      {
        command: "sum by (job) (up)",
        description: "Aggregate target status by job.",
      },
      {
        command: "sum by (instance) (up)",
        description: "Aggregate target status by instance.",
      },
      {
        command: "sum without (instance) (up)",
        description: "Aggregate while excluding the instance label from grouping.",
      },
    ],
  },

  {
    title: "PromQL Rates and Counters",
    commands: [
      {
        command: "rate(http_requests_total[5m])",
        description: "Calculate the per-second average increase of a counter over five minutes.",
      },
      {
        command: "irate(http_requests_total[5m])",
        description: "Calculate the per-second rate using the most recent samples.",
      },
      {
        command: "increase(http_requests_total[1h])",
        description: "Calculate the total counter increase over one hour.",
      },
      {
        command: "sum(rate(http_requests_total[5m]))",
        description: "Calculate the total request rate across selected series.",
      },
      {
        command:
          "sum by (status) (rate(http_requests_total[5m]))",
        description: "Calculate request rate grouped by HTTP status.",
      },
    ],
  },

  {
    title: "PromQL CPU and Memory",
    commands: [
      {
        command:
          "100 * (1 - avg(rate(node_cpu_seconds_total{mode=\"idle\"}[5m])))",
        description: "Estimate overall CPU utilization from idle CPU time.",
      },
      {
        command:
          "100 * (1 - node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)",
        description: "Calculate memory utilization percentage.",
      },
      {
        command:
          "sum by (instance) (rate(node_cpu_seconds_total[5m]))",
        description: "Calculate CPU time rate grouped by instance.",
      },
      {
        command:
          "node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes",
        description: "Calculate used memory in bytes.",
      },
    ],
  },

  {
    title: "PromQL Disk and Filesystem",
    commands: [
      {
        command:
          "node_filesystem_avail_bytes{fstype!=\"tmpfs\"}",
        description: "Query available filesystem space while excluding tmpfs.",
      },
      {
        command:
          "100 * (1 - node_filesystem_avail_bytes / node_filesystem_size_bytes)",
        description: "Calculate filesystem usage percentage.",
      },
      {
        command:
          "node_filesystem_readonly == 1",
        description: "Find filesystems mounted as read-only.",
      },
      {
        command:
          "node_filesystem_avail_bytes / 1024 / 1024 / 1024",
        description: "Convert available filesystem space from bytes to GiB.",
      },
    ],
  },

  {
    title: "PromQL HTTP and Application Monitoring",
    commands: [
      {
        command:
          "sum(rate(http_requests_total[5m]))",
        description: "Calculate application request rate.",
      },
      {
        command:
          "sum(rate(http_requests_total{status=~\"5..\"}[5m]))",
        description: "Calculate HTTP 5xx error rate.",
      },
      {
        command:
          "100 * sum(rate(http_requests_total{status=~\"5..\"}[5m])) / sum(rate(http_requests_total[5m]))",
        description: "Calculate the percentage of requests returning HTTP 5xx responses.",
      },
      {
        command:
          "histogram_quantile(0.95, sum by (le) (rate(http_request_duration_seconds_bucket[5m])))",
        description: "Calculate the 95th percentile request latency from a classic histogram.",
      },
    ],
  },

  {
    title: "PromQL Histograms",
    commands: [
      {
        command:
          "rate(http_request_duration_seconds_bucket[5m])",
        description: "Calculate the per-second rate for histogram buckets.",
      },
      {
        command:
          "sum by (le) (rate(http_request_duration_seconds_bucket[5m]))",
        description: "Aggregate histogram bucket rates.",
      },
      {
        command:
          "histogram_quantile(0.50, sum by (le) (rate(http_request_duration_seconds_bucket[5m])))",
        description: "Calculate the 50th percentile latency.",
      },
      {
        command:
          "histogram_quantile(0.90, sum by (le) (rate(http_request_duration_seconds_bucket[5m])))",
        description: "Calculate the 90th percentile latency.",
      },
      {
        command:
          "histogram_quantile(0.95, sum by (le) (rate(http_request_duration_seconds_bucket[5m])))",
        description: "Calculate the 95th percentile latency.",
      },
      {
        command:
          "histogram_quantile(0.99, sum by (le) (rate(http_request_duration_seconds_bucket[5m])))",
        description: "Calculate the 99th percentile latency.",
      },
    ],
  },

  {
    title: "PromQL Operators",
    commands: [
      {
        command: "node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes",
        description: "Subtract available memory from total memory.",
      },
      {
        command: "node_filesystem_avail_bytes / node_filesystem_size_bytes",
        description: "Calculate the filesystem availability ratio.",
      },
      {
        command: "rate(http_requests_total[5m]) * 60",
        description: "Convert a per-second rate into an approximate per-minute rate.",
      },
      {
        command: "up == 0",
        description: "Select targets whose up value is zero.",
      },
      {
        command: "node_filesystem_avail_bytes < 10737418240",
        description: "Find filesystems with less than approximately 10 GiB available.",
      },
    ],
  },

  {
    title: "Recording Rules",
    commands: [
      {
        command: "promtool check rules rules.yml",
        description: "Validate Prometheus recording and alerting rules.",
      },
      {
        command: "promtool test rules test.yml",
        description: "Run unit tests for Prometheus rules.",
      },
      {
        command: "record: job:http_requests:rate5m",
        description: "Example recording rule name for a reusable five-minute request rate.",
      },
      {
        command: "expr: sum by (job) (rate(http_requests_total[5m]))",
        description: "Example PromQL expression used by a recording rule.",
      },
    ],
  },

  {
    title: "Alerting Rules",
    commands: [
      {
        command: "promtool check rules alerts.yml",
        description: "Validate alerting rules before deployment.",
      },
      {
        command: "promtool test rules alerts-test.yml",
        description: "Unit test alerting rules.",
      },
      {
        command: "alert: HighCPUUsage",
        description: "Example alert name for high CPU utilization.",
      },
      {
        command: "expr: cpu_usage > 80",
        description: "Example alert expression for CPU utilization.",
      },
      {
        command: "for: 5m",
        description: "Require an alert expression to remain active for a specified duration.",
      },
    ],
  },

  {
    title: "Promtool Configuration Validation",
    commands: [
      {
        command: "promtool --help",
        description: "Display promtool command-line help.",
      },
      {
        command: "promtool check config prometheus.yml",
        description: "Validate Prometheus configuration.",
      },
      {
        command: "promtool check rules rules.yml",
        description: "Validate rule files.",
      },
      {
        command: "promtool check web-config web.yml",
        description: "Validate Prometheus web configuration.",
      },
      {
        command: "promtool check metrics",
        description: "Validate metrics supplied through standard input.",
      },
      {
        command: "curl -s http://localhost:9090/metrics | promtool check metrics",
        description: "Validate metrics exposed by a running Prometheus server.",
      },
    ],
  },

  {
    title: "Promtool Health Checks",
    commands: [
      {
        command: "promtool check healthy",
        description: "Check whether the Prometheus server is healthy.",
      },
      {
        command: "promtool check ready",
        description: "Check whether the Prometheus server is ready.",
      },
      {
        command:
          "promtool check healthy --url=http://localhost:9090",
        description: "Check Prometheus health at a specific URL.",
      },
      {
        command:
          "promtool check ready --url=http://localhost:9090",
        description: "Check Prometheus readiness at a specific URL.",
      },
    ],
  },

  {
    title: "Promtool Querying",
    commands: [
      {
        command:
          "promtool query instant http://localhost:9090 up",
        description: "Run an instant PromQL query against Prometheus.",
      },
      {
        command:
          "promtool query range http://localhost:9090 'rate(http_requests_total[5m])'",
        description: "Run a range query against Prometheus.",
      },
      {
        command:
          "promtool query series http://localhost:9090",
        description: "Query series information from Prometheus.",
      },
      {
        command:
          "promtool query labels http://localhost:9090 __name__",
        description: "Query label values from Prometheus.",
      },
    ],
  },

  {
    title: "Promtool Debugging",
    commands: [
      {
        command:
          "promtool debug metrics http://localhost:9090",
        description: "Fetch Prometheus metrics debugging information.",
      },
      {
        command:
          "promtool debug pprof http://localhost:9090",
        description: "Fetch profiling information from Prometheus.",
      },
      {
        command:
          "promtool debug all http://localhost:9090",
        description: "Fetch available Prometheus debug information.",
      },
    ],
  },

  {
    title: "Promtool Rule Testing",
    commands: [
      {
        command: "promtool test rules test.yml",
        description: "Run Prometheus rule unit tests.",
      },
      {
        command: "promtool test rules test.yml --run <test-name>",
        description: "Run selected rule test groups.",
      },
      {
        command: "promtool test rules test.yml --junit results.xml",
        description: "Write rule test results in JUnit XML format.",
      },
    ],
  },

  {
    title: "Prometheus HTTP API",
    commands: [
      {
        command: "curl http://localhost:9090/api/v1/query?query=up",
        description: "Execute an instant PromQL query through the HTTP API.",
      },
      {
        command:
          "curl 'http://localhost:9090/api/v1/query_range?query=up&start=<start>&end=<end>&step=15s'",
        description: "Execute a range PromQL query through the HTTP API.",
      },
      {
        command: "curl http://localhost:9090/api/v1/targets",
        description: "Retrieve target information through the API.",
      },
      {
        command: "curl http://localhost:9090/api/v1/rules",
        description: "Retrieve configured recording and alerting rules.",
      },
      {
        command: "curl http://localhost:9090/api/v1/alerts",
        description: "Retrieve currently active alerts.",
      },
      {
        command: "curl http://localhost:9090/api/v1/label/__name__/values",
        description: "Retrieve metric name label values.",
      },
    ],
  },

  {
    title: "Prometheus Runtime and Reload",
    commands: [
      {
        command: "curl http://localhost:9090/-/healthy",
        description: "Check the Prometheus HTTP health endpoint.",
      },
      {
        command: "curl http://localhost:9090/-/ready",
        description: "Check the Prometheus HTTP readiness endpoint.",
      },
      {
        command: "curl -X POST http://localhost:9090/-/reload",
        description:
          "Reload configuration when lifecycle management is enabled.",
      },
      {
        command: "curl http://localhost:9090/api/v1/status/config",
        description: "Retrieve the current Prometheus configuration.",
      },
      {
        command: "curl http://localhost:9090/api/v1/status/runtimeinfo",
        description: "Retrieve Prometheus runtime information.",
      },
      {
        command: "curl http://localhost:9090/api/v1/status/flags",
        description: "Retrieve Prometheus runtime flag values.",
      },
    ],
  },

  {
    title: "Prometheus Storage",
    commands: [
      {
        command:
          "prometheus --storage.tsdb.path=/prometheus",
        description: "Configure the local TSDB storage path.",
      },
      {
        command:
          "prometheus --storage.tsdb.retention.time=15d",
        description: "Configure time-based local data retention.",
      },
      {
        command:
          "prometheus --storage.tsdb.retention.size=20GB",
        description: "Configure a size-based local data retention limit.",
      },
      {
        command:
          "prometheus --storage.tsdb.wal-compression",
        description: "Enable WAL compression.",
      },
    ],
  },

  {
    title: "Prometheus Query Performance",
    commands: [
      {
        command:
          "prometheus --query.max-concurrency=20",
        description: "Configure the maximum number of concurrent queries.",
      },
      {
        command:
          "prometheus --query.max-samples=50000000",
        description: "Limit the number of samples a query can load.",
      },
      {
        command:
          "prometheus --query.timeout=2m",
        description: "Configure the maximum execution time for queries.",
      },
    ],
  },

  {
    title: "Kubernetes Monitoring",
    commands: [
      {
        command: "kubectl get pods -n monitoring",
        description: "List monitoring namespace pods.",
      },
      {
        command: "kubectl get servicemonitors -A",
        description: "List ServiceMonitor resources across namespaces.",
      },
      {
        command: "kubectl get prometheusrules -A",
        description: "List PrometheusRule resources across namespaces.",
      },
      {
        command: "kubectl logs -n monitoring <prometheus-pod>",
        description: "View Prometheus pod logs.",
      },
      {
        command:
          "kubectl port-forward -n monitoring svc/prometheus 9090:9090",
        description: "Forward Prometheus web access to local port 9090.",
      },
      {
        command:
          "kubectl describe pod -n monitoring <prometheus-pod>",
        description: "Inspect the Prometheus pod when troubleshooting Kubernetes deployment issues.",
      },
    ],
  },

  {
    title: "Production Troubleshooting",
    commands: [
      {
        command: "promtool check config prometheus.yml",
        description: "Validate configuration before restarting Prometheus.",
      },
      {
        command: "promtool check rules rules.yml",
        description: "Validate recording and alerting rules.",
      },
      {
        command: "promtool check healthy",
        description: "Check Prometheus health.",
      },
      {
        command: "promtool check ready",
        description: "Check Prometheus readiness.",
      },
      {
        command: "curl http://localhost:9090/api/v1/targets",
        description: "Inspect target health and scrape status.",
      },
      {
        command: "curl http://localhost:9090/api/v1/alerts",
        description: "Inspect active alerts.",
      },
      {
        command:
          "curl http://localhost:9090/api/v1/status/runtimeinfo",
        description: "Inspect Prometheus runtime information.",
      },
      {
        command:
          "curl http://localhost:9090/api/v1/status/tsdb",
        description: "Inspect TSDB statistics and storage information.",
      },
    ],
  },

  {
    title: "CI/CD Prometheus Workflow",
    commands: [
      {
        command: "promtool check config prometheus.yml",
        description: "Validate Prometheus configuration in CI.",
      },
      {
        command: "promtool check rules rules.yml",
        description: "Validate alerting and recording rules in CI.",
      },
      {
        command: "promtool test rules tests.yml",
        description: "Run Prometheus rule tests in CI.",
      },
      {
        command:
          "promtool check metrics < metrics.prom",
        description: "Validate exported metrics during automated testing.",
      },
      {
        command:
          "docker build -t prometheus-monitoring:latest .",
        description: "Build a custom Prometheus monitoring image.",
      },
      {
        command:
          "docker run -d --name prometheus -p 9090:9090 prometheus-monitoring:latest",
        description: "Run the validated Prometheus image.",
      },
    ],
  },

  {
    title: "Recommended Prometheus Workflow",
    commands: [
      {
        command: "prometheus --version",
        description: "Confirm the installed Prometheus version.",
      },
      {
        command: "promtool check config prometheus.yml",
        description: "Validate the Prometheus configuration.",
      },
      {
        command: "promtool check rules rules.yml",
        description: "Validate recording and alerting rules.",
      },
      {
        command: "promtool test rules tests.yml",
        description: "Run rule unit tests.",
      },
      {
        command: "prometheus --config.file=prometheus.yml",
        description: "Start Prometheus using the validated configuration.",
      },
      {
        command: "promtool check ready",
        description: "Confirm that Prometheus is ready.",
      },
      {
        command: "curl http://localhost:9090/api/v1/targets",
        description: "Verify target discovery and scrape status.",
      },
      {
        command: "curl http://localhost:9090/api/v1/alerts",
        description: "Verify active alert state.",
      },
    ],
  },
];

export const metadata = {
  title: "Prometheus Commands & PromQL Cheat Sheet | DevOpsCommands",
  description:
    "Practical Prometheus commands, promtool, PromQL queries, monitoring, alerting rules, recording rules, configuration, Kubernetes monitoring and troubleshooting.",
};

export default function PrometheusCommandsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          SRE • Monitoring • Prometheus
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Prometheus Commands & PromQL Cheat Sheet
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Practical Prometheus commands, promtool utilities, PromQL queries,
          monitoring, alerting, recording rules, configuration, Kubernetes
          monitoring and production troubleshooting.
        </p>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold text-white">
            What is Prometheus?
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            Prometheus is a monitoring and alerting system that collects
            time-series metrics from monitored targets. PromQL is its query
            language for selecting, aggregating and analyzing those metrics.
          </p>
        </div>

        <div className="mt-10">
          <PrometheusCommandSearch sections={commandSections} />
        </div>

        <section className="mt-16 rounded-xl border border-cyan-900 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">
            Common Prometheus Workflow
          </h2>

          <div className="mt-6 space-y-4">
            <code className="block rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
              prometheus --version
            </code>

            <code className="block rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
              promtool check config prometheus.yml
            </code>

            <code className="block rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
              promtool check rules rules.yml
            </code>

            <code className="block rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
              promtool test rules tests.yml
            </code>

            <code className="block rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
              prometheus --config.file=prometheus.yml
            </code>

            <code className="block rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
              promtool check ready
            </code>

            <code className="block rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
              curl http://localhost:9090/api/v1/targets
            </code>
          </div>
        </section>
      </section>
    </main>
  );
}