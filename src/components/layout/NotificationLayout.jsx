import React from 'react'
import LeftPanel from '../notifications/LeftPanel'
import Footer from './Footer'
import NotificationFeed from '../notifications/NotificationFeed'

const NotificationLayout = () => {
  return (
    <div className="bg-[#F4F2EE] py-2 min-h-163">
      <div className="grid grid-cols-[0.8fr_2fr_0.8fr] gap-8 max-w-6xl mx-auto mt-4">
        <LeftPanel />
        <NotificationFeed />
        <Footer />
      </div>
    </div>
  )
}

export default NotificationLayout
