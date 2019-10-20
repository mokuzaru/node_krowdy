const restify = require('restify');
const server = restify.createServer();

//Settings
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

const users = {
  1:{
    name: "zapato",
    precio: 100
  },
  2:{
    name: "camisa",
    precio: 120
  }
};
let itemCount = 2;

server.get('/item' , (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  res.writeHead(200);
  res.end(JSON.stringify(users));
});

server.post('/item/:id', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  res.writeHead(201);
  res.end(JSON.stringify(users[Number(req.params.id)]));
})

server.post('/item', (req, res, next) => {
  let item = req.body;
  itemCount++
  item.id = itemCount
  users[item.id] = item
  res.setHeader('Content-Type', 'application/json')
  res.writeHead(200);
  res.end(JSON.stringify(item));
})

server.put('/item/:id', (req, res) => {
  const user = users[parseInt(req.params.id)];
  const act = req.body;
  for (let campo in act){
    user[campo] = act[campo]
  }
  res.setHeader('Content-Type', 'application/json')
  res.writeHead(200);
  res.end(JSON.stringify(user))
})

server.del('/item/:id',(req,res) => {
  res.setHeader('Content-Type', 'application/json')
  res.writeHead(200);

  delete users[parseInt(req.params.id)]

  res.end(JSON.stringify(users))
})

server.del('/item',(req,res) => {
  for(let field in users){
    delete users[field]
  }
  res.setHeader('Content-Type', 'application/json')
  res.writeHead(200);
  res.end(JSON.stringify(true))
})

server.listen (3000, () => {
  console.log('%s escuchando en %s', server.name, server.url)
})
