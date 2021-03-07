const { curry } = require('./curry')

const tweetStatus = (twitterClient, status) => {
  twitterClient.tweets.statusesUpdate({
    status: status
  }).then (response => {
    console.log('Tweeted!', response)
  }).catch(error => {
    console.error(error)
  })
}

module.exports = {
  tweet: curry(tweetStatus)
}
