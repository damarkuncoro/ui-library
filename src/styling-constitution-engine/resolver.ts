import { designConstitution } from './constitution';
import { Constitution } from './types';

export interface TokenResolution {
  isValid: boolean;
  category?: keyof Constitution;
  cssProperty?: string;
  varPrefix?: string;
  token?: string;
}

interface Config {
  prop: string;
  cat: keyof Constitution;
  var: string;
}

const PREFIX_CONFIG: Record<string, Config> = {
  'bg': { prop: 'background-color', cat: 'colors', var: '--color' },
  'p': { prop: 'padding', cat: 'spacing', var: '--space' },
  'px': { prop: 'padding-inline', cat: 'spacing', var: '--space' },
  'py': { prop: 'padding-block', cat: 'spacing', var: '--space' },
  'pt': { prop: 'padding-top', cat: 'spacing', var: '--space' },
  'pr': { prop: 'padding-right', cat: 'spacing', var: '--space' },
  'pb': { prop: 'padding-bottom', cat: 'spacing', var: '--space' },
  'pl': { prop: 'padding-left', cat: 'spacing', var: '--space' },
  'm': { prop: 'margin', cat: 'spacing', var: '--space' },
  'mx': { prop: 'margin-inline', cat: 'spacing', var: '--space' },
  'my': { prop: 'margin-block', cat: 'spacing', var: '--space' },
  'mt': { prop: 'margin-top', cat: 'spacing', var: '--space' },
  'mr': { prop: 'margin-right', cat: 'spacing', var: '--space' },
  'mb': { prop: 'margin-bottom', cat: 'spacing', var: '--space' },
  'ml': { prop: 'margin-left', cat: 'spacing', var: '--space' },
  'font': { prop: 'font-weight', cat: 'fontWeights', var: '--font' },
  'rounded': { prop: 'border-radius', cat: 'radius', var: '--radius' },
  'shadow': { prop: 'box-shadow', cat: 'shadows', var: '--shadow' },
  'w': { prop: 'width', cat: 'widths', var: '--width' },
  'h': { prop: 'height', cat: 'heights', var: '--height' },
  'min-w': { prop: 'min-width', cat: 'minWidths', var: '--min-w' },
  'max-w': { prop: 'max-width', cat: 'maxWidths', var: '--max-w' },
  'min-h': { prop: 'min-height', cat: 'minHeights', var: '--min-h' },
  'max-h': { prop: 'max-height', cat: 'maxHeights', var: '--max-h' },
  'leading': { prop: 'line-height', cat: 'lineHeights', var: '--leading' },
  'tracking': { prop: 'letter-spacing', cat: 'letterSpacings', var: '--tracking' },
  'opacity': { prop: 'opacity', cat: 'opacity', var: '--opacity' },
  'z': { prop: 'z-index', cat: 'zIndex', var: '--z' },
  'transition': { prop: 'transition-property', cat: 'transitions', var: '--transition' },
  'duration': { prop: 'transition-duration', cat: 'durations', var: '--duration' },
  'ease': { prop: 'transition-timing-function', cat: 'easings', var: '--ease' },
  'animate': { prop: 'animation', cat: 'animations', var: '--animate' },
  'scale': { prop: 'scale', cat: 'scale', var: '--scale' },
  'rotate': { prop: 'rotate', cat: 'rotate', var: '--rotate' },
  'skew': { prop: 'skew', cat: 'skew', var: '--skew' },
  'translate': { prop: 'translate', cat: 'translate', var: '--translate' },
  'items': { prop: 'align-items', cat: 'alignItems', var: '--items' },
  'justify': { prop: 'justify-content', cat: 'justifyContent', var: '--justify' },
  'order': { prop: 'order', cat: 'order', var: '--order' },
  'grow': { prop: 'flex-grow', cat: 'flexGrow', var: '--grow' },
  'shrink': { prop: 'flex-shrink', cat: 'flexShrink', var: '--shrink' },
  'top': { prop: 'top', cat: 'spacing', var: '--space' },
  'right': { prop: 'right', cat: 'spacing', var: '--space' },
  'bottom': { prop: 'bottom', cat: 'spacing', var: '--space' },
  'left': { prop: 'left', cat: 'spacing', var: '--space' },
  'inset': { prop: 'inset', cat: 'spacing', var: '--space' },
  'aspect': { prop: 'aspect-ratio', cat: 'aspectRatio', var: '--aspect' },
};

export function resolveContract(className: string): TokenResolution {
  // Handle modifiers (e.g. hover:bg-red-500, dark:text-white) by finding the last colon not inside brackets
  let baseClass = className;
  let depth = 0;
  for (let i = className.length - 1; i >= 0; i--) {
      const char = className[i];
      if (char === ']') depth++;
      else if (char === '[') depth--;
      
      if (depth === 0 && char === ':') {
          baseClass = className.substring(i + 1);
          break;
      }
  }

  // Check for arbitrary values
  if (/-\[.*\]/.test(baseClass) || /^\[.*\]$/.test(baseClass)) {
       // Smart Governance: Allow CSS variables (Constitutional Tokens)
       if (baseClass.includes('var(--')) {
           return { isValid: true, token: className };
       }
       // Allow complex transition shorthands
       if (baseClass.startsWith('[transition:') || baseClass.includes('-[transition:')) {
           return { isValid: true, token: className };
       }
       return { isValid: false };
   }

  // Allowed Static Utilities
  const STATIC_UTILITIES = new Set([
      'truncate', 'block', 'inline-block', 'inline', 'flex', 'inline-flex', 
      'grid', 'hidden', 'visible', 'static', 'fixed', 'absolute', 'relative', 'sticky',
      'italic', 'not-italic', 'underline', 'overline', 'line-through', 'no-underline',
      'uppercase', 'lowercase', 'capitalize', 'normal-case',
      'border', 'border-current', 'border-transparent', 'border-t-transparent',
      'outline-none', 'rounded', 'rounded-full', 'rounded-none',
      'text-current', 'text-transparent', 'bg-transparent',
      'overflow-hidden', 'overflow-auto', 'overflow-scroll', 'overflow-visible',
      'cursor-pointer', 'cursor-not-allowed', 'cursor-wait', 'cursor-move',
      'pointer-events-none', 'pointer-events-auto',
      'select-none', 'select-text', 'select-all', 'select-auto',
      'resize', 'resize-none', 'resize-y', 'resize-x',
      'appearance-none',
      'table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 
      'table-footer-group', 'table-header-group', 'table-row-group', 'table-row',
      'items-start', 'items-end', 'items-center', 'items-baseline', 'items-stretch',
      'justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly',
      'self-auto', 'self-start', 'self-end', 'self-center', 'self-stretch',
      'content-center', 'content-start', 'content-end', 'content-between', 'content-around', 'content-evenly',
      'object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down',
      'min-w-0'
  ]);

  if (STATIC_UTILITIES.has(baseClass)) {
      return { isValid: true, token: className };
  }

  // Dynamic Contract Resolution
  const segments = baseClass.split('-');
  const prefix = segments[0];
  const token = segments.slice(1).join('-'); // Rejoin the rest as token
  
  // Overload: text (color | fontSize | alignment)
  if (prefix === 'text') {
     if (['left', 'center', 'right', 'justify', 'start', 'end'].includes(token)) {
         // Valid text alignment
         return { isValid: true, cssProperty: 'text-align', token };
     }
     if (designConstitution.fontSizes[token]) {
       return { isValid: true, category: 'fontSizes', cssProperty: 'font-size', varPrefix: '--text', token };
     }
     if (designConstitution.colors[token]) {
       return { isValid: true, category: 'colors', cssProperty: 'color', varPrefix: '--color', token };
     }
     return { isValid: false };
  }
  
  // Overload: border (color | width)
  if (prefix === 'border') {
     if (designConstitution.borderWidths[token]) {
       return { isValid: true, category: 'borderWidths', cssProperty: 'border-width', varPrefix: '--border', token };
     }
     if (designConstitution.colors[token]) {
       return { isValid: true, category: 'colors', cssProperty: 'border-color', varPrefix: '--color', token };
     }
     return { isValid: false };
  }
  
  // Special: whitespace
  if (prefix === 'whitespace') {
      if (['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'].includes(token)) {
          return { isValid: true, cssProperty: 'white-space', token };
      }
  }

  // Overload: flex (direction | wrap | value)
  if (prefix === 'flex') {
     if (designConstitution.flexDirection[token]) {
       return { isValid: true, category: 'flexDirection', cssProperty: 'flex-direction', token };
     }
     if (designConstitution.flexWrap[token]) {
       return { isValid: true, category: 'flexWrap', cssProperty: 'flex-wrap', token };
     }
     if (designConstitution.flexValues[token]) {
       return { isValid: true, category: 'flexValues', cssProperty: 'flex', varPrefix: '--flex', token };
     }
     return { isValid: false };
  }

  // Standard Mapping
  const config = PREFIX_CONFIG[prefix];
  if (config) {
      // Strict Check: Token MUST exist in the constitution
      if (designConstitution[config.cat][token]) {
          return { isValid: true, category: config.cat, cssProperty: config.prop, varPrefix: config.var, token };
      }
  }
  
  return { isValid: false };
}
