import client from '../../config/discordConfig.js'
import { MessageEmbed } from 'discord.js'

const emddedMsg = async ({ formattedMsg, channelsID }) => {
    try {
        console.log(formattedMsg)
        const issuesMsgEmded = new MessageEmbed()
            .setColor(formattedMsg?.color)
            .setTitle(formattedMsg?.title)
            .setURL(formattedMsg?.link)
            .setAuthor(
                formattedMsg?.autor,
                formattedMsg?.autorImg,
                formattedMsg?.link
            )
            .setDescription(formattedMsg?.description)
            .setTimestamp()
            .setFooter('From City weekly project', formattedMsg?.autorImg)

        await client.channels.cache
            .get(channelsID)
            .send({ embeds: [issuesMsgEmded] })
    } catch (error) {
        console.log('error', error)
    }
}

export { emddedMsg }
