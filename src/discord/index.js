import client from '../config/discordConfig.js'
const welcomeMsg = () => {

    client.channels.cache.get(env.botChannels.ready).send("Iam ready and up. Lets go guys.");

}

export {welcomeMsg}