import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// disable no unused vars
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
  }
})
