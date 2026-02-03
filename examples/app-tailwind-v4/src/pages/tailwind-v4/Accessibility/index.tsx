import React from 'react';
import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';
import { ScreenReaderOnly } from './components/ScreenReaderOnly';
import { FocusVisible } from './components/FocusVisible';
import { FocusWithin } from './components/FocusWithin';
import { FocusRing } from './components/FocusRing';
import { NotSrOnly } from './components/NotSrOnly';
import { PracticalExamples } from './components/PracticalExamples';

export default function AccessibilityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Accessibility"
        description="Tailwind CSS v4 accessibility utilities for creating inclusive interfaces with screen reader support, focus management, and keyboard navigation."
      />

      <ExampleSection
        title="Screen Reader Only"
        description="Hide content visually while keeping it available to screen readers using the sr-only utility. Perfect for providing context to assistive technologies."
      >
        <ScreenReaderOnly />
      </ExampleSection>

      <ExampleSection
        title="Focus Visible"
        description="Apply styles only when an element is focused via keyboard navigation using focus-visible. Helps distinguish between mouse and keyboard focus."
      >
        <FocusVisible />
      </ExampleSection>

      <ExampleSection
        title="Focus Within"
        description="Apply styles to a parent element when any of its children are focused using focus-within. Useful for highlighting form groups and input containers."
      >
        <FocusWithin />
      </ExampleSection>

      <ExampleSection
        title="Focus Ring"
        description="Add visible focus rings to interactive elements for better keyboard navigation. Customize with different colors, sizes, offsets, and opacity levels."
      >
        <FocusRing />
      </ExampleSection>

      <ExampleSection
        title="Not Screen Reader Only"
        description="Make content visible to both screen readers and visual users using not-sr-only. Useful for showing content that was previously hidden."
      >
        <NotSrOnly />
      </ExampleSection>

      <ExampleSection
        title="Practical Examples"
        description="Real-world accessibility patterns including accessible buttons, forms, links, cards, navigation, icon buttons, status indicators, alerts, modal triggers, and tables."
      >
        <PracticalExamples />
      </ExampleSection>
    </PageLayout>
  );
}