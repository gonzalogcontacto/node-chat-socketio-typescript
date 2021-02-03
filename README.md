# (Socket Lessons) Node Chat with socketio. Typescript based.
 Proyecto educativo en el que montamos un chat basado en node con typescript con la tecnología web sockets mediante la librería socket.io.
 
 # Estructura
 
 - client: Carpeta en la que tenemos los html que hacen de cliente conectándose por socket al servidor en node. Presentamos una interfaz simple para demostrar el funcionamiento de la conexión con el servidor.
 
 Tenemos acceso como clientes mediante http:localhost:5000/
 
 - src/index.ts: Archivo de servidor en el que levantamos con express el soporte para la parte de cliente y con socket io un servidor que escucha y despacha los mensajes que recibe a los clientes conectados. 
 
# Levantar proyecto

- npm run dev: Nos lanza la aplicación sin necesidad de compilar TS a JS y además detecta los cambios de forma automática gracias al módulo ts-node y nodemon.
