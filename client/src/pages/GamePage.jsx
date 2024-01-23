import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const GamePage = () => {
  const [recievedMessage, setRecievedMessage] = useState("")

  const socket = io("http://localhost:3000/");

  useEffect(() => {
    socket.on("message", (data) => {
      const { message } = data
      setRecievedMessage(message)
    })

    socket.emit("message", "Hola desde el cliente")


  }, [])
  
  
  return (
    <div className="h-screen w-full bg-leveled-800 text-white flex flex-col justify-center items-center">
      <p>Server message: {recievedMessage}</p>
    </div>
  )
}

export default GamePage;
