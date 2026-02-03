import React from 'react';
import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';
import { Hover } from './components/Hover';
import { Focus } from './components/Focus';
import { Active } from './components/Active';
import { Disabled } from './components/Disabled';
import { Group } from './components/Group';
import { Peer } from './components/Peer';
import { PracticalExamples } from './components/PracticalExamples';

export default function InteractivityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Interactivity"
        description="Tailwind CSS v4 interactivity utilities for creating responsive and engaging user interfaces with hover, focus, active, disabled, group, and peer states."
      />

      <ExampleSection
        title="Hover"
        description="Apply styles when an element is hovered over. Use for color changes, scaling, shadows, translations, opacity, rotation, borders, and text color changes."
      >
        <Hover />
      </ExampleSection>

      <ExampleSection
        title="Focus"
        description="Apply styles when an element is focused. Use for color changes, rings, shadows, scaling, borders, opacity, and input styling. Essential for keyboard navigation."
      >
        <Focus />
      </ExampleSection>

      <ExampleSection
        title="Active"
        description="Apply styles when an element is being activated (clicked). Use for color changes, scaling, shadows, translations, opacity, borders, text color, and rotation effects."
      >
        <Active />
      </ExampleSection>

      <ExampleSection
        title="Disabled"
        description="Apply styles to disabled elements. Use for color changes, opacity, cursor styling, borders, and form element states. Important for indicating unavailable actions."
      >
        <Disabled />
      </ExampleSection>

      <ExampleSection
        title="Group"
        description="Style child elements based on the parent's hover state using group and group-hover. Perfect for cards, image overlays, button groups, icon containers, list items, navigation, and product cards."
      >
        <Group />
      </ExampleSection>

      <ExampleSection
        title="Peer"
        description="Style sibling elements based on the state of another element using peer and peer-hover, peer-focus, peer-invalid, peer-checked, peer-focus-within, peer-disabled, and peer-required."
      >
        <Peer />
      </ExampleSection>

      <ExampleSection
        title="Practical Examples"
        description="Real-world interactivity patterns including interactive cards, button groups, forms, navigation, icon buttons, lists, toggles, and dropdowns with combined hover, focus, active, and group states."
      >
        <PracticalExamples />
      </ExampleSection>
    </PageLayout>
  );
}