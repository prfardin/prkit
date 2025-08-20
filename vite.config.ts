import { defineConfig } from 'vite'
import viteConfig from './src/scripts/build/vite-config'

/*export default defineConfig(({ command }) => viteConfig({ command: command, rtl: process.env.rtl }))*/

export default defineConfig({
  ...viteConfig({ command: process.env.npm_command as 'serve' | 'build', rtl: process.env.rtl })
});
