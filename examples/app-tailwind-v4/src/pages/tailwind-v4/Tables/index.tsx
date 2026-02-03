import React from 'react';
import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';
import { TableLayout } from './components/TableLayout';
import { BorderCollapse } from './components/BorderCollapse';
import { CaptionSide } from './components/CaptionSide';
import { PracticalExamples } from './components/PracticalExamples';

export default function TablesPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Tables"
        description="Tailwind CSS v4 table utilities for styling and structuring tabular data with borders, spacing, and layout options."
      />

      <ExampleSection
        title="Table Layout"
        description="Basic table structure with proper thead, tbody, and tr elements. Use width utilities to control column sizing."
      >
        <TableLayout />
      </ExampleSection>

      <ExampleSection
        title="Border Collapse"
        description="Control how table borders are displayed. Use border-collapse to merge borders or border-separate to keep them separate."
      >
        <BorderCollapse />
      </ExampleSection>

      <ExampleSection
        title="Caption Side"
        description="Position table captions at the top or bottom of the table using caption-top or caption-bottom utilities."
      >
        <CaptionSide />
      </ExampleSection>

      <ExampleSection
        title="Practical Examples"
        description="Real-world table patterns including striped rows, hover effects, compact layouts, bordered tables, responsive tables, and action columns."
      >
        <PracticalExamples />
      </ExampleSection>
    </PageLayout>
  );
}