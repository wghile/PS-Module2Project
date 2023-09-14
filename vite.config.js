import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/concert-search/',
  build: {
    outDir: "docs",
  },
  define: {
    'process.env': {}
  }
})
