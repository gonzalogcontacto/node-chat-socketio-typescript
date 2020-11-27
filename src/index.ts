import express from "express";
import { Request, Response } from 'express';
import socketio from 'socket.io';
import path from 'path';

const app = express();

// Cliente en mi mismo servidor con posibilidad de conexion websocket
app.get('/', (req: Request, res: Response)=> {
  res.sendFile(path.resolve("./client/form.html"));;
});

const server = app.listen(5000, function() {
  console.log("listening on *:5000");
});

const io = new socketio.Server(server);

io.on('connection', (socket: any) => { 
  console.log('User created');

  // Escuchador de emisiones en message
  socket.on('message', (message: any)=>{
    console.log(message);
    
      // Despechar esos mensajes al resto de clientes
      io.emit('message', message);
  });
});