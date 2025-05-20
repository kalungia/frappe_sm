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
      jinjaBootData: true,
      buildConfig: {
        indexHtmlPath: '../frappe_sm/www/social_media_management.html',
        emptyOutDir: true,
        sourcemap: true,
      },
    }), 
    vue(),
    vueJsx(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        display: 'standalone',
        name: 'Frappe SMM',
        short_name: 'Frappe SMM',
        start_url: '/social_media_management',
        description:
          'Modern Social Media Management tool to supercharge your social media operations',
        icons: [],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: [ 'feather-icons', 'showdown', 'tailwind.config.js', 'prosemirror-state', 'prosemirror-view', 'lowlight'],
  },
})
