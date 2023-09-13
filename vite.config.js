import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/PS-Module2Project/'
  build: {
    outDir: "docs",
  },
  define: {
    'process.env': {}
  }
})
