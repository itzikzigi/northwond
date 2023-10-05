import express from "express";
import {
  handleAddTeacher,
  handleDeleteTeacher,
  handleGetTeacherByCon,
  handleGetTeachers,
  handleUpdateTeacher,
} from "../controller/teachersController";
const router = express.Router();

router.get("/", handleGetTeachers);
router.get("/:id", handleGetTeacherByCon);
router.put("/:id", handleUpdateTeacher);
router.delete("/:id", handleDeleteTeacher);
router.post("/", handleAddTeacher);

export default router;
