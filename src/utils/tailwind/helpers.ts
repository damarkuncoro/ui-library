// Helper to sanitize values for Tailwind arbitrary values (e.g. spaces to underscores)
export const sanitize = (val: string | number) => String(val).trim().replace(/\s+/g, '_');
