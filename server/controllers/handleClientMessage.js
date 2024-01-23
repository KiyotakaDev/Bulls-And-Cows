const controller = (socket, io) => {
  const sliced = socket.id.substring(0, 3)

  console.log("New client connected " + sliced);

  socket.on("message", (message) => {
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconected`);
  });
};

export default controller;
