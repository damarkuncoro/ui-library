# Shape Component

A shape component for creating geometric shapes with various border radius and aspect ratio options.

## Architecture

The shape component follows a three-layer architecture:

```
┌─────────────────────────────────────────────────────────┐
│                    Shape Contract                       │
│  (Single Source of Truth for Types & Variants)          │
└─────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                     Shape Base                          │
│  (DOM Structure, Accessibility, Logic)                  │
└─────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                      Shape Skins                         │
│  (Visual Styling - Tailwind, Native, etc.)               │
└─────────────────────────────────────────────────────────┘
```

## Features

- ✅ **Contract-Driven Design**: Single source of truth for types and variants
- ✅ **Framework Agnostic**: Works with any styling approach
- ✅ **Accessible**: Full ARIA support
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
import { ShapeTailwind } from '@damarkuncoro/ui-library';

function App() {
  return <ShapeTailwind variant="rounded" size="md" />;
}
```

### With Variants

```tsx
<ShapeTailwind variant="rounded" />
<ShapeTailwind variant="circle" />
<ShapeTailwind variant="square" />
```

### With Sizes

```tsx
<ShapeTailwind size="sm" />
<ShapeTailwind size="md" />
<ShapeTailwind size="lg" />
```

## API Reference

### ShapeContract

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'rounded' \| 'circle' \| 'square' \| 'pill' \| 'diamond'` | `'rounded'` | Shape variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the shape |
| `className` | `string` | `''` | Custom class name |
| `style` | `CSSProperties` | `undefined` | Custom inline styles |

## Accessibility

The shape component follows WCAG 2.1 AA guidelines:

- ✅ ARIA attributes
- ✅ Focus management
- ✅ Screen reader support

## Testing

Run the test suite:

```bash
npm test
```

## Contributing

When contributing to the shape component:

1. Update the contract definitions first
2. Update the skin implementations to match
3. Add tests for new features
4. Ensure accessibility requirements are met
5. Update this README if needed

## License

MIT