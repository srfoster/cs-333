import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/cs-333/' : '/',
  resolve: {
    alias: {
      // Ensure single React instance
      'react': resolve('./node_modules/react'),
      'react-dom': resolve('./node_modules/react-dom'),
      'react-router-dom': resolve('./node_modules/react-router-dom'),
    },
    dedupe: ['react', 'react-dom', 'react-router-dom']
  }
})
