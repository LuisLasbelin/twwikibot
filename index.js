const client = require("./twitterClient.js");

const tweet = async () => {
    try {
        // OR - you can also create a app-only client from your consumer keys -
        const appOnlyClientFromConsumer = await client.appLogin();

        const rwClient = appOnlyClientFromConsumer.readWrite;

        await rwClient.v2.tweet("Pues vaya")
    } catch (error) {
        console.error(error);
    }
}

tweet()