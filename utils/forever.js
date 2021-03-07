function forever (f) {
  return Promise.resolve()
    .then(f)
    .finally(() => forever(f))
}

module.exports = { forever }
