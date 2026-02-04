import { ContractEntity } from '@damarkuncoro/meta-architecture';
import { ReactNode } from 'react';

// --- CONTRACT DEFINITION ---
// Defined as a TypeScript Object with `as const` for strict type inference.
// Used for both runtime validation (via Meta Architecture) and compile-time types.

const schema = {
  id: "contract_input_v1",
  name: "input",
  category: "ui.component",
  description: "A text input component with support for icons and variants",
  variants: [
    {
      name: "variant",
      type: "intent",
      values: ["outline", "filled", "flushed"],
      defaultValue: "outline",
      description: "Visual style of the input"
    },
    {
      name: "size",
      type: "size",
      values: ["sm", "md", "lg"],
      defaultValue: "md",
      description: "Size of the input"
    },
    {
      name: "isInvalid",
      type: "boolean",
      defaultValue: false,
      description: "Whether the input is invalid"
    },
    {
      name: "inputClassName",
      type: "string",
      defaultValue: "",
      description: "Custom class name for input element styling"
    },
    {
      name: "wrapperStyle",
      type: "object",
      defaultValue: null,
      description: "Custom inline styles for wrapper element"
    }
  ],
  props: [
    { name: "value", type: "string", required: false },
    { name: "onChange", type: "function", required: false },
    { name: "placeholder", type: "string", required: false },
    { name: "type", type: "string", required: false, defaultValue: "text" },
    { name: "label", type: "string", required: false },
    { name: "helperText", type: "string", required: false },
    { name: "error", type: "boolean", required: false },
    { name: "disabled", type: "boolean", required: false },
    { name: "readOnly", type: "boolean", required: false },
    { name: "leftIcon", type: "object", required: false },
    { name: "rightIcon", type: "object", required: false }
  ]
} as const;

// Export the Runtime Entity
export const inputContract = ContractEntity.create(schema as unknown as Parameters<typeof ContractEntity.create>[0]);

// Export the Schema for Types (Backward Compatibility)
export const inputContractDef = schema;

// --- TYPE INFERENCE ---

type ExtractValues<T, Name> = T extends ReadonlyArray<infer U>
  ? U extends { name: Name, values: ReadonlyArray<infer V> } ? V : never : never;

export type InputVariant = ExtractValues<typeof schema.variants, "variant">;
export type InputSize = ExtractValues<typeof schema.variants, "size">;

// --- INTERFACE ---

export interface InputContract extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  size?: InputSize;
  isInvalid?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  inputClassName?: string;
  wrapperStyle?: React.CSSProperties;
}
