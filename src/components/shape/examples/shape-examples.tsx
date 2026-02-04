import { Shape } from '../base/shape-base';

export const ShapeVariantExamples = () => (
  <div className="flex flex-wrap gap-4 items-center">
    <div className="flex flex-col items-center gap-2">
      <Shape variant="box" size="md">Box</Shape>
      <span className="text-sm text-neutral-500">Box</span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <Shape variant="square" size="md" className="bg-blue-100 text-blue-800">Sq</Shape>
      <span className="text-sm text-neutral-500">Square</span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <Shape variant="circle" size="md" className="bg-green-100 text-green-800">Ci</Shape>
      <span className="text-sm text-neutral-500">Circle</span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <Shape variant="pill" size="md" className="bg-purple-100 text-purple-800 px-4">Pill Shape</Shape>
      <span className="text-sm text-neutral-500">Pill</span>
    </div>
  </div>
);

export const ShapeSizeExamples = () => (
  <div className="flex flex-wrap items-end gap-4">
    <div className="flex flex-col items-center gap-2">
      <Shape size="sm" variant="square">SM</Shape>
      <span className="text-sm text-neutral-500">sm (32px)</span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <Shape size="md" variant="square">MD</Shape>
      <span className="text-sm text-neutral-500">md (48px)</span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <Shape size="lg" variant="square">LG</Shape>
      <span className="text-sm text-neutral-500">lg (64px)</span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <Shape size="xl" variant="square">XL</Shape>
      <span className="text-sm text-neutral-500">xl (96px)</span>
    </div>
  </div>
);
