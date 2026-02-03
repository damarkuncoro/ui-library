import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';

export function FlexboxPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Flexbox Utilities" 
        description="Comprehensive flexbox utilities for creating flexible, responsive layouts." 
      />

      <div className="space-y-12">
        <ExampleSection 
          title="Flex Direction" 
          description="Control the direction of flex items."
        >
          <div className="space-y-4">
            <div className="flex flex-row gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-sm">1</div>
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-sm">2</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-sm">3</div>
            </div>
            <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-sm">1</div>
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-sm">2</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-sm">3</div>
            </div>
            <div className="flex flex-row-reverse gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-sm">1</div>
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-sm">2</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-sm">3</div>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Flex Wrap" 
          description="Control whether flex items wrap onto multiple lines."
        >
          <div className="space-y-4">
            <div className="flex flex-nowrap gap-2 bg-gray-100 p-4 rounded-lg overflow-hidden">
              <div className="w-20 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs shrink-0">No Wrap</div>
              <div className="w-20 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs shrink-0">Item 2</div>
              <div className="w-20 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs shrink-0">Item 3</div>
              <div className="w-20 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs shrink-0">Item 4</div>
            </div>
            <div className="flex flex-wrap gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="w-20 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Wrap</div>
              <div className="w-20 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">Item 2</div>
              <div className="w-20 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">Item 3</div>
              <div className="w-20 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">Item 4</div>
              <div className="w-20 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">Item 5</div>
            </div>
            <div className="flex flex-wrap-reverse gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="w-20 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Wrap Rev</div>
              <div className="w-20 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">Item 2</div>
              <div className="w-20 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">Item 3</div>
              <div className="w-20 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">Item 4</div>
              <div className="w-20 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">Item 5</div>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Justify Content" 
          description="Control how flex items are distributed along the main axis."
        >
          <div className="space-y-4">
            <div className="flex justify-start gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Start</div>
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
            </div>
            <div className="flex justify-center gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Center</div>
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
            </div>
            <div className="flex justify-end gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">End</div>
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
            </div>
            <div className="flex justify-between gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Between</div>
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
            </div>
            <div className="flex justify-around gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Around</div>
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
            </div>
            <div className="flex justify-evenly gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Evenly</div>
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Align Items" 
          description="Control how flex items are aligned along the cross axis."
        >
          <div className="space-y-4">
            <div className="flex items-start gap-2 bg-gray-100 p-4 rounded-lg h-32">
              <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Start</div>
              <div className="w-12 h-16 bg-green-500 rounded flex items-center justify-center text-white text-xs">Tall</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg h-32">
              <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Center</div>
              <div className="w-12 h-16 bg-green-500 rounded flex items-center justify-center text-white text-xs">Tall</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
            </div>
            <div className="flex items-end gap-2 bg-gray-100 p-4 rounded-lg h-32">
              <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">End</div>
              <div className="w-12 h-16 bg-green-500 rounded flex items-center justify-center text-white text-xs">Tall</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
            </div>
            <div className="flex items-stretch gap-2 bg-gray-100 p-4 rounded-lg h-32">
              <div className="w-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Stretch</div>
              <div className="w-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="w-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Align Content" 
          description="Control how flex lines are distributed along the cross axis when there's extra space."
        >
          <div className="space-y-4">
            <div className="flex flex-wrap content-start gap-2 bg-gray-100 p-4 rounded-lg h-40">
              <div className="w-16 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Start</div>
              <div className="w-16 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="w-16 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
              <div className="w-16 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">4</div>
              <div className="w-16 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">5</div>
            </div>
            <div className="flex flex-wrap content-center gap-2 bg-gray-100 p-4 rounded-lg h-40">
              <div className="w-16 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Center</div>
              <div className="w-16 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="w-16 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
              <div className="w-16 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">4</div>
              <div className="w-16 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">5</div>
            </div>
            <div className="flex flex-wrap content-end gap-2 bg-gray-100 p-4 rounded-lg h-40">
              <div className="w-16 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">End</div>
              <div className="w-16 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="w-16 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
              <div className="w-16 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">4</div>
              <div className="w-16 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">5</div>
            </div>
            <div className="flex flex-wrap content-between gap-2 bg-gray-100 p-4 rounded-lg h-40">
              <div className="w-16 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Between</div>
              <div className="w-16 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="w-16 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
              <div className="w-16 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">4</div>
              <div className="w-16 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">5</div>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Align Self" 
          description="Override the align-items value for individual flex items."
        >
          <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg h-32">
            <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Auto</div>
            <div className="w-12 h-16 self-start bg-green-500 rounded flex items-center justify-center text-white text-xs">Start</div>
            <div className="w-12 h-12 self-center bg-purple-500 rounded flex items-center justify-center text-white text-xs">Center</div>
            <div className="w-12 h-10 self-end bg-orange-500 rounded flex items-center justify-center text-white text-xs">End</div>
            <div className="w-12 self-stretch bg-pink-500 rounded flex items-center justify-center text-white text-xs">Stretch</div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Flex Grow" 
          description="Control how much a flex item should grow relative to other items."
        >
          <div className="space-y-4">
            <div className="flex gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="flex-grow-0 w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">0</div>
              <div className="flex-grow w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">1</div>
              <div className="flex-grow w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
            </div>
            <div className="flex gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="flex-grow-0 w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">0</div>
              <div className="flex-grow-2 w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="flex-grow w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Flex Shrink" 
          description="Control how much a flex item should shrink relative to other items."
        >
          <div className="flex gap-2 bg-gray-100 p-4 rounded-lg overflow-hidden">
            <div className="flex-shrink-0 w-32 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs shrink-0">0 (No shrink)</div>
            <div className="flex-shrink w-32 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">1</div>
            <div className="flex-shrink w-32 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1</div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Flex Basis" 
          description="Set the initial size of a flex item before free space is distributed."
        >
          <div className="flex gap-2 bg-gray-100 p-4 rounded-lg">
            <div className="flex-basis-0 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">0</div>
            <div className="flex-basis-1/4 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">1/4</div>
            <div className="flex-basis-1/2 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">1/2</div>
            <div className="flex-basis-auto h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">Auto</div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Flex Shorthand" 
          description="Combine grow, shrink, and basis in a single property."
        >
          <div className="space-y-4">
            <div className="flex gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="flex-1 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">flex-1</div>
              <div className="flex-1 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">flex-1</div>
              <div className="flex-1 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">flex-1</div>
            </div>
            <div className="flex gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="flex-none w-20 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">flex-none</div>
              <div className="flex-auto h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">flex-auto</div>
              <div className="flex-initial w-20 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">flex-initial</div>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Gap" 
          description="Control the space between flex items."
        >
          <div className="space-y-4">
            <div className="flex gap-2 bg-gray-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">gap-2</div>
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
            </div>
            <div className="flex gap-4 bg-gray-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">gap-4</div>
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
            </div>
            <div className="flex gap-8 bg-gray-100 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">gap-8</div>
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Order" 
          description="Control the visual order of flex items."
        >
          <div className="flex gap-2 bg-gray-100 p-4 rounded-lg">
            <div className="order-3 w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">1</div>
            <div className="order-1 w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-xs">2</div>
            <div className="order-2 w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white text-xs">3</div>
            <div className="order-last w-12 h-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">Last</div>
            <div className="order-first w-12 h-12 bg-pink-500 rounded flex items-center justify-center text-white text-xs">First</div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Practical Examples" 
          description="Real-world flexbox layout patterns."
        >
          <div className="space-y-6">
            {/* Navigation Bar */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm font-medium mb-3 text-neutral-text">Navigation Bar</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded"></div>
                  <span className="text-sm font-medium">Logo</span>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-6 bg-gray-300 rounded"></div>
                  <div className="w-16 h-6 bg-gray-300 rounded"></div>
                  <div className="w-16 h-6 bg-gray-300 rounded"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded"></div>
                </div>
              </div>
            </div>

            {/* Card Grid */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm font-medium mb-3 text-neutral-text">Card Grid</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-full h-20 bg-blue-200 rounded mb-3"></div>
                  <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-full h-20 bg-green-200 rounded mb-3"></div>
                  <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-full h-20 bg-purple-200 rounded mb-3"></div>
                  <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>

            {/* Centered Content */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm font-medium mb-3 text-neutral-text">Centered Content</p>
              <div className="flex items-center justify-center h-24 bg-white rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                  Centered
                </div>
              </div>
            </div>

            {/* Space Between */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm font-medium mb-3 text-neutral-text">Space Between Elements</p>
              <div className="flex justify-between items-center">
                <div className="w-12 h-12 bg-blue-500 rounded"></div>
                <div className="w-12 h-12 bg-green-500 rounded"></div>
                <div className="w-12 h-12 bg-purple-500 rounded"></div>
              </div>
            </div>
          </div>
        </ExampleSection>
      </div>
    </PageLayout>
  );
}