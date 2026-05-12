import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // Assicurati che questo coincida esattamente con il nome della repository
  // Safari è molto rigido sui percorsi che iniziano e finiscono con lo slash
  base: '/portfolio/', 
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'docs',
    // Genera file con nomi puliti per evitare problemi di cache su Safari
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Forza la gestione corretta dei moduli su browser mobile
  server: {
    fs: {
      allow: ['..'],
    },
  },
});