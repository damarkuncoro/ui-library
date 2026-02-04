/**
 * Styling Constitution Engine (SCE) - Main Export
 * Version: v0.1
 * 
 * Runtime Constitutional Interpreter for Style Contracts
 */

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export * from './types';

// ============================================================================
// STYLE ENGINE EXPORTS
// ============================================================================

export {
  StyleEngine,
  createStyleEngine,
  defaultConstitution,
} from './style-engine';

// ============================================================================
// SPECIFICATION EXPORTS
// ============================================================================

export {
  StyleEngine as StyleEngineSpec,
} from './style-engine';

// ============================================================================
// RE-EXPORTS FOR CONVENIENCE
// ============================================================================

export type {
  Constitution,
  StyleContract,
  ValidationResult,
  CompilationResult,
  CompilationWarning,
  ValidationError,
} from './types';

export {
  defaultConstitution as constitution,
} from './style-engine';
