import React from 'react';
import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';
import { Scale } from './components/Scale';
import { Rotate } from './components/Rotate';
import { Translate } from './components/Translate';
import { Skew } from './components/Skew';
import { TransformOrigin } from './components/TransformOrigin';
import { PracticalExamples } from './components/PracticalExamples';

export default function TransformsPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Transforms"
        description="Tailwind CSS v4 transform utilities for scaling, rotating, translating, and skewing elements with control over transform origin."
      />

      <ExampleSection
        title="Scale"
        description="Control the size of elements using scale utilities. Scale individual axes (scale-x, scale-y) or both (scale). Values range from 0 to 150% with negative values for flipping."
      >
        <Scale />
      </ExampleSection>

      <ExampleSection
        title="Rotate"
        description="Rotate elements around their center point. Use rotate for 2D rotation, or rotate-x and rotate-y for 3D rotation. Values range from 0° to 180° with negative values for counter-clockwise rotation."
      >
        <Rotate />
      </ExampleSection>

      <ExampleSection
        title="Translate"
        description="Move elements along the X and Y axes. Use translate-x and translate-y with values from 0 to full. Negative values move in the opposite direction."
      >
        <Translate />
      </ExampleSection>

      <ExampleSection
        title="Skew"
        description="Skew elements along the X and Y axes to create slanted effects. Use skew-x and skew-y with values from 0° to 12°. Negative values skew in the opposite direction."
      >
        <Skew />
      </ExampleSection>

      <ExampleSection
        title="Transform Origin"
        description="Control the point around which transforms are applied. Options include center, top, bottom, left, right, and corner combinations (top-left, top-right, bottom-left, bottom-right)."
      >
        <TransformOrigin />
      </ExampleSection>

      <ExampleSection
        title="Practical Examples"
        description="Real-world transform patterns including button hover effects, card hover effects, icon animations, 3D card flips, image hover effects, loading spinners, combined transforms, and perspective 3D effects."
      >
        <PracticalExamples />
      </ExampleSection>
    </PageLayout>
  );
}