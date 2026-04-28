import React from "react";
import NotificationLayout from "../components/layout/NotificationLayout";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { API_URL } from "../../server/utils/api.js";
import { useAuth } from "../hooks/useAuth.js";

const Notification = () => {
  const { token } = useAuth();
  const { setNotifications } = useOutletContext();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(`${API_URL}/api/notifications`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          console.error("Failed API: ", res.status);
          return;
        }

        const notifications = await res.json();
        setNotifications((prev) => {
          const merged = [...notifications, ...prev];
          const unique = merged.filter((item, index, self) => {
            return index === self.findIndex((n) => n._id === item._id);
          });
          return unique;
        });

      } catch (error) {
        console.error("Error fetching notifications: ", error);
      }
    };

    if (token) fetchNotifications();
  }, [token, setNotifications]);

  return <NotificationLayout />;
};

export default Notification;
