import express from 'express'
const router = express.Router();
import {gitlabWebhook, gitlabVersionMiddleWare} from '../controllers/gitlabWebhook.controller.js'


router.post('/webhooks',gitlabVersionMiddleWare , gitlabWebhook);

export default router;