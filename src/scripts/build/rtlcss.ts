import fs from 'fs-extra'
import postcss from 'postcss'
import rtlcss, { ConfigureOptions } from 'rtlcss'
import less from 'less'

// config of rtlcss and export to use in other methods
// it copied from UIKit rtlcss config with little change
export const rtlcssConfig: ConfigureOptions = {
  options: {
    autoRename: true,
    stringMap: [
      {
        name: 'previous-next',
        priority: 100,
        search: ['previous', 'Previous', 'PREVIOUS'],
        replace: ['next', 'Next', 'NEXT'],
        options: {
          scope: '*',
          ignoreCase: false,
        },
      },
    ],
  },
  plugins: [
    {
      name: 'customNegate',
      priority: 50,
      directives: {
        control: {},
        value: [],
      },
      processors: [
        {
          expr: ['--uk-position-translate-x', 'stroke-dashoffset'].join('|'),
          action(prop: any, value: any, context: any) {
            return { prop, value: context.util.negate(value) }
          },
        },
      ],
    },
  ],
  hooks: {
    pre(root: any, postcss: any) {
      root.prepend(postcss.comment({ text: 'rtl:begin:rename' }))
      root.append(postcss.comment({ text: 'rtl:end:rename' }))
    },
  },
}

// we write plugin for vite to create rtl file before build process
// and add it to rollupOptions inputs
export function rtlPlugin() {
  const input = ['src/.temp/default-rtl.less', 'index.html']

  async function config() {
    await compile()

    return {
      build: {
        rollupOptions: { input },
      },
    }
  }

  return { name: 'test', config }
}

// because we have 'await' method we need to async function here
// we use async function here instead in above export default
// because default function need to export as PluginOption
export default async function compile() {
  // read file and render to less
  // readFileSync path must change to dynamic path
  // we have plane to change the PrKit Ui dynamically
  // that's because we need it to dynamic path
  const lessFile = fs.readFileSync('src/less/default-rtl.less', 'utf8')

  // render less and get result, result.css will get the compiled css
  const css = await less.render(lessFile, {
    // set path for base path of less file import
    paths: ['src/less/'],
  })

  // at this time we save compiled less in temp folder
  // and give the file path to vite config input (came from rollup js)
  // and it will compile the theme-rtl.css in public path
  // because limitation of vite (or our knowledge) we use this method
  // it must change in the future, we know there is better way, so help us two improve it
  postcss()
    .use(rtlcss.configure(rtlcssConfig))
    .process(css.css)
    .then((result: any) => fs.writeFileSync('src/.temp/default-rtl.less', result.css))
}
