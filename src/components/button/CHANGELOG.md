# Button Component Changelog

All notable changes to the button component will be documented in this file.

## [Unreleased]

### Added
- **Skin Contract** (`button-skin-contract.ts`)
  - Created comprehensive skin contract for visual consistency
  - Defined visual properties for all variants (primary, secondary, outline, ghost, danger)
  - Defined size specifications (sm, md, lg)
  - Defined base styles, disabled state, icon behavior, and loader behavior
  - Added TypeScript type inference utilities for skin contract

- **Keyboard Navigation** (`button-base.tsx`)
  - Added keyboard event handling for Enter and Space keys
  - Improved accessibility with proper keyboard support

- **Documentation** (`README.md`)
  - Created comprehensive README with architecture overview
  - Added usage examples for all variants and sizes
  - Added API reference documentation
  - Added accessibility guidelines
  - Added testing instructions
  - Added custom skin creation guide

- **Examples** (`button-examples.tsx`)
  - Created comprehensive example file with all button variations
  - Added variant examples
  - Added size examples
  - Added icon examples
  - Added state examples
  - Added combined examples
  - Added native skin examples
  - Added interactive examples
  - Added accessibility examples
  - Added custom styling examples

- **Tests** (`button.test.ts`)
  - Added skin contract consistency tests
  - Added variant consistency tests
  - Added size consistency tests
  - Added base styles consistency tests
  - Added disabled styles consistency tests
  - Added icon behavior consistency tests
  - Added loader behavior consistency tests

### Changed
- **Icon Spacing** (`button-base.tsx`, `button-skin-tailwind.tsx`)
  - Moved icon spacing classes from arbitrary selectors to direct icon spans
  - Added `mr-2` and `ml-2` classes directly to icon elements
  - Added `aria-hidden="true"` to icon spans for better accessibility

- **Native Skin** (`button-skin-native.tsx`)
  - Updated to use skin contract for all style definitions
  - Removed unused hover/focus styles (React inline styles don't support pseudo-selectors)
  - Added disabled state styles from skin contract

- **Type Documentation** (`button-contract.ts`)
  - Added comprehensive documentation for type inference utilities
  - Added JSDoc comments with examples for exported types

### Fixed
- **Contract Export** (`button-contract.ts`)
  - Verified `buttonContractDef` is properly exported for external consumption

### Dependencies
- Added `@testing-library/react` for component testing
- Added `@testing-library/jest-dom` for DOM assertions
- Added `@vitejs/plugin-react` for JSX support in tests
- Added `jsdom` for DOM simulation in tests
- Added `vite` for build tooling

## [0.0.1] - Initial Release

### Added
- **Button Contract** (`button-contract.ts`)
  - Single source of truth for button types and variants
  - Automatic type inference from contract definition
  - Support for variants: primary, secondary, outline, ghost, danger
  - Support for sizes: sm, md, lg

- **Button Base** (`button-base.tsx`)
  - DOM structure implementation
  - Accessibility support (ARIA attributes)
  - Loading state handling
  - Icon placement (left and right)
  - Ref forwarding

- **Button Tailwind Skin** (`button-skin-tailwind.tsx`)
  - Tailwind CSS implementation
  - Variant classes with hover and focus states
  - Size classes
  - Disabled state styling

- **Button Native Skin** (`button-skin-native.tsx`)
  - Framework-agnostic CSS-in-JS implementation
  - Variant styles
  - Size styles
  - Base styles

- **Tests** (`button.test.ts`)
  - Contract consistency tests
  - Variant consistency tests
  - Size consistency tests
  - Default values consistency tests

---

## Versioning

This project follows [Semantic Versioning](https://semver.org/).

## Format

The changelog format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## Types

- **Added**: New features
- **Changed**: Changes in existing functionality
- **Deprecated**: Soon-to-be removed features
- **Removed**: Removed features
- **Fixed**: Bug fixes
- **Security**: Security vulnerabilities