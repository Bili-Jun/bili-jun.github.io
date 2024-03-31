import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: resolve(__dirname),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'apps/main/index.html'),
        nested: resolve(__dirname, 'apps/demo/index.html'),
      }
    },
  },
})