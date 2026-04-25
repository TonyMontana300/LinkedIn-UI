import React from "react";
import MessageEditBtn from "../ui/MessageEditBtn";
import SearchMsg from "../ui/SearchMsg";
import GreenBtn from "../ui/GreenBtn";
import BlackBtn from "../ui/BlackBtn";
import MessageApp from "./MessageApp";

const MessagePanel = () => {
  return (
    <div className="bg-white rounded-md md:h-[calc(100vh-120px)] h-[calc(100vh-115px)] flex flex-col overflow-hidden shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="flex justify-between items-center border-b border-b-gray-300 py-1 px-4">
        <div className="flex gap-4 items-center">
          <h1 className="text-gray-900 font-medium">Messaging</h1>
          <SearchMsg />
        </div>
        <MessageEditBtn />
      </div>

      <div className="flex gap-2 py-2 px-4 border-b border-b-gray-300 no-scrollbar overflow-x-auto whitespace-nowrap scroll-smooth">
        <div className="border-r border-r-gray-300 pr-2">
          <GreenBtn text="Focused" />
        </div>
        <div className="flex gap-2">
          <BlackBtn text="Jobs" />
          <BlackBtn text="Unread" />
          <BlackBtn text="Connections" />
          <BlackBtn text="InMain" />
          <BlackBtn text="Started" />
        </div>
      </div>

      <MessageApp />
    </div>
  );
};

export default MessagePanel;
