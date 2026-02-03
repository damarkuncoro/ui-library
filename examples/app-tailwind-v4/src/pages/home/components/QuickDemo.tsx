import { Button, Input } from '@damarkuncoro/ui-library';

export function QuickDemo() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="bg-neutral-bg-surface rounded-2xl border border-neutral-border p-8 shadow-lg">
        <h3 className="text-xl font-bold text-neutral-text mb-6 text-center">Quick Demo</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-text">Input Component</label>
              <Input
                placeholder="Type something..."
                variant="outline"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-text">Button Variants</label>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-text">Button Sizes</label>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-text">Button States</label>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Default</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
