import { Plugin } from 'vite'
import fs from 'fs'
import path from 'path'
import { Icons, mapIcons, stringify } from './icons'

const cachedIcons = new Set<string>()

export function dynamicIcon(): Plugin {
  const outputPath = path.resolve('./src/.temp/uikit-icons.ts')

  return {
    name: 'dynamic-icon',
    buildStart() {
      existingIcons(outputPath).forEach((icon) => cachedIcons.add(icon))
    },
    async handleHotUpdate({ file }) {
      if (file && file.endsWith('.vue')) {
        const newIcon = new Set<string>()

        findIcons(file).forEach(
          (icon) => !cachedIcons.has(icon) && cachedIcons.add(icon) && newIcon.add(icon),
        )

        newIcon.size > 0 && (await appendIcons(newIcon, outputPath))
      }
    },
  }
}

// Load existing icons from .temp/icons.ts and get the icon names like: svg file names
function existingIcons(filePath: string): string[] {
  const icons = fs.readFileSync(filePath, 'utf-8').match(/"([^"]+)"\s*:/g)

  return icons ? icons.map((match) => match.replace(/[":]/g, '').trim()) : []
}

// Extract icons from content
// Match icons like "icon-*"
function findIcons(file: string): Set<string> {
  const icons = new Set<string>()

  const iconRegex = /icon-[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*/g
  const content = fs.readFileSync(file, 'utf-8').match(iconRegex) || []

  content.forEach((icon) => icons.add(icon))

  return icons
}

// Append new icons to the old .temp/icons.ts file
// Matches the last </svg> before the closing braces
async function appendIcons(newIcons: Set<string>, filePath: string) {
  const lastSvgRegex = /<\/svg>"\s*,?\s*(?=}\s*})/

  const compiledIcons: Icons = {}
  await mapIcons(compiledIcons, newIcons)

  if (Object.keys(compiledIcons).length) {
    const newIconsContent = stringify(compiledIcons).slice(1, -1)

    const oldIcons = fs
      .readFileSync(filePath, 'utf-8')
      .replace(lastSvgRegex, `</svg>",\n${newIconsContent}`)

    // Write the updated content back to the file
    fs.writeFileSync(filePath, oldIcons, 'utf-8')
  }
}
