const test = require('ava')
const thenify = require('..')

;[
{
  d: 'normal function',
  fn: () => {
    return 1
  },
  e: 1
},
{
  d: 'returns promise',
  fn: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1)
      }, 10)
    })
  },
  e: 1
},
{
  d: 'with args',
  fn: (a, b) => {
    return a + b
  },
  args: [1, 2],
  e: 3
},
{
  d: 'this',
  fn () {
    return this.a
  },
  self: {
    a: 1
  },
  e: 1
}
].forEach(({d, fn ,e, args = [], self = null}) => {
  test(d, t => {
    fn = thenify(fn)

    return fn.apply(self, args)
    .then((value) => {
      t.is(value, e)
    })
  })
})

test('reject', t => {

  return thenify(() => Promise.reject(1))()
  .then(() => {
    t.fail()
  }, (e) => {
    t.is(e, 1)
  })
})
