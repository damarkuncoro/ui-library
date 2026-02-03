// --- FLEXBOX CONTRACT DEFINITION ---
// Defines the standard Flexbox values for the application.
// Serves as the Single Source of Truth for flex-related CSS values.
// Keys generally align with Tailwind utilities where possible, values are standard CSS.

export const flexContract = {
  direction: {
    row: 'row',
    'row-reverse': 'row-reverse',
    col: 'column',
    'col-reverse': 'column-reverse',
  },
  wrap: {
    nowrap: 'nowrap',
    wrap: 'wrap',
    'wrap-reverse': 'wrap-reverse',
  },
  // justify-content
  justify: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
    normal: 'normal',
    stretch: 'stretch',
  },
  // align-items
  align: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch',
  },
  // flex
  flex: {
    1: '1 1 0%',
    auto: '1 1 auto',
    initial: '0 1 auto',
    none: 'none',
  },
  grow: {
    0: '0',
    1: '1', // default
  },
  shrink: {
    0: '0', // default
    1: '1',
  },
  order: {
    first: '-9999',
    last: '9999',
    none: '0',
    // 1-12 are usually handled dynamically or as needed, but we can add common ones if requested
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
  }
} as const;
