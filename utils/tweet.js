const { curry } = require('./curry')

const tweetStatus = (twitterClient, status) => {
  twitterClient.tweets.statusesUpdate({
    status: status
  }).then (response => {
    console.log('[Success]', response)
  }).catch(error => {
    console.error('[Error]', error)
  })
}

module.exports = {
  tweet: curry(tweetStatus)
}
