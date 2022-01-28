# Tienda de Escobas de Harry Potter 🧙🏽‍♀️

_Proyecto desarollado en Nodejs que emula el Back-End de una tienda de escobas de Harry Potter online_

## Tecnologías utilizadas 📚

El proyecto ha sido desarrollado utilizando las siguientes paquetes en Nodejs:

* Express
* Mysql
* Sequelize
* Bcryptjs
* Jsonwebtoken
* Multer
* Dotenv

## ¿Como desplegar el proyecto? 📋

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo:

Clonarte el repositorio localmente:
> git clone url del repositorio

Instalar las depedencias necesarias:
> npm i

Rellenar las variables necesarias en estos archivos para iniciar el proyecto:
> - config.example.json -> Incluir campos Username, Password, Database
> - .env.example -> Puerto en el que quieras que se ejecute el server y jwt_secret para la utilización de jsonwebtoken en la autenticación del usuario

Creamos la base de datos:
> sequelize db:create

Creamos las migraciones:
> sequelize db:migrate

Creamos los seeders (datos de prueba para nuestra base de datos):
> sequelize db:seed:all

## Endpoints 🛠️

El sistema puede realizar las siguientes acciones:

- CRUD Comics
- CRUD Categorias
- CRUD Pedidos
- CRUD Usuarios
- CRUD Reviews
- Encriptación de ciertos campos mediante Bcryptjs
- Proceso de autenticación mediante jsonwebtoken
- El sistema permite administrar a los usuarios por roles


## 📌 Organización a la hora de trabajar en este proyecto 📌

El proyecto consta de dos ramas: main y develop.

Las distintas funcionalidades del proyecto que se han implementado en distintas ramas, posteriormente se han fusionado con la rama develop, encargada de actualizar todo el trabajo de desarrollo.

Se han organizado las tareas siguiendo un tablero de trabajo de Trello:

(https://trello.com/b/F97fAsaL/web-backend) 

---
Realizado por [Amparo Ramada](https://github.com/amparo1206) 👩🏼‍💻