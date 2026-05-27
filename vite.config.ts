import { defineConfig } from '@opencloud-eu/extension-sdk'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  name: 'markdown-editor',
  plugins: [Icons({ compiler: 'vue3' })]
})
