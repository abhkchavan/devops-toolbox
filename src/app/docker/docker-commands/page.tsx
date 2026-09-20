import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docker Commands Cheat Sheet | Docker CLI Reference",
  description:
    "Practical Docker commands for containers, images, Dockerfiles, volumes, networks, Docker Compose, registries, troubleshooting and system management.",
};

const commandSections = [
  {
    title: "1. Docker Information",
    commands: [
      {
        command: "docker --version",
        description: "Displays the installed Docker CLI version.",
      },
      {
        command: "docker version",
        description:
          "Displays detailed Docker client and server version information.",
      },
      {
        command: "docker info",
        description:
          "Displays detailed information about the Docker daemon, containers, images, storage and runtime.",
      },
      {
        command: "docker help",
        description:
          "Displays help for Docker commands and available options.",
      },
    ],
  },
  {
    title: "2. Docker Images",
    commands: [
      {
        command: "docker images",
        description: "Lists Docker images stored locally.",
      },
      {
        command: "docker image ls",
        description: "Lists locally available Docker images.",
      },
      {
        command: "docker pull nginx",
        description:
          "Downloads the nginx image from a container registry.",
      },
      {
        command: "docker pull nginx:latest",
        description:
          "Downloads a specific image tag from a container registry.",
      },
      {
        command: "docker image inspect <image>",
        description:
          "Displays detailed metadata and configuration for an image.",
      },
      {
        command: "docker image history <image>",
        description:
          "Shows the layers that make up a Docker image.",
      },
      {
        command: "docker tag <image> <repository>:<tag>",
        description:
          "Creates another tag referencing an existing Docker image.",
      },
      {
        command: "docker rmi <image>",
        description: "Removes a Docker image.",
      },
      {
        command: "docker rmi -f <image>",
        description:
          "Force removes an image when normal removal is blocked.",
      },
    ],
  },
  {
    title: "3. Run Containers",
    commands: [
      {
        command: "docker run nginx",
        description:
          "Creates and starts a container from the nginx image.",
      },
      {
        command: "docker run -d nginx",
        description:
          "Runs an nginx container in detached mode.",
      },
      {
        command: "docker run -it ubuntu bash",
        description:
          "Starts an interactive Ubuntu container with a Bash shell.",
      },
      {
        command: "docker run --name web nginx",
        description:
          "Creates a container with a custom name.",
      },
      {
        command: "docker run -d -p 8080:80 nginx",
        description:
          "Runs nginx and maps host port 8080 to container port 80.",
      },
      {
        command: "docker run -d --restart unless-stopped nginx",
        description:
          "Runs a container with a restart policy that keeps it running unless explicitly stopped.",
      },
      {
        command: "docker run --rm nginx",
        description:
          "Automatically removes the container after it exits.",
      },
      {
        command: "docker run -e APP_ENV=production nginx",
        description:
          "Passes an environment variable into the container.",
      },
      {
        command:
          "docker run -v /host/path:/container/path nginx",
        description:
          "Mounts a host directory or volume into the container.",
      },
    ],
  },
  {
    title: "4. Container Management",
    commands: [
      {
        command: "docker ps",
        description: "Lists currently running containers.",
      },
      {
        command: "docker ps -a",
        description:
          "Lists all containers, including stopped containers.",
      },
      {
        command: "docker start <container>",
        description:
          "Starts an existing stopped container.",
      },
      {
        command: "docker stop <container>",
        description:
          "Gracefully stops a running container.",
      },
      {
        command: "docker restart <container>",
        description:
          "Stops and starts a container again.",
      },
      {
        command: "docker pause <container>",
        description:
          "Pauses all processes inside a container.",
      },
      {
        command: "docker unpause <container>",
        description:
          "Resumes processes inside a paused container.",
      },
      {
        command: "docker kill <container>",
        description:
          "Immediately stops a running container.",
      },
      {
        command: "docker rm <container>",
        description:
          "Removes a stopped container.",
      },
      {
        command: "docker rm -f <container>",
        description:
          "Force removes a running or stopped container.",
      },
    ],
  },
  {
    title: "5. Container Logs and Inspection",
    commands: [
      {
        command: "docker logs <container>",
        description:
          "Displays logs generated by a container.",
      },
      {
        command: "docker logs -f <container>",
        description:
          "Follows container logs in real time.",
      },
      {
        command: "docker logs --tail 100 <container>",
        description:
          "Displays only the latest 100 lines of container logs.",
      },
      {
        command: "docker logs --since 10m <container>",
        description:
          "Displays logs generated during the specified time period.",
      },
      {
        command: "docker inspect <container>",
        description:
          "Displays detailed container configuration and runtime information.",
      },
      {
        command: "docker stats",
        description:
          "Continuously monitors CPU, memory, network and block I/O usage.",
      },
      {
        command: "docker stats <container>",
        description:
          "Monitors resource usage for a specific container.",
      },
      {
        command: "docker top <container>",
        description:
          "Displays processes running inside a container.",
      },
    ],
  },
  {
    title: "6. Execute Commands Inside Containers",
    commands: [
      {
        command: "docker exec -it <container> /bin/bash",
        description:
          "Opens an interactive Bash shell inside a running container.",
      },
      {
        command: "docker exec -it <container> /bin/sh",
        description:
          "Opens a shell when Bash is not available.",
      },
      {
        command: "docker exec <container> env",
        description:
          "Displays environment variables inside the container.",
      },
      {
        command: "docker exec <container> ls -la",
        description:
          "Runs a command inside the container without opening a shell.",
      },
      {
        command:
          "docker exec -it <container> sh",
        description:
          "Starts an interactive shell using sh.",
      },
    ],
  },
  {
    title: "7. Copy Files",
    commands: [
      {
        command:
          "docker cp <container>:/path/file.txt ./file.txt",
        description:
          "Copies a file from a container to the host.",
      },
      {
        command:
          "docker cp ./file.txt <container>:/path/file.txt",
        description:
          "Copies a file from the host into a container.",
      },
      {
        command:
          "docker cp ./directory <container>:/app/",
        description:
          "Copies a directory from the host into a container.",
      },
    ],
  },
  {
    title: "8. Build Docker Images",
    commands: [
      {
        command: "docker build -t myapp .",
        description:
          "Builds a Docker image from the Dockerfile in the current directory.",
      },
      {
        command:
          "docker build -t myapp:1.0 .",
        description:
          "Builds an image with a specific repository name and tag.",
      },
      {
        command:
          "docker build -f Dockerfile.prod -t myapp:prod .",
        description:
          "Builds an image using a specific Dockerfile.",
      },
      {
        command:
          "docker build --no-cache -t myapp .",
        description:
          "Builds an image without using cached layers.",
      },
      {
        command:
          "docker build --build-arg APP_ENV=production -t myapp .",
        description:
          "Passes a build argument to the Docker build process.",
      },
    ],
  },
  {
    title: "9. Dockerfile Commands",
    commands: [
      {
        command: "FROM node:22",
        description:
          "Defines the base image for a Docker image.",
      },
      {
        command: "WORKDIR /app",
        description:
          "Sets the working directory inside the image.",
      },
      {
        command: "COPY . .",
        description:
          "Copies files from the build context into the image.",
      },
      {
        command: "RUN npm install",
        description:
          "Executes a command while building the image.",
      },
      {
        command: "ENV NODE_ENV=production",
        description:
          "Defines an environment variable in the image.",
      },
      {
        command: "EXPOSE 3000",
        description:
          "Documents the port the application is intended to use.",
      },
      {
        command: 'CMD ["npm", "start"]',
        description:
          "Defines the default command executed when a container starts.",
      },
      {
        command: 'ENTRYPOINT ["node"]',
        description:
          "Defines the main executable for the container.",
      },
    ],
  },
  {
    title: "10. Docker Networks",
    commands: [
      {
        command: "docker network ls",
        description:
          "Lists Docker networks.",
      },
      {
        command: "docker network inspect <network>",
        description:
          "Displays detailed information about a Docker network.",
      },
      {
        command: "docker network create mynetwork",
        description:
          "Creates a user-defined Docker network.",
      },
      {
        command:
          "docker network connect mynetwork <container>",
        description:
          "Connects an existing container to a network.",
      },
      {
        command:
          "docker network disconnect mynetwork <container>",
        description:
          "Disconnects a container from a network.",
      },
      {
        command: "docker network rm <network>",
        description:
          "Removes a Docker network.",
      },
    ],
  },
  {
    title: "11. Docker Volumes",
    commands: [
      {
        command: "docker volume ls",
        description:
          "Lists Docker volumes.",
      },
      {
        command: "docker volume create myvolume",
        description:
          "Creates a named Docker volume.",
      },
      {
        command: "docker volume inspect myvolume",
        description:
          "Displays detailed information about a Docker volume.",
      },
      {
        command:
          "docker run -v myvolume:/data nginx",
        description:
          "Mounts a named volume at /data inside the container.",
      },
      {
        command: "docker volume rm myvolume",
        description:
          "Removes a Docker volume.",
      },
      {
        command: "docker volume prune",
        description:
          "Removes unused Docker volumes.",
      },
    ],
  },
  {
    title: "12. Docker Compose",
    commands: [
      {
        command: "docker compose up",
        description:
          "Creates and starts services defined in compose.yaml.",
      },
      {
        command: "docker compose up -d",
        description:
          "Starts Compose services in detached mode.",
      },
      {
        command: "docker compose down",
        description:
          "Stops and removes Compose services, networks and containers created by the project.",
      },
      {
        command: "docker compose ps",
        description:
          "Lists containers managed by the Compose project.",
      },
      {
        command: "docker compose logs",
        description:
          "Displays logs from Compose services.",
      },
      {
        command: "docker compose logs -f",
        description:
          "Follows Compose service logs in real time.",
      },
      {
        command: "docker compose build",
        description:
          "Builds images defined in the Compose configuration.",
      },
      {
        command: "docker compose pull",
        description:
          "Pulls images required by the Compose project.",
      },
      {
        command:
          "docker compose exec <service> sh",
        description:
          "Executes an interactive shell inside a Compose service container.",
      },
    ],
  },
  {
    title: "13. Docker Registry",
    commands: [
      {
        command: "docker login",
        description:
          "Authenticates the Docker CLI with a container registry.",
      },
      {
        command: "docker logout",
        description:
          "Logs out of a container registry.",
      },
      {
        command:
          "docker tag myapp username/myapp:latest",
        description:
          "Tags an image for a registry repository.",
      },
      {
        command:
          "docker push username/myapp:latest",
        description:
          "Pushes a tagged image to a container registry.",
      },
      {
        command:
          "docker pull username/myapp:latest",
        description:
          "Downloads an image from a container registry.",
      },
    ],
  },
  {
    title: "14. Docker System Management",
    commands: [
      {
        command: "docker system df",
        description:
          "Shows Docker disk usage by images, containers, volumes and build cache.",
      },
      {
        command: "docker system prune",
        description:
          "Removes unused Docker resources.",
      },
      {
        command:
          "docker system prune -a",
        description:
          "Removes unused resources including unused images.",
      },
      {
        command: "docker container prune",
        description:
          "Removes stopped containers.",
      },
      {
        command: "docker image prune",
        description:
          "Removes dangling images.",
      },
      {
        command: "docker network prune",
        description:
          "Removes unused Docker networks.",
      },
    ],
  },
  {
    title: "15. Troubleshooting",
    commands: [
      {
        command: "docker ps -a",
        description:
          "Check whether a container exited or failed to start.",
      },
      {
        command: "docker logs <container>",
        description:
          "Check application or startup errors in container logs.",
      },
      {
        command: "docker inspect <container>",
        description:
          "Inspect container configuration, networking, mounts and runtime state.",
      },
      {
        command: "docker stats",
        description:
          "Check whether containers are consuming excessive CPU or memory.",
      },
      {
        command: "docker network inspect <network>",
        description:
          "Investigate container network configuration and connected containers.",
      },
      {
        command: "docker system df",
        description:
          "Check whether Docker is consuming excessive disk space.",
      },
    ],
  },
];

export default function DockerCommands() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Back to DevOpsToolbox
        </a>

        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Docker
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Docker Commands Cheat Sheet
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            A practical Docker CLI reference for containers, images,
            Dockerfiles, volumes, networks, Compose, registries and
            troubleshooting.
          </p>
        </header>

        <section className="mt-10 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
          <h2 className="text-xl font-bold">Docker Command Syntax</h2>

          <div className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4">
            <code className="whitespace-nowrap text-cyan-400">
              docker [command] [options] [arguments]
            </code>
          </div>

          <p className="mt-4 leading-7 text-slate-400">
            Docker CLI commands are used to build images, create and manage
            containers, configure networks and volumes, and operate
            containerized applications.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Quick Docker Command Reference
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "docker ps",
              "docker ps -a",
              "docker images",
              "docker pull nginx",
              "docker run -d -p 8080:80 nginx",
              "docker logs <container>",
              "docker exec -it <container> /bin/bash",
              "docker build -t myapp .",
              "docker network ls",
              "docker volume ls",
              "docker compose up -d",
              "docker system df",
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

        {commandSections.map((section) => (
          <section key={section.title} className="mt-12">
            <h2 className="text-2xl font-bold">
              {section.title}
            </h2>

            <div className="mt-5 space-y-4">
              {section.commands.map((item) => (
                <div
                  key={item.command}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500/30"
                >
                  <div className="overflow-x-auto rounded-lg bg-slate-950 p-4">
                    <code className="whitespace-nowrap text-sm text-cyan-400">
                      {item.command}
                    </code>
                  </div>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-12 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Docker Troubleshooting Workflow
          </h2>

          <div className="mt-5 overflow-x-auto rounded-xl bg-slate-950 p-6">
            <pre className="text-sm leading-8 text-slate-300">
{`# Check running containers
docker ps

# Check all containers
docker ps -a

# Inspect container details
docker inspect <container>

# Check container logs
docker logs <container>

# Follow logs
docker logs -f <container>

# Check processes
docker top <container>

# Check resource usage
docker stats

# Check networks
docker network ls

# Check Docker disk usage
docker system df`}
            </pre>
          </div>

          <p className="mt-5 leading-7 text-slate-400">
            Start with the container state, then inspect logs and
            configuration. If the application is running but unreachable,
            check port mappings and networks. For performance problems,
            inspect CPU and memory usage with
            <code className="mx-1 text-cyan-400">docker stats</code>.
          </p>
        </section>

        <section className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
          <h2 className="text-xl font-bold">
            DevOpsToolbox Tip
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            When a container is not working, start with
            <code className="mx-1 text-cyan-400">docker ps -a</code>,
            then check
            <code className="mx-1 text-cyan-400">docker logs</code>
            and
            <code className="mx-1 text-cyan-400">docker inspect</code>.
            These commands provide useful information before removing or
            recreating the container.
          </p>
        </section>

        <footer className="mt-12 border-t border-slate-800 pt-6">
          <p className="text-sm text-slate-500">
            Docker command reference for DevOps, SRE and container workflows.
          </p>
        </footer>
      </div>
    </main>
  );
}