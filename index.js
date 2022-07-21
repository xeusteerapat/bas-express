const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

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

app.get('/room', (req, res) => {
  console.log(req.query);
  res.send({
    room: 40,
  });
});

app.listen(5001, () => console.log('server 5001'));
