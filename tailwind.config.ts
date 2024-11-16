import type { Config } from 'tailwindcss';

export default {
  prefix: 'cz-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config;
