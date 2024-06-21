import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // If you are using React, similarly for other frameworks

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Directory where the production build will be output
    sourcemap: false, // Generate source maps for debugging
    rollupOptions: {
      output: {
        manualChunks: {
          // Example: Split vendor code into a separate chunk
          vendor: ['react', 'react-dom']
        }
      }
    },
  },
  server: {
    // Configuration for development server if needed
    port: 3000,
    open: true,
  },
  
});