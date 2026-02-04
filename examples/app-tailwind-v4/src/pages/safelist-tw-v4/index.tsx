import { PageLayout } from '../../components/common/page-layout';
import { PageHeader } from '../../components/common/page-header';
import { ExampleSection } from '../../components/common/example-section';
import { generateButtonSafelist } from '@damarkuncoro/ui-library';
import { generateInputSafelist } from '@damarkuncoro/ui-library';
import { generateShapeSafelist } from '@damarkuncoro/ui-library';
import { generateTextSafelist } from '@damarkuncoro/ui-library';

interface SafelistGroup {
  name: string;
  description: string;
  classes: string[];
}

export function SafelistPage() {
  const safelistGroups: SafelistGroup[] = [
    {
      name: 'Button Component',
      description: 'Safelist classes for the Button component including variants, sizes, states, and child elements.',
      classes: generateButtonSafelist(),
    },
    {
      name: 'Input Component',
      description: 'Safelist classes for the Input component including variants, sizes, states, and icon positioning.',
      classes: generateInputSafelist(),
    },
    {
      name: 'Shape Component',
      description: 'Safelist classes for the Shape component including variants, sizes, and aspect ratios.',
      classes: generateShapeSafelist(),
    },
    {
      name: 'Text Component',
      description: 'Safelist classes for the Text component including variants, alignments, and utilities.',
      classes: generateTextSafelist(),
    },
  ];

  const totalClasses = safelistGroups.reduce((sum, group) => sum + group.classes.length, 0);

  return (
    <PageLayout>
      <PageHeader 
        title="Tailwind CSS v4 Safelist Checker" 
        description="View all safelisted Tailwind CSS classes generated from component contracts."
      />

      <div className="space-y-8">
        {/* Summary Section */}
        <ExampleSection 
          title="Summary" 
          description="Overview of safelisted classes across all components."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {safelistGroups.map((group) => (
              <div key={group.name} className="bg-neutral-bg p-4 rounded-lg border border-neutral-border">
                <h3 className="font-bold text-primary-main mb-2">{group.name}</h3>
                <p className="text-3xl font-bold text-neutral-text">{group.classes.length}</p>
                <p className="text-sm text-neutral-text-secondary">classes</p>
              </div>
            ))}
            <div className="bg-primary-main p-4 rounded-lg">
              <h3 className="font-bold text-primary-contrast mb-2">Total</h3>
              <p className="text-3xl font-bold text-primary-contrast">{totalClasses}</p>
              <p className="text-sm text-primary-contrast opacity-80">classes</p>
            </div>
          </div>
        </ExampleSection>

        {/* Detailed Safelist Sections */}
        {safelistGroups.map((group) => (
          <ExampleSection 
            key={group.name}
            title={group.name} 
            description={group.description}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-text-secondary">
                  Total: {group.classes.length} classes
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(group.classes.join('\n'));
                    alert('Copied to clipboard!');
                  }}
                  className="px-3 py-1 text-sm bg-primary-main text-primary-contrast rounded hover:bg-primary-hover transition-colors"
                >
                  Copy All
                </button>
              </div>
              <div className="bg-neutral-bg p-4 rounded-lg border border-neutral-border max-h-96 overflow-y-auto">
                <pre className="text-sm text-neutral-text whitespace-pre-wrap break-all font-mono">
                  {group.classes.join('\n')}
                </pre>
              </div>
            </div>
          </ExampleSection>
        ))}

        {/* All Classes Combined */}
        <ExampleSection 
          title="All Safelist Classes Combined" 
          description="Complete list of all safelisted classes ready for tailwind.config.js"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-text-secondary">
                Total: {totalClasses} classes
              </span>
              <button
                onClick={() => {
                  const allClasses = safelistGroups.flatMap(g => g.classes);
                  const config = `// Tailwind CSS v4 Safelist Configuration
// Generated from component contracts

export default {
  safelist: [
${allClasses.map(c => `    '${c}',`).join('\n')}
  ],
};`;
                  navigator.clipboard.writeText(config);
                  alert('Configuration copied to clipboard!');
                }}
                className="px-3 py-1 text-sm bg-primary-main text-primary-contrast rounded hover:bg-primary-hover transition-colors"
              >
                Copy Configuration
              </button>
            </div>
            <div className="bg-neutral-bg p-4 rounded-lg border border-neutral-border max-h-96 overflow-y-auto">
              <pre className="text-sm text-neutral-text whitespace-pre-wrap break-all font-mono">
{`// Tailwind CSS v4 Safelist Configuration
// Generated from component contracts

export default {
  safelist: [
${safelistGroups.flatMap(g => g.classes).map(c => `    '${c}',`).join('\n')}
  ],
};`}
              </pre>
            </div>
          </div>
        </ExampleSection>

        {/* Usage Instructions */}
        <ExampleSection 
          title="Usage Instructions" 
          description="How to use these safelist classes in your Tailwind CSS v4 configuration."
        >
          <div className="space-y-4">
            <div className="bg-neutral-bg p-4 rounded-lg border border-neutral-border">
              <h3 className="font-bold text-neutral-text mb-2">Step 1: Copy the Configuration</h3>
              <p className="text-sm text-neutral-text-secondary mb-4">
                Click the "Copy Configuration" button above to copy the complete safelist configuration.
              </p>
              
              <h3 className="font-bold text-neutral-text mb-2">Step 2: Add to tailwind.config.js</h3>
              <p className="text-sm text-neutral-text-secondary mb-4">
                Paste the configuration into your Tailwind CSS v4 configuration file.
              </p>
              
              <h3 className="font-bold text-neutral-text mb-2">Step 3: Build Your Project</h3>
              <p className="text-sm text-neutral-text-secondary">
                Run your build command to generate the CSS with all safelisted classes included.
              </p>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-2">⚠️ Important Notes</h3>
              <ul className="text-sm text-yellow-700 space-y-1 list-disc list-inside">
                <li>Safelist classes are generated from component contracts and design tokens</li>
                <li>These classes ensure that dynamic/arbitrary Tailwind classes are not purged during build</li>
                <li>Update the safelist whenever you modify component contracts or design tokens</li>
                <li>Tailwind CSS v4 uses a different configuration format than v3</li>
              </ul>
            </div>
          </div>
        </ExampleSection>
      </div>
    </PageLayout>
  );
}