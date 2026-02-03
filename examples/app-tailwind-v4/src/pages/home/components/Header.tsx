import { useTheme } from '@damarkuncoro/ui-library';

export function Header() {
  const { mode, toggleMode } = useTheme();

  return (
    <header className="border-b border-neutral-border bg-neutral-bg-surface/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-primary-main to-primary-hover rounded-lg flex items-center justify-center text-white font-bold text-lg">
            UI
          </div>
          <div>
            <h1 className="text-lg font-bold text-neutral-text">UI Library</h1>
            <p className="text-xs text-neutral-text-secondary">Tailwind v4 Demo</p>
          </div>
        </div>
        <button
          onClick={toggleMode}
          className="px-4 py-2 text-sm font-medium border border-neutral-border rounded-lg text-neutral-text hover:bg-neutral-border transition-colors"
        >
          {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </header>
  );
}
