const DENIES = [
  'não',
  'Não..',
  'Ainda não',
  'Bah, não.',
  'Então, não'
]

const getDeny = (index) => Promise.resolve(DENIES[index])

module.exports = {
  getStatus: () => getDeny(parseInt(Math.random() * 100 % DENIES.length))
}
