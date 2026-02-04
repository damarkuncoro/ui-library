/**
 * Styling Constitution Engine (SCE) - Main Export
 * Version: v0.1
 * 
 * Runtime Constitutional Interpreter for Style Contracts
 */

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export * from './core/types';

// ============================================================================
// STYLE ENGINE EXPORTS
// ============================================================================

export {
  StyleEngine,
  createStyleEngine,
  defaultConstitution,
} from './core/style-engine';

// ============================================================================
// SPECIFICATION EXPORTS
// ============================================================================

export {
  StyleEngine as StyleEngineSpec,
} from './core/style-engine';

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
} from './core/types';

export {
  defaultConstitution as constitution,
} from './core/style-engine';

// ============================================================================
// REACT INTEGRATION EXPORTS
// ============================================================================

export * from './react';
