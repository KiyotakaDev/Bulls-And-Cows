import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000/");

export const RoomPage = () => {
  const [roomID, setRoomID] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [storedUserName, setstoredUserName] = useState("");

  const randomNumber = Math.floor(Math.random() * 50) + 1;
  const roomName = `room/${randomNumber}`;

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    storedName ? setstoredUserName(storedName) : setShowModal(true);
  }, []);

  const createRoom = () => {
    socket.emit("createNewRoom", roomName);
  };

  const joinRoom = () => {
    socket.emit("joinRoom", roomID);
    socket.on("roomJoined", (roomId) => {
      console.log(`User ... joined ${roomId}`);
    });
    socket.on("roomFull", () => {
      console.log("Room is full or does not exist");
    });
  };

  const handleModalSubmit = () => {
    localStorage.setItem("userName", userName);
    setShowModal(false);
  };

  return (
    <div className="h-screen w-full bg-leveled-800 text-white text-2xl flex flex-col justify-center items-center gap-y-10">
      {showModal ? (
        <div>
          <p>Please inter an username</p>
          <input
            className="bg-transparent"
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button onClick={handleModalSubmit}>Save</button>
        </div>
      ) : null}
      {storedUserName !== "" ? (
        <div>Welcome {storedUserName}</div>
      ) : null}
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomID}
          onChange={(event) => setRoomID(event.target.value)}
          className="p-10 text-2xl bg-transparent outline-none"
        />
        <button
          onClick={joinRoom}
          className="bg-leveled-600 h-full w-full px-4 rounded-lg hover:bg-leveled-500 transition-colors duration-300 ease-in-out"
        >
          Join Room
        </button>
      </div>
      <p className="text-5xl">- OR -</p>
      <button
        onClick={createRoom}
        className="bg-leveled-600 w-1/2 h-[15%] rounded-lg hover:bg-leveled-500 transition-colors duration-300 ease-in-out text-4xl"
      >
        Create Room
      </button>
    </div>
  );
};
