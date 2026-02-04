import { flexContract } from '../../../theme/contracts/flex-contract';

export const directionClasses: Record<keyof typeof flexContract.direction, string> = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse',
};

export const alignClasses: Record<keyof typeof flexContract.align, string> = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};

export const justifyClasses: Record<keyof typeof flexContract.justify, string> = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
  normal: 'justify-normal',
  stretch: 'justify-stretch',
};

export const wrapClasses = {
  true: 'flex-wrap',
  false: 'flex-nowrap',
};
