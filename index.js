module.exports = function (fn) {
  return function () {
    return Promise.resolve(fn.apply(this, arguments))
  }
}
