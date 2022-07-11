const {TwitterApi} = require("twitter-api-v2");
const keys = require("./keys.js");

const client = new TwitterApi({
    appKey: keys.appKey,
    appSecret: keys.appSecret,
    accessToken: keys.accessToken,
    accessSecret: keys.accessSecret
});

module.exports = client;