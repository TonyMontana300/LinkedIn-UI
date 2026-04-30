import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth.js";
import { API_URL } from "../../server/utils/api.js";
import { notifications as initialNotifications } from "../data/notification.js";

const MainLayout = () => {
  const { token } = useAuth();

  const formattedInitialNotifications = initialNotifications.map((item) => ({
    _id: "fake-" + item.id,
    sender: {
      name: item.user,
      profileImage: item.avatar,
    },
    type: item.type,
    text: item.text,
    message: item.message,
    time: item.time,
    createdAt: new Date(),
    isFake: true,
    category: item.category,
    post: item.post,
  }));

  const [notifications, setNotifications] = useState(
    formattedInitialNotifications,
  );

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(`${API_URL}/api/notifications`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (Array.isArray(data)) {
          setNotifications((prev) => {
            const existingIds = new Set(prev.map(n => n._id));
            const newOnes = data.filter(n => !existingIds.has(n._id));
            return [...newOnes, ...prev];
          });
        }
      } catch (error) {
        console.error("Failed to fetch notifications: ", error);
      }
    };
    if (token) fetchNotifications();
  }, [token]);

  return (
    <div>
      <Navbar />
      <Outlet context={{ notifications, setNotifications }} />
    </div>
  );
};

export default MainLayout;
