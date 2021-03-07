require('dotenv').config()

const { TwitterClient } = require('twitter-api-client')
const { deepGet } = require('deep-getter')

const { compose } = require('./utils/compose')
const { forever } = require('./utils/forever')
const { getStatus } = require('./utils/getStatus')
const { tweet } = require('./utils/tweet')
const { waitOneDay } = require('./utils/waitOneDay')

const twitterClient = new TwitterClient({
  apiKey: deepGet(process, 'env.TWITTER_API_KEY'),
  apiSecret: deepGet(process, 'env.TWITTER_API_SECRET'),
  accessToken: deepGet(process, 'env.TWITTER_ACCESS_TOKEN'),
  accessTokenSecret: deepGet(process, 'env.TWITTER_ACCESS_TOKEN_SECRET')
})

const tweetStatus = compose(tweet(twitterClient), getStatus)
const tweetAndWait = compose(waitOneDay, tweetStatus)

forever(tweetAndWait)
