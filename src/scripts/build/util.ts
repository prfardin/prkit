import { glob } from 'glob'
import fs, { type PathLike } from 'fs-extra'
import pLimit from 'p-limit'
import { InputOptions, OutputOptions, RollupBuild } from 'rollup'
import { rollup } from 'rollup'
import replace from '@rollup/plugin-replace'

const limit = pLimit(Number(process.env.cpus || 2))

export function read(file: PathLike | number): Promise<string> {
  return fs.readFile(file, 'utf8')
}

// we merge two file together with replace params
// we can also use this compiles method with additional params, at this time we just use replaces param
export async function compile(
  file: string,
  dest: string,
  { replaces }: { replaces: { [str: string]: string | ((id: string) => string) } },
): Promise<void> {
  const inputOptions: InputOptions = {
    input: file,
    plugins: [
      // replace plugin
      replace({
        preventAssignment: true,
        values: {
          ...replaces,
        },
      }),
    ],
  }

  // compiled output file options
  const outputOptions: OutputOptions = {
    format: 'es',
    amd: { id: `uikiticons`.toLowerCase() },
    name: `UIkitCore`,
  }

  const output: OutputOptions = {
    ...outputOptions,
    // file destination
    file: `${dest}.ts`,
  }

  // build the file
  const bundle: RollupBuild = await rollup(inputOptions)

  // write file in destination
  await limit(() => bundle.write(output))
  console.log('  > PRkit Icons is Ready...')

  await bundle.close()
}

// Find which used icons in project and render just those svg from path
// this function Scan all Vue files in project and Match icons by a naming pattern: "icon-*"
// we must replace it with a better function, problem: it will scan all files
export async function findIcons(findDir: string): Promise<Set<string>> {
  const files = glob.sync(`${findDir}/**/*.vue`)
  const iconSet = new Set<string>()

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    const matches = content.match(/icon-([a-zA-Z0-9_-]+)/g)
    if (matches) {
      matches.forEach((match) => iconSet.add(match))
    }
  }

  return iconSet
}
