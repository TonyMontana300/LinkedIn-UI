import express from "express";
import {
  registerUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);


router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
