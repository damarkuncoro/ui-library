// ============================================================================
// TAILWIND CSS V4 SAFELIST GENERATION
// ============================================================================
// This file contains the generated safelist classes and their CSS output
// Generated from component contracts

import { generateButtonSafelist } from '@damarkuncoro/ui-library/utils/tailwind/safelist/button';
import { generateInputSafelist } from '@damarkuncoro/ui-library/utils/tailwind/safelist/input';
import { generateShapeSafelist } from '@damarkuncoro/ui-library/utils/tailwind/safelist/shape';
import { generateTextSafelist } from '@damarkuncoro/ui-library/utils/tailwind/safelist/text';

// ============================================================================
// SAFELIST CLASSES
// ============================================================================

export const safelistClasses = {
  button: generateButtonSafelist(),
  input: generateInputSafelist(),
  shape: generateShapeSafelist(),
  text: generateTextSafelist(),
};

export const allSafelistClasses = [
  ...safelistClasses.button,
  ...safelistClasses.input,
  ...safelistClasses.shape,
  ...safelistClasses.text,
];

// ============================================================================
// TAILWIND CONFIGURATION
// ============================================================================

export const tailwindConfig = `// Tailwind CSS v4 Safelist Configuration
// Generated from component contracts
// Total: ${allSafelistClasses.length} classes

export default {
  safelist: [
${allSafelistClasses.map(c => `    '${c}',`).join('\n')}
  ],
};`;

// ============================================================================
// GENERATED CSS OUTPUT
// ============================================================================

export const generatedCSS = `/* ============================================================================
   GENERATED CSS FROM SAFELIST
   Total: ${allSafelistClasses.length} classes
   ============================================================================ */

/* ============================================================================
   BUTTON COMPONENT SAFELIST CSS
   Classes: ${safelistClasses.button.length}
   ============================================================================ */

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
.rounded-\\[var\\(--radius-md\\)\\] {
  border-radius: var(--radius-md);
}

/* Font Weight */
.font-\\[500\\] {
  font-weight: 500;
}

/* Transition */
.\\[transition\\:color\\,_background-color\\,_border-color\\,_text-decoration-color\\,_fill\\,_stroke\\,_opacity\\,_box-shadow\\,_transform\\,_filter\\,_backdrop-filter_200ms_cubic-bezier\\(0\\.4\\,_0\\,_0\\.2\\,_1\\)\\] {
  transition: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Focus States */
.focus\\:outline-none:focus {
  outline: none;
}

/* Disabled States */
.disabled\\:opacity-\\[0\\.5\\]:disabled {
  opacity: 0.5;
}

.disabled\\:cursor-\\[not-allowed\\]:disabled {
  cursor: not-allowed;
}

/* Child Elements - Icons */
.\\[&_\\.button-icon-left\\]\\:mr-\\[0\\.5rem\\] .button-icon-left {
  margin-right: 0.5rem;
}

.\\[&_\\.button-icon-right\\]\\:ml-\\[0\\.5rem\\] .button-icon-right {
  margin-left: 0.5rem;
}

/* Child Elements - Loader */
.\\[&_\\.button-loader\\]\\:animate-spin .button-loader {
  animation: spin 1s linear infinite;
}

.\\[&_\\.button-loader\\]\\:border-\\[2px\\] .button-loader {
  border-width: 2px;
}

.\\[&_\\.button-loader\\]\\:border-current .button-loader {
  border-color: currentColor;
}

.\\[&_\\.button-loader\\]\\:border-t-transparent .button-loader {
  border-top-color: transparent;
}

.\\[&_\\.button-loader\\]\\:rounded-full .button-loader {
  border-radius: 9999px;
}

.\\[&_\\.button-loader\\]\\:h-\\[16px\\] .button-loader {
  height: 16px;
}

.\\[&_\\.button-loader\\]\\:w-\\[16px\\] .button-loader {
  width: 16px;
}

/* Primary Variant */
.bg-\\[var\\(--color-primary-main\\)\\] {
  background-color: var(--color-primary-main);
}

.text-\\[var\\(--color-primary-contrast\\)\\] {
  color: var(--color-primary-contrast);
}

.hover\\:bg-\\[var\\(--color-primary-hover\\)\\]:hover {
  background-color: var(--color-primary-hover);
}

.focus\\:ring-\\[var\\(--color-primary-focus\\)\\]:focus {
  --tw-ring-color: var(--color-primary-focus);
}

.focus\\:ring-\\[2px\\]:focus {
  --tw-ring-width: 2px;
}

.focus\\:ring-offset-\\[2px\\]:focus {
  --tw-ring-offset-width: 2px;
}

/* Size - Medium */
.h-\\[3rem\\] {
  height: 3rem;
}

.p-\\[0_1\\.5rem\\] {
  padding: 0 1.5rem;
}

.text-\\[1rem\\] {
  font-size: 1rem;
}

/* ============================================================================
   INPUT COMPONENT SAFELIST CSS
   Classes: ${safelistClasses.input.length}
   ============================================================================ */

/* Input Base Styles */
.border-\\[var\\(--color-neutral-border\\)\\] {
  border-color: var(--color-neutral-border);
}

.bg-\\[var\\(--color-neutral-bg-surface\\)\\] {
  background-color: var(--color-neutral-bg-surface);
}

.text-\\[var\\(--color-neutral-text\\)\\] {
  color: var(--color-neutral-text);
}

.placeholder\\:text-\\[var\\(--color-neutral-text-secondary\\)\\]::placeholder {
  color: var(--color-neutral-text-secondary);
}

/* Input States */
.hover\\:border-\\[var\\(--color-neutral-text\\)\\]:hover {
  border-color: var(--color-neutral-text);
}

.focus\\:border-\\[var\\(--color-primary-focus\\)\\]:focus {
  border-color: var(--color-primary-focus);
}

.focus\\:ring-\\[var\\(--color-primary-focus\\)\\]:focus {
  --tw-ring-color: var(--color-primary-focus);
}

/* Input Icons */
.\\[&_\\.input-icon-left\\]\\:left-\\[0\\.75rem\\] .input-icon-left {
  left: 0.75rem;
}

.\\[&_\\.input-icon-right\\]\\:right-\\[0\\.75rem\\] .input-icon-right {
  right: 0.75rem;
}

.\\[&_\\.input-icon-left\\]\\:text-\\[var\\(--color-neutral-text-secondary\\)\\] .input-icon-left {
  color: var(--color-neutral-text-secondary);
}

.\\[&_\\.input-icon-right\\]\\:text-\\[var\\(--color-neutral-text-secondary\\)\\] .input-icon-right {
  color: var(--color-neutral-text-secondary);
}

/* ============================================================================
   SHAPE COMPONENT SAFELIST CSS
   Classes: ${safelistClasses.shape.length}
   ============================================================================ */

/* Shape Base */
.bg-\\[var\\(--color-secondary-main\\)\\] {
  background-color: var(--color-secondary-main);
}

.border-\\[var\\(--color-neutral-border\\)\\] {
  border-color: var(--color-neutral-border);
}

/* Shape Variants */
.rounded-\\[var\\(--radius-none\\)\\] {
  border-radius: var(--radius-none);
}

.rounded-\\[var\\(--radius-sm\\)\\] {
  border-radius: var(--radius-sm);
}

.rounded-\\[var\\(--radius-md\\)\\] {
  border-radius: var(--radius-md);
}

.rounded-\\[var\\(--radius-lg\\)\\] {
  border-radius: var(--radius-lg);
}

.rounded-\\[var\\(--radius-xl\\)\\] {
  border-radius: var(--radius-xl);
}

.rounded-\\[var\\(--radius-full\\)\\] {
  border-radius: var(--radius-full);
}

.aspect-\\[var\\(--aspect-video\\)\\] {
  aspect-ratio: var(--aspect-video);
}

/* ============================================================================
   TEXT COMPONENT SAFELIST CSS
   Classes: ${safelistClasses.text.length}
   ============================================================================ */

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

/* ============================================================================
   SUMMARY
   ============================================================================
   Total Safelist Classes: ${allSafelistClasses.length}
   - Button: ${safelistClasses.button.length} classes
   - Input: ${safelistClasses.input.length} classes
   - Shape: ${safelistClasses.shape.length} classes
   - Text: ${safelistClasses.text.length} classes
   ============================================================================ */`;

// ============================================================================
// CONSOLE OUTPUT
// ============================================================================

export function logSafelistInfo() {
  console.log('='.repeat(80));
  console.log('TAILWIND CSS V4 SAFELIST GENERATION');
  console.log('='.repeat(80));
  console.log('');
  console.log('Total Classes:', allSafelistClasses.length);
  console.log('');
  console.log('Breakdown:');
  console.log(`  - Button: ${safelistClasses.button.length} classes`);
  console.log(`  - Input: ${safelistClasses.input.length} classes`);
  console.log(`  - Shape: ${safelistClasses.shape.length} classes`);
  console.log(`  - Text: ${safelistClasses.text.length} classes`);
  console.log('');
  console.log('='.repeat(80));
  console.log('SAFELIST CLASSES');
  console.log('='.repeat(80));
  console.log('');
  
  allSafelistClasses.forEach((cls, index) => {
    console.log(`${index + 1}. ${cls}`);
  });
  
  console.log('');
  console.log('='.repeat(80));
  console.log('TAILWIND CONFIGURATION');
  console.log('='.repeat(80));
  console.log('');
  console.log(tailwindConfig);
}