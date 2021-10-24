import client from './src/config/discordConfig.js'
import { appDevIssues } from './src/discord/issues/issues.js'
import app from './src/servers/index.js'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    appDevIssues()
})

const PORT = process.env.PORT || 4000
let server = app.listen(PORT, () => console.log(`Server starts on  ${PORT}`))
