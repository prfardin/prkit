import { defineConfig } from 'vite'
import viteConfig from './src/scripts/build/vite-config.ts'

export default defineConfig(({ command }) => viteConfig({ command, rtl: process.env.rtl }))
