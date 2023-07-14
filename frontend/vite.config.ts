import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/graphql': fileURLToPath(new URL('./src/graphql/index.ts', import.meta.url)),
    },
  },
})
