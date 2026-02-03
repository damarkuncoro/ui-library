import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@damarkuncoro/ui-library': path.resolve(__dirname, '../../lib/esm')
    }
  },
  server: {
    port: 3000,
    open: true
  }
})