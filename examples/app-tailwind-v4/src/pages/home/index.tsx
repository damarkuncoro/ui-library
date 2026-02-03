import { Button, Input, useTheme } from '@damarkuncoro/ui-library'
import { Link } from 'react-router-dom'

export function Home() {
  const { mode, toggleMode } = useTheme()
  
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
        { name: 'Typography', path: '/tailwind-v4/Typography', icon: '🔤' },
        { name: 'Spacing', path: '/tailwind-v4/Spacing', icon: '📏' },
        { name: 'Colors', path: '/palette-colors', icon: '🎨' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-bg via-neutral-bg-surface to-neutral-bg">
      {/* Header */}
      <header className="border-b border-neutral-border bg-neutral-bg-surface/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-main to-primary-hover rounded-lg flex items-center justify-center text-white font-bold text-lg">
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

      {/* Hero Section */}
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

      {/* Quick Demo */}
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

      {/* Navigation Sections */}
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

      {/* Features */}
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

      {/* Footer */}
      <footer className="border-t border-neutral-border bg-neutral-bg-surface mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-main to-primary-hover rounded-lg flex items-center justify-center text-white font-bold text-sm">
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
    </div>
  )
}
