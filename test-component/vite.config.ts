import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import typescript from '@rollup/plugin-typescript'
import sassDts from 'vite-plugin-sass-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8001,
    host: "0.0.0.0"
  },

  plugins: [
      react(),
      typescript(),
      sassDts(),
      cssInjectedByJsPlugin()
  ],

  build: {
    lib: {
      formats: ['es', 'umd'],
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'react'
        }
      }
    }
  },

  base: '/component/card'
})
