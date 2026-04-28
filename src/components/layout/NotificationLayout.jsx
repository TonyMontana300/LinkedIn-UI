import React from 'react'
import LeftPanel from '../notifications/LeftPanel'
import Footer from './Footer'
import NotificationFeed from '../notifications/NotificationFeed'
import { useOutletContext } from "react-router-dom";

const NotificationLayout = () => {
  const { notifications } = useOutletContext();
  return (
    <div className="bg-[#F4F2EE] md:py-2 py-1 px-2 min-h-[calc(100vh-79px)]">
      <div className="grid md:grid-cols-[0.8fr_2fr_0.8fr] grid-cols-1 gap-8 max-w-6xl mx-auto mt-4">
        <LeftPanel />
        <NotificationFeed notifications={notifications} />
        <Footer />
      </div>
    </div>
  )
}

export default NotificationLayout
