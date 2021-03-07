const HOURS = parseInt(Math.random() * 100 % 4 + 18)
const DAY = HOURS * 1000 * 60 * 60

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

module.exports = { waitOneDay: () => sleep(DAY) }
