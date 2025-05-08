import { join } from 'path';

export default {
  plugins: {
    tailwindcss: {
      config: join(new URL('.', import.meta.url).pathname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};