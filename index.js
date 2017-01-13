module.exports = function (fn) {
  return function () {
    const result = fn.apply(this, arguments)
    return result && typeof result.then === 'function'
      ? result
      : Promise.resolve(result)
  }
}
