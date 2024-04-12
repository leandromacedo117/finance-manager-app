import express from 'express';
import router from './router/routes';
import { json } from 'express';

const app = express();

app.use(json())
// app.use(cors())

app.get('/test', router)
app.get('/json', router)
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(4500, function () {
  console.log('Example app listening on port 3000!');
});
