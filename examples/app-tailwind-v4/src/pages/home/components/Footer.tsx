export function Footer() {
  return (
    <footer className="border-t border-neutral-border bg-neutral-bg-surface mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-primary-main to-primary-hover rounded-lg flex items-center justify-center text-white font-bold text-sm">
              UI
            </div>
            <span className="text-sm text-neutral-text-secondary">
              @damarkuncoro/ui-library
            </span>
          </div>
          <p className="text-xs text-neutral-text-secondary">
            Powered by Vite + React + Tailwind v4
          </p>
        </div>
      </div>
    </footer>
  );
}
