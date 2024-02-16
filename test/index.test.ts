import { expect, test } from 'vitest'
import { strip, stripBlock, stripLine } from 'src'

const code = `
"use client/* foo */"
// hello 'test
console.log('world')
/* hello "test\`\` */
console.log('world')
console.log('\\1\\a') // "hello"
/* //comment */
// //comment=222 */
/*
 * test
 *  hello
 */
console.log('\\ inStr \\* instr *\\')
console.log(\`
\\ inStr \\* instr *\\
\`)
console.log("\\ inStr \\* instr *\\")
//
`
test('strip', () => {
  const target = `
"use client/* foo */"

console.log('world')

console.log('world')
console.log('\\1\\a') 






console.log('\\ inStr \\* instr *\\')
console.log(\`
\\ inStr \\* instr *\\
\`)
console.log("\\ inStr \\* instr *\\")

`
  expect(strip(code)).toBe(target)
})

test('stripLine', () => {
  const target = `
"use client/* foo */"

console.log('world')
/* hello "test\`\` */
console.log('world')
console.log('\\1\\a') 
/* //comment */

/*
 * test
 *  hello
 */
console.log('\\ inStr \\* instr *\\')
console.log(\`
\\ inStr \\* instr *\\
\`)
console.log("\\ inStr \\* instr *\\")

`
  expect(stripLine(code)).toBe(target)
})

test('stripBlock', () => {
  const target = `
"use client/* foo */"
// hello 'test
console.log('world')

console.log('world')
console.log('\\1\\a') // "hello"

// //comment=222 */




console.log('\\ inStr \\* instr *\\')
console.log(\`
\\ inStr \\* instr *\\
\`)
console.log("\\ inStr \\* instr *\\")
//
`
  expect(stripBlock(code)).toBe(target)
})
