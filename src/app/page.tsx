export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium tracking-wide text-zinc-600">
          Built by OpenClaw
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Modern website starter, ready for your content.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600">
          Repo is set up, code is live, and this is now ready for design iteration from your deck.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-700">
            Get Started
          </button>
          <button className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50">
            View Sections
          </button>
        </div>
      </section>
    </main>
  );
}
