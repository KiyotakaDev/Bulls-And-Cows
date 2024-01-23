const salas = new Set();

const controller = (socket, io) => {
  const sliced = socket.id.substring(0, 3);

  console.log("New client connected " + sliced);

  socket.on("createNewRoom", (roomName) => {
    if (salas.has(roomName)) {
      console.log("Nombre de sala ya existente");
    } else {
      salas.add(roomName);
      socket.join(roomName);

      const totalCliens = io.sockets.adapter.rooms.get(roomName).size;
      console.log("Personas en la sala" + totalCliens);
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
