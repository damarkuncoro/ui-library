import React from 'react';
import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';
import { Spin } from './components/Spin';
import { Ping } from './components/Ping';
import { Pulse } from './components/Pulse';
import { Bounce } from './components/Bounce';
import { PracticalExamples } from './components/PracticalExamples';

export default function AnimationPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Animation"
        description="Tailwind CSS v4 animation utilities for creating smooth, performant animations including spin, ping, pulse, and bounce effects."
      />

      <ExampleSection
        title="Spin"
        description="Create a spinning animation, perfect for loading indicators. Customize with different sizes, border widths, colors, and animation durations."
      >
        <Spin />
      </ExampleSection>

      <ExampleSection
        title="Ping"
        description="Create a ping animation that radiates outward from an element, ideal for notification indicators and status badges."
      >
        <Ping />
      </ExampleSection>

      <ExampleSection
        title="Pulse"
        description="Create a subtle pulsing animation that fades an element in and out, useful for drawing attention to important elements."
      >
        <Pulse />
      </ExampleSection>

      <ExampleSection
        title="Bounce"
        description="Create a bouncing animation that moves an element up and down, perfect for attention-grabbing elements and icons."
      >
        <Bounce />
      </ExampleSection>

      <ExampleSection
        title="Practical Examples"
        description="Real-world animation patterns including loading states, notification indicators, status indicators, button loading, skeleton loading, progress indicators, attention grabbers, icon animations, and combined animations."
      >
        <PracticalExamples />
      </ExampleSection>
    </PageLayout>
  );
}