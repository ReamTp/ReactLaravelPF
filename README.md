<p align="center">
    <a href="https://www.camposol.com.pe/" target="_blank">
        <img src="./resources/src/assets/img/Camposol.png" width="120">
    </a>
</p>
<h1 align="center">Sistema Administrativo</h1>

## Sobre el Sistema Administrativo

Este proyecto es un sistema administrativo, el cual esta desarrollado en React y Laravel, con el fin de brinda una una administración a una empresa con las siguientes opciones:

- Login.
- Configuración de Usuario.
- Niveles de Acceso.
- Opciones dependiendo al nivel de acceso.
- Manipulación de Datos (productos, empleados, etc.).
- Reportes de datos.

El proyecto es una demo técnica que permite mostrar el funcionamiento del sistema administrativo al manipular información.

## Pre Requisitos

Para poder instalar y iniciar el proyecto usted debe tener ya instalado en su las siguientes herramientas y lenguajes.

- Una [Base de Datos MySQL](https://www.mysql.com/) y [PHP 8](https://www.php.net/) (Puede obtener estos 2 lenguajes instalando y otras herramientas solamente [XAMPP](https://www.apachefriends.org/es/download.html) aunque debe verificar que la version de XAMPP que esta descargando tenga PHP 8 como minimo).
- PHP debe ser reconocido como mando en la consola de comandos o CMD.
- Debe tener los siguientes gestores de paquetes:
  - [Composer](https://getcomposer.org/) para poder instalar las dependecias de [Laravel](https://laravel.com/).
  - [Node.Js](https://nodejs.org/es/) para poder instalar las dependecias y iniciar la apliacación de [React.js](https://es.reactjs.org/) con su gestor de paquetes que es [npm](https://www.npmjs.com/).
- En MySQL ustede ya debe tener generada una base de datos.

## Instalación del proyecto

Una vez que tenga todas las herramientas necesarias usted puede proseguir con los siguientes pasos:

- Primero abrir una consola de comandos (CMD) como administrador para poder ejecutar los comandos necesarios.
- Ejecutar **composer install** para poder instalar los archivos necesarios para Laravel.
- Ejecutar **php artisan key:generate** para generar una nueva key que pueda usar Laravel.
- Luego Ejecutar **npm install** para pasar a instalar todas las dependecias necesarias para React.
- Copiar el archivo **.env.example** y cambiar el nombre de la copia por **.env**.
  - En el archivo **.env** recién creado debemos configurar el nombre y la configuración necesarias de nuestra base de datos, la cual, es en donde se generarán todas nuestras tablas que guardarán nuestros datos.
- Ya con la configuración anterior realizada puede ejecutar los siguientes comandos:
  - Ejecutar el comando **php artisan migrate** para crear las tablas en la base de datos.
  - Ejecutar el comadno **php artisan db:seed** para insertar datos a la base de datos.
    - En caso de no funcionar el comando anterior pero si se crearon las tablas, usar **php artisan migrate:fresh --seed**.

Con toda esta configuración realizada usted puede iniciar la aplicación en su computadora de escritorio.

## Ejecutar Aplicación

Recuerde que para no tener problemas al iniciar la aplicación debio de haber realizado la configuración indicada anteriormente, de ser así usted puede ejecutar los siguientes comandos para iniciar la aplicación.

### Iniciar Laravel Mix

Para iniciar el mix de Laravel usted solo debe ejecutar el siguiente comando en una consola de comandos o CMD.

    - npm run watch
  
Este comando nos permitira ejecutar el Laravel Mix, el cual, nos permitira compilar los archivos de React para que Laravel lo interprete.

### Iniciar Servidor de Laravel

Inicie otra consola y ejecute el siguiente comando para iniciar el servidor de Laravel:

    - php artisan serve

Este comando le generará un servidor de laravel en el **http://localhost:8000** este links debera escribirlo en su navegador.

Con esto usted ya podrá ejecutar y probar la aplicación sin problemas.