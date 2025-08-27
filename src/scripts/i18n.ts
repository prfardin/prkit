import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

type Locales = 'en' | 'fa'

interface I18nGlobal {
  locale: Locales
}

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof messages

// we need to add option to change language dynamically,
// so we need to improve this block in future
const i18n = createI18n<[MessageSchema], Locales>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: messages as any, // type must change in future
})

export default i18n

export const i18nGlobal: I18nGlobal = i18n.global as I18nGlobal
