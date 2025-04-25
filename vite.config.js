import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import solid from 'vite-plugin-solid'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Handle React components
    react(),
    // Handle SolidJS components
    solid({
      include: 'src/solid-components/**/*.jsx',
      // Tell solid-js that we're using JSX
      solid: {
        generate: 'dom'
      }
    }),
  ],
})