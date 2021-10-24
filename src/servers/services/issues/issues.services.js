import { emddedMsg } from '../../../discord/messages/embeddedMsg.js'
import { issuesMessageFormat } from '../../../discord/services/messageFormats.js'
import { issuesFrom } from './functions/issuesFrom.js'
import env from '../../../../env.js'

const soartIssues = async (data) => {
    const tags = issuesFrom(data)

    //console.log(data)

    if (!tags) return

    const formatedMsg = issuesMessageFormat({ data: data, type: tags })

    console.log(formatedMsg)
    if (tags === 'mobile') {
        const channel = env.botChannels.appIssues
        await emddedMsg({ formattedMsg: formatedMsg, channelsID: channel })
    }
}

export { soartIssues }
