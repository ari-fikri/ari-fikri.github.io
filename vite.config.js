import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/graphql'),
      },
      '/admin': {
        target: 'http://localhost:4001',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              {
                name: 'vendor',
                test: /node_modules[\\/](react|react-dom|react-router-dom|react-helmet-async)/,
                priority: 20,
              },
              {
                name: 'tina',
                //test: /node_modules[\\/]tinacms/,
                test: /node_modules[\\/]tinacms([\\/]|$)/, 
                //maxSize: 500000, 
                priority: 10,
              },
            ],
          },
        },
      },
      chunkSizeWarningLimit: 1200,
    }
})
