import { readFile } from 'node:fs/promises'
import { bench, describe } from 'vitest'
import { stripLiteralJsTokens } from 'strip-literal'
import stripe from 'strip-comments'
import { strip } from 'src'

const modules = {
  'vue-global': './node_modules/vue/dist/vue.runtime.global.js',
  three: './node_modules/three/build/three.module.js',
}

Object.entries(modules).forEach(([name, path]) => {
  describe(`bench ${name}`, async () => {
    const code = await readFile(path, 'utf-8')
    bench('strip-literal', () => {
      stripLiteralJsTokens(code)
    })
    bench('strip-comments', () => {
      stripe(code)
    })
    bench('strip-comments2', () => {
      strip(code)
    })
  })
})
