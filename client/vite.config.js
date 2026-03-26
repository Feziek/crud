import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@assets': path.resolve('src/assets'),
      '@components': path.resolve('src/components'),
      '@routes': path.resolve('src/routes'),
      '@pages': path.resolve('src/pages'),
      '@styles': path.resolve('src/styles')
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000"
      }
    }
  }
})
