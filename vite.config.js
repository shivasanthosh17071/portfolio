// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      // Ensure only your CSS files are processed
      plugins: []
    }
  },
  optimizeDeps: {
    exclude: ['bootstrap']
  }
})
