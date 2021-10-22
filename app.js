import client from './src/config/discordConfig.js';
import {appDevIssues} from './src/discord/issues/issues.js'


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    appDevIssues();
  });