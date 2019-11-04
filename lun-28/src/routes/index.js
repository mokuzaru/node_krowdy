const express = require('express');
const kenny = express.Router();

kenny.get('/', (req,res,next) => {
  res.render('/');
});

kenny.get('/holi', (req,res,next) => {
  res.send('holi krowdy2');
});

module.exports = kenny;
