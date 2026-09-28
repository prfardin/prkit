import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './src/scripts/build/vite-config'
import { fileURLToPath } from 'node:url'

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig({
      command: configEnv.command,
      rtl: undefined,
    }),
    {
      test: {
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'e2e/**'],
        root: fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  ),
)
