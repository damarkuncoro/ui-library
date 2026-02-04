// Helper to sanitize values for Tailwind arbitrary values (e.g. spaces to underscores)
// This is critical for values like "0 12px" which must be "0_12px" in JIT syntax
export const sanitize = (val: string | number) => String(val).trim().replace(/\s+/g, '_');

// Helper to construct arbitrary values without confusing Tailwind scanner
export const tw = (prefix: string, val: string | number) => `${prefix}-[${sanitize(val)}]`;
