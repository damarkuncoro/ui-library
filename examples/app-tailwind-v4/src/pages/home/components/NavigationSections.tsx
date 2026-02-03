import { Link } from 'react-router-dom';

export function NavigationSections() {
  const sections = [
    {
      title: 'Components',
      description: 'Explore our collection of reusable UI components',
      links: [
        { name: 'Button', path: '/components/button', icon: '🔘' },
        { name: 'Input', path: '/components/input', icon: '📝' },
      ]
    },
    {
      title: 'Tailwind v4',
      description: 'Comprehensive examples of Tailwind v4 utilities',
      links: [
        { name: 'Layout', path: '/tailwind-v4/Layout', icon: '📐' },
        { name: 'Flexbox', path: '/tailwind-v4/Flexbox', icon: '📐' },
        { name: 'Grid', path: '/tailwind-v4/Grid', icon: '📐' },
        { name: 'Sizing', path: '/tailwind-v4/Sizing', icon: '📏' },
        { name: 'Spacing', path: '/tailwind-v4/Spacing', icon: '📏' },
        { name: 'Typography', path: '/tailwind-v4/Typography', icon: '🔤' },
        { name: 'Borders', path: '/tailwind-v4/Borders', icon: '🔳' },
        { name: 'Colors', path: '/palette-colors', icon: '🎨' },
      ]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {sections.map((section) => (
        <div key={section.title} className="mb-12">
          <h3 className="text-2xl font-bold text-neutral-text mb-2">{section.title}</h3>
          <p className="text-neutral-text-secondary mb-6">{section.description}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {section.links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group block p-6 bg-neutral-bg-surface rounded-xl border border-neutral-border hover:border-primary-main hover:shadow-lg transition-all duration-200"
              >
                <div className="text-3xl mb-3">{link.icon}</div>
                <h4 className="font-semibold text-neutral-text group-hover:text-primary-main transition-colors">
                  {link.name}
                </h4>
                <p className="text-sm text-neutral-text-secondary mt-1">
                  Explore {link.name.toLowerCase()} examples
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
