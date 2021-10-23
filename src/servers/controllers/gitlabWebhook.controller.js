import env from '../../../env.js'

const gitlabWebhook = (req, res) => {

    console.log(req.body);

    return res.json({msg : 'Recived'});

}


const gitlabVersionMiddleWare = (req, res, next) => {



    next();
}


export { gitlabWebhook, gitlabVersionMiddleWare}