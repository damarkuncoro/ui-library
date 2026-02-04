import { Button, Input, useTheme } from '@damarkuncoro/ui-library'
import { Link } from 'react-router-dom'

export function Home() {
  const { mode, toggleMode } = useTheme()
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">UI Library Demo</h1>
          <p className="text-gray-500">
            Testing @damarkuncoro/ui-library components
          </p>
        </div>

        <div className="flex justify-end">
          <button onClick={toggleMode} className="text-sm px-3 py-1 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-100">
            Toggle Theme ({mode})
          </button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Example Input</label>
            <Input 
              placeholder="Type something..." 
              variant="outline"
              className="w-full"
            />
          </div>

          <div className="flex gap-3 justify-center pt-4">

            <Button variant="primary">
              Primary Button
            </Button>
            
            <Button variant="outline">
              Secondary
            </Button>
          </div>
          
          <div className="flex justify-center pt-2 gap-4">
            <Link to="/palette-colors" className="text-sm text-blue-600 hover:text-blue-800 underline">
              View Color Palette
            </Link>
            <Link to="/components/button" className="text-sm text-blue-600 hover:text-blue-800 underline">
              View Button Examples
            </Link>
            <Link to="/components/input" className="text-sm text-blue-600 hover:text-blue-800 underline">
              View Input Examples
            </Link>
            <Link to="/components/stack" className="text-sm text-blue-600 hover:text-blue-800 underline">
              View Stack Examples
            </Link>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
          Powered by Vite + React + Tailwind v3
        </div>
      </div>
    </div>
  )
}
