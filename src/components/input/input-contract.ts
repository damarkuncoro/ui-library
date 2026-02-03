import { ReactNode } from 'react';

// --- CONTRACT DEFINITION ---
// Defines the API for the Input component.

export const inputContractDef = {
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
  ]
} as const;

// --- TYPE INFERENCE ---

type ExtractValues<T, Name> = T extends ReadonlyArray<infer U>
  ? U extends { name: Name, values: ReadonlyArray<infer V> } ? V : never : never;

export type InputVariant = ExtractValues<typeof inputContractDef.variants, "variant">;
export type InputSize = ExtractValues<typeof inputContractDef.variants, "size">;

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
