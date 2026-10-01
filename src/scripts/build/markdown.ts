import hljs from 'highlight.js/lib/common'
import Markdown from 'unplugin-vue-markdown/vite'

export const markdown = Markdown({
  markdownOptions: {
    html: true,
    linkify: true,

    highlight(code: string, language: string): string {
      const formattedCode = code.replace(/^(  )+/gm, (indent: string) =>
        '\t'.repeat(indent.length / 2),
      )

      if (!language || !hljs.getLanguage(language)) {
        return ''
      }

      return hljs.highlight(formattedCode, {
        language,
        ignoreIllegals: true,
      }).value
    },
  },

  markdownSetup(md) {
    const fence = md.renderer.rules.fence

    if (!fence) {
      return
    }

    md.renderer.rules.fence = (...args) => {
      const result = fence(...args)

      return result instanceof Promise
        ? result.then((html) =>
            html.replace('<code class="language-', '<code class="hljs language-'),
          )
        : result.replace('<code class="language-', '<code class="hljs language-')
    }

    md.renderer.rules.table_open = () =>
      '<div class="uk-overflow-auto"><table class="uk-table uk-table-divider">'

    md.renderer.rules.table_close = () => '</table></div>'
  },

  wrapperClasses: 'pr-doc uk-container uk-container-xsmall',
})
