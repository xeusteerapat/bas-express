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

app.get('/room', (req, res) => {
  console.log(req.query);
  res.send({
    room: 40,
  });
});

app.listen(PORT, () => console.log(`server ${PORT}`));
