# Contributing to Button Component

Thank you for your interest in contributing to the button component! This guide will help you get started.

## Development Workflow

### 1. Setup

```bash
# Clone the repository
git clone <repository-url>
cd ui-library

# Install dependencies
pnpm install
```

### 2. Development

```bash
# Run tests in watch mode
pnpm test

# Run tests once
pnpm test --run

# Build the library
pnpm build
```

## Project Structure

```
src/button/
├── button-base.tsx              # Base UI implementation (DOM, accessibility, logic)
├── button-contract.ts           # Component contract (types, variants, props)
├── button-skin-contract.ts      # Visual contract (colors, sizes, spacing)
├── button-skin-tailwind.tsx     # Tailwind CSS skin implementation
├── button-skin-native.tsx       # Native CSS skin implementation
├── button.test.ts               # Test suite
├── button-examples.tsx          # Usage examples
├── README.md                    # Component documentation
├── CHANGELOG.md                 # Changelog
└── CONTRIBUTING.md              # This file
```

## Architecture Principles

### Contract-Driven Design

The button component follows a contract-driven design pattern:

1. **Component Contract** (`button-contract.ts`): Defines the API, types, and variants
2. **Skin Contract** (`button-skin-contract.ts`): Defines visual specifications
3. **Base UI** (`button-base.tsx`): Implements DOM structure and logic
4. **Skins** (`button-skin-*.tsx`): Implement visual styling

### Key Rules

- **Always update contracts first**: When adding new features, update the contract definitions first
- **Maintain consistency**: All skin implementations must follow the skin contract
- **Type safety**: Use type inference from contracts to ensure type safety
- **Accessibility**: Ensure all changes maintain or improve accessibility
- **Testing**: Add tests for new features and update existing tests

## Adding New Features

### Adding a New Variant

1. **Update Component Contract** (`button-contract.ts`):

```typescript
export const buttonContractDef = {
  variants: [
    // ... existing variants
    {
      name: "variant",
      type: "intent",
      values: ["primary", "secondary", "outline", "ghost", "danger", "new-variant"],
      defaultValue: "primary",
      description: "Visual style of the button"
    },
  ],
  // ...
} as const;
```

2. **Update Skin Contract** (`button-skin-contract.ts`):

```typescript
export const buttonSkinContractDef = {
  variants: {
    // ... existing variants
    "new-variant": {
      backgroundColor: '#YOUR_COLOR',
      color: '#YOUR_TEXT_COLOR',
      hover: {
        backgroundColor: '#YOUR_HOVER_COLOR',
      },
      focus: {
        outline: '2px solid #YOUR_FOCUS_COLOR',
        outlineOffset: '2px',
      },
    },
  },
  // ...
} as const;
```

3. **Update Tailwind Skin** (`button-skin-tailwind.tsx`):

```typescript
export const variantClasses = {
  // ... existing variants
  "new-variant": 'bg-your-color text-your-color hover:bg-your-hover focus:ring-your-focus',
};
```

4. **Update Native Skin** (`button-skin-native.tsx`):

```typescript
const variantStyles: Record<string, CSSProperties> = {
  // ... existing variants
  "new-variant": {
    backgroundColor: buttonSkinContractDef.variants["new-variant"].backgroundColor,
    color: buttonSkinContractDef.variants["new-variant"].color,
  },
};
```

5. **Add Tests** (`button.test.ts`):

```typescript
describe('New Variant', () => {
  it('should render new variant correctly', () => {
    render(<ButtonTailwind variant="new-variant">New</ButtonTailwind>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-your-color');
  });
});
```

6. **Update Documentation** (`README.md`):

```markdown
### With New Variant

```tsx
<ButtonTailwind variant="new-variant">New Variant</ButtonTailwind>
```
```

### Adding a New Size

Follow the same process as adding a new variant, but update the `size` variant in the contracts and `sizeClasses` / `sizeStyles` in the skins.

### Adding a New Skin

1. Create a new file `button-skin-your-skin.tsx`:

```typescript
import { forwardRef } from 'react';
import { ButtonContract } from './button-contract';
import { ButtonBase } from './button-base';
import { buttonSkinContractDef } from './button-skin-contract';

export const ButtonYourSkin = forwardRef<HTMLButtonElement, ButtonContract>(
  (props, ref) => {
    // Implement your skin here
    // Ensure it aligns with buttonSkinContractDef
    return <ButtonBase ref={ref} {...props} />;
  }
);

ButtonYourSkin.displayName = 'ButtonYourSkin';
```

2. Export from `src/index.ts`:

```typescript
export * from './button/button-skin-your-skin';
```

3. Add tests for your skin

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage
```

### Writing Tests

Follow these guidelines when writing tests:

1. **Test contract consistency**: Ensure implementations match contracts
2. **Test accessibility**: Verify ARIA attributes and keyboard navigation
3. **Test edge cases**: Test disabled, loading, and error states
4. **Use descriptive names**: Make test names clear and specific

### Test Structure

```typescript
describe('Feature Name', () => {
  describe('Scenario', () => {
    it('should do something when condition is met', () => {
      // Arrange
      render(<Component prop="value" />);
      
      // Act
      const element = screen.getByRole('button');
      
      // Assert
      expect(element).toBeInTheDocument();
    });
  });
});
```

## Code Style

### TypeScript

- Use type inference from contracts
- Avoid `any` types
- Use proper type annotations for function parameters
- Use JSDoc comments for exported functions and types

### React

- Use functional components with hooks
- Use `forwardRef` for components that need ref forwarding
- Set `displayName` for forwarded components
- Use proper prop types from contracts

### Naming Conventions

- **Components**: PascalCase (e.g., `ButtonTailwind`)
- **Functions**: camelCase (e.g., `handleClick`)
- **Constants**: camelCase (e.g., `variantClasses`)
- **Types**: PascalCase (e.g., `ButtonContract`)
- **Files**: kebab-case (e.g., `button-base.tsx`)

## Accessibility Guidelines

### ARIA Attributes

- Use `aria-disabled` for disabled buttons
- Use `aria-busy` for loading buttons
- Use `aria-hidden` for decorative icons
- Use `aria-label` for buttons without text content

### Keyboard Navigation

- Ensure buttons are focusable
- Support Enter and Space keys
- Provide visible focus indicators
- Maintain logical tab order

### Screen Readers

- Provide meaningful text content
- Use semantic HTML elements
- Avoid redundant announcements
- Test with screen readers

## Pull Request Process

1. **Fork the repository** and create a new branch
2. **Make your changes** following the guidelines above
3. **Write tests** for your changes
4. **Update documentation** (README, CHANGELOG, etc.)
5. **Run tests** and ensure they pass
6. **Commit your changes** with clear messages
7. **Push to your fork** and create a pull request

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests added/updated
- [ ] All tests passing

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Changes add no new dependencies
```

## Getting Help

If you need help:

1. Check the [README.md](README.md) for documentation
2. Review existing code for examples
3. Open an issue with your question
4. Join the community discussions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.