/**
 * Button Component Examples
 *
 * This file demonstrates all the variations and use cases of the button component.
 * You can use this as a reference or copy examples into your application.
 */

import React from 'react';
import { ButtonTailwind } from '../skins/button-skin-tailwind';
import { ButtonNative } from '../skins/button-skin-native';

// ============================================================================
// VARIANT EXAMPLES
// ============================================================================

export function ButtonVariantExamples() {
  return (
    <div className="flex gap-4 flex-wrap">
      <ButtonTailwind variant="primary">Primary</ButtonTailwind>
      <ButtonTailwind variant="secondary">Secondary</ButtonTailwind>
      <ButtonTailwind variant="outline">Outline</ButtonTailwind>
      <ButtonTailwind variant="ghost">Ghost</ButtonTailwind>
      <ButtonTailwind variant="danger">Danger</ButtonTailwind>
    </div>
  );
}

// ============================================================================
// SIZE EXAMPLES
// ============================================================================

export function ButtonSizeExamples() {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <ButtonTailwind size="sm">Small</ButtonTailwind>
      <ButtonTailwind size="md">Medium</ButtonTailwind>
      <ButtonTailwind size="lg">Large</ButtonTailwind>
    </div>
  );
}

// ============================================================================
// ICON EXAMPLES
// ============================================================================

export function ButtonIconExamples() {
  return (
    <div className="flex gap-4 flex-wrap">
      <ButtonTailwind leftIcon={<span>←</span>}>Back</ButtonTailwind>
      <ButtonTailwind rightIcon={<span>→</span>}>Next</ButtonTailwind>
      <ButtonTailwind 
        leftIcon={<span>✓</span>}
        rightIcon={<span>↓</span>}
      >
        Confirm
      </ButtonTailwind>
    </div>
  );
}

// ============================================================================
// STATE EXAMPLES
// ============================================================================

export function ButtonStateExamples() {
  return (
    <div className="flex gap-4 flex-wrap">
      <ButtonTailwind>Normal</ButtonTailwind>
      <ButtonTailwind disabled>Disabled</ButtonTailwind>
      <ButtonTailwind isLoading>Loading...</ButtonTailwind>
    </div>
  );
}

// ============================================================================
// COMBINED EXAMPLES
// ============================================================================

export function ButtonCombinedExamples() {
  return (
    <div className="space-y-4">
      {/* Primary with different sizes */}
      <div className="flex gap-4 items-center flex-wrap">
        <ButtonTailwind variant="primary" size="sm">Small Primary</ButtonTailwind>
        <ButtonTailwind variant="primary" size="md">Medium Primary</ButtonTailwind>
        <ButtonTailwind variant="primary" size="lg">Large Primary</ButtonTailwind>
      </div>

      {/* Secondary with icons */}
      <div className="flex gap-4 flex-wrap">
        <ButtonTailwind variant="secondary" leftIcon={<span>+</span>}>Add</ButtonTailwind>
        <ButtonTailwind variant="secondary" rightIcon={<span>✕</span>}>Close</ButtonTailwind>
      </div>

      {/* Outline with states */}
      <div className="flex gap-4 flex-wrap">
        <ButtonTailwind variant="outline">Normal</ButtonTailwind>
        <ButtonTailwind variant="outline" disabled>Disabled</ButtonTailwind>
        <ButtonTailwind variant="outline" isLoading>Loading...</ButtonTailwind>
      </div>

      {/* Danger with icons */}
      <div className="flex gap-4 flex-wrap">
        <ButtonTailwind variant="danger" leftIcon={<span>⚠</span>}>Warning</ButtonTailwind>
        <ButtonTailwind variant="danger" rightIcon={<span>🗑</span>}>Delete</ButtonTailwind>
      </div>
    </div>
  );
}

// ============================================================================
// NATIVE SKIN EXAMPLES
// ============================================================================

export function ButtonNativeSkinExamples() {
  return (
    <div className="space-y-4">
      <div className="flex gap-4 flex-wrap">
        <ButtonNative variant="primary">Primary Native</ButtonNative>
        <ButtonNative variant="secondary">Secondary Native</ButtonNative>
        <ButtonNative variant="outline">Outline Native</ButtonNative>
        <ButtonNative variant="ghost">Ghost Native</ButtonNative>
        <ButtonNative variant="danger">Danger Native</ButtonNative>
      </div>

      <div className="flex gap-4 items-center flex-wrap">
        <ButtonNative size="sm">Small</ButtonNative>
        <ButtonNative size="md">Medium</ButtonNative>
        <ButtonNative size="lg">Large</ButtonNative>
      </div>

      <div className="flex gap-4 flex-wrap">
        <ButtonNative leftIcon={<span>←</span>}>Back</ButtonNative>
        <ButtonNative rightIcon={<span>→</span>}>Next</ButtonNative>
      </div>

      <div className="flex gap-4 flex-wrap">
        <ButtonNative disabled>Disabled</ButtonNative>
        <ButtonNative isLoading>Loading...</ButtonNative>
      </div>
    </div>
  );
}

// ============================================================================
// INTERACTIVE EXAMPLES
// ============================================================================

export function ButtonInteractiveExamples() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCount(c => c + 1);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center flex-wrap">
        <ButtonTailwind onClick={() => alert('Clicked!')}>
          Click Me
        </ButtonTailwind>
        <ButtonTailwind 
          isLoading={isLoading}
          onClick={handleClick}
        >
          {isLoading ? 'Loading...' : `Click to increment (${count})`}
        </ButtonTailwind>
      </div>

      <div className="flex gap-4 items-center flex-wrap">
        <ButtonTailwind 
          variant="danger"
          onClick={() => {
            if (confirm('Are you sure?')) {
              alert('Deleted!');
            }
          }}
        >
          Delete with Confirmation
        </ButtonTailwind>
      </div>
    </div>
  );
}

// ============================================================================
// ACCESSIBILITY EXAMPLES
// ============================================================================

export function ButtonAccessibilityExamples() {
  return (
    <div className="space-y-4">
      <div className="flex gap-4 flex-wrap">
        <ButtonTailwind aria-label="Close dialog">
          ✕
        </ButtonTailwind>
        <ButtonTailwind aria-describedby="help-text">
          Submit
        </ButtonTailwind>
      </div>
      <p id="help-text" className="text-sm text-gray-600">
        This button submits the form
      </p>
    </div>
  );
}

// ============================================================================
// CUSTOM STYLING EXAMPLES
// ============================================================================

export function ButtonCustomStylingExamples() {
  return (
    <div className="space-y-4">
      <div className="flex gap-4 flex-wrap">
        <ButtonTailwind className="shadow-lg">
          With Shadow
        </ButtonTailwind>
        <ButtonTailwind className="rounded-full">
          Rounded Full
        </ButtonTailwind>
        <ButtonTailwind className="w-full">
          Full Width
        </ButtonTailwind>
      </div>

      <div className="flex gap-4 items-center flex-wrap">
        <ButtonTailwind 
          style={{ 
            backgroundColor: '#8B5CF6',
            color: 'white',
            borderRadius: '8px',
          }}
        >
          Custom Style
        </ButtonTailwind>
      </div>
    </div>
  );
}

// ============================================================================
// ALL EXAMPLES TOGETHER
// ============================================================================

export function AllButtonExamples() {
  return (
    <div className="space-y-8 p-6">
      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Variants</h3>
        <ButtonVariantExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Sizes</h3>
        <ButtonSizeExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Icons</h3>
        <ButtonIconExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">States</h3>
        <ButtonStateExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Combined</h3>
        <ButtonCombinedExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Native Skin</h3>
        <ButtonNativeSkinExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Interactive</h3>
        <ButtonInteractiveExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Accessibility</h3>
        <ButtonAccessibilityExamples />
      </div>

      <div className="p-4 border rounded space-y-2">
        <h3 className="font-bold">Custom Styling</h3>
        <ButtonCustomStylingExamples />
      </div>
    </div>
  );
}