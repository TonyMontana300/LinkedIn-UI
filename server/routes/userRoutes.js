import express from "express";
import {
  getMe,
  updateProfile,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", getUser);

router.get("/me", protect, getMe);
router.put("/update-profile", protect, updateProfile);

router.get("/:id", getUserById);

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
