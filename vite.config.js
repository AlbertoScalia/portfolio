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
    // 1. Forza la compatibilità con browser più vecchi (Safari 13/14)
    target: 'es2015',
    // 2. Evita che esbuild usi sintassi troppo moderne che Safari iOS a volte blocca
    cssTarget: 'chrome61',
    rollupOptions: {
      output: {
        // 3. Rendi i nomi dei file più semplici per evitare problemi di MIME type su Safari
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      },
    },
  },
});