import React from 'react';
import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';
import { Fill } from './components/Fill';
import { Stroke } from './components/Stroke';
import { StrokeWidth } from './components/StrokeWidth';
import { PracticalExamples } from './components/PracticalExamples';

export default function SVGPage() {
  return (
    <PageLayout>
      <PageHeader
        title="SVG"
        description="Tailwind CSS v4 SVG utilities for styling SVG elements with fill, stroke, and stroke-width properties. Create scalable, responsive icons and graphics."
      />

      <ExampleSection
        title="Fill"
        description="Control the fill color of SVG elements using fill utilities. Includes color options, opacity levels, fill-none for outline styles, current-color for inheritance, hover states, and gradient fills."
      >
        <Fill />
      </ExampleSection>

      <ExampleSection
        title="Stroke"
        description="Control the stroke color of SVG elements using stroke utilities. Includes color options, opacity levels, current-color for inheritance, hover states, and combinations with fill colors."
      >
        <Stroke />
      </ExampleSection>

      <ExampleSection
        title="Stroke Width"
        description="Control the stroke width of SVG elements using stroke-width utilities. Values range from 0 to 8, allowing for fine-tuned control over line thickness."
      >
        <StrokeWidth />
      </ExampleSection>

      <ExampleSection
        title="Practical Examples"
        description="Real-world SVG patterns including interactive icons, outline icons, two-tone icons, animated icons, SVG with text, SVG buttons, and SVG logos with various styling combinations."
      >
        <PracticalExamples />
      </ExampleSection>
    </PageLayout>
  );
}