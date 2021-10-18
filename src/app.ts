import client from "./config/discord";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
