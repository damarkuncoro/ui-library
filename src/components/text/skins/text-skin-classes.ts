import { textSkinContractDef } from '../contracts/text-skin-contract';
import { TextVariant } from '../contracts/text-contract';
import { tw } from '../../../utils/tailwind/helpers';

const { variants } = textSkinContractDef;

const createVariantClasses = (variant: TextVariant) => {
  const v = variants[variant];
  const classes = [
    tw('text', v.fontSize),
    tw('font', v.fontWeight),
    tw('leading', v.lineHeight),
    tw('tracking', v.letterSpacing),
  ];
  
  if ('textTransform' in v) {
    // uppercase, lowercase, capitalize are standard Tailwind utilities
    classes.push((v as any).textTransform);
  }
  
  return classes.join(' ');
};

// Pre-compute classes for performance
export const variantClasses: Record<TextVariant, string> = Object.keys(variants).reduce((acc, key) => {
  acc[key as TextVariant] = createVariantClasses(key as TextVariant);
  return acc;
}, {} as Record<TextVariant, string>);
