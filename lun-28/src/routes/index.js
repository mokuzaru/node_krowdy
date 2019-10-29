const express = require('express');
const kenny = express.Router();

kenny.get('/', (req,res,next) => {
  res.render('krowdy');
});

kenny.get('/holi', (req,res,next) => {
  res.send('holi krowdy2');
});

module.exports = kenny;
