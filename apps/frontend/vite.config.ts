import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: [{ find: '~', replacement: '/src' }],
  },
  envDir: './',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
