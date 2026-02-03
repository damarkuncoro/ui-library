import { Button, Input } from '@damarkuncoro/ui-library'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="min-h-screen bg-neutral-bg flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-neutral-bg-surface rounded-xl shadow-lg p-8 space-y-6 border border-neutral-border">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-text mb-2">UI Library Demo (Tailwind v4)</h1>
          <p className="text-neutral-text-secondary">
            Testing @damarkuncoro/ui-library components
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-text">Example Input</label>
            <Input 
              placeholder="Type something..." 
              variant="outline"
              className="w-full"
            />
          </div>

          <div className="flex gap-3 justify-center pt-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="outline">Secondary</Button>
          </div>
          
          <div className="flex justify-center pt-2 gap-4">
            <Link to="/palette-colors" className="text-sm text-primary-main hover:text-primary-hover underline">
              View Color Palette
            </Link>
            <Link to="/components/button" className="text-sm text-primary-main hover:text-primary-hover underline">
              View Button Examples
            </Link>
            <Link to="/components/input" className="text-sm text-primary-main hover:text-primary-hover underline">
              View Input Examples
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-border text-center text-xs text-neutral-text-secondary">
          Powered by Vite + React + Tailwind v4
        </div>
      </div>
    </div>
  )
}
