import { Link } from 'react-router-dom';

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
          <Link to="/" className="px-4 py-2 bg-neutral-bg-surface border border-neutral-border rounded-md hover:bg-neutral-border transition-colors">
            Back to Home
          </Link>
        </div>

        <div className="bg-neutral-bg-surface p-6 rounded-lg shadow-sm space-y-8">
          
          <ColorSection title="Primary Colors">
            <ColorSwatch name="Primary Main" colorClass="bg-primary-main" textClass="text-primary-contrastText" />
            <ColorSwatch name="Primary Hover" colorClass="bg-primary-hover" textClass="text-primary-contrastText" />
            <ColorSwatch name="Primary Focus" colorClass="bg-primary-focus" textClass="text-white" />
          </ColorSection>

          <ColorSection title="Secondary Colors">
            <ColorSwatch name="Secondary Main" colorClass="bg-secondary-main" textClass="text-secondary-contrastText" />
            <ColorSwatch name="Secondary Hover" colorClass="bg-secondary-hover" textClass="text-secondary-contrastText" />
            <ColorSwatch name="Secondary Focus" colorClass="bg-secondary-focus" textClass="text-white" />
          </ColorSection>

          <ColorSection title="Status Colors">
            <ColorSwatch name="Danger Main" colorClass="bg-danger-main" textClass="text-danger-contrastText" />
            <ColorSwatch name="Danger Hover" colorClass="bg-danger-hover" textClass="text-danger-contrastText" />
            <ColorSwatch name="Success Main" colorClass="bg-success-main" textClass="text-success-contrastText" />
            <ColorSwatch name="Warning Main" colorClass="bg-warning-main" textClass="text-warning-contrastText" />
          </ColorSection>

          <ColorSection title="Neutral Colors">
            <ColorSwatch name="Background" colorClass="bg-neutral-bg" />
            <ColorSwatch name="Surface" colorClass="bg-neutral-bg-surface" />
            <ColorSwatch name="Border" colorClass="bg-neutral-border" />
            <ColorSwatch name="Text" colorClass="bg-neutral-text" textClass="text-white" />
            <ColorSwatch name="Text Secondary" colorClass="bg-neutral-textSecondary" textClass="text-white" />
          </ColorSection>

        </div>
      </div>
    </div>
  );
}
