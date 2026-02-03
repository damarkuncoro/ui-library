
const { preset } = require('../../lib/cjs/tailwind-v4.js');
console.log('Safelist items related to rounded:');
if (preset && preset.safelist) {
  preset.safelist.forEach(item => {
    if (item.includes('rounded')) {
      console.log(item);
    }
  });
} else {
  console.log('Preset or safelist not found');
}
