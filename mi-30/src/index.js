const express = require('express');
const path = require('path');
const morgan = require('morgan');

//Inicializadores
const krowdy = express();
require('./database');
require('./querys');

//Settings
krowdy.set('port', process.env.PORT || 3000);
krowdy.set('views', path.join(__dirname, 'views'));


//Middlewares
krowdy.use(morgan('dev'));
krowdy.use(express.json());

//Routes
krowdy.use(require('./routes/'));

//Static files
krowdy.use(express.static(path.join(__dirname, 'public')));

//Server
krowdy.listen(krowdy.get('port'), ()=> {
  console.log('SErver listen at ', krowdy.get('port'));
});
