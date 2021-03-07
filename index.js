require('dotenv').config()
const { deepGet } = require('deep-getter')
const { TwitterClient } = require('twitter-api-client')

const twitterClient = new TwitterClient({
    apiKey: deepGet(process, 'env.TWITTER_API_KEY'),
    apiSecret: deepGet(process, 'env.TWITTER_API_SECRET'),
    accessToken: deepGet(process, 'env.TWITTER_ACCESS_TOKEN'),
    accessTokenSecret: deepGet(process, 'env.TWITTER_ACCESS_TOKEN_SECRET')
})

twitterClient.tweets.statusesUpdate({
    status: 'No'
}).then (response => {
    console.log('Tweeted!', response)
}).catch(error => {
    console.error(error)
})