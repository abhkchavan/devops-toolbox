export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">Terms of Use</h1>

        <p className="mb-6 text-slate-300">
          By using DevOpsToolbox, you agree to use this website responsibly
          and in accordance with these Terms of Use.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Use of Content</h2>
        <p className="mb-6 text-slate-300">
          The guides, examples, commands and tools provided on DevOpsToolbox
          are intended for educational and informational purposes.
          You are responsible for evaluating commands before using them
          on your systems.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Accuracy</h2>
        <p className="mb-6 text-slate-300">
          We aim to provide useful and accurate information, but technology
          changes frequently. We do not guarantee that every example or
          command will work in every environment.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">External Links</h2>
        <p className="mb-6 text-slate-300">
          DevOpsToolbox may contain links to third-party websites.
          We are not responsible for the content, availability or policies
          of external websites.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Changes</h2>
        <p className="text-slate-300">
          We may update these Terms of Use as the website develops.
        </p>
      </div>
    </main>
  );
}
