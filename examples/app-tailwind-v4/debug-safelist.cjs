
const { preset } = require('../../lib/cjs/tailwind-v4.js');
console.log('Safelist items related to padding:');
preset.safelist.forEach(item => {
  if (item.includes('padding')) {
    console.log(item);
  }
});
