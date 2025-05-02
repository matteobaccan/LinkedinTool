import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(), 
      tailwindcss()
    ],
    define: {
      'import.meta.env.VITE_APP_USERNAME': JSON.stringify(env.VITE_APP_USERNAME),
      'import.meta.env.VITE_APP_PASSWORD': JSON.stringify(env.VITE_APP_PASSWORD),
    }
  }
})
