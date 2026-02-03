import { ExampleSection } from '../../../../components/common/example-section';

export function PositioningUtilities() {
  return (
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
  );
}
