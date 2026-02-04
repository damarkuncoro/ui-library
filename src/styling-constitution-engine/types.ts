/**
 * Styling Constitution Engine (SCE) - Type Definitions
 * Version: v0.1
 */

// ============================================================================
// CONSTITUTION TYPES
// ============================================================================

/**
 * Design constitution - single source of truth for all design tokens
 */
export interface Constitution {
  colors: Record<string, string>;
  spacing: Record<string, string>;
  sizing: Record<string, string>;
  fontSizes: Record<string, string>;
  fontWeights: Record<string, string>;
  lineHeights: Record<string, string>;
  letterSpacings: Record<string, string>;
  radius: Record<string, string>;
  borderWidths: Record<string, string>;
  shadows: Record<string, string>;
  opacity: Record<string, string>;
  zIndex: Record<string, string>;
  transitions: Record<string, string>;
  durations: Record<string, string>;
  easings: Record<string, string>;
  animations: Record<string, string>;
  transforms: Record<string, string>;
  scale: Record<string, string>;
  rotate: Record<string, string>;
  skew: Record<string, string>;
  translate: Record<string, string>;
  widths: Record<string, string>;
  heights: Record<string, string>;
  minWidths: Record<string, string>;
  maxWidths: Record<string, string>;
  minHeights: Record<string, string>;
  maxHeights: Record<string, string>;
  // Flexbox
  flexDirection: Record<string, string>;
  flexWrap: Record<string, string>;
  justifyContent: Record<string, string>;
  alignItems: Record<string, string>;
  alignContent: Record<string, string>;
  flexValues: Record<string, string>;
  flexGrow: Record<string, string>;
  flexShrink: Record<string, string>;
  order: Record<string, string>;
  // Grid
  gridTemplateColumns: Record<string, string>;
  gridTemplateRows: Record<string, string>;
  gap: Record<string, string>;
}

/**
 * Constitution version
 */
export interface ConstitutionVersion {
  major: number;
  minor: number;
  patch: number;
}

/**
 * Parsed constitution
 */
export interface ParsedConstitution {
  version: ConstitutionVersion;
  data: Constitution;
}

// ============================================================================
// CONTRACT TYPES
// ============================================================================

/**
 * Style contract - public API for styling
 */
export interface StyleContract {
  node: string;
  style: string[];
}

/**
 * Contract format: <property>-<token>
 */
export type Contract = string;

/**
 * Contract parts
 */
export interface ContractParts {
  property: string;
  token: string;
}

/**
 * Contract modifier (state, responsive, etc.)
 */
export interface ContractModifier {
  type: 'state' | 'responsive' | 'pseudo';
  value: string;
}

/**
 * Parsed contract with modifiers
 */
export interface ParsedContract {
  base: Contract;
  modifiers: ContractModifier[];
}

// ============================================================================
// VALIDATION TYPES
// ============================================================================

/**
 * Validation result
 */
export interface ValidationResult {
  valid: boolean;
  error?: string;
  contract?: string;
  details?: {
    reason?: string;
    suggestion?: string;
    availableTokens?: string[];
  };
}

/**
 * Batch validation result
 */
export interface BatchValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

/**
 * Validation error
 */
export interface ValidationError {
  code: string;
  class: string;
  reason: string;
  suggestion?: string;
}

// ============================================================================
// COMPILATION TYPES
// ============================================================================

/**
 * Compilation result
 */
export interface CompilationResult {
  success: boolean;
  css?: string;
  errors: ValidationError[];
  warnings: CompilationWarning[];
}

/**
 * Compilation input
 */
export interface CompilationInput {
  node?: string;
  classes: string[];
  constitution?: Constitution;
}

/**
 * Compilation output
 */
export interface CompilationOutput {
  css: string;
  variables: Record<string, string>;
  classes: Record<string, string>;
}

/**
 * Governance result
 */
export interface GovernanceResult {
  isValid: boolean;
  error?: ValidationError;
  errors?: ValidationError[];
  warnings?: CompilationWarning[];
}

/**
 * Styling class
 */
export type StylingClass = string;

/**
 * Compilation warning
 */
export interface CompilationWarning {
  warning: string;
  contract?: string;
  message: string;
}

/**
 * CSS rule
 */
export interface CSSRule {
  selector: string;
  properties: Record<string, string>;
}

/**
 * Generated CSS output
 */
export interface GeneratedCSS {
  variables: Record<string, string>;
  classes: Record<string, string>;
  css: string;
}

// ============================================================================
// ERROR CODES
// ============================================================================

/**
 * Error codes
 */
export enum ErrorCode {
  INVALID_FORMAT = 'INVALID_FORMAT',
  TOKEN_NOT_FOUND = 'TOKEN_NOT_FOUND',
  INVALID_VALUE = 'INVALID_VALUE',
  FORBIDDEN_PATTERN = 'FORBIDDEN_PATTERN',
  CASE_MISMATCH = 'CASE_MISMATCH',
  DUPLICATE_CONTRACT = 'DUPLICATE_CONTRACT',
  CIRCULAR_DEPENDENCY = 'CIRCULAR_DEPENDENCY',
  MAX_DEPTH_EXCEEDED = 'MAX_DEPTH_EXCEEDED',
  COMPILATION_FAILED = 'COMPILATION_FAILED',
}

// ============================================================================
// PROPERTY MAPPING
// ============================================================================

/**
 * CSS property mapping
 */
export const PropertyMapping: Record<string, string> = {
  'bg': 'background-color',
  'text': 'color',
  'px': 'padding-inline',
  'py': 'padding-block',
  'm': 'margin',
  'mx': 'margin-inline',
  'my': 'margin-block',
  'rounded': 'border-radius',
  'border': 'border-color',
  'border-width': 'border-width',
  'shadow': 'box-shadow',
  'font': 'font-weight',
  'text-size': 'font-size',
  'leading': 'line-height',
  'tracking': 'letter-spacing',
};

/**
 * Valid property prefixes
 */
export const ValidProperties: string[] = Object.keys(PropertyMapping);

// ============================================================================
// CONFIGURATION
// ============================================================================

/**
 * Engine configuration
 */
export interface EngineConfig {
  /**
   * Enable strict validation
   */
  strict?: boolean;

  /**
   * Enable minification
   */
  minify?: boolean;

  /**
   * Enable deduplication
   */
  deduplicate?: boolean;

  /**
   * Enable tree shaking
   */
  treeShake?: boolean;

  /**
   * Custom constitution
   */
  constitution?: Constitution;
}

/**
 * Default configuration
 */
export const DefaultConfig: Required<EngineConfig> = {
  strict: true,
  minify: false,
  deduplicate: true,
  treeShake: false,
  constitution: {} as Constitution,
};
