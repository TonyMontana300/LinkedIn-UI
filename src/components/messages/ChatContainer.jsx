import React from "react";
import { chatMessages } from "../../data/chatMessages";
import { Link } from "react-router-dom";
import MsgBorder from "../ui/MsgBorder";
import BlueBtn from "../ui/BlueBtn";

const ChatContainer = ({selectedChat}) => {

  const filteredMsges = chatMessages.filter((msg) => msg.conversationId === selectedChat.id);

  return (
    <div className="flex flex-col h-65 py-2 border-b-2 border-b-gray-300 overflow-y-auto overflow-x-hidden flex-1">
      {filteredMsges.map((msg) => (
        <div key={msg.id} className="w-120">
          <div className="px-2">
            <Link to="#" className="">
              <img
                src={msg.avatar}
                alt="avatar"
                className="h-15 w-15 rounded-full"
              />
            </Link>
          </div>
          <Link to="#" className="inline-flex px-4">
            <h2 className="font-semibold text-gray-900">{msg.sender}</h2>
          </Link>
          <p className="text-gray-800 text-sm px-4">{msg.role}</p>

          <MsgBorder text={msg.date} />
          <div className="flex gap-1">
            <div className="px-2">
              <Link to="#" className="">
                <img
                  src={msg.avatar}
                  alt="avatar"
                  className="h-9 w-9 rounded-full"
                />
              </Link>
            </div>
            <div className="flex gap-2">
              <h3 className="text-gray-900 font-semibold text-sm">
                {msg.sender}
              </h3>
              <span className="text-sm text-gray-500">{msg.time}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 hover:bg-[#EBEBEB] py-2">
            <p className="px-14 font-medium text-gray-900 text-sm">
              {msg.role} - {msg.lastMessage}
            </p>
            <p className="px-14 text-sm text-gray-800 text-left">
              {msg.message}
            </p>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            <BlueBtn text="Yes interested" />
            <BlueBtn text="No thanks" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatContainer;
