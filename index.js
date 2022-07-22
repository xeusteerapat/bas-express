const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
  res.send({
    message: 'OK',
  });
});

app.get('/room/category', (req, res) => {
  res.send({
    message: 'room with category',
  });
});

app.get('/error', async (req, res) => {
  throw new Error('KABOOM!');
});

app.get('/room', (req, res) => {
  console.log(req.query);
  res.send({
    room: 40,
  });
});

app.use('/', function (err, req, res, next) {
  console.error('Unhandled Error');
  console.error(err);
  res.statusCode = 500;
  res.send({
    message: err.message,
  });
});

app.listen(PORT, () => console.log(`server ${PORT}`));
