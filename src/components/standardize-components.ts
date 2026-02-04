/**
 * Component Standardization Script
 * 
 * This script helps standardize all components in the UI Library
 * according to the COMPONENT_STRUCTURE_STANDARD.md document.
 */

import * as fs from 'fs';
import * as path from 'path';

// ============================================================================
// CONFIGURATION
// ============================================================================

const COMPONENTS_DIR = path.join(__dirname);
const COMPONENTS = ['button', 'input', 'shape', 'text'];

// ============================================================================
// FILE TEMPLATES
// ============================================================================

const README_TEMPLATE = (componentName: string, description: string) => `# ${capitalize(componentName)} Component

${description}

## Architecture

The ${componentName} component follows a three-layer architecture:

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    ${capitalize(componentName)} Contract                       │
│  (Single Source of Truth for Types & Variants)          │
└─────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                     ${capitalize(componentName)} Base                          │
│  (DOM Structure, Accessibility, Logic)                  │
└─────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                      ${capitalize(componentName)} Skins                         │
│  (Visual Styling - Tailwind, Native, etc.)               │
└─────────────────────────────────────────────────────────┘
\`\`\`

## Features

- ✅ **Contract-Driven Design**: Single source of truth for types and variants
- ✅ **Framework Agnostic**: Works with any styling approach
- ✅ **Accessible**: Full ARIA support and keyboard navigation
- ✅ **Type Safe**: Automatic type inference from contracts
- ✅ **Consistent**: Skin contract ensures visual consistency
- ✅ **Testable**: Comprehensive test coverage

## Installation

\`\`\`bash
npm install @damarkuncoro/ui-library
\`\`\`

## Usage

### Basic Usage

\`\`\`tsx
import { ${capitalize(componentName)}Tailwind } from '@damarkuncoro/ui-library';

function App() {
  return <${capitalize(componentName)}Tailwind>Example</${capitalize(componentName)}Tailwind>;
}
\`\`\`

## API Reference

### ${capitalize(componentName)}Contract

Extends HTML attributes with the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| TODO | TODO | TODO | TODO |

## Accessibility

The ${componentName} component follows WCAG 2.1 AA guidelines:

- ✅ Keyboard navigation
- ✅ ARIA attributes
- ✅ Focus management
- ✅ Screen reader support

## Testing

Run the test suite:

\`\`\`bash
npm test
\`\`\`

## Contributing

When contributing to the ${componentName} component:

1. Update the contract definitions first
2. Update the skin implementations to match
3. Add tests for new features
4. Ensure accessibility requirements are met
5. Update this README if needed

## License

MIT
`;

const CHANGELOG_TEMPLATE = (componentName: string) => `# Changelog

All notable changes to the ${componentName} component will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial implementation of ${componentName} component
- Contract-driven design with type inference
- Tailwind CSS skin
- Native CSS skin
- Comprehensive test coverage

### Changed
- N/A

### Deprecated
- N/A

### Removed
- N/A

### Fixed
- N/A

### Security
- N/A
`;

const CONTRIBUTING_TEMPLATE = (componentName: string) => `# Contributing to ${capitalize(componentName)} Component

Thank you for your interest in contributing to the ${componentName} component!

## Getting Started

1. Fork the repository
2. Create your feature branch: \`git checkout -b feature/${componentName}-amazing-feature\`
3. Commit your changes: \`git commit -m 'feat: add amazing feature'\`
4. Push to the branch: \`git push origin feature/${componentName}-amazing-feature\`
5. Open a Pull Request

## Development Guidelines

### Code Style
- Follow the existing code style
- Use TypeScript for type safety
- Add JSDoc comments for public APIs
- Write meaningful commit messages

### Testing
- Write tests for new features
- Ensure all tests pass
- Maintain test coverage above 80%

### Documentation
- Update README.md for user-facing changes
- Update CHANGELOG.md for version changes
- Add inline comments for complex logic

## Component Structure

The ${componentName} component follows the standard structure:

\`\`\`
${componentName}/
├── index.ts
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── SUMMARY.md
├── __tests__/
├── base/
├── contracts/
├── examples/
├── skins/
└── meta/ (optional)
\`\`\`

## Pull Request Process

1. Update the README and CHANGELOG
2. Add tests for new functionality
3. Ensure all tests pass
4. Update documentation
5. Request review from maintainers

## Questions?

Feel free to open an issue for questions or suggestions.
`;

const SUMMARY_TEMPLATE = (componentName: string) => `# ${capitalize(componentName)} Component Summary

## Overview
A ${componentName} component following the Meta-Architecture pattern with contract-driven design.

## Key Features
- Contract-driven design for type safety
- Multiple skin implementations (Tailwind, Native)
- Full accessibility support
- Comprehensive test coverage

## Files
- \`index.ts\` - Main exports
- \`base/${componentName}-base.tsx\` - Base UI implementation
- \`contracts/${componentName}-contract.ts\` - Component contract
- \`contracts/${componentName}-skin-contract.ts\` - Skin contract
- \`skins/${componentName}-skin-tailwind.tsx\` - Tailwind CSS skin
- \`skins/${componentName}-skin-native.tsx\` - Native CSS skin
- \`examples/${componentName}-examples.tsx\` - Usage examples

## Usage
\`\`\`tsx
import { ${capitalize(componentName)}Tailwind } from '@damarkuncoro/ui-library';

<${capitalize(componentName)}Tailwind>Example</${capitalize(componentName)}Tailwind>
\`\`\`

## Status
✅ Production Ready
`;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function ensureDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function writeFile(filePath: string, content: string): void {
  const dir = path.dirname(filePath);
  ensureDirectory(dir);
  
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Created: ${filePath}`);
  } else {
    console.log(`⏭️  Skipped (exists): ${filePath}`);
  }
}

// ============================================================================
// STANDARDIZATION FUNCTIONS
// ============================================================================

function standardizeComponent(componentName: string): void {
  const componentDir = path.join(COMPONENTS_DIR, componentName);
  
  console.log(`\n🔧 Standardizing ${componentName} component...`);
  
  // Create standard directories
  const directories = [
    path.join(componentDir, '__tests__'),
    path.join(componentDir, 'base'),
    path.join(componentDir, 'contracts'),
    path.join(componentDir, 'examples'),
    path.join(componentDir, 'skins'),
    path.join(componentDir, 'meta'),
  ];
  
  directories.forEach(dir => ensureDirectory(dir));
  
  // Create documentation files
  const description = getDescription(componentName);
  
  writeFile(
    path.join(componentDir, 'README.md'),
    README_TEMPLATE(componentName, description)
  );
  
  writeFile(
    path.join(componentDir, 'CHANGELOG.md'),
    CHANGELOG_TEMPLATE(componentName)
  );
  
  writeFile(
    path.join(componentDir, 'CONTRIBUTING.md'),
    CONTRIBUTING_TEMPLATE(componentName)
  );
  
  writeFile(
    path.join(componentDir, 'SUMMARY.md'),
    SUMMARY_TEMPLATE(componentName)
  );
  
  console.log(`✅ ${componentName} component standardized!`);
}

function getDescription(componentName: string): string {
  const descriptions: Record<string, string> = {
    button: 'A highly customizable, accessible button component with support for multiple variants, sizes, and states.',
    input: 'A text input component with support for icons, variants, and validation states.',
    shape: 'A shape component for creating geometric shapes with various border radius and aspect ratio options.',
    text: 'A text component for displaying text with various typography styles and alignments.',
  };
  
  return descriptions[componentName] || `A ${componentName} component for the UI Library.`;
}

function checkComponentStructure(componentName: string): void {
  const componentDir = path.join(COMPONENTS_DIR, componentName);
  
  console.log(`\n📋 Checking ${componentName} component structure...`);
  
  const requiredFiles = [
    'index.ts',
    'README.md',
    'CHANGELOG.md',
    'CONTRIBUTING.md',
    'SUMMARY.md',
  ];
  
  const requiredDirs = [
    '__tests__',
    'base',
    'contracts',
    'examples',
    'skins',
  ];
  
  console.log('Required Files:');
  requiredFiles.forEach(file => {
    const filePath = path.join(componentDir, file);
    const exists = fs.existsSync(filePath);
    console.log(`  ${exists ? '✅' : '❌'} ${file}`);
  });
  
  console.log('\nRequired Directories:');
  requiredDirs.forEach(dir => {
    const dirPath = path.join(componentDir, dir);
    const exists = fs.existsSync(dirPath);
    console.log(`  ${exists ? '✅' : '❌'} ${dir}/`);
  });
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

function main(): void {
  console.log('='.repeat(80));
  console.log('COMPONENT STANDARDIZATION TOOL');
  console.log('='.repeat(80));
  
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'check') {
    console.log('\n🔍 Checking component structures...\n');
    COMPONENTS.forEach(checkComponentStructure);
  } else if (command === 'standardize') {
    console.log('\n🔧 Standardizing components...\n');
    COMPONENTS.forEach(standardizeComponent);
  } else if (command === 'all') {
    console.log('\n🔧 Standardizing all components...\n');
    COMPONENTS.forEach(standardizeComponent);
    console.log('\n🔍 Checking component structures...\n');
    COMPONENTS.forEach(checkComponentStructure);
  } else {
    console.log('\nUsage:');
    console.log('  node standardize-components.ts check       - Check component structures');
    console.log('  node standardize-components.ts standardize - Standardize components');
    console.log('  node standardize-components.ts all         - Check and standardize');
  }
  
  console.log('\n' + '='.repeat(80));
  console.log('DONE!');
  console.log('='.repeat(80));
}

// Run if executed directly
if (require.main === module) {
  main();
}

export { standardizeComponent, checkComponentStructure };