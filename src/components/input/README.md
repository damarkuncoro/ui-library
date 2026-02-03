# Input Component

A highly customizable, accessible input component following the Meta Architecture pattern with contract-driven design.

## Architecture

The input component follows a three-layer architecture:

```
┌─────────────────────────────────────────────────────────┐
│                    Input Contract                        │
│  (Single Source of Truth for Types & Variants)          │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                     Input Base                           │
│  (DOM Structure, Accessibility, Logic)                  │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                      Input Skins                         │
│  (Visual Styling - Tailwind, Native, etc.)               │
└─────────────────────────────────────────────────────────┘
```

## Features

- ✅ **Contract-Driven Design**: Single source of truth for types and variants
- ✅ **Framework Agnostic**: Works with any styling approach
- ✅ **Accessible**: Full ARIA support and keyboard navigation
- ✅ **Type Safe**: Automatic type inference from contracts
- ✅ **Consistent**: Skin contract ensures visual consistency
- ✅ **Design Tokens**: Uses global design tokens for theming
- ✅ **Icon Support**: Left and right icon placement

## Installation

```bash
npm install @damarkuncoro/ui-library
```

## Usage

### Basic Usage

```tsx
import { Input } from '@damarkuncoro/ui-library';

function App() {
  return <Input placeholder="Enter your name" />;
}
```

### With Variants

```tsx
<Input variant="outline" placeholder="Outline" />
<Input variant="filled" placeholder="Filled" />
<Input variant="flushed" placeholder="Flushed" />
```

### With Sizes

```tsx
<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />
```

### With Icons

```tsx
import { Icon } from './icon';

<Input leftIcon={<Icon name="search" />} placeholder="Search..." />
<Input rightIcon={<Icon name="calendar" />} placeholder="Select date" />
<Input 
  leftIcon={<Icon name="user" />}
  rightIcon={<Icon name="check" />}
  placeholder="Username"
/>
```

### With States

```tsx
<Input isInvalid placeholder="Invalid input" />
<Input disabled placeholder="Disabled input" />
<Input readOnly placeholder="Read only input" />
```

### Native CSS Skin

```tsx
import { InputNative } from '@damarkuncoro/ui-library';

<InputNative variant="outline" placeholder="Click me" />
```

## API Reference

### InputContract

Extends `React.InputHTMLAttributes<HTMLInputElement>` with the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'outline' \| 'filled' \| 'flushed'` | `'outline'` | Visual variant of the input |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the input |
| `isInvalid` | `boolean` | `false` | Whether the input is invalid |
| `isDisabled` | `boolean` | `false` | Whether the input is disabled |
| `isReadOnly` | `boolean` | `false` | Whether the input is read only |
| `leftIcon` | `ReactNode` | `undefined` | Optional icon to display on the left |
| `rightIcon` | `ReactNode` | `undefined` | Optional icon to display on the right |
| `className` | `string` | `''` | Custom class name for wrapper styling |
| `inputClassName` | `string` | `''` | Custom class name for input element styling |

## Skin Contract

The skin contract defines the visual specifications that all skin implementations must follow:

```typescript
export const inputSkinContractDef = {
  variants: {
    outline: { backgroundColor, borderColor, color, hover, focus, invalid },
    filled: { backgroundColor, borderColor, color, hover, focus, invalid },
    flushed: { backgroundColor, borderBottomColor, color, hover, focus, invalid },
  },
  sizes: {
    sm: { height, padding, fontSize },
    md: { height, padding, fontSize },
    lg: { height, padding, fontSize },
  },
  base: { borderRadius, transition, width, outline },
  disabled: { opacity, cursor, backgroundColor },
  icons: { padding, position, color },
};
```

## Design Tokens

The input component uses global design tokens from [`../theme/design-tokens.ts`](../theme/design-tokens.ts:1):

- **Colors**: Primary, secondary, danger, neutral
- **Spacing**: Consistent spacing scale
- **Typography**: Font sizes and weights
- **Sizing**: Component heights and icon sizes
- **Border Radius**: Consistent corner rounding
- **Transitions**: Smooth state transitions

## Accessibility

The input component follows WCAG 2.1 AA guidelines:

- ✅ Keyboard navigation support
- ✅ ARIA attributes (`aria-invalid`, `aria-disabled`, `aria-readonly`, `aria-hidden`)
- ✅ Focus management
- ✅ Screen reader support
- ✅ Icon accessibility with `aria-hidden`

## Testing

Run the test suite:

```bash
npm test
```

The test suite includes:
- Contract consistency tests
- Skin contract consistency tests
- Integration tests for all components
- Accessibility tests

## Creating Custom Skins

You can create custom skins by following the skin contract:

```tsx
import { forwardRef } from 'react';
import { InputBase, InputBaseProps } from './input-base';
import { inputSkinContractDef } from './input-skin-contract';

export const InputCustom = forwardRef<HTMLInputElement, InputBaseProps>(
  (props, ref) => {
    // Implement your custom styling here
    // Ensure it aligns with inputSkinContractDef
    return <InputBase ref={ref} {...props} />;
  }
);
```

## File Structure

```
src/input/
├── input-base.tsx              # Base UI implementation
├── input-contract.ts           # Component contract (SSOT)
├── input-skin-contract.ts      # Visual contract (SSOT)
├── input-skin-tailwind.tsx     # Tailwind CSS skin
├── input-skin-native.tsx       # Native CSS skin
├── input.test.tsx              # Test suite
└── README.md                   # This file
```

## Contributing

When contributing to the input component:

1. Update the contract definitions first
2. Update the skin implementations to match
3. Add tests for new features
4. Ensure accessibility requirements are met
5. Update this README if needed

## License

MIT