import configs from "../../env";
import { Client, Intents } from "discord.js";

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.login(configs.token);

export default client;
