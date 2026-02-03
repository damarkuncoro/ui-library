# Button Component

A highly customizable, accessible button component following the Meta Architecture pattern with contract-driven design.

## Architecture

The button component follows a three-layer architecture:

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

- ✅ **Contract-Driven Design**: Single source of truth for types and variants
- ✅ **Framework Agnostic**: Works with any styling approach
- ✅ **Accessible**: Full ARIA support and keyboard navigation
- ✅ **Type Safe**: Automatic type inference from contracts
- ✅ **Consistent**: Skin contract ensures visual consistency
- ✅ **Testable**: Comprehensive test coverage

## Installation

```bash
npm install @damarkuncoro/ui-library
```

## Usage

### Basic Usage

```tsx
import { ButtonTailwind } from '@damarkuncoro/ui-library';

function App() {
  return <ButtonTailwind>Click me</ButtonTailwind>;
}
```

### With Variants

```tsx
<ButtonTailwind variant="primary">Primary</ButtonTailwind>
<ButtonTailwind variant="secondary">Secondary</ButtonTailwind>
<ButtonTailwind variant="outline">Outline</ButtonTailwind>
<ButtonTailwind variant="ghost">Ghost</ButtonTailwind>
<ButtonTailwind variant="danger">Danger</ButtonTailwind>
```

### With Sizes

```tsx
<ButtonTailwind size="sm">Small</ButtonTailwind>
<ButtonTailwind size="md">Medium</ButtonTailwind>
<ButtonTailwind size="lg">Large</ButtonTailwind>
```

### With Icons

```tsx
import { Icon } from './icon';

<ButtonTailwind leftIcon={<Icon name="arrow-left" />}>Back</ButtonTailwind>
<ButtonTailwind rightIcon={<Icon name="arrow-right" />}>Next</ButtonTailwind>
```

### Loading State

```tsx
<ButtonTailwind isLoading>Loading...</ButtonTailwind>
```

### Disabled State

```tsx
<ButtonTailwind disabled>Disabled</ButtonTailwind>
```

### Native CSS Skin

```tsx
import { ButtonNative } from '@damarkuncoro/ui-library';

<ButtonNative variant="primary" size="md">Click me</ButtonNative>
```

## Skin Contract (Advanced)

The `button-skin-contract.ts` file acts as the **Single Source of Truth** for the button's visual design. It exports both runtime values and TypeScript types.

### 1. Accessing Design Values

You can import `buttonSkinContractDef` to access the exact design tokens defined in the contract. This is useful for building new skins that need to match the design system exactly.

```typescript
import { buttonSkinContractDef } from './button-skin-contract';

// Access color values
const primaryColor = buttonSkinContractDef.variants.primary.backgroundColor; // '#2563EB'
const paddingSm = buttonSkinContractDef.sizes.sm.padding; // '0 12px'
```

### 2. Using Inferred Types

Instead of manually defining types, you should use the types inferred from the contract. This ensures your component always stays in sync with the design system.

```typescript
import { ButtonSkinVariant, ButtonSkinSize } from './button-skin-contract';

interface MyButtonProps {
  variant?: ButtonSkinVariant; // 'primary' | 'secondary' | 'outline' | ...
  size?: ButtonSkinSize;       // 'sm' | 'md' | 'lg'
}
```

## API Reference

### ButtonContract

Extends `ButtonHTMLAttributes<HTMLButtonElement>` with the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | *required* | The content of the button |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Visual variant of the button |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the button |
| `isLoading` | `boolean` | `false` | Whether the button is in a loading state |
| `leftIcon` | `ReactNode` | `undefined` | Optional icon to display before the text |
| `rightIcon` | `ReactNode` | `undefined` | Optional icon to display after the text |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `className` | `string` | `''` | Custom class name for styling |
| `style` | `CSSProperties` | `undefined` | Custom inline styles |

## Skin Contract

The skin contract defines the visual specifications that all skin implementations must follow:

```typescript
export const buttonSkinContractDef = {
  variants: {
    primary: { backgroundColor: '#2563EB', color: 'white', ... },
    secondary: { backgroundColor: '#F3F4F6', color: '#111827', ... },
    // ... other variants
  },
  sizes: {
    sm: { height: '32px', padding: '0 12px', fontSize: '12px' },
    md: { height: '40px', padding: '0 16px', fontSize: '14px' },
    lg: { height: '48px', padding: '0 24px', fontSize: '16px' },
  },
  base: { display: 'inline-flex', alignItems: 'center', ... },
  disabled: { opacity: '0.5', cursor: 'not-allowed' },
  icons: { leftSpacing: '8px', rightSpacing: '8px', ariaHidden: true },
  loader: { size: '16px', borderWidth: '2px', animation: 'spin' },
};
```

## Accessibility

The button component follows WCAG 2.1 AA guidelines:

- ✅ Keyboard navigation (Enter and Space keys)
- ✅ ARIA attributes (`aria-disabled`, `aria-busy`, `aria-hidden`)
- ✅ Focus management
- ✅ Screen reader support

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
import { ButtonContract } from './button-contract';
import { ButtonBase } from './button-base';
import { buttonSkinContractDef } from './button-skin-contract';

export const ButtonCustom = forwardRef<HTMLButtonElement, ButtonContract>(
  (props, ref) => {
    // Implement your custom styling here
    // Ensure it aligns with buttonSkinContractDef
    return <ButtonBase ref={ref} {...props} />;
  }
);
```

## File Structure

```
src/button/
├── button-base.tsx              # Base UI implementation
├── button-contract.ts           # Component contract (SSOT)
├── button-skin-contract.ts      # Visual contract (SSOT)
├── button-skin-tailwind.tsx     # Tailwind CSS skin
├── button-skin-native.tsx       # Native CSS skin
├── button.test.ts               # Test suite
└── README.md                    # This file
```

## Contributing

When contributing to the button component:

1. Update the contract definitions first
2. Update the skin implementations to match
3. Add tests for new features
4. Ensure accessibility requirements are met
5. Update this README if needed

## License

MIT