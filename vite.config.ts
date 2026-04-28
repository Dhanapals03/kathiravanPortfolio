import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined;
          }

          if (id.includes('@react-three/drei') || id.includes('three-stdlib')) {
            return 'r3f-drei';
          }

          if (id.includes('@react-three/fiber') || id.includes('/three/')) {
            return 'three-core';
          }

          if (id.includes('framer-motion')) {
            return 'motion';
          }

          if (id.includes('/react/') || id.includes('react-dom') || id.includes('scheduler')) {
            return 'react-vendor';
          }

          return 'vendor';
        },
      },
    },
  },
});
