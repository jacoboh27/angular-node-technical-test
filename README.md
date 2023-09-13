# Prueba técnica de Angular y Node.js
Prueba técnica de un e-commerce utilizando el stack MEAN (MongoDB - Express - Angular - Node)

## Explicación del contenido del repositorio
Dentro del repositorio se encuentran 3 proyectos:
  1. admin_metronic: app creada en angular para la administración del e-commerce (solo pueden acceder administradores),
    NOTA: este proyecto está basado en metronic, el cual es una herramienta y marco central único que utiliza Bootstrap 5. Para conocer mas, visite https://keenthemes.com/metronic
  3. api_ecommerce: api de los servicios back-end del e-commerce.
  4. jacobs-ecommerce: app creada en angular, este es el e-commerce, disponible para acceso de todo el público. 

## Tecnologías y versiones utilizadas
- node.js v14.21.3
- angular v15.2.0
- express v4.18.2
- mongoDB 7.0

## Recomendaciones
- Usar esta versión de Node.js para descargar los paquetes (npm install) para evitar posibles inconvenientes
- Usar esta versión de Angular para la app 'admin_metronic' para evitar posibles inconvenientes

## Instrucciones de instalación y ejecución 
- Ejecute el comando 'npm install' en su consola preferida estando ubicado dentro de cada proyecto para bajar todos los paquetes necesarios para el correcto funcionamiento de las aplicaciones.
- Se utilizó MongoDB para crear el proyecto del back, por lo cual el puerto para conectarse a la base de datos es el predeterminado; el 3000. Si desea usar un puerto distinto al 3000; deberá cambiar el puerto especificado en el archivo .env ubicado en las raíces de los proyectos. 
- ejecute el comando 'npm run start' en su consola preferida estando ubicado dentro del proyecto para ejecutar el proyecto del back-end (api_ecommerce).
- ejecute el comando 'ng serve' en su consola preferida estando ubicado dentro de los proyectos de front-end (admin_metronic y jacobs-ecommerce) para ejecutarlos.
