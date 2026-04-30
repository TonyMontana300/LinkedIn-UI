import { API_URL } from "../../server/utils/api";

export const sendNotification = async (token, recipient, type, postId) => {

  try {
    const res = await fetch(`${API_URL}/api/notifications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        recipient,
        type,
        post: postId,
      }),
    });
    if (!res.ok) {
      console.error("Failed to send notification");
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Notification error: ", error);
  }
};
