const mongoose = require('mongoose');

const URI = 'mongodb://localhost/class';

mongoose.connect(URI)
  .then(db => console.log('DB esta conectada'))
  .catch(err => console.error(err));

module.exports = mongoose;
