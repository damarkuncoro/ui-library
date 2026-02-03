import { PageLayout } from '../../../components/common/page-layout';
import { PageHeader } from '../../../components/common/page-header';
import { ExampleSection } from '../../../components/common/example-section';

export function LayoutPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Layout Utilities" 
        description="Comprehensive layout utilities for controlling element positioning, sizing, and display behavior." 
      />

      <div className="space-y-12">
        <ExampleSection 
          title="Aspect Ratio" 
          description="Control the aspect ratio of an element."
        >
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-video bg-blue-500 rounded-lg flex items-center justify-center text-white font-medium">
              16:9
            </div>
            <div className="aspect-square bg-green-500 rounded-lg flex items-center justify-center text-white font-medium">
              1:1
            </div>
            <div className="aspect-[4/3] bg-purple-500 rounded-lg flex items-center justify-center text-white font-medium">
              4:3
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Columns" 
          description="Create multi-column layouts for text content."
        >
          <div className="columns-2 gap-4 text-sm text-neutral-text">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Break After / Before / Inside" 
          description="Control how content breaks across pages or columns."
        >
          <div className="columns-2 gap-4 text-sm">
            <div className="break-after-column bg-blue-100 p-4 rounded mb-4">
              <p className="font-medium mb-2">Break After Column</p>
              <p>This content will force a column break after this element.</p>
            </div>
            <div className="break-before-column bg-green-100 p-4 rounded mb-4">
              <p className="font-medium mb-2">Break Before Column</p>
              <p>This content will force a column break before this element.</p>
            </div>
            <div className="break-inside-avoid bg-purple-100 p-4 rounded">
              <p className="font-medium mb-2">Break Inside Avoid</p>
              <p>This content will not be split across columns.</p>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Box Decoration Break" 
          description="Control how box decorations (borders, padding, backgrounds) are rendered across fragment breaks."
        >
          <div className="columns-2 gap-4">
            <div className="box-decoration-clone bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded text-white mb-4">
              <p className="font-medium">Clone</p>
              <p className="text-sm">Decorations clone across fragments</p>
            </div>
            <div className="box-decoration-slice bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded text-white">
              <p className="font-medium">Slice</p>
              <p className="text-sm">Decorations slice across fragments</p>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Box Sizing" 
          description="Control how the total width and height of an element is calculated."
        >
          <div className="flex gap-4">
            <div className="box-border w-32 h-32 p-4 border-4 border-blue-500 bg-blue-100">
              <p className="font-medium text-sm">Box Border</p>
              <p className="text-xs">Border included in width</p>
            </div>
            <div className="box-content w-32 h-32 p-4 border-4 border-green-500 bg-green-100">
              <p className="font-medium text-sm">Box Content</p>
              <p className="text-xs">Border excluded from width</p>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Display" 
          description="Control the display behavior of elements."
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="block bg-blue-100 p-4 rounded">
              <p className="font-medium mb-2">Block</p>
              <div className="block bg-blue-200 p-2 rounded mb-2">Block 1</div>
              <div className="block bg-blue-200 p-2 rounded">Block 2</div>
            </div>
            <div className="inline-block bg-green-100 p-4 rounded">
              <p className="font-medium mb-2">Inline Block</p>
              <div className="inline-block bg-green-200 p-2 rounded mr-2">Inline 1</div>
              <div className="inline-block bg-green-200 p-2 rounded">Inline 2</div>
            </div>
            <div className="flex bg-purple-100 p-4 rounded">
              <p className="font-medium mb-2 mr-4">Flex</p>
              <div className="flex gap-2">
                <div className="bg-purple-200 p-2 rounded w-8 h-8"></div>
                <div className="bg-purple-200 p-2 rounded w-8 h-8"></div>
                <div className="bg-purple-200 p-2 rounded w-8 h-8"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 bg-orange-100 p-4 rounded">
              <p className="font-medium col-span-3 mb-2">Grid</p>
              <div className="bg-orange-200 p-2 rounded h-8"></div>
              <div className="bg-orange-200 p-2 rounded h-8"></div>
              <div className="bg-orange-200 p-2 rounded h-8"></div>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Float & Clear" 
          description="Control element floating and clearing behavior."
        >
          <div className="bg-neutral-bg-surface p-4 rounded border border-neutral-border">
            <div className="float-left w-24 h-24 bg-blue-500 rounded-lg mr-4 mb-4 flex items-center justify-center text-white">
              Float Left
            </div>
            <div className="float-right w-24 h-24 bg-green-500 rounded-lg ml-4 mb-4 flex items-center justify-center text-white">
              Float Right
            </div>
            <p className="text-sm text-neutral-text">
              This text wraps around the floated elements. Float allows elements to be positioned to the left or right of their container, with text and inline elements wrapping around them.
            </p>
            <div className="clear-both mt-4 pt-4 border-t border-neutral-border">
              <p className="text-sm text-neutral-text-secondary">Cleared content below floats</p>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Isolation" 
          description="Control whether an element creates a new stacking context."
        >
          <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden">
            <div className="isolate absolute top-4 left-4 w-20 h-20 bg-blue-500 rounded-lg z-10 flex items-center justify-center text-white">
              Isolate
            </div>
            <div className="absolute top-8 left-8 w-20 h-20 bg-red-500 rounded-lg z-0 flex items-center justify-center text-white">
              Behind
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Object Fit & Position" 
          description="Control how replaced elements (images, videos) are sized and positioned."
        >
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Cover</p>
              <div className="w-full h-24 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 object-cover"></div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Contain</p>
              <div className="w-full h-24 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-16 h-16 mx-auto my-4 bg-gradient-to-br from-green-400 to-green-600 object-contain"></div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Fill</p>
              <div className="w-full h-24 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 object-fill"></div>
              </div>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Overflow" 
          description="Control how content that exceeds the container bounds is handled."
        >
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Overflow Auto</p>
              <div className="w-full h-24 overflow-auto bg-gray-100 rounded-lg p-2">
                <p className="text-xs">Scrollable content that overflows the container. Use the scrollbar to see more content.</p>
                <p className="text-xs mt-2">More content here...</p>
                <p className="text-xs mt-2">Even more content...</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Overflow Hidden</p>
              <div className="w-full h-24 overflow-hidden bg-gray-100 rounded-lg p-2">
                <p className="text-xs">This content is clipped when it overflows the container.</p>
                <p className="text-xs mt-2">You won't see this part...</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Overflow Scroll</p>
              <div className="w-full h-24 overflow-scroll bg-gray-100 rounded-lg p-2">
                <p className="text-xs">Always show scrollbars regardless of content.</p>
                <p className="text-xs mt-2">More content here...</p>
              </div>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Overscroll Behavior" 
          description="Control how scroll chaining and overscroll gestures work."
        >
          <div className="space-y-4">
            <div className="overscroll-contain w-full h-32 overflow-auto bg-gray-100 rounded-lg p-4 border-2 border-blue-300">
              <p className="text-sm font-medium mb-2">Overscroll Contain</p>
              <p className="text-xs">Scroll chaining is prevented at this boundary.</p>
              <p className="text-xs mt-2">Scroll down to see the effect...</p>
              <p className="text-xs mt-2">Keep scrolling...</p>
              <p className="text-xs mt-2">Almost there...</p>
              <p className="text-xs mt-2">Bottom reached!</p>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Position" 
          description="Control how an element is positioned in the document flow."
        >
          <div className="relative h-48 bg-gray-100 rounded-lg p-4">
            <div className="absolute top-4 left-4 w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs">
              Absolute
            </div>
            <div className="relative top-8 left-8 w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center text-white text-xs">
              Relative
            </div>
            <div className="fixed bottom-4 right-4 w-20 h-20 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xs shadow-lg">
              Fixed
            </div>
            <div className="sticky top-0 w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xs ml-32">
              Sticky
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Top / Right / Bottom / Left" 
          description="Control the positioning of elements with position utilities."
        >
          <div className="relative h-40 bg-gray-100 rounded-lg">
            <div className="absolute top-2 left-2 w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs">
              Top Left
            </div>
            <div className="absolute top-2 right-2 w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white text-xs">
              Top Right
            </div>
            <div className="absolute bottom-2 left-2 w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xs">
              Bottom Left
            </div>
            <div className="absolute bottom-2 right-2 w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xs">
              Bottom Right
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Visibility" 
          description="Control the visibility of elements."
        >
          <div className="flex gap-4">
            <div className="visible bg-blue-100 p-4 rounded">
              <p className="font-medium text-sm">Visible</p>
              <p className="text-xs">This element is visible</p>
            </div>
            <div className="invisible bg-green-100 p-4 rounded">
              <p className="font-medium text-sm">Invisible</p>
              <p className="text-xs">This element is invisible but takes up space</p>
            </div>
            <div className="hidden bg-purple-100 p-4 rounded">
              <p className="font-medium text-sm">Hidden</p>
              <p className="text-xs">This element is hidden and doesn't take up space</p>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection 
          title="Z-Index" 
          description="Control the stacking order of positioned elements."
        >
          <div className="relative h-40 bg-gray-100 rounded-lg p-4">
            <div className="absolute top-4 left-4 w-24 h-24 bg-blue-500 rounded-lg flex items-center justify-center text-white z-10">
              Z-10
            </div>
            <div className="absolute top-8 left-8 w-24 h-24 bg-green-500 rounded-lg flex items-center justify-center text-white z-20">
              Z-20
            </div>
            <div className="absolute top-12 left-12 w-24 h-24 bg-purple-500 rounded-lg flex items-center justify-center text-white z-30">
              Z-30
            </div>
            <div className="absolute top-16 left-16 w-24 h-24 bg-orange-500 rounded-lg flex items-center justify-center text-white z-40">
              Z-40
            </div>
          </div>
        </ExampleSection>
      </div>
    </PageLayout>
  );
}