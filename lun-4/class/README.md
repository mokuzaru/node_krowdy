# Class about mondo db 

> this is for using node with express to conect to a mongo db (local) and react.

Install the next  packadges



Whit this command line

npm i express morgan mongoose


Crear las carpetas

models- diseñar el esquema de los datos
database.js - permite conectar a la base de datos
public - enviar react al frontend
app - Ira el codigo de react (interfaz) par aluego pasarlo a la carpeta public para eviar al frontend


Luego al crear las rutas para CRUD quiero que tenga el prefijo api.
Luego retornaremos un json en la ruta principal
Esta data en formato json luego la recibira react

Luego creamos el archivo index.html en la carpeta public

y creamos el middleware par alos archivos estaticos (public file)
Static por defecto encuentra la carpeta public

Luego en el html creamos una componente div con id "app" para que react luego encuentre este componente y pinte nuestra aplicacion

Luego hacemos la com con db
Mongoose nos permite conectarnos a la db y definir como se veran los datos dentro de la db
 Luego en tareas llamamos mongose para dar forma a los datos, para eso llamamos una parte de la biblioteca que se llama schema.
