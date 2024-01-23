import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const GamePage = () => {
  const [recievedMessage, setRecievedMessage] = useState("");
  const [messageToSend, setMessageToSend] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  const socket = io("http://localhost:3000/");

  useEffect(() => {
    socket.on("message", (message) => {
      setRecievedMessage(message);
      setAllMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => socket.off("message")
  }, [socket]);

  useEffect(() => {
    socket.emit("message",  messageToSend);
  }, [messageToSend, socket]);

  return (
    <div className="h-screen w-full bg-leveled-800 text-white flex flex-col justify-center items-center gap-y-6">
      <form
        className="flex flex-col justify-center items-center gap-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          const msg = event.target[0].value;
          
          setMessageToSend(msg);
          event.target[0].value = "";
        }}
      >
        <input
          className="bg-transparent outline-none border-2 border-white p-3 rounded-md"
          placeholder="Message"
        />
        <button
          type="submit"
          className="bg-leveled-600 w-20 h-10 rounded-md hover:"
          children="Send"
        />
      </form>
      <div className="bg-leveled-900 h-1/2 overflow-y-scroll w-11/12 border-2 border-leveled-600">
        <ul className="flex flex-col-reverse justify-center items-center gap-y-2 text-2xl">
          {allMessages.map((msg, index) => (
            <li className="w-11/12 text-center bg-leveled-800" key={index}>
              {msg}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GamePage;
