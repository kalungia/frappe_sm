import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import frappeui from 'frappe-ui/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    frappeui({
      frappeProxy: true,
      lucideIcons: true,
      jinjaBootData: true,
    }), 
    vue(),
    vueJsx(),
  ],
  build: {
    outDir: '../frappe_sm/public/social_media_management',
    emptyOutDir: true,
    commonjsOptions: {
      include: [/tailwind.config.js/, /node_modules/],
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: [ 'feather-icons', 'showdown', 'tailwind.config.js', 'prosemirror-state', 'prosemirror-view', 'lowlight'],
  },
})
