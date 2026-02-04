/**
 * Input Component Examples
 * 
 * This file demonstrates all the variations and use cases of the input component.
 * You can use this as a reference or copy examples into your application.
 */

import React from 'react';
import { InputTailwind as Input } from '../skins/input-skin-tailwind';
import { InputNative } from '../skins/input-skin-native';

// ============================================================================
// VARIANT EXAMPLES
// ============================================================================

export function InputVariantExamples() {
  return (
    <div className="space-y-4">
      <Input variant="outline" placeholder="Outline input" />
      <Input variant="filled" placeholder="Filled input" />
      <Input variant="flushed" placeholder="Flushed input" />
    </div>
  );
}

// ============================================================================
// SIZE EXAMPLES
// ============================================================================

export function InputSizeExamples() {
  return (
    <div className="space-y-4">
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  );
}

// ============================================================================
// ICON EXAMPLES
// ============================================================================

export function InputIconExamples() {
  return (
    <div className="space-y-4">
      <Input leftIcon={<span>🔍</span>} placeholder="Search..." />
      <Input rightIcon={<span>📅</span>} placeholder="Select date" />
      <Input 
        leftIcon={<span>👤</span>}
        rightIcon={<span>✓</span>}
        placeholder="Username"
      />
    </div>
  );
}

// ============================================================================
// STATE EXAMPLES
// ============================================================================

export function InputStateExamples() {
  return (
    <div className="space-y-4">
      <Input placeholder="Normal input" />
      <Input isInvalid placeholder="Invalid input" />
      <Input disabled placeholder="Disabled input" />
      <Input readOnly placeholder="Read only input" />
    </div>
  );
}

// ============================================================================
// COMBINED EXAMPLES
// ============================================================================

export function InputCombinedExamples() {
  return (
    <div className="space-y-4">
      {/* Outline with different sizes */}
      <div className="space-y-4">
        <Input variant="outline" size="sm" placeholder="Small outline" />
        <Input variant="outline" size="md" placeholder="Medium outline" />
        <Input variant="outline" size="lg" placeholder="Large outline" />
      </div>

      {/* Filled with icons */}
      <div className="space-y-4">
        <Input variant="filled" leftIcon={<span>📧</span>} placeholder="Email" />
        <Input variant="filled" rightIcon={<span>🔒</span>} placeholder="Password" />
      </div>

      {/* Flushed with states */}
      <div className="space-y-4">
        <Input variant="flushed" placeholder="Normal" />
        <Input variant="flushed" isInvalid placeholder="Invalid" />
        <Input variant="flushed" disabled placeholder="Disabled" />
      </div>

      {/* All variants with icons */}
      <div className="space-y-4">
        <Input variant="outline" leftIcon={<span>🔍</span>} placeholder="Search" />
        <Input variant="filled" leftIcon={<span>👤</span>} placeholder="Username" />
        <Input variant="flushed" rightIcon={<span>✓</span>} placeholder="Confirm" />
      </div>
    </div>
  );
}

// ============================================================================
// NATIVE SKIN EXAMPLES
// ============================================================================

export function InputNativeSkinExamples() {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <InputNative variant="outline" placeholder="Outline Native" />
        <InputNative variant="filled" placeholder="Filled Native" />
        <InputNative variant="flushed" placeholder="Flushed Native" />
      </div>

      <div className="space-y-4">
        <InputNative size="sm" placeholder="Small" />
        <InputNative size="md" placeholder="Medium" />
        <InputNative size="lg" placeholder="Large" />
      </div>

      <div className="space-y-4">
        <InputNative leftIcon={<span>🔍</span>} placeholder="Search" />
        <InputNative rightIcon={<span>📅</span>} placeholder="Date" />
      </div>

      <div className="space-y-4">
        <InputNative isInvalid placeholder="Invalid" />
        <InputNative disabled placeholder="Disabled" />
        <InputNative readOnly placeholder="Read only" />
      </div>
    </div>
  );
}

// ============================================================================
// INTERACTIVE EXAMPLES
// ============================================================================

export function InputInteractiveExamples() {
  const [value, setValue] = React.useState('');
  const [isInvalid, setIsInvalid] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsInvalid(e.target.value.length < 3 && e.target.value.length > 0);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <Input 
          value={value}
          onChange={handleChange}
          isInvalid={isInvalid}
          placeholder="Type at least 3 characters"
        />
        {isInvalid && <p className="text-sm text-red-600">Must be at least 3 characters</p>}
      </div>

      <div className="space-y-4">
        <Input 
          type="password"
          rightIcon={<span>👁</span>}
          placeholder="Password"
        />
      </div>
    </div>
  );
}

// ============================================================================
// ACCESSIBILITY EXAMPLES
// ============================================================================

export function InputAccessibilityExamples() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <Input 
          id="email"
          type="email"
          placeholder="your@email.com"
          aria-describedby="email-help"
        />
        <p id="email-help" className="text-sm text-gray-600">
          We'll never share your email with anyone else.
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="search" className="text-sm font-medium">Search</label>
        <Input 
          id="search"
          leftIcon={<span>🔍</span>}
          placeholder="Search..."
          aria-label="Search products"
        />
      </div>
    </div>
  );
}

// ============================================================================
// CUSTOM STYLING EXAMPLES
// ============================================================================

export function InputCustomStylingExamples() {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <Input className="shadow-lg" placeholder="With shadow" />
        <Input className="rounded-full" placeholder="Rounded full" />
        <Input className="w-full" placeholder="Full width" />
      </div>

      <div className="space-y-4">
        <Input 
          style={{ 
            backgroundColor: '#F3F4F6',
            borderColor: '#3B82F6',
          }}
          placeholder="Custom style"
        />
      </div>
    </div>
  );
}

// ============================================================================
// FORM EXAMPLES
// ============================================================================

export function FormExamples() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <Input 
          id="name"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <Input 
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">Password</label>
        <Input 
          id="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Submit
      </button>
    </form>
  );
}

// ============================================================================
// ALL EXAMPLES TOGETHER
// ============================================================================

export function AllInputExamples() {
  return (
    <div className="space-y-8 p-6">
      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Variants</h3>
        <InputVariantExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Sizes</h3>
        <InputSizeExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Icons</h3>
        <InputIconExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">States</h3>
        <InputStateExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Combined</h3>
        <InputCombinedExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Native Skin</h3>
        <InputNativeSkinExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Interactive</h3>
        <InputInteractiveExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Accessibility</h3>
        <InputAccessibilityExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Custom Styling</h3>
        <InputCustomStylingExamples />
      </div>

      <section>
        <h2 className="text-xl font-bold mb-4">Form</h2>
        <FormExamples />
      </section>
    </div>
  );
}