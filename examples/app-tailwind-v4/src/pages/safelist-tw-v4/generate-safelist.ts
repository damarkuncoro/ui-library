/**
 * Safelist Generator Script
 * 
 * This script generates the complete safelist configuration and CSS output
 * for Tailwind CSS v4 based on component contracts.
 * 
 * Run with: npx tsx generate-safelist.ts
 */

// ============================================================================
// IMPORTS
// ============================================================================

import { generateButtonSafelist } from '@damarkuncoro/ui-library';
import { generateInputSafelist } from '@damarkuncoro/ui-library';
import { generateShapeSafelist } from '@damarkuncoro/ui-library';
import { generateTextSafelist } from '@damarkuncoro/ui-library';

// ============================================================================
// GENERATE SAFELIST CLASSES
// ============================================================================

const buttonClasses = generateButtonSafelist();
const inputClasses = generateInputSafelist();
const shapeClasses = generateShapeSafelist();
const textClasses = generateTextSafelist();

const allClasses = [
  ...buttonClasses,
  ...inputClasses,
  ...shapeClasses,
  ...textClasses,
];

// ============================================================================
// OUTPUT FUNCTIONS
// ============================================================================

function printHeader(title: string) {
  console.log('\n' + '='.repeat(80));
  console.log(title);
  console.log('='.repeat(80));
}

function printSection(title: string, classes: string[]) {
  console.log(`\n${title}`);
  console.log('-'.repeat(80));
  console.log(`Total: ${classes.length} classes\n`);
  classes.forEach((cls, index) => {
    console.log(`  ${index + 1}. ${cls}`);
  });
}

// ============================================================================
// MAIN OUTPUT
// ============================================================================

printHeader('TAILWIND CSS V4 SAFELIST GENERATION');

console.log('\n📊 SUMMARY');
console.log('-'.repeat(80));
console.log(`Total Classes: ${allClasses.length}`);
console.log(`  - Button: ${buttonClasses.length} classes`);
console.log(`  - Input: ${inputClasses.length} classes`);
console.log(`  - Shape: ${shapeClasses.length} classes`);
console.log(`  - Text: ${textClasses.length} classes`);

printSection('BUTTON COMPONENT SAFELIST', buttonClasses);
printSection('INPUT COMPONENT SAFELIST', inputClasses);
printSection('SHAPE COMPONENT SAFELIST', shapeClasses);
printSection('TEXT COMPONENT SAFELIST', textClasses);

printHeader('TAILWIND CONFIGURATION (tailwind.config.js)');

console.log(`
// Tailwind CSS v4 Safelist Configuration
// Generated from component contracts
// Total: ${allClasses.length} classes

export default {
  safelist: [
${allClasses.map(c => `    '${c}',`).join('\n')}
  ],
};`);

printHeader('GENERATED CSS OUTPUT');

console.log(`
/* ============================================================================
   GENERATED CSS FROM SAFELIST
   Total: ${allClasses.length} classes
   ============================================================================ */

/* ============================================================================
   BUTTON COMPONENT SAFELIST CSS
   Classes: ${buttonClasses.length}
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
   Classes: ${inputClasses.length}
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
   Classes: ${shapeClasses.length}
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
   Classes: ${textClasses.length}
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
   Total Safelist Classes: ${allClasses.length}
   - Button: ${buttonClasses.length} classes
   - Input: ${inputClasses.length} classes
   - Shape: ${shapeClasses.length} classes
   - Text: ${textClasses.length} classes
   ============================================================================ */`);

printHeader('END OF OUTPUT');
console.log('\n✅ Safelist generation complete!\n');