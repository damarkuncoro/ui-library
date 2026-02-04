/**
 * Button Meta-Architecture Builder Demo
 * 
 * This file demonstrates how to use the ButtonMetaArchitectureBuilder
 * to create button components following the Meta-Architecture pattern.
 */

import {
  ButtonMetaArchitectureBuilder,
  createButtonBuilder,
  buildButtonStructure,
  generateButtonCode,
  generateButtonSkin,
} from './button-meta-architecture-builder';

// ============================================================================
// EXAMPLE 1: Basic Usage
// ============================================================================

console.log('=== Example 1: Basic Usage ===\n');

// Create a builder with default configuration
const basicBuilder = createButtonBuilder();
const basicStructure = basicBuilder.build();

console.log('Component Metadata:');
console.log(JSON.stringify(basicStructure.metadata, null, 2));

console.log('\nContract Information:');
console.log(JSON.stringify(basicStructure.contract, null, 2));

console.log('\nSkin Contract Information:');
console.log(JSON.stringify(basicStructure.skinContract, null, 2));

// ============================================================================
// EXAMPLE 2: Custom Configuration
// ============================================================================

console.log('\n=== Example 2: Custom Configuration ===\n');

// Create a builder with custom configuration
const customBuilder = new ButtonMetaArchitectureBuilder()
  .withComponentName('MyCustomButton')
  .withClassPrefix('my-btn')
  .withAccessibility(true)
  .withKeyboardNavigation(true)
  .withLoadingState(true)
  .withIcons(true);

const customStructure = customBuilder.build();

console.log('Custom Component Metadata:');
console.log(JSON.stringify(customStructure.metadata, null, 2));

console.log('\nDOM Structure:');
console.log(JSON.stringify(customStructure.domStructure, null, 2));

console.log('\nAccessibility Features:');
console.log(JSON.stringify(customStructure.accessibility, null, 2));

// ============================================================================
// EXAMPLE 3: Generating Code Templates
// ============================================================================

console.log('\n=== Example 3: Generating Code Templates ===\n');

// Generate component code
const componentCode = generateButtonCode({
  componentName: 'PrimaryButton',
  classPrefix: 'primary-btn',
});

console.log('Generated Component Code:');
console.log('---');
console.log(componentCode);
console.log('---\n');

// Generate skin code
const skinCode = generateButtonSkin('Tailwind', {
  componentName: 'PrimaryButton',
  classPrefix: 'primary-btn',
});

console.log('Generated Skin Code (first 500 chars):');
console.log('---');
console.log(skinCode.substring(0, 500) + '...');
console.log('---\n');

// ============================================================================
// EXAMPLE 4: Factory Functions
// ============================================================================

console.log('\n=== Example 4: Factory Functions ===\n');

// Quick build structure
const quickStructure = buildButtonStructure({
  componentName: 'QuickButton',
});

console.log('Quick Build Structure:');
console.log(JSON.stringify(quickStructure.metadata, null, 2));

// ============================================================================
// EXAMPLE 5: Chaining Configuration
// ============================================================================

console.log('\n=== Example 5: Chaining Configuration ===\n');

const chainedBuilder = createButtonBuilder()
  .withComponentName('ChainedButton')
  .withAccessibility(true)
  .withKeyboardNavigation(true)
  .withLoadingState(true)
  .withIcons(true)
  .withClassPrefix('chained');

const chainedStructure = chainedBuilder.build();

console.log('Chained Builder Result:');
console.log(`Component: ${chainedStructure.metadata.name}`);
console.log(`Variants: ${chainedStructure.contract.variants.join(', ')}`);
console.log(`Sizes: ${chainedStructure.contract.sizes.join(', ')}`);
console.log(`Accessibility: ${chainedStructure.accessibility.ariaAttributes.length} ARIA attributes`);
console.log(`Keyboard Support: ${chainedStructure.accessibility.keyboardSupport.length} keys`);

// ============================================================================
// EXAMPLE 6: Accessibility Configuration
// ============================================================================

console.log('\n=== Example 6: Accessibility Configuration ===\n');

// With full accessibility
const fullAccessBuilder = createButtonBuilder({
  componentName: 'AccessibleButton',
  includeAccessibility: true,
  includeKeyboardNavigation: true,
});

const fullAccessStructure = fullAccessBuilder.build();

console.log('Full Accessibility Features:');
console.log(JSON.stringify(fullAccessStructure.accessibility, null, 2));

// Without accessibility
const noAccessBuilder = createButtonBuilder({
  componentName: 'MinimalButton',
  includeAccessibility: false,
  includeKeyboardNavigation: false,
});

const noAccessStructure = noAccessBuilder.build();

console.log('\nMinimal Accessibility Features:');
console.log(JSON.stringify(noAccessStructure.accessibility, null, 2));

// ============================================================================
// EXAMPLE 7: Type Generation
// ============================================================================

console.log('\n=== Example 7: Type Generation ===\n');

const typeBuilder = createButtonBuilder();
const typeStructure = typeBuilder.build();

console.log('Generated Types:');
console.log('---');
console.log(typeStructure.types.contract);
console.log('---');
console.log(typeStructure.types.props);
console.log('---\n');

// ============================================================================
// EXAMPLE 8: Real-World Usage Pattern
// ============================================================================

console.log('\n=== Example 8: Real-World Usage Pattern ===\n');

/**
 * Real-world example: Creating a custom button component
 */
function createCustomButtonComponent() {
  // Step 1: Configure the builder
  const builder = new ButtonMetaArchitectureBuilder()
    .withComponentName('BrandButton')
    .withClassPrefix('brand-btn')
    .withAccessibility(true)
    .withKeyboardNavigation(true)
    .withLoadingState(true)
    .withIcons(true);
  
  // Step 2: Build the structure
  const structure = builder.build();
  
  // Step 3: Generate code
  const componentCode = builder.generateCodeTemplate();
  const skinCode = builder.generateSkinTemplate('Tailwind');
  const testCode = builder.generateTestTemplate();
  
  // Step 4: Log results
  console.log('Created BrandButton Component:');
  console.log(`- Variants: ${structure.contract.variants.join(', ')}`);
  console.log(`- Sizes: ${structure.contract.sizes.join(', ')}`);
  console.log(`- Accessibility: ${structure.accessibility.ariaAttributes.length} ARIA attributes`);
  console.log(`- Code generated: ${componentCode.length} characters`);
  console.log(`- Skin code generated: ${skinCode.length} characters`);
  console.log(`- Test code generated: ${testCode.length} characters`);
  
  return {
    structure,
    componentCode,
    skinCode,
    testCode,
  };
}

createCustomButtonComponent();

// ============================================================================
// SUMMARY
// ============================================================================

console.log('\n=== Summary ===\n');
console.log('The ButtonMetaArchitectureBuilder provides:');
console.log('✅ Fluent API for configuration');
console.log('✅ Type-safe component generation');
console.log('✅ Automatic contract adherence');
console.log('✅ Code template generation');
console.log('✅ Accessibility feature management');
console.log('✅ DOM structure generation');
console.log('✅ TypeScript type inference');
console.log('\nAll examples completed successfully!');