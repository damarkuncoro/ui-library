export function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-neutral-bg-surface rounded-xl border border-neutral-border">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-2xl mb-4">
            ⚡
          </div>
          <h4 className="font-semibold text-neutral-text mb-2">Fast Development</h4>
          <p className="text-sm text-neutral-text-secondary">
            Pre-built components and utilities to accelerate your development workflow.
          </p>
        </div>
        <div className="p-6 bg-neutral-bg-surface rounded-xl border border-neutral-border">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-2xl mb-4">
            🎨
          </div>
          <h4 className="font-semibold text-neutral-text mb-2">Customizable</h4>
          <p className="text-sm text-neutral-text-secondary">
            Easily customize components with Tailwind CSS utility classes.
          </p>
        </div>
        <div className="p-6 bg-neutral-bg-surface rounded-xl border border-neutral-border">
          <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-2xl mb-4">
            ♿
          </div>
          <h4 className="font-semibold text-neutral-text mb-2">Accessible</h4>
          <p className="text-sm text-neutral-text-secondary">
            Built with accessibility in mind, following WCAG guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
