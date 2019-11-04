const mongoose = require('mongoose');

mongoose.connect('mongodb:',{
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
})

.then(db => console.log('Db funciona'))
.catch(err => console.error(err));
