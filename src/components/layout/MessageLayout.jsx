import React from 'react'
import MessagePanel from "../messages/MessagePanel";
import Footer from"../layout/Footer"

const MessageLayout = () => {
  return (
    <div className="bg-[#F4F2EE] py-2">
      <div className="grid grid-cols-[2.5fr_1fr] gap-8 max-w-6xl mx-auto mt-4">
        <MessagePanel />
        <Footer />
      </div>
    </div>
  )
}

export default MessageLayout
