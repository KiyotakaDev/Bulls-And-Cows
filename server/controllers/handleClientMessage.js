const salas = new Set();

const controller = (socket, io) => {

  console.log("New client connected");

  socket.on("createNewRoom", (roomName) => {

    if (salas.has(roomName)) {
      socket.emit("roomFull");

    } else {

      salas.add(roomName);
      socket.join(roomName);
      console.log(roomName);
    }
  });

  socket.on("joinRoom", (roomName) => {
    if (salas.has(roomName)) {
      socket.join(roomName);
      const idClients = Array.from(io.sockets.adapter.rooms.get(roomName) || []);;
      const totalClients = io.sockets.adapter.rooms.get(roomName).size;
      console.log("Personas en la sala: " + totalClients);
      console.log(idClients);
      console.log(salas);
    } else {
      socket.emit("roomFull");
    }
  });

  socket.on("messageInRoom", (message) => {
    const rooms = Object.keys(socket.rooms);
    const currentRoom = rooms[1];
    io.to(currentRoom).emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconected`);
  });
};

export default controller;
