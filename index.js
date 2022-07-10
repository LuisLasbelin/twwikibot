const rwClient = require("./twitterClient");

const tweet = async () => {
    try {
        await rwClient.v1.tweet("Pues nada")
    } catch (error) {
        console.error(error);
    }
}

tweet()