const ColorSwatch = ({ name, colorClass, textClass = "text-neutral-text" }: { name: string, colorClass: string, textClass?: string }) => (
  <div className="flex flex-col gap-2">
    <div className={`h-20 w-full rounded-md shadow-sm flex items-center justify-center border border-neutral-border ${colorClass}`}>
      <span className={`text-xs font-mono ${textClass}`}>{colorClass.replace('bg-', '')}</span>
    </div>
    <span className="text-sm font-medium text-neutral-text">{name}</span>
  </div>
);

const ColorSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-bold text-neutral-text border-b border-neutral-border pb-2">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {children}
    </div>
  </div>
);

export function PaletteColors() {
  return (
    <div className="min-h-screen bg-neutral-bg p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary-main">Design System Palette</h1>
        </div>

        <div className="bg-neutral-bg-surface p-6 rounded-lg shadow-sm space-y-8 border border-neutral-border">
          
          <ColorSection title="Primary Colors">
            <ColorSwatch name="Primary Main" colorClass="bg-[var(--color-primary-main)]" textClass="text-primary-contrastText" />
            <ColorSwatch name="Primary Hover" colorClass="bg-[var(--color-primary-hover)]" textClass="text-primary-contrastText" />
            <ColorSwatch name="Primary Focus" colorClass="bg-[var(--color-primary-focus)]" textClass="text-white" />
          </ColorSection>

          <ColorSection title="Secondary Colors">
            <ColorSwatch name="Secondary Main" colorClass="bg-[var(--color-secondary-main)]" textClass="text-secondary-contrastText" />
            <ColorSwatch name="Secondary Hover" colorClass="bg-[var(--color-secondary-hover)]" textClass="text-secondary-contrastText" />
            <ColorSwatch name="Secondary Focus" colorClass="bg-[var(--color-secondary-focus)]" textClass="text-white" />
          </ColorSection>

          <ColorSection title="Danger Colors">
            <ColorSwatch name="Danger Main" colorClass="bg-[var(--color-danger-main)]" textClass="text-danger-contrastText" />
            <ColorSwatch name="Danger Hover" colorClass="bg-[var(--color-danger-hover)]" textClass="text-danger-contrastText" />
            <ColorSwatch name="Danger Focus" colorClass="bg-[var(--color-danger-focus)]" textClass="text-white" />
          </ColorSection>

          <ColorSection title="Neutral Colors">
            <ColorSwatch name="Background" colorClass="bg-[var(--color-neutral-bg)]" />
            <ColorSwatch name="Surface" colorClass="bg-[var(--color-neutral-bg-surface)]" />
            <ColorSwatch name="Border" colorClass="bg-[var(--color-neutral-border)]" />
            <ColorSwatch name="Text" colorClass="bg-[var(--color-neutral-text)]" textClass="text-white" />
            <ColorSwatch name="Text Secondary" colorClass="bg-[var(--color-neutral-text-secondary)]" textClass="text-white" />
          </ColorSection>
        </div>
      </div>
    </div>
  );
}
