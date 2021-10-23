import express from 'express';
import bodyParser from 'body-parser'

import gitlabRoutes from './routes/gitlab.routes.js'

const app = express();

app.use(express.json({
    extended: false
}));

app.use(bodyParser.json());
 
app.get('/', function (req, res) {
  res.send('Amaterasu Intergation apis are up')
})

app.use('/api/gitlab', gitlabRoutes);
 
export default app;