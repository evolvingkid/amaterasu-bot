import { Client, Intents } from 'discord.js'
import env from '../../env.js'

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.login(env.discordBot);

export default client;
