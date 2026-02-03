# @damarkuncoro/ui-library

A strict Meta-Architecture compliant UI library focusing on Separation of Concerns, Zero Hardcoding, and Contract-Driven Development.

## Features

- **Meta Architecture**: Strict separation between Logic (Base) and Visuals (Skin).
- **Contract-Driven**: All component APIs and Visual Styles are defined by rigid Contracts.
- **Zero Hardcoding**: Every visual value (color, spacing, size) is derived from Design Tokens or Contracts.
- **Multi-Skin Support**: Comes with Tailwind CSS skin by default, but supports framework-agnostic implementations.
- **TypeScript First**: Built with strict type safety and `as const` assertions.
- **Tailwind v3 & v4 Support**: Compatible with both Tailwind CSS v3 and v4.

## Installation

```bash
pnpm add @damarkuncoro/ui-library
```

## Setup

### 1. Theme Provider

Wrap your application with `ThemeProvider` to inject design tokens (CSS Variables).

```tsx
import { ThemeProvider } from '@damarkuncoro/ui-library';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### 2. Tailwind Configuration

Configure Tailwind to use the library's preset and CSS variables.

#### For Tailwind v3:

```js
// tailwind.config.js
const { preset, content } = require('@damarkuncoro/ui-library/tailwind/v3');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    ...content(),
  ],
  theme: {
    extend: preset.theme.extend,
  },
  presets: [preset],
};
```

#### For Tailwind v4:

```js
// tailwind.config.js
import { preset } from '@damarkuncoro/ui-library/tailwind/v4';

export default {
  presets: [preset],
};
```

### 3. Import CSS Variables

Import the contract fallback CSS to ensure design tokens are available:

```css
/* index.css */
@import '@damarkuncoro/ui-library/styles/contract-fallback.css';
```

## Usage

### Button

The Button component supports multiple variants, sizes, and states.

```tsx
import { Button } from '@damarkuncoro/ui-library';

// Standard usage (Tailwind Skin)
<Button variant="primary" size="md" onClick={() => console.log('Clicked')}>
  Click Me
</Button>

// With Icons
<Button leftIcon={<span>👈</span>} variant="outline">
  Go Back
</Button>

// Loading State
<Button isLoading variant="primary">
  Processing...
</Button>

// Disabled State
<Button disabled variant="secondary">
  Disabled
</Button>
```

#### Button Variants

- `primary` - Primary action button
- `secondary` - Secondary action button
- `outline` - Outlined button
- `ghost` - Ghost button (no background)
- `danger` - Destructive action button

#### Button Sizes

- `sm` - Small button
- `md` - Medium button (default)
- `lg` - Large button

#### Button Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | - | Button content (required) |
| `variant` | `ButtonVariant` | `'primary'` | Visual style variant |
| `size` | `ButtonSize` | `'md'` | Button size |
| `isLoading` | `boolean` | `false` | Show loading spinner |
| `leftIcon` | `ReactNode` | - | Icon before text |
| `rightIcon` | `ReactNode` | - | Icon after text |
| `disabled` | `boolean` | `false` | Disable button |
| `onClick` | `function` | - | Click handler |

### Input

The Input component supports multiple variants, sizes, icons, and validation states.

```tsx
import { Input } from '@damarkuncoro/ui-library';

// Standard usage
<Input 
  placeholder="Enter your name" 
  variant="outline" 
  onChange={(e) => console.log(e.target.value)} 
/>

// With Icons
<Input 
  placeholder="Search..." 
  leftIcon={<span>🔍</span>}
  variant="filled"
/>

// Invalid State
<Input 
  placeholder="Email" 
  isInvalid={true}
  variant="outline"
/>

// Disabled State
<Input 
  placeholder="Read only" 
  disabled
  variant="flushed"
/>
```

#### Input Variants

- `outline` - Outlined input (default)
- `filled` - Filled background input
- `flushed` - Bottom border only input

#### Input Sizes

- `sm` - Small input
- `md` - Medium input (default)
- `lg` - Large input

#### Input Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| `placeholder` | `string` | - | Placeholder text |
| `variant` | `InputVariant` | `'outline'` | Visual style variant |
| `size` | `InputSize` | `'md'` | Input size |
| `isInvalid` | `boolean` | `false` | Show error state |
| `leftIcon` | `ReactNode` | - | Icon before input |
| `rightIcon` | `ReactNode` | - | Icon after input |
| `disabled` | `boolean` | `false` | Disable input |
| `readOnly` | `boolean` | `false` | Make input read-only |
| `onChange` | `function` | - | Change handler |
| `inputClassName` | `string` | - | Custom class for input element |
| `wrapperStyle` | `CSSProperties` | - | Custom inline styles for wrapper |

### Native Skin

For projects not using Tailwind CSS, use the native skin components:

```tsx
import { ButtonNative, InputNative } from '@damarkuncoro/ui-library';

<ButtonNative variant="primary">Native Button</ButtonNative>
<InputNative placeholder="Native Input" />
```

## Customization

### 1. Theming (Easy)

You can override default design tokens (colors, etc.) by passing a `themeOverrides` prop to `ThemeProvider`.

```tsx
const myBrandTheme = {
  light: {
    '--color-primary-main': '#ff4757', // Change primary color to Red
    '--color-primary-hover': '#ff6b81',
  },
  dark: {
    '--color-primary-main': '#ff6b81',
  }
};

function App() {
  return (
    <ThemeProvider themeOverrides={myBrandTheme}>
      <Button variant="primary">Branded Button</Button>
    </ThemeProvider>
  );
}
```

### 2. Custom Skins (Advanced)

If you need complete control over visual implementation (e.g., using a different CSS framework like Emotion or Styled Components), you can build your own **Skin** on top of our **Base** components.

This library follows a strict dependency rule:
1.  **Contracts**: JSON/TS definitions of Logic (Props) and Visuals (Tokens).
2.  **Base UI**: Functional components (Logic, ARIA, DOM). Depends only on Logic Contracts.
3.  **Skins**: Visual implementations. Depend on Base UI + Visual Contracts.

To create your own skin:

1.  Import `ButtonBase` and `buttonSkinContractDef`.
2.  Create a wrapper that styles `ButtonBase` using values from `buttonSkinContractDef`.
3.  Pass styles via `className` or `style` prop.

```tsx
import { ButtonBase, buttonSkinContractDef } from '@damarkuncoro/ui-library';
import styled from 'styled-components'; // Example

// 1. Read values from Contract (Single Source of Truth)
const { variants } = buttonSkinContractDef;

// 2. Build your Styled Component
const MyStyledButton = styled(ButtonBase)`
  background-color: ${variants.primary.backgroundColor};
  color: ${variants.primary.color};
  /* ... map other contract values ... */
`;

// 3. Use it!
<MyStyledButton variant="primary">Custom Skin</MyStyledButton>
```

## Available Exports

### Components
- `Button` - Tailwind-styled button component
- `ButtonNative` - Native-styled button component
- `Input` - Tailwind-styled input component
- `InputNative` - Native-styled input component

### Theme
- `ThemeProvider` - Theme provider component
- `useTheme` - Theme hook

### Contracts
- `buttonContractDef` - Button logic contract
- `buttonSkinContractDef` - Button visual contract
- `inputContractDef` - Input logic contract
- `inputSkinContractDef` - Input visual contract

### Base Components
- `ButtonBase` - Button logic component
- `InputBase` - Input logic component

### Example Components
- `ButtonVariantExamples` - Button variant examples
- `ButtonSizeExamples` - Button size examples
- `ButtonIconExamples` - Button icon examples
- `ButtonStateExamples` - Button state examples
- `ButtonCombinedExamples` - Button combined examples
- `ButtonNativeSkinExamples` - Button native skin examples
- `ButtonAccessibilityExamples` - Button accessibility examples
- `InputVariantExamples` - Input variant examples
- `InputSizeExamples` - Input size examples
- `InputIconExamples` - Input icon examples
- `InputStateExamples` - Input state examples
- `InputCombinedExamples` - Input combined examples

## License

MIT

## Author

Damar Kuncoro
