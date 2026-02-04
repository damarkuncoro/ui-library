# Component Structure Standard

This document defines the standard structure for all components in the UI Library.

## Standard Directory Structure

```
component-name/
├── index.ts                          # Main export file
├── README.md                         # Component documentation
├── CHANGELOG.md                      # Version history
├── CONTRIBUTING.md                   # Contribution guidelines
├── SUMMARY.md                        # Quick summary
├── __tests__/                        # Test files
│   ├── component-name.test.tsx      # Main test file
│   ├── component-name-skin-tailwind.test.tsx  # Skin tests
│   └── component-name-native.test.tsx        # Native skin tests
├── base/                             # Base UI implementation
│   └── component-name-base.tsx      # Base component (no styling)
├── contracts/                        # Contract definitions
│   ├── component-name-contract.ts   # Component contract (SSOT)
│   └── component-name-skin-contract.ts  # Skin contract (SSOT)
├── examples/                         # Usage examples
│   └── component-name-examples.tsx  # Example implementations
├── skins/                            # Skin implementations
│   ├── component-name-skin-tailwind.tsx  # Tailwind CSS skin
│   └── component-name-skin-native.tsx    # Native CSS skin
└── meta/                             # Meta-architecture utilities (optional)
    ├── COMPONENT_NAME_META_ARCHITECTURE_BUILDER.md
    ├── component-name-meta-architecture-builder.ts
    └── component-name-meta-architecture-demo.ts
```

## File Naming Conventions

### Files
- Use kebab-case for file names: `button-base.tsx`, `input-contract.ts`
- Use descriptive names that indicate purpose
- Test files end with `.test.tsx`

### Exports
- Main component: `ComponentName` (PascalCase)
- Base component: `ComponentNameBase` (PascalCase)
- Skin components: `ComponentNameSkinName` (PascalCase)
- Contracts: `componentNameContract` (camelCase)
- Contract definitions: `componentNameContractDef` (camelCase)

## File Content Standards

### 1. index.ts
```typescript
// Main exports
export * from './base/component-name-base';
export * from './contracts/component-name-contract';
export * from './contracts/component-name-skin-contract';
export * from './skins/component-name-skin-tailwind';
export * from './skins/component-name-skin-native';
export * from './examples/component-name-examples';
```

### 2. README.md
Must include:
- Component description
- Architecture overview
- Installation instructions
- Usage examples
- API reference
- Accessibility features
- Testing information
- Contributing guidelines

### 3. CHANGELOG.md
Must follow [Keep a Changelog](https://keepachangelog.com/) format:
- Added
- Changed
- Deprecated
- Removed
- Fixed
- Security

### 4. contracts/component-name-contract.ts
```typescript
import { ContractEntity } from '@damarkuncoro/meta-architecture';
import { ReactNode } from 'react';

const schema = {
  id: "contract_component_name_v1",
  name: "component-name",
  category: "ui.component",
  description: "Component description",
  variants: [...],
  props: [...]
} as const;

export const componentNameContract = ContractEntity.create(schema);
export const componentNameContractDef = schema;
```

### 5. contracts/component-name-skin-contract.ts
```typescript
import { tokens } from '../../theme/design-tokens';

export const componentNameSkinContractDef = {
  id: "contract_component_name_skin_v1",
  name: "component-name-skin",
  category: "ui.skin",
  description: "Visual contract for component skin",
  variants: {...},
  sizes: {...},
  base: {...},
  // ... other skin properties
} as const;
```

### 6. base/component-name-base.tsx
```typescript
import { forwardRef } from 'react';
import { ComponentNameContract } from '../contracts/component-name-contract';

/**
 * Base UI implementation for ComponentName.
 * Adheres to Meta Architecture: Base UI -> UI Contract.
 * Responsible for:
 * - DOM Structure
 * - Accessibility (ARIA)
 * - Logic
 * - Forwarding Refs
 * - No styling dependencies
 */
export const ComponentNameBase = forwardRef<HTMLElement, ComponentNameContract>(
  (props, ref) => {
    // Implementation
  }
);

ComponentNameBase.displayName = 'ComponentNameBase';
```

### 7. skins/component-name-skin-tailwind.tsx
```typescript
import { forwardRef, useMemo } from 'react';
import { ComponentNameContract } from '../contracts/component-name-contract';
import { ComponentNameBase } from '../base/component-name-base';
import { componentNameSkinContractDef } from '../contracts/component-name-skin-contract';
import { tokens } from '../../theme/design-tokens';
import { sanitize, tw } from '../../utils/tailwind/helpers';

/**
 * Skin implementation for ComponentName.
 * Adheres to Meta Architecture: Skins -> Base UI + Tailwind + Contract.
 */
export const ComponentNameTailwind = forwardRef<HTMLElement, ComponentNameContract>(
  (props, ref) => {
    // Implementation
  }
);

ComponentNameTailwind.displayName = 'ComponentNameTailwind';
```

## Code Style Standards

### 1. Comments
- Use JSDoc for function documentation
- Include @component, @example, @param, @returns where applicable
- Add inline comments for complex logic

### 2. Imports
- Group imports in this order:
  1. React and core libraries
  2. Third-party libraries
  3. Internal imports (relative paths)
- Use named exports where possible
- Sort imports alphabetically within groups

### 3. TypeScript
- Use strict type checking
- Prefer interfaces over types for object shapes
- Use `as const` for configuration objects
- Export types for public API

### 4. React
- Use functional components with hooks
- Use `forwardRef` for components that need ref forwarding
- Set `displayName` for all components
- Use `useMemo` and `useCallback` for performance optimization

## Testing Standards

### 1. Test Structure
```typescript
describe('ComponentName', () => {
  describe('Rendering', () => {
    // Rendering tests
  });

  describe('Variants', () => {
    // Variant tests
  });

  describe('Sizes', () => {
    // Size tests
  });

  describe('States', () => {
    // State tests (disabled, loading, etc.)
  });

  describe('Accessibility', () => {
    // Accessibility tests
  });

  describe('Integration', () => {
    // Integration tests
  });
});
```

### 2. Test Coverage
- Aim for 80%+ code coverage
- Test all variants and sizes
- Test all states (disabled, loading, etc.)
- Test accessibility features
- Test keyboard navigation

## Documentation Standards

### 1. README.md Sections
- Overview
- Architecture
- Features
- Installation
- Usage
- API Reference
- Accessibility
- Testing
- Contributing
- License

### 2. Code Comments
- Document complex logic
- Explain design decisions
- Provide usage examples in comments
- Keep comments up-to-date

## Meta-Architecture Standards

### 1. Contract Entity
- Use `ContractEntity.create()` for runtime validation
- Export both runtime entity and schema
- Maintain backward compatibility

### 2. Type Inference
- Use automatic type inference from contracts
- Export inferred types for public API
- Avoid manual type definitions

### 3. Builder Pattern (Optional)
- Provide fluent API for component creation
- Support code generation
- Include documentation and examples

## Version Control Standards

### 1. Commit Messages
- Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
- Be descriptive and concise
- Reference issues when applicable

### 2. Branch Naming
- Use `feature/component-name-feature`
- Use `fix/component-name-bug`
- Use `docs/component-name-update`

## Checklist for New Components

- [ ] Create directory structure
- [ ] Implement base component
- [ ] Create contract definitions
- [ ] Implement Tailwind skin
- [ ] Implement Native skin (if applicable)
- [ ] Create examples
- [ ] Write tests
- [ ] Create README.md
- [ ] Create CHANGELOG.md
- [ ] Create CONTRIBUTING.md
- [ ] Create SUMMARY.md
- [ ] Update main index.ts
- [ ] Run tests
- [ ] Check TypeScript errors
- [ ] Verify accessibility
- [ ] Update documentation

## Migration Guide

When updating existing components to this standard:

1. **Reorganize files** - Move files to standard structure
2. **Update imports** - Fix import paths
3. **Add missing files** - Create README, CHANGELOG, etc.
4. **Update contracts** - Use ContractEntity.create()
5. **Add tests** - Ensure test coverage
6. **Update documentation** - Keep docs in sync
7. **Run tests** - Verify everything works
8. **Commit changes** - Use conventional commits

## Tools and Utilities

### Recommended Tools
- TypeScript for type safety
- Jest for testing
- React Testing Library for component tests
- ESLint for linting
- Prettier for formatting

### Helper Functions
- `sanitize()` - Sanitize values for Tailwind arbitrary values
- `tw()` - Create Tailwind arbitrary value classes
- ContractEntity - Runtime validation from meta-architecture

## Best Practices

1. **Consistency First** - Follow this standard for all components
2. **Type Safety** - Leverage TypeScript for better development experience
3. **Accessibility** - Ensure all components are accessible
4. **Testing** - Write comprehensive tests
5. **Documentation** - Keep documentation up-to-date
6. **Performance** - Optimize for performance
7. **Maintainability** - Write clean, maintainable code

## Support

For questions or issues with this standard, please:
1. Check this document first
2. Review existing components for examples
3. Ask in team discussions
4. Create an issue for improvements