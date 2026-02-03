# Component Registry

This document serves as a central registry of all components in the UI Library, documenting their relationships, contracts, and implementation details.

## Overview

The UI Library follows a **Meta Architecture** pattern with contract-driven design. All components are built on top of a shared design token system.

```
┌─────────────────────────────────────────────────────────┐
│                    Design Tokens                          │
│  (Global visual specifications - colors, spacing, etc.)   │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                  Component Contracts                       │
│  (API definitions, types, variants, behavior)            │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    Skin Contracts                         │
│  (Visual specifications derived from design tokens)       │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                      Base UI Components                    │
│  (DOM structure, accessibility, logic)                   │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                        Skin Implementations                │
│  (Tailwind, Native, or custom styling)                   │
└─────────────────────────────────────────────────────────┘
```

## Components

### 1. Button Component

**Status:** ✅ Complete

**Location:** `src/components/button/`

**Purpose:** Interactive button with various visual styles and states

**Architecture:**
- **Contract:** [`button-contract.ts`](src/components/button/button-contract.ts:1)
- **Skin Contract:** [`button-skin-contract.ts`](src/components/button/button-skin-contract.ts:1)
- **Base UI:** [`button-base.tsx`](src/components/button/button-base.tsx:1)
- **Skins:** 
  - [`button-skin-tailwind.tsx`](src/components/button/button-skin-tailwind.tsx:1)
  - [`button-skin-native.tsx`](src/components/button/button-skin-native.tsx:1)

**Variants:**
- `primary` - Primary action button
- `secondary` - Secondary action button
- `outline` - Outlined button
- `ghost` - Ghost button
- `danger` - Destructive action button

**Sizes:**
- `sm` - Small (32px height)
- `md` - Medium (40px height)
- `lg` - Large (48px height)

**Features:**
- ✅ Loading state
- ✅ Disabled state
- ✅ Left and right icon support
- ✅ Keyboard navigation (Enter, Space)
- ✅ Full accessibility support
- ✅ Design token integration

**Exports:**
```typescript
export { Button } from './button/button-skin-tailwind';
export { ButtonTailwind } from './button/button-skin-tailwind';
export { ButtonNative } from './button/button-skin-native';
export * from './button/button-contract';
export * from './button/button-skin-contract';
export * from './button/button-base';
export * from './button/button-examples';
```

---

### 2. Input Component

**Status:** ✅ Complete

**Location:** `src/input/`

**Purpose:** Text input with support for icons and validation states

**Architecture:**
- **Contract:** [`input-contract.ts`](src/input/input-contract.ts:1)
- **Skin Contract:** [`input-skin-contract.ts`](src/input/input-skin-contract.ts:1)
- **Base UI:** [`input-base.tsx`](src/input/input-base.tsx:1)
- **Skins:**
  - [`input-skin-tailwind.tsx`](src/input/input-skin-tailwind.tsx:1)
  - [`input-skin-native.tsx`](src/input/input-skin-native.tsx:1)

**Variants:**
- `outline` - Outlined input
- `filled` - Filled background input
- `flushed` - Bottom border only input

**Sizes:**
- `sm` - Small (32px height)
- `md` - Medium (40px height)
- `lg` - Large (48px height)

**Features:**
- ✅ Invalid state
- ✅ Disabled state
- ✅ Read-only state
- ✅ Left and right icon support
- ✅ Keyboard navigation
- ✅ Full accessibility support
- ✅ Design token integration

**Exports:**
```typescript
export { Input } from './components/input/input-skin-tailwind';
export { InputTailwind } from './components/input/input-skin-tailwind';
export { InputNative } from './components/input/input-skin-native';
export * from './components/input/input-contract';
export * from './components/input/input-skin-contract';
export * from './components/input/input-base';
export * from './components/input/input-examples';
```

---

## Design Tokens

**Location:** `src/theme/`

**Purpose:** Global visual specifications for the entire UI library

**Files:**
- [`design-tokens.ts`](src/theme/design-tokens.ts:1) - Token definitions
- [`theme-provider.tsx`](src/theme/theme-provider.tsx:1) - Theme context provider

**Token Categories:**

### Colors
- **Primary:** Main action color (blue)
- **Secondary:** Secondary action color (gray)
- **Danger:** Destructive action color (red)
- **Neutral:** Text, borders, backgrounds

### Spacing
- Consistent spacing scale (8px, 12px, 16px, 24px)

### Typography
- Font families (sans, mono)
- Font sizes (xs, sm, base, lg, xl)
- Font weights (normal, medium, semibold, bold)
- Line heights

### Sizing
- Component heights (32px, 40px, 48px)
- Icon sizes (14px, 16px, 20px)

### Border Radius
- Small (4px)
- Medium (6px)
- Large (8px)
- Full (9999px)

### Transitions
- Base transition (all 0.2s ease)

### Opacity
- Disabled (0.5)

**Exports:**
```typescript
export * from './theme/design-tokens';
export * from './theme/theme-provider';
```

---

## Component Relationships

### Shared Dependencies

All components depend on:
- **Design Tokens:** Global visual specifications
- **React:** Core framework (>=18)
- **React DOM:** DOM rendering (>=18)

### Component Hierarchy

```
Design Tokens
    │
    ├── Button Component
    │   ├── Button Contract
    │   ├── Button Skin Contract
    │   ├── Button Base
    │   └── Button Skins (Tailwind, Native)
    │
    └── Input Component
        ├── Input Contract
        ├── Input Skin Contract
        ├── Input Base
        └── Input Skins (Tailwind, Native)
```

---

## Implementation Patterns

### Contract-Driven Design

All components follow this pattern:

1. **Define Contract:** API, types, variants, behavior
2. **Define Skin Contract:** Visual specifications from design tokens
3. **Implement Base UI:** DOM structure, accessibility, logic
4. **Implement Skins:** Visual styling (Tailwind, Native, etc.)

### Type Safety

All types are automatically inferred from contracts:

```typescript
// Component Contract
export type ButtonVariant = ExtractValues<typeof buttonContractDef.variants, "variant">;

// Skin Contract
export type ButtonSkinVariant = keyof typeof buttonSkinContractDef.variants;
```

### Accessibility Standards

All components follow WCAG 2.1 AA guidelines:
- Keyboard navigation
- ARIA attributes
- Focus management
- Screen reader support

---

## Future Components

### Planned Components

1. **Select** - Dropdown selection component
2. **Checkbox** - Checkbox input component
3. **Radio** - Radio button component
4. **Toggle** - Toggle switch component
5. **Badge** - Badge/label component
6. **Avatar** - User avatar component
7. **Card** - Card container component
8. **Modal** - Modal dialog component
9. **Tooltip** - Tooltip component
10. **Progress** - Progress bar component

### Component Guidelines

When adding new components:

1. Follow the contract-driven design pattern
2. Use design tokens for all visual properties
3. Implement at least two skins (Tailwind + Native)
4. Add comprehensive documentation
5. Include accessibility features
6. Write tests for contract consistency
7. Add usage examples

---

## Version History

### v0.0.1
- ✅ Button component (complete)
- ✅ Input component (complete)
- ✅ Design tokens system
- ✅ Theme provider
- ✅ Contract-driven architecture

---

## Contributing

When contributing to the component registry:

1. Update this document when adding new components
2. Document component relationships
3. Note any breaking changes
4. Keep the registry in sync with actual implementations

---

## Maintenance

### Regular Tasks

- [ ] Review and update component documentation
- [ ] Check for deprecated patterns
- [ ] Ensure all components use latest design tokens
- [ ] Verify contract consistency across all components
- [ ] Update examples with new features

### Quality Checks

- [ ] All components have contracts
- [ ] All components have skin contracts
- [ ] All components have at least two skins
- [ ] All components have documentation
- [ ] All components have tests
- [ ] All components have examples

---

## Contact

For questions about the component registry or to suggest improvements, please open an issue in the repository.