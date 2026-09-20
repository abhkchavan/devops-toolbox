import type { Metadata } from "next";
import JenkinsCommandSearch from "./JenkinsCommandSearch";

export const metadata: Metadata = {
  title: "Jenkins Commands Cheat Sheet",
  description:
    "Comprehensive Jenkins commands for jobs, builds, pipelines, agents, plugins, credentials, logs, CLI, REST API and CI/CD troubleshooting.",
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
    title: "Jenkins CLI and Server",
    commands: [
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ help",
        description: "Display available Jenkins CLI commands.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ version",
        description: "Display the Jenkins CLI/server version.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ who-am-i",
        description: "Display the authenticated Jenkins user.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ help build",
        description: "Display help for the Jenkins build CLI command.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ help console",
        description: "Display help for the Jenkins console CLI command.",
      },
    ],
  },

  {
    title: "Jobs",
    commands: [
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ list-jobs",
        description:
          "List Jenkins jobs visible to the authenticated user.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ create-job my-job",
        description:
          "Create a Jenkins job from XML supplied through standard input.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ get-job my-job",
        description:
          "Retrieve the XML configuration of a Jenkins job.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ update-job my-job",
        description:
          "Update an existing Jenkins job using XML configuration.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ copy-job old-job new-job",
        description:
          "Create a new job by copying an existing Jenkins job.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ delete-job my-job",
        description: "Delete a Jenkins job.",
      },
    ],
  },

  {
    title: "Builds",
    commands: [
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ build my-job",
        description: "Trigger a Jenkins job build.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ build my-job -s",
        description:
          "Trigger a build and wait until the build starts.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ build my-job -f",
        description:
          "Trigger a build and wait until it finishes.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ build my-job -p VERSION=1.0",
        description:
          "Trigger a parameterized Jenkins build with a parameter value.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ console my-job",
        description:
          "Display the console output of a Jenkins job's latest build.",
      },
    ],
  },

  {
    title: "Parameterized Builds",
    commands: [
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ build my-job -p ENV=production",
        description:
          "Trigger a build with a string parameter.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ build my-job -p BRANCH=main",
        description:
          "Trigger a build using a Git branch parameter.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ build my-job -p IMAGE_TAG=v1.2.0",
        description:
          "Pass an image tag to a Jenkins build.",
      },
    ],
  },

  {
    title: "Pipelines",
    commands: [
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ get-job my-pipeline",
        description:
          "Retrieve the configuration of a Jenkins Pipeline job.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ build my-pipeline",
        description:
          "Trigger a Jenkins Pipeline build.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ console my-pipeline",
        description:
          "Display console output from the Pipeline's latest build.",
      },
      {
        command: "pipeline { agent any }",
        description:
          "Define a Declarative Jenkins Pipeline that can execute on any available agent.",
      },
      {
        command:
          "stage('Build') { steps { sh 'npm run build' } }",
        description:
          "Define a Pipeline stage that executes a build command.",
      },
      {
        command: "sh 'docker build -t myapp .'",
        description:
          "Execute a shell command from a Jenkins Pipeline on a Unix-like agent.",
      },
      {
        command: "bat 'docker build -t myapp .'",
        description:
          "Execute a Windows batch command from a Jenkins Pipeline.",
      },
    ],
  },

  {
    title: "Pipeline Environment and Parameters",
    commands: [
      {
        command:
          "environment { APP_ENV = 'production' }",
        description:
          "Define environment variables for a Declarative Pipeline.",
      },
      {
        command:
          "parameters { string(name: 'BRANCH', defaultValue: 'main') }",
        description:
          "Define a string parameter for a Jenkins Pipeline.",
      },
      {
        command:
          'echo "${env.BUILD_NUMBER}"',
        description:
          "Print the current Jenkins build number from a Pipeline.",
      },
      {
        command:
          'echo "${params.BRANCH}"',
        description:
          "Read a Pipeline parameter.",
      },
      {
        command: "withCredentials([...])",
        description:
          "Temporarily expose configured Jenkins credentials to Pipeline steps.",
      },
    ],
  },

  {
    title: "Agents and Nodes",
    commands: [
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ list-nodes",
        description:
          "List Jenkins agents/nodes available to the authenticated user.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ get-node node1",
        description:
          "Display configuration information for a Jenkins node.",
      },
      {
        command:
          'java -jar jenkins-cli.jar -s http://localhost:8080/ offline-node node1 -m "Maintenance"',
        description:
          "Mark a Jenkins node offline with a maintenance message.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ online-node node1",
        description:
          "Bring a Jenkins node back online.",
      },
    ],
  },

  {
    title: "Plugins",
    commands: [
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ list-plugins",
        description: "List installed Jenkins plugins.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ install-plugin workflow-aggregator",
        description:
          "Install a Jenkins plugin by its short name.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ install-plugin git",
        description:
          "Install the Jenkins Git plugin.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ install-plugin docker-workflow",
        description:
          "Install the Jenkins Docker Pipeline integration plugin.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ restart",
        description:
          "Restart Jenkins after plugin or configuration changes when permitted.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ safe-restart",
        description:
          "Restart Jenkins after running builds have completed.",
      },
    ],
  },

  {
    title: "Credentials",
    commands: [
      {
        command:
          "withCredentials([usernamePassword(...)])",
        description:
          "Use a configured username/password credential securely inside a Pipeline.",
      },
      {
        command:
          "withCredentials([string(...)])",
        description:
          "Use a configured secret text credential inside a Pipeline.",
      },
      {
        command:
          "withCredentials([file(...)])",
        description:
          "Use a configured secret file credential inside a Pipeline.",
      },
      {
        command:
          "credentials('docker-registry')",
        description:
          "Reference a Jenkins credential from a Declarative Pipeline.",
      },
    ],
  },

  {
    title: "Logs and Console Output",
    commands: [
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ console my-job",
        description:
          "Display the latest console output for a job.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ console my-job 25",
        description:
          "Display console output for a specific build number.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ console my-job -f",
        description:
          "Follow console output while a build is running.",
      },
      {
        command:
          'echo "Build ${env.BUILD_NUMBER}"',
        description:
          "Print build information to the Jenkins Pipeline console.",
      },
    ],
  },

  {
    title: "REST API",
    commands: [
      {
        command:
          "curl http://localhost:8080/api/json",
        description:
          "Retrieve Jenkins information through the JSON REST API.",
      },
      {
        command:
          "curl http://localhost:8080/job/my-job/api/json",
        description:
          "Retrieve JSON information about a specific Jenkins job.",
      },
      {
        command:
          "curl http://localhost:8080/job/my-job/lastBuild/api/json",
        description:
          "Retrieve information about the latest build of a Jenkins job.",
      },
      {
        command:
          "curl http://localhost:8080/job/my-job/lastBuild/consoleText",
        description:
          "Retrieve plain-text console output from the latest build.",
      },
      {
        command:
          "curl -X POST http://localhost:8080/job/my-job/build",
        description:
          "Trigger a Jenkins build through the REST API when authentication and permissions allow it.",
      },
    ],
  },

  {
    title: "Jenkins Environment Variables",
    commands: [
      {
        command: "echo $BUILD_NUMBER",
        description:
          "Display the current Jenkins build number from a Unix-like shell.",
      },
      {
        command: "echo $BUILD_ID",
        description:
          "Display the current Jenkins build identifier.",
      },
      {
        command: "echo $BUILD_URL",
        description:
          "Display the URL of the current Jenkins build.",
      },
      {
        command: "echo $JOB_NAME",
        description:
          "Display the current Jenkins job name.",
      },
      {
        command: "echo $WORKSPACE",
        description:
          "Display the workspace directory on the Jenkins agent.",
      },
      {
        command: "echo $GIT_COMMIT",
        description:
          "Display the Git commit associated with the build when Git integration provides it.",
      },
    ],
  },

  {
    title: "Workspace and Cleanup",
    commands: [
      {
        command: "deleteDir()",
        description:
          "Delete the current Pipeline workspace contents.",
      },
      {
        command: "cleanWs()",
        description:
          "Clean the Jenkins workspace when the Workspace Cleanup plugin is available.",
      },
      {
        command: "dir('frontend') { ... }",
        description:
          "Execute Pipeline steps inside a specific workspace directory.",
      },
      {
        command: "ws('/custom/workspace') { ... }",
        description:
          "Execute Pipeline steps using a specified workspace location.",
      },
    ],
  },

  {
    title: "Jenkins Administration",
    commands: [
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ reload-configuration",
        description:
          "Reload Jenkins configuration from disk.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ reload-job my-job",
        description:
          "Reload a job configuration from disk when applicable.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ quiet-down",
        description:
          "Prevent new builds from starting while Jenkins completes existing work.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ cancel-quiet-down",
        description:
          "Cancel quiet-down mode and allow new builds to start.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ restart",
        description:
          "Restart the Jenkins controller.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ safe-restart",
        description:
          "Restart Jenkins after running builds have completed.",
      },
    ],
  },

  {
    title: "Build Control",
    commands: [
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ stop-builds my-job",
        description:
          "Stop builds for a job when supported by the installed Jenkins CLI command set.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ build my-job -f",
        description:
          "Trigger a build and wait for its completion.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ console my-job -f",
        description:
          "Follow live console output from the latest build.",
      },
    ],
  },

  {
    title: "CI/CD Workflow",
    commands: [
      {
        command: "checkout scm",
        description:
          "Check out the source code configured for the Jenkins Pipeline.",
      },
      {
        command: "sh 'npm ci'",
        description:
          "Install Node.js dependencies in a Unix-like Jenkins agent.",
      },
      {
        command: "sh 'npm run build'",
        description:
          "Build a Node.js application in a Jenkins Pipeline.",
      },
      {
        command:
          "sh 'docker build -t myapp:${BUILD_NUMBER} .'",
        description:
          "Build a Docker image using the Jenkins build number as the image tag.",
      },
      {
        command:
          "sh 'docker push registry.example.com/myapp:${BUILD_NUMBER}'",
        description:
          "Push a built Docker image to a container registry.",
      },
      {
        command:
          "sh 'kubectl apply -f k8s/'",
        description:
          "Deploy Kubernetes manifests from a Jenkins Pipeline when kubectl is configured on the agent.",
      },
    ],
  },

  {
    title: "Jenkins Troubleshooting",
    commands: [
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ version",
        description:
          "Verify Jenkins server and CLI version information.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ who-am-i",
        description:
          "Verify the authenticated Jenkins identity and permissions.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ list-jobs",
        description:
          "Check whether the expected jobs are accessible.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ list-nodes",
        description:
          "Check available Jenkins agents when builds cannot start.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ list-plugins",
        description:
          "Inspect installed plugins when Pipeline features are unavailable.",
      },
      {
        command:
          "java -jar jenkins-cli.jar -s http://localhost:8080/ console my-job -f",
        description:
          "Follow live build logs while troubleshooting a failed or hanging build.",
      },
    ],
  },
];

export default function JenkinsCommands() {
  const totalCommands = commandSections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Back */}
        <a
          href="/"
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Back to DevOpsCommands
        </a>

        {/* Header */}
        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Jenkins
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Jenkins Commands Cheat Sheet
          </h1>

          <p className="mt-4 max-w-3xl text-slate-400">
            Practical Jenkins commands for jobs, builds, pipelines, agents,
            plugins, credentials, logs, REST API, CI/CD and troubleshooting.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
              {commandSections.length} categories
            </span>

            <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
              {totalCommands}+ commands
            </span>
          </div>
        </header>

        {/* Search */}
        <JenkinsCommandSearch sections={commandSections} />

        {/* Recommended Workflow */}
        <section className="mt-12 rounded-xl border border-cyan-900 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">
            Recommended Jenkins Workflow
          </h2>

          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
{`# Check out source
checkout scm

# Install dependencies
sh 'npm ci'

# Run tests
sh 'npm test'

# Build application
sh 'npm run build'

# Build container
sh 'docker build -t myapp:$BUILD_NUMBER .'

# Push container
sh 'docker push registry.example.com/myapp:$BUILD_NUMBER'

# Deploy
sh 'kubectl apply -f k8s/'`}
          </pre>
        </section>

        {/* Tip */}
        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">
            DevOpsCommands Tip
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            Keep Jenkins pipelines in source control with a Jenkinsfile.
            Store secrets in Jenkins Credentials rather than directly inside
            Pipeline code, and make build stages small and easy to troubleshoot.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          Jenkins CLI commands and Pipeline steps can depend on the Jenkins
          version, installed plugins, authentication method and agent operating
          system.
        </footer>
      </div>
    </main>
  );
}