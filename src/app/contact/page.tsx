export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Contact
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact DevOpsCommands
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Have a question, suggestion, correction, or idea for a new
            DevOps tool? We would love to hear from you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>

            <p className="mt-4 leading-7 text-slate-300">
              DevOpsCommands is built to provide practical DevOps commands,
              troubleshooting references, and useful developer tools.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              If you find an incorrect command, outdated information, broken
              tool, or something that could be improved, please let us know.
            </p>

            <a
              href="mailto:contact@devopscommands.com"
              className="mt-6 inline-block rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-5 py-3 font-medium text-cyan-400 transition hover:bg-cyan-500/20"
            >
              contact@devopscommands.com
            </a>
          </section>

          <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">What You Can Contact Us About</h2>

            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Command corrections or technical errors</li>
              <li>• DevOps tool suggestions</li>
              <li>• New command reference requests</li>
              <li>• Website feedback</li>
              <li>• Broken links or functionality</li>
              <li>• Collaboration and other inquiries</li>
            </ul>
          </section>
        </div>

        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">About DevOpsCommands</h2>

          <p className="mt-4 leading-7 text-slate-300">
            DevOpsCommands is an independent DevOps reference and tooling
            project focused on making everyday DevOps tasks easier to
            understand and faster to perform.
          </p>

          <p className="mt-4 leading-7 text-slate-300">
            The project covers technologies such as Kubernetes, Docker,
            Ansible, Linux, SRE, and other tools commonly used by DevOps and
            infrastructure engineers.
          </p>

          <p className="mt-4 leading-7 text-slate-300">
            The goal is to build a practical, continuously improving resource
            for developers, system administrators, DevOps engineers, students,
            and anyone learning modern infrastructure.
          </p>
        </section>

        <div className="mt-10 text-center text-sm text-slate-500">
          We appreciate your feedback and suggestions as DevOpsCommands grows.
        </div>
      </div>
    </main>
  );
}