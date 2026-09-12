import { defineConfig } from 'vite'
import viteConfig from './src/scripts/build/vite-config'

// TODO: must change with commented version
// process.env.npm_command its not a real vite command
/*export default defineConfig(({ command }) => viteConfig({ command: command, rtl: process.env.rtl }))*/
export default defineConfig({
  ...viteConfig({ command: process.env.npm_command as 'serve' | 'build', rtl: process.env.rtl }),
})
