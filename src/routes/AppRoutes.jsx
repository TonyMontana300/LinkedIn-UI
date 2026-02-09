import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import Feed from "../pages/Feed.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import Profile from "../pages/Profile.jsx";
import Landing from "../pages/Landing.jsx";
import Jobs from "../pages/Jobs.jsx";
import Messages from "../pages/Messages.jsx";
import MyNetwork from "../pages/MyNetwork.jsx";
import Notification from "../pages/Notification.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      {/*Public Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/*Private Routes */}
      <Route element={<ProtectedRoutes />}>
        <Route element={<MainLayout />}>
          <Route path="/my-network" element={<MyNetwork />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notification />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
