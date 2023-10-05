import express from "express";
import {
  handleGetUser,
  handleGetUsers,
  handleUserRegistration,
  handleEditUser,
  handleDeleteUser,
  handleLogin,
  handleAddProductToUser,
} from "../controllers/usersControllers";
import { auth } from "../../auth/authService";
const router = express.Router();

router.get("/", auth, handleGetUsers);
router.get("/:id", auth, handleGetUser);
router.post("/", handleUserRegistration);
router.put("/:id", auth, handleEditUser);
router.delete("/:id", auth, handleDeleteUser);
router.post("/login", handleLogin);
router.patch("/add-product/:id", auth, handleAddProductToUser);

export default router;
