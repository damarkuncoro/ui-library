import React from 'react';
import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';
import { TransitionProperty } from './components/TransitionProperty';
import { TransitionDuration } from './components/TransitionDuration';
import { TransitionTimingFunction } from './components/TransitionTimingFunction';
import { TransitionDelay } from './components/TransitionDelay';
import { PracticalExamples } from './components/PracticalExamples';

export default function TransitionsPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Transitions"
        description="Tailwind CSS v4 transition utilities for creating smooth animations and state changes with control over properties, duration, timing functions, and delays."
      />

      <ExampleSection
        title="Transition Property"
        description="Control which CSS properties are animated. Use transition-all for all properties, or specify individual properties like color, opacity, shadow, or transform."
      >
        <TransitionProperty />
      </ExampleSection>

      <ExampleSection
        title="Transition Duration"
        description="Control how long a transition takes to complete. Values range from 75ms to 1000ms, with 300ms being the default."
      >
        <TransitionDuration />
      </ExampleSection>

      <ExampleSection
        title="Transition Timing Function"
        description="Control the acceleration curve of a transition. Choose from linear, ease-in, ease-out, ease-in-out, or custom cubic-bezier functions."
      >
        <TransitionTimingFunction />
      </ExampleSection>

      <ExampleSection
        title="Transition Delay"
        description="Control when a transition starts. Values range from 75ms to 1000ms, useful for creating staggered animations."
      >
        <TransitionDelay />
      </ExampleSection>

      <ExampleSection
        title="Practical Examples"
        description="Real-world transition patterns including button hover effects, card hover effects, link animations, input focus states, modal transitions, staggered animations, complex transitions, and tooltip effects."
      >
        <PracticalExamples />
      </ExampleSection>
    </PageLayout>
  );
}
