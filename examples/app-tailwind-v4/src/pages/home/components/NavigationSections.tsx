import React from 'react';

export function NavigationSections() {
  const sections = [
    {
      title: 'Layout',
      description: 'Aspect ratio, columns, breaks, box decoration, sizing, display, float, isolation, object-fit, overflow, position, visibility, z-index',
      path: '/tailwind-v4/Layout',
      color: 'blue',
    },
    {
      title: 'Flexbox',
      description: 'Direction, wrap, justify, align, grow, shrink, basis, gap, order',
      path: '/tailwind-v4/Flexbox',
      color: 'green',
    },
    {
      title: 'Grid',
      description: 'Template columns, template rows, gap, column span, row span, auto flow, auto columns, auto rows',
      path: '/tailwind-v4/Grid',
      color: 'purple',
    },
    {
      title: 'Sizing',
      description: 'Width, height, max-width, max-height, min-width, min-height',
      path: '/tailwind-v4/Sizing',
      color: 'orange',
    },
    {
      title: 'Spacing',
      description: 'Padding, margin, space between',
      path: '/tailwind-v4/Spacing',
      color: 'red',
    },
    {
      title: 'Typography',
      description: 'Font family, size, weight, line height, align, decoration, transform, overflow',
      path: '/tailwind-v4/Typography',
      color: 'pink',
    },
    {
      title: 'Borders',
      description: 'Width, color, style, radius',
      path: '/tailwind-v4/Borders',
      color: 'indigo',
    },
    {
      title: 'Backgrounds',
      description: 'Color, gradient, image',
      path: '/tailwind-v4/Backgrounds',
      color: 'cyan',
    },
    {
      title: 'Effects',
      description: 'Box shadow, opacity, mix blend mode',
      path: '/tailwind-v4/Effects',
      color: 'teal',
    },
    {
      title: 'Filters',
      description: 'Blur, brightness, contrast, grayscale, hue rotate, saturate, sepia, invert, drop shadow',
      path: '/tailwind-v4/Filters',
      color: 'violet',
    },
    {
      title: 'Tables',
      description: 'Layout, border collapse, caption side',
      path: '/tailwind-v4/Tables',
      color: 'emerald',
    },
    {
      title: 'Transitions',
      description: 'Property, duration, timing function, delay',
      path: '/tailwind-v4/Transitions',
      color: 'amber',
    },
    {
      title: 'Transforms',
      description: 'Scale, rotate, translate, skew, transform origin',
      path: '/tailwind-v4/Transforms',
      color: 'rose',
    },
    {
      title: 'Animation',
      description: 'Spin, ping, pulse, bounce',
      path: '/tailwind-v4/Animation',
      color: 'fuchsia',
    },
    {
      title: 'Accessibility',
      description: 'Screen reader only, focus visible, focus within, focus ring, not screen reader only',
      path: '/tailwind-v4/Accessibility',
      color: 'slate',
    },
    {
      title: 'Interactivity',
      description: 'Hover, focus, active, disabled, group, peer',
      path: '/tailwind-v4/Interactivity',
      color: 'zinc',
    },
    {
      title: 'SVG',
      description: 'Fill, stroke, stroke width',
      path: '/tailwind-v4/SVG',
      color: 'sky',
    },
    {
      title: 'Safelist Checker',
      description: 'View all safelisted Tailwind CSS classes generated from component contracts',
      path: '/safelist-tw-v4',
      color: 'lime',
    },
  ];

  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    green: 'bg-green-500 hover:bg-green-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
    orange: 'bg-orange-500 hover:bg-orange-600',
    red: 'bg-red-500 hover:bg-red-600',
    pink: 'bg-pink-500 hover:bg-pink-600',
    indigo: 'bg-indigo-500 hover:bg-indigo-600',
    cyan: 'bg-cyan-500 hover:bg-cyan-600',
    teal: 'bg-teal-500 hover:bg-teal-600',
    violet: 'bg-violet-500 hover:bg-violet-600',
    emerald: 'bg-emerald-500 hover:bg-emerald-600',
    amber: 'bg-amber-500 hover:bg-amber-600',
    rose: 'bg-rose-500 hover:bg-rose-600',
    fuchsia: 'bg-fuchsia-500 hover:bg-fuchsia-600',
    slate: 'bg-slate-500 hover:bg-slate-600',
    zinc: 'bg-zinc-500 hover:bg-zinc-600',
    sky: 'bg-sky-500 hover:bg-sky-600',
    lime: 'bg-lime-500 hover:bg-lime-600',
  };

  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-text mb-4 text-center">
          Explore Tailwind v4 Utilities
        </h2>
        <p className="text-neutral-text-secondary mb-12 text-center max-w-2xl mx-auto">
          Comprehensive documentation for all Tailwind CSS v4 utility classes. Click on any section to learn more.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <a
              key={section.path}
              href={section.path}
              className="group block p-6 bg-white border border-neutral-border rounded-lg hover:shadow-xl hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-neutral-text group-hover:text-blue-500 transition-colors">
                  {section.title}
                </h3>
                <div className={`w-8 h-8 rounded-full ${colorClasses[section.color]} flex items-center justify-center text-white text-sm font-medium`}>
                  {section.title[0]}
                </div>
              </div>
              <p className="text-sm text-neutral-text-secondary mb-4 line-clamp-2">
                {section.description}
              </p>
              <div className="flex items-center text-blue-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
                <span>Explore</span>
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
