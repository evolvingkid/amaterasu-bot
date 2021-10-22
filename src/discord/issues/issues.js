import client from '../../config/discordConfig.js'
import env from '../../../env.js'

const appDevIssues = () => {
    client.channels.cache.get(env.botChannels.ready).send("Iam ready and up. Lets go guys.");
}

export {appDevIssues}