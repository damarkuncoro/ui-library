# Button Meta-Architecture Builder

A powerful builder utility for creating button components following the Meta-Architecture pattern with contract-driven design.

## Overview

The Button Meta-Architecture Builder provides a fluent API for generating button components that adhere to the established architecture pattern. It ensures consistency across all button implementations by enforcing the contract structure.

## Architecture Pattern

```
┌─────────────────────────────────────────────────────────┐
│                    Button Contract                       │
│  (Single Source of Truth for Types & Variants)          │
└─────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                     Button Base                          │
│  (DOM Structure, Accessibility, Logic)                  │
└─────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                      Button Skins                         │
│  (Visual Styling - Tailwind, Native, etc.)               │
└─────────────────────────────────────────────────────────┘
```

## Features

- ✅ **Fluent API**: Chainable configuration methods
- ✅ **Type-Safe**: Full TypeScript support with automatic type inference
- ✅ **Contract-Driven**: Enforces adherence to button contract
- ✅ **Code Generation**: Generates component, skin, and test templates
- ✅ **Accessibility**: Built-in accessibility features management
- ✅ **Flexible**: Configurable for different use cases

## Installation

The builder is included in the `@damarkuncoro/ui-library` package:

```typescript
import {
  ButtonMetaArchitectureBuilder,
  createButtonBuilder,
  buildButtonStructure,
  generateButtonCode,
  generateButtonSkin,
  generateButtonTests,
} from '@damarkuncoro/ui-library/components/button/button-meta-architecture-builder';
```

## Quick Start

### Basic Usage

```typescript
import { createButtonBuilder } from '@damarkuncoro/ui-library';

// Create a builder with default configuration
const builder = createButtonBuilder();
const structure = builder.build();

console.log(structure.metadata);
console.log(structure.contract);
console.log(structure.skinContract);
```

### Custom Configuration

```typescript
import { ButtonMetaArchitectureBuilder } from '@damarkuncoro/ui-library';

// Create a builder with custom configuration
const builder = new ButtonMetaArchitectureBuilder()
  .withComponentName('MyCustomButton')
  .withClassPrefix('my-btn')
  .withAccessibility(true)
  .withKeyboardNavigation(true)
  .withLoadingState(true)
  .withIcons(true);

const structure = builder.build();
```

### Generating Code Templates

```typescript
import { generateButtonCode, generateButtonSkin, generateButtonTests } from '@damarkuncoro/ui-library';

// Generate component code
const componentCode = generateButtonCode({
  componentName: 'PrimaryButton',
  classPrefix: 'primary-btn',
});

// Generate skin code
const skinCode = generateButtonSkin('Tailwind', {
  componentName: 'PrimaryButton',
  classPrefix: 'primary-btn',
});

// Generate test code
const testCode = generateButtonTests({
  componentName: 'PrimaryButton',
});
```

## API Reference

### ButtonMetaArchitectureBuilder

The main builder class for creating button components.

#### Constructor

```typescript
constructor(config?: ButtonBuilderConfig)
```

#### Configuration Options

```typescript
interface ButtonBuilderConfig {
  componentName?: string;              // Component name for identification
  includeAccessibility?: boolean;     // Whether to include accessibility features
  includeKeyboardNavigation?: boolean; // Whether to include keyboard navigation
  classPrefix?: string;               // Custom class name prefix
  enableLoadingState?: boolean;       // Whether to enable loading state
  enableIcons?: boolean;              // Whether to enable icon support
}
```

#### Methods

##### `withComponentName(name: string): this`

Set the component name.

```typescript
builder.withComponentName('MyButton');
```

##### `withAccessibility(enabled: boolean): this`

Enable or disable accessibility features.

```typescript
builder.withAccessibility(true);
```

##### `withKeyboardNavigation(enabled: boolean): this`

Enable or disable keyboard navigation.

```typescript
builder.withKeyboardNavigation(true);
```

##### `withClassPrefix(prefix: string): this`

Set the class name prefix.

```typescript
builder.withClassPrefix('my-btn');
```

##### `withLoadingState(enabled: boolean): this`

Enable or disable loading state.

```typescript
builder.withLoadingState(true);
```

##### `withIcons(enabled: boolean): this`

Enable or disable icon support.

```typescript
builder.withIcons(true);
```

##### `build(): ButtonComponentStructure`

Build the component structure.

```typescript
const structure = builder.build();
```

##### `generateCodeTemplate(): string`

Generate component code template.

```typescript
const code = builder.generateCodeTemplate();
```

##### `generateSkinTemplate(skinName: string): string`

Generate skin code template.

```typescript
const skinCode = builder.generateSkinTemplate('Tailwind');
```

##### `generateTestTemplate(): string`

Generate test template.

```typescript
const testCode = builder.generateTestTemplate();
```

### Factory Functions

#### `createButtonBuilder(config?: ButtonBuilderConfig): ButtonMetaArchitectureBuilder`

Create a button component builder with default configuration.

```typescript
const builder = createButtonBuilder();
```

#### `buildButtonStructure(config?: ButtonBuilderConfig): ButtonComponentStructure`

Quick factory to build a button component structure.

```typescript
const structure = buildButtonStructure();
```

#### `generateButtonCode(config?: ButtonBuilderConfig): string`

Quick factory to generate component code.

```typescript
const code = generateButtonCode();
```

#### `generateButtonSkin(skinName: string, config?: ButtonBuilderConfig): string`

Quick factory to generate skin code.

```typescript
const skinCode = generateButtonSkin('Tailwind');
```

#### `generateButtonTests(config?: ButtonBuilderConfig): string`

Quick factory to generate test code.

```typescript
const testCode = generateButtonTests();
```

## Output Structure

### ButtonComponentStructure

```typescript
interface ButtonComponentStructure {
  metadata: {
    name: string;
    version: string;
    description: string;
    contractId: string;
  };
  contract: {
    variants: string[];
    sizes: string[];
    props: string[];
  };
  skinContract: {
    variantCount: number;
    sizeCount: number;
    hasLoader: boolean;
    hasIcons: boolean;
  };
  domStructure: {
    root: string;
    children: string[];
    attributes: string[];
  };
  accessibility: {
    ariaAttributes: string[];
    keyboardSupport: string[];
    screenReaderSupport: string[];
  };
  types: {
    contract: string;
    props: string;
  };
}
```

## Examples

### Example 1: Creating a Custom Button Component

```typescript
import { ButtonMetaArchitectureBuilder } from '@damarkuncoro/ui-library';

function createBrandButton() {
  const builder = new ButtonMetaArchitectureBuilder()
    .withComponentName('BrandButton')
    .withClassPrefix('brand-btn')
    .withAccessibility(true)
    .withKeyboardNavigation(true)
    .withLoadingState(true)
    .withIcons(true);
  
  const structure = builder.build();
  const componentCode = builder.generateCodeTemplate();
  const skinCode = builder.generateSkinTemplate('Tailwind');
  const testCode = builder.generateTestTemplate();
  
  return { structure, componentCode, skinCode, testCode };
}

const brandButton = createBrandButton();
```

### Example 2: Minimal Button Without Accessibility

```typescript
import { createButtonBuilder } from '@damarkuncoro/ui-library';

const minimalButton = createButtonBuilder({
  componentName: 'MinimalButton',
  includeAccessibility: false,
  includeKeyboardNavigation: false,
  enableLoadingState: false,
  enableIcons: false,
});

const structure = minimalButton.build();
```

### Example 3: Chaining Configuration

```typescript
import { createButtonBuilder } from '@damarkuncoro/ui-library';

const chainedButton = createButtonBuilder()
  .withComponentName('ChainedButton')
  .withAccessibility(true)
  .withKeyboardNavigation(true)
  .withLoadingState(true)
  .withIcons(true)
  .withClassPrefix('chained');

const structure = chainedButton.build();
```

## Running the Demo

To see the builder in action, run the demo file:

```bash
npx tsx src/components/button/button-meta-architecture-demo.ts
```

## Benefits

### 1. Consistency
Ensures all button components follow the same architecture pattern and contract structure.

### 2. Type Safety
Automatic type inference from contracts eliminates manual type maintenance.

### 3. Productivity
Code generation templates speed up development of new button components.

### 4. Flexibility
Configurable options allow customization for different use cases.

### 5. Accessibility
Built-in accessibility features ensure WCAG compliance.

## Best Practices

1. **Always use the builder** when creating new button components to ensure consistency
2. **Enable accessibility** by default for production components
3. **Use factory functions** for quick, simple use cases
4. **Customize class prefixes** to avoid conflicts in larger projects
5. **Generate tests** alongside components to maintain test coverage

## Integration with Existing Components

The builder works seamlessly with existing button components:

```typescript
import { ButtonMetaArchitectureBuilder } from '@damarkuncoro/ui-library';
import { ButtonContract } from './button-contract';
import { ButtonBase } from './button-base';

// Generate a new component that extends the existing architecture
const builder = new ButtonMetaArchitectureBuilder()
  .withComponentName('ExtendedButton')
  .withAccessibility(true);

const structure = builder.build();
const code = builder.generateCodeTemplate();

// The generated code will use ButtonContract and ButtonBase
```

## Contributing

When contributing to the button component:

1. Use the builder to create new button variants
2. Ensure all generated code follows the established patterns
3. Update the builder if new contract features are added
4. Add examples to the demo file for new features

## License

MIT