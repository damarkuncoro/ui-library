import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('dist/assets');
const files = fs.readdirSync(assetsDir);
const cssFile = files.find(f => f.endsWith('.css'));
const cssPath = path.join(assetsDir, cssFile);
const css = fs.readFileSync(cssPath, 'utf-8');

console.log('Scanning CSS for padding classes...');
const targets = [
    'padding:0_12px',
    'padding:0_16px',
    'padding:0_24px'
];

targets.forEach(t => {
    // Check for escaped versions as they appear in CSS file
    // [padding:0_16px] -> .\[padding\:0_16px\]
    const escaped = t.replace(/:/g, '\\:');
    const found = css.includes(t) || css.includes(escaped);
    console.log(`Checking ${t}: ${found ? 'FOUND' : 'MISSING'}`);
    
    if (found) {
        // Print context
        const idx = css.indexOf(t) !== -1 ? css.indexOf(t) : css.indexOf(escaped);
        console.log(css.substring(idx, idx + 50));
    }
});
