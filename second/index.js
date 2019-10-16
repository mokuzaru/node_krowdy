const restify = require('restify');
const server = restify.createServer();

//settings
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

const users={
    1:{
      name: 'Crispy',
      lastName: 'Huertos'
    }
  };

  let usersCount = 1;
  //routes
  server.get('/user', (req, res, next) => {
  	res.setHeader('Content-Type', 'application/json')
  	res.writeHead(200)
  	res.end(JSON.stringify(users))
  })

  server.post('/user', (req, res, next) => {
  	console.log(req.body)
  	let user = req.body
  	usersCount++
  	user.id = usersCount
  	users[user.id] = user
  	res.setHeader('Content-type', 'application/json')
  	res.writeHead(200)
  	res.end(JSON.stringify(user))
  })

server.listen(3000, () => {
  console.log('%s escuchando en %s', server.name, server.url);
})
