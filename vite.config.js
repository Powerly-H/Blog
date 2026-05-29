import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 加上这一行，配置为你的仓库名
  base: '/Blog/'
})