import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/graphql': fileURLToPath(new URL('./src/graphql/index.ts', import.meta.url)),
      '@/components': fileURLToPath(new URL('./src/components/index.ts', import.meta.url)),
      '@/context': fileURLToPath(new URL('./src/context/index.ts', import.meta.url)),
      '@/theme': fileURLToPath(new URL('./src/theme/index.ts', import.meta.url)),
      '@/styles': fileURLToPath(new URL('./src/styles/index.ts', import.meta.url)),
      '@/testing': fileURLToPath(new URL('./src/testing/index.ts', import.meta.url)),
    },
  },
})
