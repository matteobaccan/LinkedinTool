import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue()],
    define: {
      'import.meta.env.VITE_APP_USERNAME': JSON.stringify(env.VITE_APP_USERNAME),
      'import.meta.env.VITE_APP_PASSWORD': JSON.stringify(env.VITE_APP_PASSWORD),
    }
  }
})
