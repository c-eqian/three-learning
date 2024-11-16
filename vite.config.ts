import path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // https://cn.vitejs.dev/config/#resolve-alias
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~@': path.resolve(__dirname, '/src')
    }
  }
});
