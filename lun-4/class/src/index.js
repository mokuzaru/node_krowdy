const express = require('express');
const morgan = require('morgan');
const path = require('path');
const kenny = express();

const {mongoose} = require('./database');

//settings
kenny.set('port', process.env.PORT || 3000);

//middlewares
kenny.use(morgan('dev'));
kenny.use(express.json());

//routes
kenny.use('/api/tareas' ,require('./routes/rutas.js'));

//static files
kenny.use(express.static(path.join(__dirname, 'public')));

//Initialized server
kenny.listen(kenny.get('port'), () => {
  console.log(`Server on port ${kenny.get('port')}`);
})
