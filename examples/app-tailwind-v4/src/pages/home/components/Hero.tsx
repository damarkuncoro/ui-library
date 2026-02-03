import { Button } from '@damarkuncoro/ui-library';

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary-main/10 text-primary-main rounded-full">
        v1.0.0 • Tailwind v4
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-neutral-text mb-4">
        Build Beautiful UIs Faster
      </h2>
      <p className="text-lg text-neutral-text-secondary max-w-2xl mx-auto mb-8">
        A comprehensive UI library built with React and Tailwind CSS v4.
        Explore components, utilities, and design patterns for modern web applications.
      </p>
      <div className="flex gap-4 justify-center">
        <Button variant="primary" size="lg">
          Get Started
        </Button>
        <Button variant="outline" size="lg">
          View Documentation
        </Button>
      </div>
    </section>
  );
}
