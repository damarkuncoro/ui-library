import { Button, ButtonNative, Input, ThemeProvider, useTheme } from './index';

// Component that consumes Theme Context
const DemoContent = () => {
  const { mode, toggleMode } = useTheme();

  return (
    <div className={`min-h-screen p-8 transition-colors duration-300 ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="flex items-center justify-between border-b border-gray-200 pb-6 dark:border-gray-700">
          <div>
            <h1 className="text-3xl font-bold">UI Library Demo</h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Powered by <span className="font-semibold text-primary-main">Global Design Tokens</span> • Current Theme: <span className="font-mono font-bold uppercase">{mode}</span>
            </p>
          </div>
          <Button onClick={toggleMode} variant="outline">
            {mode === 'light' ? '🌙 Switch to Dark' : '☀️ Switch to Light'}
          </Button>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Buttons (Themed)</h2>
          <p className="text-gray-600 dark:text-gray-400">These buttons automatically adapt to the current theme colors.</p>
          
          <div className="space-y-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            {/* Variants */}
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="primary" disabled>Disabled</Button>
              <Button variant="primary" isLoading>Loading</Button>
            </div>

            {/* Sizes */}
            <div className="flex flex-wrap gap-4 items-center border-t border-gray-100 dark:border-gray-700 pt-4">
              <span className="text-sm text-gray-500 w-full sm:w-auto">Sizes:</span>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. Inputs (Themed)</h2>
          <p className="text-gray-600 dark:text-gray-400">Inputs with support for icons and validation states.</p>
          
          <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            {/* Variants */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Default Input" />
              <Input placeholder="Filled Input" variant="filled" />
              <Input placeholder="Flushed Input" variant="flushed" />
              <Input placeholder="Invalid Input" isInvalid />
              <Input placeholder="With Left Icon" leftIcon={<span>🔍</span>} />
              <Input placeholder="With Right Icon" rightIcon={<span>👁️</span>} />
              <Input placeholder="Disabled Input" disabled />
            </div>

            {/* Sizes */}
            <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
              <span className="block mb-4 text-sm text-gray-500">Sizes:</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input placeholder="Small Input" size="sm" />
                <Input placeholder="Medium Input" size="md" />
                <Input placeholder="Large Input" size="lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. Native Components</h2>
          <p className="text-gray-600 dark:text-gray-400">Framework-agnostic components using inline styles.</p>
          <div className="flex flex-wrap gap-4 items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <ButtonNative variant="primary">Native Primary</ButtonNative>
            <ButtonNative variant="outline">Native Outline</ButtonNative>
          </div>
        </section>
      </div>
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider defaultMode="light">
      <DemoContent />
    </ThemeProvider>
  );
}
