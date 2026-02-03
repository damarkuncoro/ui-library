import React from 'react';
import { PageLayout } from '../../components/common/page-layout';
import { PageHeader } from '../../components/common/page-header';
import { ExampleSection } from '../../components/common/example-section';
import { Blur } from './components/Blur';
import { Brightness } from './components/Brightness';
import { Contrast } from './components/Contrast';
import { Grayscale } from './components/Grayscale';
import { HueRotate } from './components/HueRotate';
import { Saturate } from './components/Saturate';
import { Sepia } from './components/Sepia';
import { Invert } from './components/Invert';
import { DropShadow } from './components/DropShadow';
import { PracticalExamples } from './components/PracticalExamples';

export default function FiltersPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Filters"
        description="Tailwind CSS v4 filter utilities for applying visual effects like blur, brightness, contrast, and more to elements."
      />

      <ExampleSection
        title="Blur"
        description="Apply blur effects to elements using the blur utilities. Includes backdrop-blur for blurring the area behind an element."
      >
        <Blur />
      </ExampleSection>

      <ExampleSection
        title="Brightness"
        description="Adjust the brightness of an element. Values below 100% make it darker, values above 100% make it brighter."
      >
        <Brightness />
      </ExampleSection>

      <ExampleSection
        title="Contrast"
        description="Adjust the contrast of an element. Values below 100% reduce contrast, values above 100% increase it."
      >
        <Contrast />
      </ExampleSection>

      <ExampleSection
        title="Grayscale"
        description="Convert an element to grayscale. Use 0 to remove the effect or default to apply full grayscale."
      >
        <Grayscale />
      </ExampleSection>

      <ExampleSection
        title="Hue Rotate"
        description="Rotate the hue of an element. Useful for creating color shifts and artistic effects."
      >
        <HueRotate />
      </ExampleSection>

      <ExampleSection
        title="Saturate"
        description="Adjust the saturation of an element. Values below 100% desaturate, values above 100% increase saturation."
      >
        <Saturate />
      </ExampleSection>

      <ExampleSection
        title="Sepia"
        description="Apply a sepia tone to an element, giving it a vintage brownish look."
      >
        <Sepia />
      </ExampleSection>

      <ExampleSection
        title="Invert"
        description="Invert the colors of an element. Useful for creating negative effects or dark mode transitions."
      >
        <Invert />
      </ExampleSection>

      <ExampleSection
        title="Drop Shadow"
        description="Apply drop shadows to elements. Unlike box-shadow, drop-shadow follows the outline of the element including transparent areas."
      >
        <DropShadow />
      </ExampleSection>

      <ExampleSection
        title="Practical Examples"
        description="Real-world examples combining multiple filter utilities for common UI patterns."
      >
        <PracticalExamples />
      </ExampleSection>
    </PageLayout>
  );
}