module.exports = {
  compose: (f, g) => x => Promise.resolve(x).then(g).then(f)
}
