import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('dist/assets');
const files = fs.readdirSync(assetsDir);
const cssFile = files.find(f => f.endsWith('.css'));
const cssPath = path.join(assetsDir, cssFile);
const css = fs.readFileSync(cssPath, 'utf-8');

console.log('Scanning for height and text size classes...');

const targets = [
    'h-[32px]',
    'h-[40px]',
    'h-[48px]',
    'text-[0.75rem]',
    'text-[0.875rem]',
    'text-[1rem]'
];

targets.forEach(target => {
    // Escape brackets for regex search if needed, or just simple string includes
    // CSS output might look like .h-\[32px\]
    const escapedTarget = target.replace('[', '\\[').replace(']', '\\]');
    const simpleCheck = css.includes(target) || css.includes(target.replace('[', '\\[').replace(']', '\\]'));
    
    console.log(`Checking for ${target}: ${simpleCheck ? 'FOUND' : 'MISSING'}`);
});
