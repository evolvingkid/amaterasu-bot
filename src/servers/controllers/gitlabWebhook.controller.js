import env from '../../../env.js'
import { soartIssues } from '../services/issues/issues.services.js'

const gitlabWebhook = async (req, res) => {
    const { body } = req.body

    // * when webhook event is issues
    if (body.event_type === 'issue') {
        await soartIssues(req.body)
    }

    return res.json({ msg: 'Recived' })
}

const gitlabVersionMiddleWare = (req, res, next) => {
    next()
}

export { gitlabWebhook, gitlabVersionMiddleWare }
