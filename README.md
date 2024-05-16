# El garito del Pazaak
![image](https://github.com/PedroPabloGuzmanMayen/Proyecto_MyBlog/assets/83627037/112d30a4-193a-4494-8a94-1de7331256b4)

## Informacón general del blog 

El Garito del Pazaak es un blog con temática de Star Wars en homenaje al canal de youtube con el mismi nombre, el canal actualmente se encuentra borrado pero puede ver uno de sus videos aquí: https://www.youtube.com/watch?v=GOt8CY3hd9w

Puede acceder al blog mediante este enlace: https://web05.lol/Blog_StarWars/dist/
Si gusta puede usar estas credenciales para entrar al área de administración: 
  Nombre de usuario: hola
  Contraseña: prueba

A veces el servidor que aloja el sitio se apaga, si tiene cualquier inconveniente por favor contáctame a este correo: guz22111@uvg.edu.gt

## Información sobre el desarrollo del sitio

## Base de datos 

![image](https://github.com/PedroPabloGuzmanMayen/Proyecto_MyBlog/assets/83627037/8c1bbce5-b236-4814-a84b-480910492181)

La base de datos fue desarrollada usando postgres y tiene este esquema:

Tabla users:

|  Columna  |  Descripción  |
| -------------- | -------------- |
| username | Almacena el nombre de los usuarios, además de eso es la llave primaria de la tabla |
| password | Almacena la contraseña de los usuarios, está cifrada usando MD5 |

Tabla Posts: 

|  Columna  |  Descripción  |
| -------------- | -------------- |
| id | Identificador único de cada post, es de tipo int y es sirve como llave primaria de la tabla |
| Title | Guarda el título del post, es de tipo varchar |
| Content | Guarda el contenido general de cada post, es de tipo varchar |
| Banner | Almacena un enlace a una imagen que represente al post, no puede ser null |
| Created_at | Almacena la fecha de creación del post, es de tipo timestamp |
| Author | Guarda el nombre de la persona que creo que el post, tiene una llave foránea a la columna username de la tabla users |


## Backend

![image](https://github.com/PedroPabloGuzmanMayen/Proyecto_MyBlog/assets/83627037/7248ad5d-af55-44e0-9bf3-24def516d3e7)

El backend de la aplicación fue desarrollado usando node y express js

Se realizó una api con el siguiente url de base https://api.web05.lol/22111 y que tiene los siguiente enpoints:

| Endpoint | Tipo de solicitud | Descripción | 
| ----------- | ----------- | ------------| 
| [/](https://api.web05.lol/22111/) | GET | Devuelve un mensaje que indica que la api funciona |
| [/Posts](https://api.web05.lol/22111/Posts) | GET | Devuelve todos los posts disponibles en el blog |
| [/Posts/:author](https://api.web05.lol/22111/Posts/hola) | GET | Devuelve los posts de un usuario en específico, el nombre del usuario del que se desean los posts debeir en el request | 
| [/newPost](https://api.web05.lol/22111/newPost) | POST | Crea un nuevo post en la base de datos, debe recibir un body con la siguiente estructura: {"title": título del post, "content": contenido del post, "image": imagen del post, "author": autor del post} |
| [/modifyPost/:id](https://api.web05.lol/22111/modifyPost/:id) | PUT | Modifica un post existente, debe recibir un body con la siguiente estructura:  {"title": nuevo título del post, "image": nueva imagen del post, "content": nuevo contenido del post}, el id del post que se desea modificar debe ir en el request |
| [/deletePost/:id](https://api.web05.lol/22111/deletePost/:id) | DELETE | Elimina un post, debe especificar el id del post que desea borrar en el request | 
| [/login](https://api.web05.lol/22111/login) | POST | Verifica si las creedenciales de un uusario son válidas, debe recibir un body con la siguiente estructura: {username: nombre de usuaro, password: contraseña}, si todo es correcto devuelve un token de sesión |
| [/register](https://api.web05.lol/22111/register) | POST | Crea un nuevo usuario en la tabla de users, recibe un body con la siguiente estructura: {username: nombre de usuaro, password: contraseña} | 

Para correr el servidor en el puerto 22111 de su máquina, puede usar el comando npm start 

Si quiere usar el blog en su equipo, debe clonar este repositorio, dirigirse a la carpeta StarWarsAPI y correr el comando npm install

## Frontend 

![image](https://github.com/PedroPabloGuzmanMayen/Proyecto_MyBlog/assets/83627037/9d4ed77b-e594-4d70-a94a-d20ce7caa5de)

El frontend fue desarrollado usando React y Vite

Si quiere usar el blog en su equipo, debe clonar este repositorio, dirigirse a la carpeta Blog_StarWars y correr el comando npm install

En el package json puede usar los siguientes comandos:


| Comando | Descripción |
| ------- | ------- | 
| npm run dev | Levanta el proyecto en el puerto 5173 de su equipo |
| npm run eslint | Corre un linter compatible con standard js |







