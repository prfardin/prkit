import { compile, findIcons, read } from './util'
import { Config, optimize } from 'svgo'
import fs from 'fs-extra'

export interface Icons { [ key: string ]: string }

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
                            floatPrecision: 3
                        },
                        convertPathData: false,
                        convertShapeToPath: false,
                        mergePaths: false,
                        removeUnknownsAndDefaults: false,
                        removeUselessStrokeAndFill: false
                    }
                }
            },
            'convertStyleToAttrs'
        ]
    }

    if (fs.existsSync(iconPath))
        return prefix + optimize(await read(iconPath), options).data
    return ''
}

export async function mapIcons(compiledIcons: Icons, usedIcons: Set<string>) {
    await Promise.all([...usedIcons].map(async (iconName) => {
        const name = iconName.match(/^icon-([^-\s]+)-([^-\s]+)-(.+)$/);

        if (name && name.length > 3) {
            const [, category, subcategory, icon] = name;
            const iconPath = `./src/images/core/${category}/${subcategory}/icons/${icon}.svg`;

            const compiledIcon = await icons(iconPath);
            compiledIcon
                && (compiledIcons[iconName] = compiledIcon)
        }
    }));
}

export function stringify(icons: Icons) {
    return JSON.stringify(
      icons,
      null,
      '    '
    )
}

// find all used icons in project and compile them
export default async function compileIcons(findDir: string) {
    const usedIcons: Set<string> = await findIcons(findDir)

    const compiledIcons: Icons = {};
    await mapIcons(compiledIcons, usedIcons);

    return await compile('src/scripts/build/wrapper/icons.ts', 'src/.temp/uikit-icons', {
        replaces: {
            ICONS: stringify(compiledIcons)
        }
    })
}
