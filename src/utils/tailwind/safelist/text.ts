import { textSkinContractDef } from '../../../components/text/contracts/text-skin-contract';
import { tw } from '../helpers';

export function generateTextSafelist() {
  const { variants } = textSkinContractDef;
  const classes: string[] = [];

  Object.values(variants).forEach((v: any) => {
    classes.push(tw('text', v.fontSize));
    classes.push(tw('font', v.fontWeight));
    classes.push(tw('leading', v.lineHeight));
    classes.push(tw('tracking', v.letterSpacing));
    if (v.textTransform) classes.push(v.textTransform);
  });
  
  // Alignments
  ['left', 'center', 'right', 'justify'].forEach(align => {
    classes.push(`text-${align}`);
  });
  
  // Utilities
  classes.push('truncate');
  classes.push('whitespace-nowrap');

  return classes;
}
