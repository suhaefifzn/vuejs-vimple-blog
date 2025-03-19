import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        { src: './src/components/assets/posts/home.json', dest: 'assets/posts' }, // Copy ke dist/
        { src: './src/components/assets/posts/anime.json', dest: 'assets/posts' }, // Copy ke dist/
        { src: './src/components/assets/posts/game.json', dest: 'assets/posts' } // Copy ke dist/
      ]
    })
  ]
})
