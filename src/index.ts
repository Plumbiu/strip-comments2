export function strip(code: string) {
  let isInString = false
  let result = ''
  const len = code.length
  for (let i = 0; i < len; i++) {
    const ch = code[i]
    if (ch === "'" || ch === '"' || ch === '`') {
      isInString = !isInString
    } else if (ch === '/' && !isInString) {
      const nextCh = code[i + 1]
      if (nextCh === '/') {
        i += 2
        while (i < len && code[i] !== '\n') {
          i++
        }
        result += '\n'
        continue
      } else if (nextCh === '*') {
        i += 2
        while (i < len) {
          if (code[i] === '*' && code[i + 1] === '/') {
            break
          } else if (code[i] === '\n') {
            result += '\n'
          }
          i++
        }
        i++
        continue
      }
    }
    result += ch
  }
  return result
}

export function stripBlock(code: string) {
  let isInString = false
  let result = ''
  const len = code.length
  for (let i = 0; i < len; i++) {
    const ch = code[i]
    if (ch === "'" || ch === '"' || ch === '`') {
      isInString = !isInString
    } else if (ch === '/' && !isInString) {
      const nextCh = code[i + 1]
      if (nextCh === '/') {
        result += code[i]
        while (i < len && code[i] !== '\n') {
          i++
          result += code[i]
        }
        continue
      } else if (nextCh === '*') {
        i += 2
        while (i < len) {
          if (code[i] === '*' && code[i + 1] === '/') {
            break
          } else if (code[i] === '\n') {
            result += '\n'
          }
          i++
        }
        i++
        continue
      }
    }
    result += ch
  }
  return result
}

export function stripLine(code: string) {
  let isInString = false
  let result = ''
  const len = code.length
  for (let i = 0; i < len; i++) {
    const ch = code[i]
    if (ch === "'" || ch === '"' || ch === '`') {
      isInString = !isInString
    } else if (ch === '/' && !isInString) {
      const nextCh = code[i + 1]
      if (nextCh === '/') {
        i += 2
        while (i < len && code[i] !== '\n') {
          i++
        }
        result += '\n'
        continue
      } else if (nextCh === '*') {
        while (i < len) {
          result += code[i]
          if (code[i] === '*' && code[i + 1] === '/') {
            result += '/'
            break
          }
          i++
        }
        i++
        continue
      }
    }
    result += ch
  }
  return result
}
