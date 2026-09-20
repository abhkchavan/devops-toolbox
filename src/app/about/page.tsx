export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">About DevOpsToolbox</h1>

        <p className="mb-6 text-lg text-slate-300">
          DevOpsToolbox is a practical resource for DevOps engineers,
          SREs, system administrators, cloud engineers and developers.
        </p>

        <p className="mb-6 text-slate-300">
          The website provides practical guides, command references,
          troubleshooting workflows and free tools covering technologies
          such as Linux, Docker, Kubernetes, Ansible and SRE.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">
          Our Goal
        </h2>

        <p className="text-slate-300">
          Our goal is to make common DevOps and infrastructure tasks easier
          to understand and faster to solve through practical examples and
          easy-to-use tools.
        </p>
      </div>
    </main>
  );
}
