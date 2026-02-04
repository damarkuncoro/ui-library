import { GovernanceResult, StylingClass } from './types';
import { resolveContract } from './resolver';
import { designConstitution } from './constitution';

// Cache for constitutional values to optimize lookup
let constitutionalValuesCache: Set<string> | null = null;

const getConstitutionalValues = (): Set<string> => {
  if (constitutionalValuesCache) return constitutionalValuesCache;
  
  const values = new Set<string>();
  
  // Collect all values from all categories in the constitution
  Object.values(designConstitution).forEach(category => {
    Object.values(category).forEach(val => {
      if (typeof val === 'string') {
        values.add(val);
      }
    });
  });
  
  constitutionalValuesCache = values;
  return values;
};

export const GovernanceRules = {
  noArbitraryValues: (className: string): boolean => {
    // Regex to detect arbitrary values inside square brackets e.g., -[...], p-[13px]
    const match = className.match(/-\[(.*)\]/);
    
    if (match) {
      // It has an arbitrary value syntax
      const value = match[1].replace(/_/g, ' '); // handle underscore as space (Tailwind JIT)
      
      // Smart Governance: Allow CSS variables (Constitutional Tokens)
      if (value.includes('var(--')) {
        return true;
      }

      // Check if this value actually exists in the constitution (whitelisted)
      // This allows generated classes like text-[1.25rem] IF 1.25rem is a valid token value
      const allowedValues = getConstitutionalValues();
      if (allowedValues.has(value)) {
        return true;
      }
      
      return false;
    }
    
    return true;
  },
  isValidContract: (className: string): boolean => {
    // If it was whitelisted as a valid arbitrary value, we skip strict contract resolution check
    // because resolveContract might not support arbitrary syntax yet
    if (GovernanceRules.noArbitraryValues(className) && className.includes('-[') ) {
        return true;
    }

    const resolution = resolveContract(className);
    return resolution.isValid;
  }
};

export function validateContract(classList: StylingClass[]): GovernanceResult {
  for (const cls of classList) {
    if (!GovernanceRules.noArbitraryValues(cls)) {
      return {
        isValid: false,
        error: {
          code: 'INVALID_CONTRACT',
          class: cls,
          reason: 'Inline values are forbidden by constitution'
        }
      };
    }

    if (!GovernanceRules.isValidContract(cls)) {
      return {
        isValid: false,
        error: {
          code: 'INVALID_CONTRACT',
          class: cls,
          reason: 'Token does not exist in constitution or invalid prefix'
        }
      };
    }
  }
  
  return { isValid: true };
}
