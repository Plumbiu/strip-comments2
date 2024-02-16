# strip-comments2

Strip comments, fast and tiny.

# Install

```bash
npm i strip-comments2
```

# Usage

```js
import { strip, stripLine, stripBlock } from 'strip-comments2'

console.log(strip(`
// Signle Line Comments
console.log('hello')
/*
  Multi Line Comments
*/
console.log('world')
`))


```

- `stripLine`: strip comments startsWith `//`

- `stripeBlock`: stripe comments startsWith `/*` and endsWith `*/`


**output:**

```js
console.log('hello')

console.log('world')
```

# Related

- [strip-comments](https://github.com/jonschlinkert/strip-comments)
- [strip-literal](https://github.com/antfu/strip-literal)

# Benchmark

```
 ✓ bench/index.bench.ts (6) 6180ms
   ✓ bench vue-global (3) 5594ms
     name                  hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · strip-literal    46.7648  17.8819  28.3685  21.3836  23.2777  28.3685  28.3685  28.3685  ±5.68%       24   slowest
   · strip-comments   56.3943  15.5689  22.7463  17.7323  18.3920  22.7463  22.7463  22.7463  ±3.28%       29
   · strip-comments2   258.88   3.5234   4.4803   3.8628   3.9270   4.3854   4.4803   4.4803  ±0.82%      130   fastest
   ✓ bench three (3) 6177ms
     name                  hz      min      max     mean      p75      p99     p995     p999      rme  samples
   · strip-literal     8.9268   104.55   126.13   112.02   114.96   126.13   126.13   126.13   ±4.94%       10   slowest
   · strip-comments   12.0624  76.4162  94.1202  82.9024  84.5117  94.1202  94.1202  94.1202   ±4.39%       10
   · strip-comments2  20.5539  39.7816  66.9526  48.6525  54.1268  66.9526  66.9526  66.9526  ±11.25%       11   fastest


 BENCH  Summary

  strip-comments2 - bench/index.bench.ts > bench vue-global
    4.59x faster than strip-comments
    5.54x faster than strip-literal

  strip-comments2 - bench/index.bench.ts > bench three
    1.70x faster than strip-comments
    2.30x faster than strip-literal
```
