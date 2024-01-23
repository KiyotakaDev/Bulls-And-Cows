const controller = (socket) => {
  console.log("New client connected" + socket.id);

  socket.on("message", ({ message }) => {
    socket.emit("message", `${socket.id}: ${message}`);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconected`);
  });
};

export default controller;
