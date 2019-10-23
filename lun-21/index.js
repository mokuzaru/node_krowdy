/*const http = require('http');

const krowdy = http.createServer((req, res) =>{
  res.status = 200;
  res.setHeader('Content.Type', 'text/plain');
  res.end('hallo welt');
});

krowdy.listen(3000, () => {
  console.log('Server on port 3000');
});*/
const express = require('express');
const krowdy = express();
const morgan = require ('morgan');

//Setting
krowdy.set('port', 5000);

//middleware
krowdy.use(express.json());
krowdy.use(morgan('dev'));
//krowdy.use(logger);

/*function logger(req, res, next) {
  console.log('entro aqui');
  console.log(`Ruta: ${req.protocol}://${req.get('host')}`);
  //next();
}*/
/*krowdy.all('/', (req,res,next) =>{
  console.log('pasaste por aqui');
  next();
});*/
//routes
krowdy.get('/', (req, res, next) => {
  res.send('Hallo welt');

});
krowdy.get('/user', (req, res, next) => {
  res.send('Hallo welt2');
});
krowdy.post('/', (req, res, next) => {
  console.log(req.body);
  res.send('success');
});



//Server
krowdy.listen(krowdy.get('port'),() =>{
  console.log('server on port 3000');
});
