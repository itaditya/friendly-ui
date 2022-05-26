import path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      _shared: path.resolve(__dirname, './src/shared'),
    },
  },
});
