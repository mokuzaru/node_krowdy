# Node Class
> This is a course to introduce to basic and intermedia knowledge about backend with node js
## First Class

### ¿Que es API?
Un API no es una bd ni un server. Un API es el codigo
que gobierna los access points del server.

Nos enfocaremos en API basada para web.

- API para recibir información detallada
- Un api para intercambiar data entre aplicaciones.

Gracias a las API podemos acceder a la misama data para diferentes aplicaciones.

* Diferencia con un backend-bd a una API

Tarea

----
#### Simple API

Para crear un packadge json

`npm init --yes`

Luego una libreria para crear la API

`npm i restify`

Primero crear el archivo index

luego llamamos la libreria

`const restify = require('restify')`

Para inicializar restify para crear un server

`const server = restify.createServer();`

Usar los pluggins de restify -- para que acepte ciertos tipos de cabecera

`Server.use(restify.pluginsacceptParser(server.acceptable))`

Necesito funcionalidad para convertir las query

`server.use(restify.plugin.queryParse())`

Para poder entender los json que conteste el server

`server.use(restify.plugins.bodyParse())`

Luego arrancamos el servidor

`server.listen(6000, () => {
    console.log('server en el puerto 6000');
  });`

Luego simulamos la bd --- podemos simularla con un arreglo o un objeto (realmente no importa para este ejemplo porque lo almacenamos en memoria y puede ser una constante variable objeto)

`const users={
    1:{
      name: 'Crispy',
      lastName: 'Huertos'
    }
  };`

En las rutas cuando obtengamos la ruta /user .. ejemplo localhost/users , que le responda (funcion) datos almacenado con un error y una respuesta... y un callback que generalmente es llamado next.

Luego decimos 'res' o respuesta , le decimos establece la cabecera. En la cabecera decimos que tipo de dato estamos enviando y que tipo de app es.
Luego enviamos el status... en este caso 200.

Finalmente enviamos el dato de vuelta, con stringfy convertimos un json a un string.

Luego crearemos otra ruta. Para retornar por id.

## Second class

Comming soon..
