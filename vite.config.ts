import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig, type Plugin } from 'vite'

const singleFileBundle = (): Plugin => ({
  name: 'single-file-bundle',
  apply: 'build',
  enforce: 'post',
  generateBundle(_, bundle) {
    const htmlAsset = bundle['index.html']

    if (!htmlAsset || htmlAsset.type !== 'asset' || typeof htmlAsset.source !== 'string') {
      return
    }

    let html = htmlAsset.source

    for (const [fileName, asset] of Object.entries(bundle)) {
      if (asset.type === 'chunk' && fileName.endsWith('.js')) {
        const escapedCode = asset.code.replace(/<\/script/gi, '<\\/script')
        html = html.replace(
          new RegExp(
            `<script type="module" crossorigin src="\\./${fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"></script>`,
          ),
          () => `<script type="module">\n${escapedCode}\n</script>`,
        )
        delete bundle[fileName]
      }

      if (asset.type === 'asset' && fileName.endsWith('.css') && typeof asset.source === 'string') {
        html = html.replace(
          new RegExp(
            `<link rel="stylesheet" crossorigin href="\\./${fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}">`,
          ),
          () => `<style>\n${asset.source}\n</style>`,
        )
        delete bundle[fileName]
      }
    }

    htmlAsset.source = html
  },
})

export default defineConfig({
  base: './',
  plugins: [vue(), singleFileBundle()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
