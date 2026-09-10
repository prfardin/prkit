import { compile, findIcons, read } from './util'
import { type Config, optimize } from 'svgo'
import fs from 'fs-extra'

export interface Icons {
  [key: string]: string
}

// we use svgo to optimize icon from icon path
// need to remove commented attribute because they are false as default (svgo v2+)
export async function icons(iconPath: string, prefix: string = ''): Promise<string> {
  const options: Config = {
    plugins: [
      {
        name: 'preset-default',
        // removeDimensions: false,
        // removeScriptElement: false,
        // removeStyleElement: false,
        params: {
          overrides: {
            // removeViewBox: false,
            cleanupNumericValues: {
              floatPrecision: 3,
            },
            convertPathData: false,
            convertShapeToPath: false,
            mergePaths: false,
            removeUnknownsAndDefaults: false,
            removeUselessStrokeAndFill: false,
            minifyStyles: false
          },
        },
      },
      'convertStyleToAttrs',
    ],
  }

  if (fs.existsSync(iconPath)) return prefix + optimize(await read(iconPath), options).data
  return ''
}

export async function mapIcons(compiledIcons: Icons, usedIcons: Set<string>, defaultIcon: string) {
  await Promise.all(
    [...usedIcons].map(async (iconName) => {
      const normalizedName = iconName.replace(/^(icon|component)-default-/, `$1-${defaultIcon}-`)
      const name = normalizedName.match(/^(icon|component)-([^-\s]+)-([^-\s]+)-(.+)$/)
      if (name && name.length > 3) {
        const [, base, category, subcategory, icon] = name
        const iconPath = `./src/images/core/${category}/${subcategory}/${base}s/${icon}.svg`

        const compiledIcon = await icons(iconPath)
        compiledIcon && (compiledIcons[iconName] = compiledIcon)
      }
    }),
  )
}

export function stringify(icons: Icons) {
  return JSON.stringify(icons, null, '    ')
}

// find all used icons in project and compile them
export default async function compileIcons(findDir: string, defaultIcons: string) {
  const usedIcons: Set<string> = await findIcons(findDir, defaultIcons)

  const compiledIcons: Icons = {}
  await mapIcons(compiledIcons, usedIcons, defaultIcons)

  return await compile('src/scripts/build/wrapper/icons.ts', 'src/.temp/uikit-icons', {
    replaces: {
      ICONS: stringify(compiledIcons),
    }
  })
}
