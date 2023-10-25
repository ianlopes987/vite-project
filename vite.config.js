import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    cors: true,
    open: true,
    https: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://apps-luke-dot-autoavaliar-apps.appspot.com',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', ''),
        secure: false,
        ws: true
      },
    }
  }
})
