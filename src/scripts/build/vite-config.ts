import { UserConfig, PluginOption, AliasOptions, Plugin } from 'vite'
import rtlcss from 'rtlcss'
import { rtlcssConfig, rtlPlugin } from './rtlcss'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import compileIcons from '../build/icons'
import { dynamicIcon } from './dynamic-icons-plugin'
import { isDev } from '../util/util'

// types
interface ViteConfig {
  command: 'serve' | 'build'
  rtl: string | undefined
}

// all files in publicDir path will be copied to build path as the same they are
export const publicDir: string = 'src/public'

export function defaultIcons() {
  return Promise.resolve(compileIcons('src'))
}

// vue vite js plugin
export const vueVite = vue()

// vue i18n plugin
export const vueI18nVite = vueI18n({
  // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
  // compositionOnly: false,

  include: 'lang/**.json'
})

// we use dynamicIcon plugin to watch added icons in the vue files
// that is not necessary in the build mode
export function pluginsFunc(
  icons: any = defaultIcons(),
  plugins?: Plugin | PluginOption[]
): PluginOption[] {
  const p = [vueVite, vueJsx(), vueDevTools(), vueI18nVite, icons, plugins]
  isDev() && p.push(dynamicIcon())
  return p
}

// if user start with "npm run dev:rtl" we add rtlcss config
// to process and rtl less file will be used in dev mode.
// if user run build command we use our rtlPlugin to create seperated
// css file.
export default function viteConfig({ rtl, command = 'serve' }: ViteConfig): UserConfig {
  const vitePlugins = pluginsFunc()
  const postCssPlugins = []
  rtl && postCssPlugins.push(rtlcss.configure(rtlcssConfig))
  command === 'build' && vitePlugins.push(rtlPlugin())

  return {
    plugins: vitePlugins,
    css: {
      postcss: {
        plugins: postCssPlugins
      }
    },
    resolve: {
      alias
    }
  }
}

// we use alias for preventing to write full path in our app
// each alias must add to the tsconfig file
export const alias: AliasOptions = {
  '@': '/src',
  '@t': '/src/.temp', // .temp folder
  '@c': '/src/components', // components
  '@v': '/src/views', // views
  '@vd': '/src/views/docs', // views/documentation
  '@f': '/src/fonts', // fonts,
  '@i': '/src/images', // images,
  '@s': '/src/stores', // stores,
  '@sc': '/src/scripts', // scripts,
  '@u': '/src/scripts/util', // utils,
  '@l': '/lang' // locales
}
