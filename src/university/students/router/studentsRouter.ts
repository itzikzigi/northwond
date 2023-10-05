import express from "express";
import {
  handleAddStudent,
  handleDeleteStudent,
  handleGetStudents,
  handleGetStudentsByCon,
  handleUpdateStudent,
} from "../controllers/studentsController";
const router = express.Router();

router.get("/", handleGetStudents);
router.get("/:id", handleGetStudentsByCon);
router.put("/:id", handleUpdateStudent);
router.delete("/:id", handleDeleteStudent);
router.post("/", handleAddStudent);
export default router;
