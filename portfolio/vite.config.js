import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // 'build' එකකදී පමණක් repository name එක base path එක ලෙස ගනී
    base: command === 'build' ? '/New_Portfolio/' : '/',
  }
})