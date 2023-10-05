import express from "express";
import studentsRouter from "../students/router/studentsRouter";
import teachersRouter from "../teachers/routes/teachersRouter";
import coursesRouter from "../courses/routes/coursesRouter";
const router = express.Router();

router.use("/students", studentsRouter);
router.use("/teachers", teachersRouter);
router.use("/courses", coursesRouter);

export default router;
