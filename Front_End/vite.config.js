import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 5001,  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  build: {
    outDir: 'dist', // Директория, куда будут собираться файлы
  },
  plugins: [react()],
});
