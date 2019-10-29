const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

//Inicializadores
const kenny = express();

//Settings
kenny.set('port', process.env.PORT|| 3000);
kenny.set('views', path.join(__dirname, 'views'));
kenny.engine('.hbs', exphbs({
  defaultLayout: 'main',
  latouysDir: path.join(kenny.get('views'),'layouts'),
  partialsDir: path.join(kenny.get('views'),'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}));
kenny.set('view engine', '.hbs');

//Middlewares
kenny.use(morgan('dev'));
kenny.use(express.json());

//Variables globales


//Routes
kenny.use(require('./routes/'));

//Acceso publico


//Servidor
kenny.listen(kenny.get('port'), () =>{
  console.log('Server corriendo en puerto', kenny.get('port'));
})
