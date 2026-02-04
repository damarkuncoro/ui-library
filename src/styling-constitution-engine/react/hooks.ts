import { useMemo, useEffect } from 'react';
import { useConstitutionalContext } from './provider';
import { ValidationResult } from '../core/types';

/**
 * Hook to validate styling classes against the constitution
 * 
 * @param componentName Name of the component for logging
 * @param classes Class string or array of classes
 * @returns Object containing validation result and helper methods
 */
export const useConstitution = (componentName: string, classes: string | string[]) => {
  const { engine, strict } = useConstitutionalContext();

  const validationResult = useMemo(() => {
    // Skip validation in production if environment variable is set (optional optimization)
    if (process.env.NODE_ENV === 'production') return { valid: true };

    const classList = Array.isArray(classes) ? classes : classes.split(' ');
    const input: Record<string, any> = {};
    
    // Parse classes into a mock input format for the engine
    // Since the engine currently expects { property: value }, and we are dealing with classes
    // We might need to adjust the engine or simply use the governance validator directly.
    // However, the StyleEngine.validate() method expects a style object.
    
    // Ideally, we should use the `validateContract` from `governance.ts` but exposed via StyleEngine.
    // For now, let's assume we want to validate the *existence* of tokens implied by classes.
    
    // TODO: Update StyleEngine to support direct class validation or use governance here.
    // For this Proof of Concept, we will use a simplified validation:
    // We will check if the classes don't contain arbitrary values (square brackets).
    
    const errors: string[] = [];
    
    classList.forEach(cls => {
      if (!cls) return;
      
      // Check for arbitrary values (Anti-Constitution)
      if (/-\[.*\]/.test(cls)) {
        errors.push(`Arbitrary value detected: ${cls}`);
      }
      
      // We could also check against the constitution if we parse the class...
    });

    return {
      valid: errors.length === 0,
      errors
    };
  }, [classes, engine]);

  useEffect(() => {
    if (!validationResult.valid && validationResult.errors) {
      const message = `[SCE] Constitutional Violation in <${componentName}>:\n${validationResult.errors.join('\n')}`;
      if (strict) {
        console.error(message);
      } else {
        console.warn(message);
      }
    }
  }, [validationResult, componentName, strict]);

  return validationResult;
};
