# Text Component

A text component for displaying text with various typography styles and alignments.

## Architecture

The text component follows a three-layer architecture:

```
┌─────────────────────────────────────────────────────────┐
│                    Text Contract                        │
│  (Single Source of Truth for Types & Variants)          │
└─────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                     Text Base                           │
│  (DOM Structure, Accessibility, Logic)                  │
└─────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                      Text Skins                          │
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
import { TextTailwind } from '@damarkuncoro/ui-library';

function App() {
  return <TextTailwind variant="body">Hello World</TextTailwind>;
}
```

### With Variants

```tsx
<TextTailwind variant="h1">Heading 1</TextTailwind>
<TextTailwind variant="h2">Heading 2</TextTailwind>
<TextTailwind variant="body">Body text</TextTailwind>
<TextTailwind variant="caption">Caption</TextTailwind>
```

### With Alignments

```tsx
<TextTailwind align="left">Left aligned</TextTailwind>
<TextTailwind align="center">Center aligned</TextTailwind>
<TextTailwind align="right">Right aligned</TextTailwind>
```

## API Reference

### TextContract

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'body' \| 'caption'` | `'body'` | Text variant |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'` | Text alignment |
| `className` | `string` | `''` | Custom class name |
| `style` | `CSSProperties` | `undefined` | Custom inline styles |

## Accessibility

The text component follows WCAG 2.1 AA guidelines:

- ✅ ARIA attributes
- ✅ Screen reader support
- ✅ Proper semantic HTML

## Testing

Run the test suite:

```bash
npm test
```

## Contributing

When contributing to the text component:

1. Update the contract definitions first
2. Update the skin implementations to match
3. Add tests for new features
4. Ensure accessibility requirements are met
5. Update this README if needed

## License

MIT