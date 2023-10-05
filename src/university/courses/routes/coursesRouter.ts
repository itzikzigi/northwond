import express from "express";
import {
  handleAddCourse,
  handleDeleteCourse,
  handleGetCourseByCon,
  handleGetCourses,
  handleUpdateCourse,
} from "../controller/coursesController";

const router = express.Router();

router.get("/", handleGetCourses);
router.get("/:id", handleGetCourseByCon);
router.put("/:id", handleUpdateCourse);
router.delete("/:id", handleDeleteCourse);
router.post("/", handleAddCourse);

export default router;
