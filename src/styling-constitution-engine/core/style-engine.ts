/**
 * Style Engine - Runtime Constitutional Interpreter
 * Version: v0.1
 * 
 * Style Engine validates and resolves Style Contracts to legal visual output.
 * It enforces constitutional rules and prevents arbitrary styling.
 */

import {
  Constitution,
  ValidationResult,
  CompilationResult,
} from './types';

// ============================================================================
// STYLE ENGINE CORE
// ============================================================================

/**
 * Style Engine - Runtime Constitutional Interpreter
 * 
 * Validates and resolves Style Contracts to legal visual output.
 * Enforces constitutional rules and prevents arbitrary styling.
 */
export class StyleEngine {
  private constitution: Constitution;
  private strictMode: boolean;

  constructor(config: { constitution: Constitution; strict?: boolean }) {
    this.constitution = config.constitution;
    this.strictMode = config.strict ?? true;
  }

  /**
   * Resolve style contract to legal CSS variables
   * 
   * @param component - Component name (e.g., 'button')
   * @param styleInput - Style contract input
   * @returns Resolved style object with CSS variables
   */
  resolve(component: string, styleInput: Record<string, any>): Record<string, string> {
    const resolved: Record<string, string> = {};

    for (const [property, value] of Object.entries(styleInput)) {
      const result = this.resolveProperty(property, value);
      
      if (!result.valid) {
        if (this.strictMode) {
          throw new Error(
            `Style violation for ${component}.${property}: ${result.error}`
          );
        } else {
          console.warn(
            `Style violation for ${component}.${property}: ${result.error}`
          );
          continue;
        }
      }

      resolved[property] = result.value!;
    }

    return resolved;
  }

  /**
   * Resolve single property value
   * 
   * @param property - CSS property name
   * @param value - Property value
   * @returns Validation result with resolved value
   */
  private resolveProperty(
    _property: string,
    value: any
  ): { valid: boolean; value?: string; error?: string } {
    // Check if value is a token reference
    if (typeof value === 'string' && value.startsWith('token:')) {
      return this.resolveToken(value);
    }

    // Check if value is a CSS variable reference
    if (typeof value === 'string' && value.startsWith('var(--')) {
      return { valid: true, value };
    }

    // Reject hardcoded values in strict mode
    if (this.strictMode && typeof value === 'string') {
      // Check for hex colors
      if (/^#[0-9A-Fa-f]{3,6}$/.test(value)) {
        return {
          valid: false,
          error: 'Hardcoded hex colors are forbidden. Use token:color.<semantic> instead.'
        };
      }

      // Check for pixel values
      if (/\d+px$/.test(value)) {
        return {
          valid: false,
          error: 'Hardcoded pixel values are forbidden. Use token:spacing.<size> instead.'
        };
      }

      // Check for rem values
      if (/\d+rem$/.test(value)) {
        return {
          valid: false,
          error: 'Hardcoded rem values are forbidden. Use token:spacing.<size> instead.'
        };
      }
    }

    // Allow non-string values (numbers, etc.)
    return { valid: true, value: String(value) };
  }

  /**
   * Resolve token reference to CSS variable
   * 
   * @param token - Token reference (e.g., 'token:color.primary')
   * @returns Validation result with CSS variable
   */
  private resolveToken(
    token: string
  ): { valid: boolean; value?: string; error?: string } {
    // Extract token path
    const tokenPath = token.replace('token:', '');
    const [category, ...parts] = tokenPath.split('.');

    // Validate token exists in constitution
    const categoryData = this.constitution[category as keyof Constitution];
    
    if (!categoryData) {
      return {
        valid: false,
        error: `Token category '${category}' not found in constitution. Available: ${Object.keys(this.constitution).join(', ')}`
      };
    }

    // Navigate to token value
    let tokenValue: any = categoryData;
    for (const part of parts) {
      if (typeof tokenValue === 'object' && tokenValue !== null) {
        tokenValue = (tokenValue as Record<string, any>)[part];
      } else {
        return {
          valid: false,
          error: `Token path '${tokenPath}' not found in constitution.`
        };
      }
    }

    if (tokenValue === undefined) {
      return {
        valid: false,
        error: `Token '${tokenPath}' not found in constitution.`
      };
    }

    // Convert to CSS variable
    const cssVariable = `var(--${tokenPath.replace(/\./g, '-')})`;

    return { valid: true, value: cssVariable };
  }

  /**
   * Validate style contract against constitutional rules
   * 
   * @param component - Component name
   * @param styleInput - Style contract input
   * @returns Validation result
   */
  validate(_component: string, styleInput: Record<string, any>): ValidationResult {
    const errors: string[] = [];

    for (const [property, value] of Object.entries(styleInput)) {
      const result = this.resolveProperty(property, value);
      
      if (!result.valid) {
        errors.push(`${property}: ${result.error}`);
      }
    }

    if (errors.length > 0) {
      return {
        valid: false,
        error: 'STYLE_VIOLATION',
        details: {
          reason: 'Style contract violates constitutional rules',
          suggestion: 'Use token: references instead of hardcoded values'
        }
      };
    }

    return { valid: true };
  }

  /**
   * Compile style contract to CSS
   * 
   * @param component - Component name
   * @param styleInput - Style contract input
   * @returns Compilation result with CSS output
   */
  compile(component: string, styleInput: Record<string, any>): CompilationResult {
    // Validate first
    const validation = this.validate(component, styleInput);
    
    if (!validation.valid) {
      return {
        success: false,
        errors: [{
          code: validation.error || 'VALIDATION_FAILED',
          class: component,
          reason: validation.details?.reason || 'Validation failed',
          suggestion: validation.details?.suggestion
        }],
        warnings: []
      };
    }

    // Resolve styles
    const resolved = this.resolve(component, styleInput);

    // Generate CSS
    const css = this.generateCSS(component, resolved);

    return {
      success: true,
      css,
      errors: [],
      warnings: []
    };
  }

  /**
   * Generate CSS from resolved styles
   * 
   * @param component - Component name
   * @param styles - Resolved style object
   * @returns CSS string
   */
  private generateCSS(component: string, styles: Record<string, string>): string {
    const rules: string[] = [];

    for (const [property, value] of Object.entries(styles)) {
      rules.push(`  ${property}: ${value};`);
    }

    return `.${component} {\n${rules.join('\n')}\n}`;
  }
}

// ============================================================================
// FACTORY
// ============================================================================

/**
 * Create a new Style Engine instance
 * 
 * @param constitution - Design constitution
 * @param strict - Enable strict mode (default: true)
 * @returns Style Engine instance
 */
export function createStyleEngine(
  constitution: Constitution,
  strict: boolean = true
): StyleEngine {
  return new StyleEngine({ constitution, strict });
}

// ============================================================================
// DEFAULT CONSTITUTION
// ============================================================================

/**
 * Default design constitution
 */
export const defaultConstitution: Constitution = {
  colors: {
    primary: '#e11d48',
    secondary: '#6b7280',
    tertiary: '#64748b',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#3b82f6',
    surface: '#0f172a',
    background: '#18181b',
    border: '#1e293b',
    text: '#f8fafc',
    'text-muted': '#94a3b8'
  },
  spacing: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem'
  },
  sizing: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem'
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem'
  },
  fontWeights: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800'
  },
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2'
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  radius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px'
  },
  borderWidths: {
    thin: '1px',
    normal: '2px',
    thick: '3px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
  },
  opacity: {
    '0': '0',
    '5': '0.05',
    '10': '0.1',
    '20': '0.2',
    '25': '0.25',
    '30': '0.3',
    '40': '0.4',
    '50': '0.5',
    '60': '0.6',
    '70': '0.7',
    '75': '0.75',
    '80': '0.8',
    '90': '0.9',
    '95': '0.95',
    '100': '1'
  },
  zIndex: {
    '0': '0',
    '10': '10',
    '20': '20',
    '30': '30',
    '40': '40',
    '50': '50',
    auto: 'auto'
  },
  transitions: {
    all: 'all',
    colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform'
  },
  durations: {
    '75': '75ms',
    '100': '100ms',
    '150': '150ms',
    '200': '200ms',
    '300': '300ms',
    '500': '500ms',
    '700': '700ms',
    '1000': '1000ms'
  },
  easings: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
  },
  animations: {
    spin: 'spin 1s linear infinite',
    ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    bounce: 'bounce 1s infinite'
  },
  transforms: {
    none: 'none',
    'scale-95': 'scale(0.95)',
    'scale-100': 'scale(1)',
    'scale-105': 'scale(1.05)',
    'rotate-0': 'rotate(0deg)',
    'rotate-90': 'rotate(90deg)',
    'rotate-180': 'rotate(180deg)',
    'rotate-270': 'rotate(270deg)'
  },
  scale: {
    '0': '0',
    '50': '50%',
    '75': '75%',
    '90': '90%',
    '95': '95%',
    '100': '100%',
    '105': '105%',
    '110': '110%',
    '125': '125%',
    '150': '150%'
  },
  rotate: {
    '0': '0deg',
    '1': '1deg',
    '2': '2deg',
    '3': '3deg',
    '6': '6deg',
    '12': '12deg',
    '45': '45deg',
    '90': '90deg',
    '180': '180deg'
  },
  skew: {
    '0': '0deg',
    '1': '1deg',
    '2': '2deg',
    '3': '3deg',
    '6': '6deg',
    '12': '12deg'
  },
  translate: {
    '0': '0',
    'px': '1px',
    '0.5': '0.5px',
    '1': '1px',
    '1.5': '1.5px',
    '2': '2px',
    '2.5': '2.5px',
    '3': '3px',
    '3.5': '3.5px',
    '4': '4px',
    '5': '5px',
    '6': '6px',
    '7': '7px',
    '8': '8px',
    '9': '9px',
    '10': '10px',
    '11': '11px',
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '20': '20px',
    '24': '24px',
    '28': '28px',
    '32': '32px',
    '36': '36px',
    '40': '40px',
    '44': '44px',
    '48': '48px',
    '52': '52px',
    '56': '56px',
    '60': '60px',
    '64': '64px',
    '72': '72px',
    '80': '80px',
    '96': '96px'
  },
  widths: {
    auto: 'auto',
    full: '100%',
    screen: '100vw',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content'
  },
  heights: {
    auto: 'auto',
    full: '100%',
    screen: '100vh',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content'
  },
  minWidths: {
    '0': '0',
    full: '100%',
    screen: '100vw',
    min: 'min-content'
  },
  maxWidths: {
    '0': '0',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    full: '100%',
    screen: '100vw',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    none: 'none'
  },
  minHeights: {
    '0': '0',
    full: '100%',
    screen: '100vh',
    min: 'min-content'
  },
  maxHeights: {
    '0': '0',
    full: '100%',
    screen: '100vh',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    none: 'none'
  },
  // Flexbox
  flexDirection: {
    row: 'row',
    'row-reverse': 'row-reverse',
    column: 'column',
    'column-reverse': 'column-reverse'
  },
  flexWrap: {
    nowrap: 'nowrap',
    wrap: 'wrap',
    'wrap-reverse': 'wrap-reverse'
  },
  justifyContent: {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly'
  },
  alignItems: {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline'
  },
  alignContent: {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
    stretch: 'stretch'
  },
  flexValues: {
    '0': '0',
    '1': '1',
    auto: 'auto',
    initial: 'initial',
    inherit: 'inherit'
  },
  flexGrow: {
    '0': '0',
    '1': '1'
  },
  flexShrink: {
    '0': '0',
    '1': '1'
  },
  order: {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    '11': '11',
    '12': '12'
  },
  // Grid
  gridTemplateColumns: {
    '1': 'repeat(1, minmax(0, 1fr))',
    '2': 'repeat(2, minmax(0, 1fr))',
    '3': 'repeat(3, minmax(0, 1fr))',
    '4': 'repeat(4, minmax(0, 1fr))',
    '5': 'repeat(5, minmax(0, 1fr))',
    '6': 'repeat(6, minmax(0, 1fr))',
    '12': 'repeat(12, minmax(0, 1fr))'
  },
  gridTemplateRows: {
    '1': 'repeat(1, minmax(0, 1fr))',
    '2': 'repeat(2, minmax(0, 1fr))',
    '3': 'repeat(3, minmax(0, 1fr))',
    '4': 'repeat(4, minmax(0, 1fr))',
    '5': 'repeat(5, minmax(0, 1fr))',
    '6': 'repeat(6, minmax(0, 1fr))',
    '12': 'repeat(12, minmax(0, 1fr))'
  },
  gap: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem'
  },
  aspectRatio: {
    auto: 'auto',
    square: '1 / 1',
    video: '16 / 9'
  }
};