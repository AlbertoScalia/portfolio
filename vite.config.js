import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // Assicurati che l'URL termini sempre con lo slash quando lo apri su iPhone
  base: '/portfolio/', 
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
build: {
  outDir: 'docs',
  target: 'es2015',
  cssTarget: 'chrome61',
  rollupOptions: {
    output: {
      entryFileNames: `assets/[name].js`,
      chunkFileNames: `assets/[name].js`,
      assetFileNames: `assets/[name].[ext]`
    },
  },
},
});