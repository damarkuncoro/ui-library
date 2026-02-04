import { validateContract } from '../governance';

/**
 * Constitutional Class Name Merger
 * 
 * Combines classes (like clsx) AND validates them against the constitution.
 * Logs errors to console if violations are found.
 */
export function cn(...inputs: (string | undefined | null | false)[]) {
  const classes = inputs.filter(Boolean).join(' ');
  
  if (process.env.NODE_ENV !== 'production') {
    const classList = classes.split(/\s+/).filter(Boolean);
    const result = validateContract(classList);
    
    if (!result.isValid) {
      console.error(
        `[SCE] Constitutional Violation:\n` +
        `Class: ${result.error?.class}\n` +
        `Reason: ${result.error?.reason}\n` +
        (result.error?.suggestion ? `Suggestion: ${result.error?.suggestion}` : '')
      );
    }
  }
  
  return classes;
}
