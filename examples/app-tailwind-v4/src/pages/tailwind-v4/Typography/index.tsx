import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';
import { FontFamily } from './components/FontFamily';
import { FontSize } from './components/FontSize';
import { FontWeight } from './components/FontWeight';
import { LineHeight } from './components/LineHeight';
import { TextAlign } from './components/TextAlign';
import { TextDecoration } from './components/TextDecoration';
import { TextTransform } from './components/TextTransform';
import { TextOverflow } from './components/TextOverflow';
import { PracticalExamples } from './components/PracticalExamples';

export function TypographyPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Typography Utilities" 
        description="Comprehensive typography utilities for controlling font family, size, weight, and text styling." 
      />

      <div className="space-y-12">
        <ExampleSection 
          title="Font Family" 
          description="Control the font family of text elements."
        >
          <FontFamily />
        </ExampleSection>

        <ExampleSection 
          title="Font Size" 
          description="Control the font size of text elements with responsive and fluid typography."
        >
          <FontSize />
        </ExampleSection>

        <ExampleSection 
          title="Font Weight" 
          description="Control the font weight of text elements."
        >
          <FontWeight />
        </ExampleSection>

        <ExampleSection 
          title="Line Height" 
          description="Control the line height of text elements for better readability."
        >
          <LineHeight />
        </ExampleSection>

        <ExampleSection 
          title="Text Align" 
          description="Control the alignment of text within its container."
        >
          <TextAlign />
        </ExampleSection>

        <ExampleSection 
          title="Text Decoration" 
          description="Control text decoration styles including underline, overline, and line-through."
        >
          <TextDecoration />
        </ExampleSection>

        <ExampleSection 
          title="Text Transform" 
          description="Control text capitalization with uppercase, lowercase, and capitalize."
        >
          <TextTransform />
        </ExampleSection>

        <ExampleSection 
          title="Text Overflow" 
          description="Control how text overflow is handled with truncation and wrapping."
        >
          <TextOverflow />
        </ExampleSection>

        <ExampleSection 
          title="Practical Examples" 
          description="Real-world typography patterns for common use cases."
        >
          <PracticalExamples />
        </ExampleSection>
      </div>
    </PageLayout>
  );
}