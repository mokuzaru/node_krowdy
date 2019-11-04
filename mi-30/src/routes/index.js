const express = require('express');
const krowdy = express.Router();

krowdy.get('/', (req, res) => {
  res.send('Holaaaa');
});
krowdy.post('/add',(req, res) => {
  const { data } = req.body;

});



module.exports = krowdy;
