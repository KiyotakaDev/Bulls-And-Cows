const salas = new Set();

const controller = (socket, io) => {
  const sliced = socket.id.substring(0, 3);

  console.log("New client connected " + sliced);

  socket.on("createNewRoom", (roomName) => {
    if (salas.has(roomName)) {
      socket.emit("roomFull");
    } else {
      salas.add(roomName);
      socket.join(roomName);

      const totalCliens = io.sockets.adapter.rooms.get(roomName).size;
      console.log("Personas en la sala" + totalCliens);
      console.log(socket.rooms);
    }
  });

  socket.on("joinRoom", (roomName) => {
    if (salas.has(roomName)) {
      socket.join(roomName);
      const totalCliens = io.sockets.adapter.rooms.get(roomName).size;
      console.log("Personas en la sala: " + totalCliens);
      console.log(socket.rooms);
    } else {
      socket.emit("roomFull");
    }
  });

  socket.on("message", (message) => {
    const rooms = Object.keys(socket.rooms);
    const currentRoom = rooms[1];
    io.to(currentRoom).emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconected`);
  });
};

export default controller;
