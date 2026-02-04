import { ContractEntity } from '@damarkuncoro/meta-architecture';
import { ReactNode, ButtonHTMLAttributes } from 'react';

// --- CONTRACT DEFINITION (SSOT) ---
// Defined as a TypeScript Object with `as const` for strict type inference.
// Used for both runtime validation (via Meta Architecture) and compile-time types.

const schema = {
  id: "contract_button_v1",
  name: "button",
  category: "ui.component",
  description: "A button component with various variants and sizes",
  variants: [
    {
      name: "variant",
      type: "intent",
      values: ["primary", "secondary", "outline", "ghost", "danger"],
      defaultValue: "primary",
      description: "Visual style of the button"
    },
    {
      name: "size",
      type: "size",
      values: ["sm", "md", "lg"],
      defaultValue: "md",
      description: "Size of the button"
    }
  ],
  props: [
    { name: "children", type: "object", required: true },
    { name: "isLoading", type: "boolean", required: false, defaultValue: false },
    { name: "leftIcon", type: "object", required: false },
    { name: "rightIcon", type: "object", required: false }
  ]
} as const;

// Export Runtime Entity
export const buttonContract = ContractEntity.create(schema as unknown as Parameters<typeof ContractEntity.create>[0]);

// Export Schema for Types (Backward Compatibility)
export const buttonContractDef = schema;

// --- AUTOMATIC TYPE INFERENCE UTILITIES ---
// DRY: Deriving types directly from the Contract Object.
//
// This utility type extracts the values array from a variant definition in the contract.
// It ensures that if the contract changes, the types automatically update.
//
// Example:
//   contract.variants = [{ name: "variant", values: ["primary", "secondary"] }]
//   ExtractValues<typeof contract.variants, "variant"> = "primary" | "secondary"
//
// How it works:
//   1. T extends ReadonlyArray<infer U> - Extract the array type
//   2. U extends { name: Name, values: ReadonlyArray<infer V> } - Find the variant by name
//   3. V - Extract the values array type
//
// This approach eliminates the need for manual type maintenance and ensures
// type safety across the entire component system.

type ExtractValues<T, Name> = T extends ReadonlyArray<infer U>
  ? U extends { name: Name, values: ReadonlyArray<infer V> } ? V : never : never;

/**
 * Button variant types derived from contract definition.
 * @example "primary" | "secondary" | "outline" | "ghost" | "danger"
 */
export type ButtonVariant = ExtractValues<typeof buttonContractDef.variants, "variant">;

/**
 * Button size types derived from contract definition.
 * @example "sm" | "md" | "lg"
 */
export type ButtonSize = ExtractValues<typeof buttonContractDef.variants, "size">;

// --- INTERFACE CONTRACT ---
// Extends HTML Button + Derived Types

export interface ButtonContract extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content of the button.
   */
  children: ReactNode;

  /**
   * Visual variant of the button.
   * Derived from contract definition.
   */
  variant?: ButtonVariant;

  /**
   * Size of the button.
   * Derived from contract definition.
   */
  size?: ButtonSize;

  /**
   * Custom horizontal padding.
   * Can be a number (Tailwind spacing scale) or string (CSS value).
   * Overrides the default padding defined by the size variant.
   */
  paddingX?: number | string;

  /**
   * Whether the button is in a loading state.
   */
  isLoading?: boolean;

  /**
   * Optional icon to display before the text.
   */
  leftIcon?: ReactNode;

  /**
   * Optional icon to display after the text.
   */
  rightIcon?: ReactNode;
}
