import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveChatMsg, setLiveChatMsg] = useState("");
  console.log(liveChatMsg);

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "this sis akash  hunlkah tajnakj",
        })
      );
      console.log("API poling");
    }, 500);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="w-[350px] h-[450px] scroll- ml-20 bg-slate-100 rounded-lg overflow-y-scroll max-sm:w-full max-sm:mt-2 max-sm:ml-0">
        <h1 className="sticky top-0 bg-slate-200 m-0 p-4 font-bold ">
          Live chat
        </h1>
        <div className="  flex flex-col-reverse ">
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Rahul",
              message: liveChatMsg,
            })
          );
          setLiveChatMsg("");
        }}
        className="border rounded-lg mt-1 border-black flex justify-between w-[350px] ml-20 active:border-none"
      >
        <input
          className="w-full rounded-lg p-2 max-sm:w-96"
          type="text"
          placeholder="Write a to chat"
          value={liveChatMsg}
          onChange={(e) => setLiveChatMsg(e.target.value)}
        />
        <button className="bg-green-200 px-4 border border-green-600 rounded-lg ">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
