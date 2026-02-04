# Tailwind CSS v4 Safelist Output

Generated from component contracts on: 2026-02-04

## Summary

| Component | Classes Count |
|-----------|---------------|
| Button | 46 |
| Input | 52 |
| Shape | 28 |
| Text | 26 |
| **Total** | **152** |

---

## Button Component Safelist (46 classes)

```
bg-[var(--color-primary-main)]
text-[var(--color-primary-contrast)]
hover:bg-[var(--color-primary-hover)]
focus:ring-[var(--color-primary-focus)]
focus:ring-[2px]
focus:ring-offset-[2px]
bg-[var(--color-secondary-main)]
text-[var(--color-secondary-contrast)]
hover:bg-[var(--color-secondary-hover)]
focus:ring-[var(--color-secondary-focus)]
bg-[var(--color-transparent)]
border-[var(--color-neutral-border)]
text-[var(--color-neutral-text)]
hover:bg-[var(--color-neutral-bg)]
text-[var(--color-neutral-text)]
hover:bg-[var(--color-secondary-main)]
focus:ring-[var(--color-secondary-focus)]
bg-[var(--color-danger-main)]
text-[var(--color-danger-contrast)]
hover:bg-[var(--color-danger-hover)]
focus:ring-[var(--color-danger-focus)]
h-[2rem]
px-[0.75rem]
text-[0.875rem]
h-[2.5rem]
px-[1rem]
text-[0.9375rem]
h-[3rem]
px-[1.5rem]
text-[1rem]
rounded-[var(--radius-md)]
font-[500]
[transition:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter_200ms_cubic-bezier(0.4,_0,_0.2,_1)]
disabled:opacity-[0.5]
disabled:cursor-[not-allowed]
[&_.button-icon-left]:mr-[0.5rem]
[&_.button-icon-right]:ml-[0.5rem]
[&_.button-loader]:border-[2px]
[&_.button-loader]:h-[16px]
[&_.button-loader]:w-[16px]
focus:ring-[2px]
focus:ring-offset-[2px]
```

### Button CSS Output

```css
/* Base Layout */
.inline-flex {
  display: inline-flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

/* Border Radius */
.rounded-\[var\(--radius-md\)\] {
  border-radius: var(--radius-md);
}

/* Font Weight */
.font-\[500\] {
  font-weight: 500;
}

/* Transition */
.\[transition\:color\,_background-color\,_border-color\,_text-decoration-color\,_fill\,_stroke\,_opacity\,_box-shadow\,_transform\,_filter\,_backdrop-filter_200ms_cubic-bezier\(0\.4\,_0\,_0\.2\,_1\)\] {
  transition: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Focus States */
.focus\:outline-none:focus {
  outline: none;
}

/* Disabled States */
.disabled\:opacity-\[0\.5\]:disabled {
  opacity: 0.5;
}

.disabled\:cursor-\[not-allowed\]:disabled {
  cursor: not-allowed;
}

/* Child Elements - Icons */
.\[&_\.button-icon-left\]\:mr-\[0\.5rem\] .button-icon-left {
  margin-right: 0.5rem;
}

.\[&_\.button-icon-right\]\:ml-\[0\.5rem\] .button-icon-right {
  margin-left: 0.5rem;
}

/* Child Elements - Loader */
.\[&_\.button-loader\]\:animate-spin .button-loader {
  animation: spin 1s linear infinite;
}

.\[&_\.button-loader\]\:border-\[2px\] .button-loader {
  border-width: 2px;
}

.\[&_\.button-loader\]\:border-current .button-loader {
  border-color: currentColor;
}

.\[&_\.button-loader\]\:border-t-transparent .button-loader {
  border-top-color: transparent;
}

.\[&_\.button-loader\]\:rounded-full .button-loader {
  border-radius: 9999px;
}

.\[&_\.button-loader\]\:h-\[16px\] .button-loader {
  height: 16px;
}

.\[&_\.button-loader\]\:w-\[16px\] .button-loader {
  width: 16px;
}

/* Primary Variant */
.bg-\[var\(--color-primary-main\)\] {
  background-color: var(--color-primary-main);
}

.text-\[var\(--color-primary-contrast\)\] {
  color: var(--color-primary-contrast);
}

.hover\:bg-\[var\(--color-primary-hover\)\]:hover {
  background-color: var(--color-primary-hover);
}

.focus\:ring-\[var\(--color-primary-focus\)\]:focus {
  --tw-ring-color: var(--color-primary-focus);
}

.focus\:ring-\[2px\]:focus {
  --tw-ring-width: 2px;
}

.focus\:ring-offset-\[2px\]:focus {
  --tw-ring-offset-width: 2px;
}

/* Size - Medium */
.h-\[3rem\] {
  height: 3rem;
}

.p-\[0_1\.5rem\] {
  padding: 0 1.5rem;
}

.text-\[1rem\] {
  font-size: 1rem;
}
```

---

## Input Component Safelist (52 classes)

```
bg-[var(--color-neutral-bg-surface)]
border-[var(--color-neutral-border)]
text-[var(--color-neutral-text)]
placeholder:text-[var(--color-neutral-text-secondary)]
hover:border-[var(--color-neutral-text)]
hover:bg-[var(--color-neutral-bg)]
focus:border-[var(--color-primary-focus)]
focus:ring-[var(--color-primary-focus)]
bg-[var(--color-transparent)]
border-[var(--color-transparent)]
text-[var(--color-neutral-text)]
placeholder:text-[var(--color-neutral-text-secondary)]
hover:border-[var(--color-neutral-text)]
focus:border-[var(--color-primary-focus)]
focus:ring-[var(--color-primary-focus)]
bg-[var(--color-neutral-bg-surface)]
border-[var(--color-neutral-border)]
text-[var(--color-neutral-text)]
placeholder:text-[var(--color-neutral-text-secondary)]
hover:border-[var(--color-neutral-text)]
focus:border-[var(--color-primary-focus)]
focus:ring-[var(--color-primary-focus)]
bg-[var(--color-neutral-bg-surface)]
border-b-[var(--color-neutral-border)]
text-[var(--color-neutral-text)]
placeholder:text-[var(--color-neutral-text-secondary)]
hover:border-b-[var(--color-neutral-text)]
focus:border-b-[var(--color-primary-focus)]
focus:ring-[var(--color-primary-focus)]
![border-[var(--color-danger-main)]]
![ring-[var(--color-danger-focus)]]
![border-b-[var(--color-danger-main)]]
h-[2rem]
px-[0.75rem]
text-[0.875rem]
h-[2.5rem]
px-[1rem]
text-[0.9375rem]
h-[3rem]
px-[1.5rem]
text-[1rem]
rounded-[var(--radius-md)]
[transition:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter_200ms_cubic-bezier(0.4,_0,_0.2,_1)]
disabled:opacity-[0.5]
disabled:cursor-[not-allowed]
pl-[0.75rem]
pr-[0.75rem]
[&_.input-icon-left]:left-[0.75rem]
[&_.input-icon-right]:right-[0.75rem]
[&_.input-icon-left]:text-[var(--color-neutral-text-secondary)]
[&_.input-icon-right]:text-[var(--color-neutral-text-secondary)]
```

### Input CSS Output

```css
/* Input Base Styles */
.border-\[var\(--color-neutral-border\)\] {
  border-color: var(--color-neutral-border);
}

.bg-\[var\(--color-neutral-bg-surface\)\] {
  background-color: var(--color-neutral-bg-surface);
}

.text-\[var\(--color-neutral-text\)\] {
  color: var(--color-neutral-text);
}

.placeholder\:text-\[var\(--color-neutral-text-secondary\)\]::placeholder {
  color: var(--color-neutral-text-secondary);
}

/* Input States */
.hover\:border-\[var\(--color-neutral-text\)\]:hover {
  border-color: var(--color-neutral-text);
}

.focus\:border-\[var\(--color-primary-focus\)\]:focus {
  border-color: var(--color-primary-focus);
}

.focus\:ring-\[var\(--color-primary-focus\)\]:focus {
  --tw-ring-color: var(--color-primary-focus);
}

/* Input Icons */
.\[&_\.input-icon-left\]\:left-\[0\.75rem\] .input-icon-left {
  left: 0.75rem;
}

.\[&_\.input-icon-right\]\:right-\[0\.75rem\] .input-icon-right {
  right: 0.75rem;
}

.\[&_\.input-icon-left\]\:text-\[var\(--color-neutral-text-secondary\)\] .input-icon-left {
  color: var(--color-neutral-text-secondary);
}

.\[&_\.input-icon-right\]\:text-\[var\(--color-neutral-text-secondary\)\] .input-icon-right {
  color: var(--color-neutral-text-secondary);
}
```

---

## Shape Component Safelist (28 classes)

```
bg-[var(--color-secondary-main)]
border-[var(--color-neutral-border)]
rounded-[var(--radius-none)]
aspect-[var(--aspect-video)]
rounded-[var(--radius-sm)]
aspect-[var(--aspect-video)]
rounded-[var(--radius-md)]
aspect-[var(--aspect-video)]
rounded-[var(--radius-lg)]
aspect-[var(--aspect-video)]
rounded-[var(--radius-xl)]
aspect-[var(--aspect-video)]
rounded-[var(--radius-full)]
aspect-[var(--aspect-video)]
w-[4rem]
h-[4rem]
text-[0.875rem]
w-[6rem]
h-[6rem]
text-[1rem]
w-[8rem]
h-[8rem]
text-[1.125rem]
```

### Shape CSS Output

```css
/* Shape Base */
.bg-\[var\(--color-secondary-main\)\] {
  background-color: var(--color-secondary-main);
}

.border-\[var\(--color-neutral-border\)\] {
  border-color: var(--color-neutral-border);
}

/* Shape Variants */
.rounded-\[var\(--radius-none\)\] {
  border-radius: var(--radius-none);
}

.rounded-\[var\(--radius-sm\)\] {
  border-radius: var(--radius-sm);
}

.rounded-\[var\(--radius-md\)\] {
  border-radius: var(--radius-md);
}

.rounded-\[var\(--radius-lg\)\] {
  border-radius: var(--radius-lg);
}

.rounded-\[var\(--radius-xl\)\] {
  border-radius: var(--radius-xl);
}

.rounded-\[var\(--radius-full\)\] {
  border-radius: var(--radius-full);
}

.aspect-\[var\(--aspect-video\)\] {
  aspect-ratio: var(--aspect-video);
}
```

---

## Text Component Safelist (26 classes)

```
text-[0.875rem]
font-[400]
leading-[1.25rem]
tracking-[0em]
text-[1rem]
font-[500]
leading-[1.5rem]
tracking-[0em]
text-[1.125rem]
font-[600]
leading-[1.75rem]
tracking-[-0.025em]
text-[1.5rem]
font-[700]
leading-[2rem]
tracking-[0em]
text-[2rem]
font-[800]
leading-[2.5rem]
tracking[-0.025em]
text-left
text-center
text-right
text-justify
truncate
whitespace-nowrap
```

### Text CSS Output

```css
/* Text Alignments */
.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-justify {
  text-align: justify;
}

/* Text Utilities */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.whitespace-nowrap {
  white-space: nowrap;
}
```

---

## Complete Tailwind Configuration

```javascript
// Tailwind CSS v4 Safelist Configuration
// Generated from component contracts
// Total: 152 classes

export default {
  safelist: [
    // Button Component (46 classes)
    'bg-[var(--color-primary-main)]',
    'text-[var(--color-primary-contrast)]',
    'hover:bg-[var(--color-primary-hover)]',
    'focus:ring-[var(--color-primary-focus)]',
    'focus:ring-[2px]',
    'focus:ring-offset-[2px]',
    'bg-[var(--color-secondary-main)]',
    'text-[var(--color-secondary-contrast)]',
    'hover:bg-[var(--color-secondary-hover)]',
    'focus:ring-[var(--color-secondary-focus)]',
    'bg-[var(--color-transparent)]',
    'border-[var(--color-neutral-border)]',
    'text-[var(--color-neutral-text)]',
    'hover:bg-[var(--color-neutral-bg)]',
    'text-[var(--color-neutral-text)]',
    'hover:bg-[var(--color-secondary-main)]',
    'focus:ring-[var(--color-secondary-focus)]',
    'bg-[var(--color-danger-main)]',
    'text-[var(--color-danger-contrast)]',
    'hover:bg-[var(--color-danger-hover)]',
    'focus:ring-[var(--color-danger-focus)]',
    'h-[2rem]',
    'px-[0.75rem]',
    'text-[0.875rem]',
    'h-[2.5rem]',
    'px-[1rem]',
    'text-[0.9375rem]',
    'h-[3rem]',
    'px-[1.5rem]',
    'text-[1rem]',
    'rounded-[var(--radius-md)]',
    'font-[500]',
    '[transition:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter_200ms_cubic-bezier(0.4,_0,_0.2,_1)]',
    'disabled:opacity-[0.5]',
    'disabled:cursor-[not-allowed]',
    '[&_.button-icon-left]:mr-[0.5rem]',
    '[&_.button-icon-right]:ml-[0.5rem]',
    '[&_.button-loader]:border-[2px]',
    '[&_.button-loader]:h-[16px]',
    '[&_.button-loader]:w-[16px]',
    'focus:ring-[2px]',
    'focus:ring-offset-[2px]',
    
    // Input Component (52 classes)
    'bg-[var(--color-neutral-bg-surface)]',
    'border-[var(--color-neutral-border)]',
    'text-[var(--color-neutral-text)]',
    'placeholder:text-[var(--color-neutral-text-secondary)]',
    'hover:border-[var(--color-neutral-text)]',
    'hover:bg-[var(--color-neutral-bg)]',
    'focus:border-[var(--color-primary-focus)]',
    'focus:ring-[var(--color-primary-focus)]',
    'bg-[var(--color-transparent)]',
    'border-[var(--color-transparent)]',
    'text-[var(--color-neutral-text)]',
    'placeholder:text-[var(--color-neutral-text-secondary)]',
    'hover:border-[var(--color-neutral-text)]',
    'focus:border-[var(--color-primary-focus)]',
    'focus:ring-[var(--color-primary-focus)]',
    'bg-[var(--color-neutral-bg-surface)]',
    'border-[var(--color-neutral-border)]',
    'text-[var(--color-neutral-text)]',
    'placeholder:text-[var(--color-neutral-text-secondary)]',
    'hover:border-[var(--color-neutral-text)]',
    'focus:border-[var(--color-primary-focus)]',
    'focus:ring-[var(--color-primary-focus)]',
    'bg-[var(--color-neutral-bg-surface)]',
    'border-b-[var(--color-neutral-border)]',
    'text-[var(--color-neutral-text)]',
    'placeholder:text-[var(--color-neutral-text-secondary)]',
    'hover:border-b-[var(--color-neutral-text)]',
    'focus:border-b-[var(--color-primary-focus)]',
    'focus:ring-[var(--color-primary-focus)]',
    '![border-[var(--color-danger-main)]]',
    '![ring-[var(--color-danger-focus)]]',
    '![border-b-[var(--color-danger-main)]]',
    'h-[2rem]',
    'px-[0.75rem]',
    'text-[0.875rem]',
    'h-[2.5rem]',
    'px-[1rem]',
    'text-[0.9375rem]',
    'h-[3rem]',
    'px-[1.5rem]',
    'text-[1rem]',
    'rounded-[var(--radius-md)]',
    '[transition:color,_background-color,_border-color,_text-decoration-color,_fill,_stroke,_opacity,_box-shadow,_transform,_filter,_backdrop-filter_200ms_cubic-bezier(0.4,_0,_0.2,_1)]',
    'disabled:opacity-[0.5]',
    'disabled:cursor-[not-allowed]',
    'pl-[0.75rem]',
    'pr-[0.75rem]',
    '[&_.input-icon-left]:left-[0.75rem]',
    '[&_.input-icon-right]:right-[0.75rem]',
    '[&_.input-icon-left]:text-[var(--color-neutral-text-secondary)]',
    '[&_.input-icon-right]:text-[var(--color-neutral-text-secondary)]',
    
    // Shape Component (28 classes)
    'bg-[var(--color-secondary-main)]',
    'border-[var(--color-neutral-border)]',
    'rounded-[var(--radius-none)]',
    'aspect-[var(--aspect-video)]',
    'rounded-[var(--radius-sm)]',
    'aspect-[var(--aspect-video)]',
    'rounded-[var(--radius-md)]',
    'aspect-[var(--aspect-video)]',
    'rounded-[var(--radius-lg)]',
    'aspect-[var(--aspect-video)]',
    'rounded-[var(--radius-xl)]',
    'aspect-[var(--aspect-video)]',
    'rounded-[var(--radius-full)]',
    'aspect-[var(--aspect-video)]',
    'w-[4rem]',
    'h-[4rem]',
    'text-[0.875rem]',
    'w-[6rem]',
    'h-[6rem]',
    'text-[1rem]',
    'w-[8rem]',
    'h-[8rem]',
    'text-[1.125rem]',
    
    // Text Component (26 classes)
    'text-[0.875rem]',
    'font-[400]',
    'leading-[1.25rem]',
    'tracking-[0em]',
    'text-[1rem]',
    'font-[500]',
    'leading-[1.5rem]',
    'tracking-[0em]',
    'text-[1.125rem]',
    'font-[600]',
    'leading-[1.75rem]',
    'tracking-[-0.025em]',
    'text-[1.5rem]',
    'font-[700]',
    'leading-[2rem]',
    'tracking-[0em]',
    'text-[2rem]',
    'font-[800]',
    'leading-[2.5rem]',
    'tracking[-0.025em]',
    'text-left',
    'text-center',
    'text-right',
    'text-justify',
    'truncate',
    'whitespace-nowrap',
  ],
};
```

---

## Usage Instructions

1. **Copy the configuration** above and paste it into your `tailwind.config.js` file
2. **Build your project** to generate the CSS with all safelisted classes
3. **Update the safelist** whenever you modify component contracts or design tokens

## Important Notes

- Safelist classes are generated from component contracts and design tokens
- These classes ensure that dynamic/arbitrary Tailwind classes are not purged during build
- Tailwind CSS v4 uses a different configuration format than v3
- The safelist prevents JIT mode from removing classes that are dynamically generated