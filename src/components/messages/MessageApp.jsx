import React from "react";
import { conversations } from "../../data/messages";
import { useState } from "react";
import { Link } from "react-router-dom";
import ChatContainer from "./ChatContainer";
import BlueBtn from "../ui/BlueBtn";

const MessageApp = () => {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);

  return (
    <div className="grid grid-cols-[1.2fr_2fr] h-[71vh]">
      <div className="border-r border-r-gray-300">
        {conversations.map((chat) => (
          <div
            onClick={() => setSelectedChat(chat)}
            key={chat.id}
            className="flex gap-2 py-3 px-4 hover:bg-[#EBEBEB] cursor-pointer border-b border-b-gray-200"
          >
            <div>
              <img
                src={chat.avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className=" flex-1">
              <div className="flex justify-between">
                <h2 className="text-gray-900 leading-tight">{chat.name}</h2>
                <p className="text-sm text-gray-900">{chat.time}</p>
              </div>
              <p className="text-sm text-gray-500">
                {chat.role}: {chat.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="py-1">
        <div className="flex justify-between items-center px-3 border-b border-b-gray-300">
          <div className="">
            <h2 className="font-semibold">{selectedChat.name}</h2>
            <p className="text-xs text-gray-500">{selectedChat.role}</p>
          </div>
          <Link
            to="#"
            className="hover:bg-[#D4DDE6] rounded-full p-1 transition-all ease-in-out duration-200 w-11 h-11 flex items-center justify-center"
          >
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="#666666"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"
                fill="#666666"
              />
              <path
                d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
                fill="#666666"
              />
              <path
                d="M21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12Z"
                fill="#666666"
              />
            </svg>
          </Link>
        </div>
        <div className="border-b border-b-gray-300 px-3 flex py-2">
          <Link
            to="#"
            className="text-xs font-medium text-blue-700 hover:underline"
          >
            Visit my website
          </Link>
        </div>

        <ChatContainer selectedChat={selectedChat}/>
        <div className="px-3 py-2 border-b border-b-gray-300">
          <textarea
            type="text"
            placeholder="Write a message..."
            className="w-full rounded-md p-3 placeholder:text-gray-600 placeholder:text-sm min-h-25 overflow-y-auto bg-[#EBEBEB] outline-none resize-none"
          />
        </div>
        <div className="flex py-2 px-3 justify-between">
          <div className="flex gap-2">
            <Link
              to="#"
              className="hover:bg-[#D4DDE6] rounded-full p-1 transition-all ease-in-out duration-200 w-9 h-9 flex items-center justify-center"
            >
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Media / Image_01">
                  <path
                    id="Vector"
                    d="M3.00005 17.0001C3 16.9355 3 16.8689 3 16.8002V7.2002C3 6.08009 3 5.51962 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4801 4 19.9079 4.21799C20.2842 4.40973 20.5905 4.71547 20.7822 5.0918C21 5.5192 21 6.07899 21 7.19691V16.8031C21 17.2881 21 17.6679 20.9822 17.9774M3.00005 17.0001C3.00082 17.9884 3.01337 18.5058 3.21799 18.9074C3.40973 19.2837 3.71547 19.5905 4.0918 19.7822C4.5192 20 5.07899 20 6.19691 20H17.8036C18.9215 20 19.4805 20 19.9079 19.7822C20.2842 19.5905 20.5905 19.2837 20.7822 18.9074C20.9055 18.6654 20.959 18.3813 20.9822 17.9774M3.00005 17.0001L7.76798 11.4375L7.76939 11.436C8.19227 10.9426 8.40406 10.6955 8.65527 10.6064C8.87594 10.5282 9.11686 10.53 9.33643 10.6113C9.58664 10.704 9.79506 10.9539 10.2119 11.4541L12.8831 14.6595C13.269 15.1226 13.463 15.3554 13.6986 15.4489C13.9065 15.5313 14.1357 15.5406 14.3501 15.4773C14.5942 15.4053 14.8091 15.1904 15.2388 14.7607L15.7358 14.2637C16.1733 13.8262 16.3921 13.6076 16.6397 13.5361C16.8571 13.4734 17.0896 13.4869 17.2988 13.5732C17.537 13.6716 17.7302 13.9124 18.1167 14.3955L20.9822 17.9774M20.9822 17.9774L21 17.9996M15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10Z"
                    stroke="#181818"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </Link>
            <Link
              to="#"
              className="hover:bg-[#D4DDE6] rounded-full p-1 transition-all ease-in-out duration-200 w-9 h-9 flex items-center justify-center"
            >
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                fill="#181818"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7285 3.88396C17.1629 2.44407 19.2609 2.41383 20.4224 3.57981C21.586 4.74798 21.5547 6.85922 20.1194 8.30009L17.6956 10.7333C17.4033 11.0268 17.4042 11.5017 17.6976 11.794C17.9911 12.0863 18.466 12.0854 18.7583 11.7919L21.1821 9.35869C23.0934 7.43998 23.3334 4.37665 21.4851 2.5212C19.6346 0.663551 16.5781 0.905664 14.6658 2.82536L9.81817 7.69182C7.90688 9.61053 7.66692 12.6739 9.51519 14.5293C9.80751 14.8228 10.2824 14.8237 10.5758 14.5314C10.8693 14.2391 10.8702 13.7642 10.5779 13.4707C9.41425 12.3026 9.44559 10.1913 10.8809 8.75042L15.7285 3.88396Z"
                  fill="#181818"
                />
                <path
                  d="M14.4851 9.47074C14.1928 9.17728 13.7179 9.17636 13.4244 9.46868C13.131 9.76101 13.1301 10.2359 13.4224 10.5293C14.586 11.6975 14.5547 13.8087 13.1194 15.2496L8.27178 20.1161C6.83745 21.556 4.73937 21.5863 3.57791 20.4203C2.41424 19.2521 2.44559 17.1408 3.88089 15.6999L6.30473 13.2667C6.59706 12.9732 6.59614 12.4984 6.30268 12.206C6.00922 11.9137 5.53434 11.9146 5.24202 12.2081L2.81818 14.6413C0.906876 16.5601 0.666916 19.6234 2.51519 21.4789C4.36567 23.3365 7.42221 23.0944 9.33449 21.1747L14.1821 16.3082C16.0934 14.3895 16.3334 11.3262 14.4851 9.47074Z"
                  fill="#181818"
                />
              </svg>
            </Link>
            <Link
              to="#"
              className="hover:bg-[#D4DDE6] rounded-full p-1 transition-all ease-in-out duration-200 w-9 h-9 flex items-center justify-center"
            >
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7h6v2H3v6h4v-2H5v-2h4v6H1V7h2zm14 0h6v2h-6v2h4v2h-4v4h-2V7h2zm-4 0h-2v10h2V7z"
                  fill="#181818"
                />
              </svg>
            </Link>
            <Link
              to="#"
              className="hover:bg-[#D4DDE6] rounded-full p-1 transition-all ease-in-out duration-200 w-9 h-9 flex items-center justify-center"
            >
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                fill="#181818"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.70504 10.7092C6.8501 10.5689 7.01205 10.4438 7.1797 10.3321C7.50489 10.1153 7.80058 10 8 10C8.19942 10 8.49511 10.1153 8.8203 10.3321C9.07494 10.5018 9.26866 10.6837 9.2931 10.7074C9.68451 11.0859 10.3173 11.0969 10.7071 10.7071C11.0976 10.3166 11.0976 9.68342 10.7071 9.29289C10.4723 9.05848 10.2052 8.85164 9.9297 8.66795C9.50489 8.38475 8.80058 8 8 8C7.19942 8 6.49511 8.38475 6.0703 8.66795C5.79505 8.85145 5.52844 9.05816 5.29363 9.29216C4.90926 9.67754 4.90613 10.3203 5.29289 10.7071C5.68258 11.0968 6.31431 11.0972 6.70504 10.7092Z"
                  fill="#181818"
                />
                <path
                  d="M8.88875 13.5414C8.63822 13.0559 8.0431 12.8607 7.55301 13.1058C7.05903 13.3528 6.8588 13.9535 7.10579 14.4474C7.18825 14.6118 7.29326 14.7659 7.40334 14.9127C7.58615 15.1565 7.8621 15.4704 8.25052 15.7811C9.04005 16.4127 10.2573 17.0002 12.0002 17.0002C13.7431 17.0002 14.9604 16.4127 15.7499 15.7811C16.1383 15.4704 16.4143 15.1565 16.5971 14.9127C16.7076 14.7654 16.8081 14.6113 16.8941 14.4485C17.1387 13.961 16.9352 13.3497 16.4474 13.1058C15.9573 12.8607 15.3622 13.0559 15.1117 13.5414C15.0979 13.5663 14.9097 13.892 14.5005 14.2194C14.0401 14.5877 13.2573 15.0002 12.0002 15.0002C10.7431 15.0002 9.96038 14.5877 9.49991 14.2194C9.09071 13.892 8.90255 13.5663 8.88875 13.5414Z"
                  fill="#181818"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
                  fill="#181818"
                />
                <path
                  d="M14.705 10.7092C14.8501 10.5689 15.0121 10.4438 15.1797 10.3321C15.5049 10.1153 15.8006 10 16 10C16.1994 10 16.4951 10.1153 16.8203 10.3321C17.0749 10.5018 17.2687 10.6837 17.2931 10.7074C17.6845 11.0859 18.3173 11.0969 18.7071 10.7071C19.0976 10.3166 19.0976 9.68342 18.7071 9.29289C18.4723 9.05848 18.2052 8.85164 17.9297 8.66795C17.5049 8.38475 16.8006 8 16 8C15.1994 8 14.4951 8.38475 14.0703 8.66795C13.795 8.85145 13.5284 9.05816 13.2936 9.29216C12.9093 9.67754 12.9061 10.3203 13.2929 10.7071C13.6826 11.0968 14.3143 11.0972 14.705 10.7092Z"
                  fill="#181818"
                />
              </svg>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <BlueBtn text="Send"/>
            <Link
              to="#"
              className="hover:bg-[#D4DDE6] rounded-full p-1 transition-all ease-in-out duration-200 w-9 h-9 flex items-center justify-center"
            >
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"
                  fill="#181818"
                />
                <path
                  d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
                  fill="#181818"
                />
                <path
                  d="M21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12Z"
                  fill="#181818"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageApp;
