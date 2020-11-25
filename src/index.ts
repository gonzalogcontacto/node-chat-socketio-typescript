import express from "express";
import socketio from "socket.io";
import path from "path";

const app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve("./client/index.html"));
});

app.get("/form", (req: any, res: any) => {
  res.sendFile(path.resolve("./client/form.html"));
});

const server = app.listen(app.get("port"), function() {
  console.log("listening on *:3000");
});

// set up socket.io and bind it to our http server.
let io = new socketio.Server(server);

// whenever a user connects on port 3000 via websocket, log that a user has connected
io.on("connection", function(socket: any) {
  console.log("a user connected");

  // whenever a user connects on port 3000 via websocket emit message, catchup and log/emit messages to the other connected
  socket.on('message', (message: any)=>{

    console.log(message);
    io.emit('message', message);
  });
});

