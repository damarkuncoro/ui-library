import { HTMLAttributes, ReactNode } from 'react';

// --- CONTRACT DEFINITION (SSOT) ---
// Defined as a TypeScript Object with `as const` for strict type inference.

export const shapeContractDef = {
  id: "contract_shape_v1",
  name: "shape",
  category: "ui.component",
  description: "A primitive component for creating various geometric shapes",
  variants: [
    {
      name: "variant",
      type: "visual",
      values: ["square", "circle", "pill", "box"],
      defaultValue: "box",
      description: "Geometric shape variant"
    },
    {
      name: "size",
      type: "size",
      values: ["sm", "md", "lg", "xl", "full"],
      defaultValue: "md",
      description: "Size of the shape"
    }
  ],
  props: [
    { name: "children", type: "object", required: false },
  ]
} as const;

// --- AUTOMATIC TYPE INFERENCE UTILITIES ---
// DRY: Deriving types directly from the Contract Object.

type ExtractValues<T, Name> = T extends ReadonlyArray<infer U>
  ? U extends { name: Name, values: ReadonlyArray<infer V> } ? V : never : never;

/**
 * Shape variant types derived from contract definition.
 * @example "square" | "circle" | "pill" | "box"
 */
export type ShapeVariant = ExtractValues<typeof shapeContractDef.variants, "variant">;

/**
 * Shape size types derived from contract definition.
 * @example "sm" | "md" | "lg" | "xl" | "full"
 */
export type ShapeSize = ExtractValues<typeof shapeContractDef.variants, "size">;

// --- INTERFACE CONTRACT ---
// Extends HTML Div + Derived Types

export interface ShapeContract extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the shape.
   */
  children?: ReactNode;

  /**
   * Geometric variant of the shape.
   * Derived from contract definition.
   */
  variant?: ShapeVariant;

  /**
   * Size of the shape.
   * Derived from contract definition.
   */
  size?: ShapeSize;
}
