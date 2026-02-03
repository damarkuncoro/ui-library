export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['w-10', 'rounded-md', 'border-2', 'w-[123px]', 'rounded-[6px]'],
  theme: {
    extend: {
      colors: {
        'my-red': '#ff0000',
      }
    },
  },
  plugins: [],
}
