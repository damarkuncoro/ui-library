import { CompilationInput, CompilationOutput } from './types';
import { validateContract } from './governance';
import { resolveContract } from './resolver';

export function compileStyle(input: CompilationInput): CompilationOutput {
  const { classes } = input;
  
  // 1. Validate
  const validation = validateContract(classes);
  if (!validation.isValid) {
    throw new Error(JSON.stringify(validation.error));
  }

  const atomicClasses: Record<string, string> = {};
  let css = '';

  // 2. Resolve & Generate
  classes.forEach(cls => {
    const resolution = resolveContract(cls);
    
    if (resolution.isValid && resolution.cssProperty && resolution.varPrefix && resolution.token) {
       const { cssProperty, varPrefix, token } = resolution;
       
       const cssValue = `var(${varPrefix}-${token})`;
       const rule = `.${cls} { ${cssProperty}: ${cssValue}; }`;
       
       css += rule + '\n';
       atomicClasses[cls] = `${cssProperty}: ${cssValue}`;
    }
  });

  return {
    css,
    classes: atomicClasses,
    variables: {}
  };
}
