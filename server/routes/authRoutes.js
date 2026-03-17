import express from "express";
import {
  registerUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", protect, async (req, res) => {
    res.json({
        message: "Access granted",
        user: req.user,
    });
});

router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
