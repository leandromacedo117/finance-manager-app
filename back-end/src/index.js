import express from 'express';
import router from './router/routes';
import { json } from 'express';
import  cors  from 'cors'

const app = express();

app.use(cors())
app.use(json())

app.get('/test', router)
app.post('/json', router)
app.post('/login', router)
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(4500, function () {
  console.log('Example app listening on port 3000!');
});
