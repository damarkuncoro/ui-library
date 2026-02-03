# @damarkuncoro/ui-library

A strict Meta-Architecture compliant UI library focusing on Separation of Concerns, Zero Hardcoding, and Contract-Driven Development.

## Features

- **Meta Architecture**: Strict separation between Logic (Base) and Visuals (Skin).
- **Contract-Driven**: All component APIs and Visual Styles are defined by rigid Contracts.
- **Zero Hardcoding**: Every visual value (color, spacing, size) is derived from Design Tokens or Contracts.
- **Multi-Skin Support**: Comes with Tailwind CSS skin by default, but supports framework-agnostic implementations.
- **TypeScript First**: Built with strict type safety and `as const` assertions.

## Installation

```bash
pnpm add @damarkuncoro/ui-library
```

## Setup

Wrap your application with the `ThemeProvider` to inject the design tokens (CSS Variables).

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

## Usage

### Button

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
```

### Input

```tsx
import { Input } from '@damarkuncoro/ui-library';

<Input 
  placeholder="Enter your name" 
  variant="filled" 
  onChange={(e) => console.log(e.target.value)} 
/>
```

## Customization

### 1. Theming (Easy)

You can override the default design tokens (colors, etc.) by passing a `themeOverrides` prop to `ThemeProvider`.

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

If you need complete control over the visual implementation (e.g., using a different CSS framework like Emotion or Styled Components), you can build your own **Skin** on top of our **Base** components.

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

// 1. Read values from the Contract (Single Source of Truth)
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
