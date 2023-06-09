import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'
import postcssPresetEnv from 'postcss-preset-env';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    css: {
      postcss: {
        plugins: [postcssPresetEnv()]
      }
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname)
      },
      extensions: ['.tsx']
    }
  }
});
