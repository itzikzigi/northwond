import express, { Request, Response } from "express";
import usersRoutes from "../users/routes/usersRoutes";
import universityRouter from "../university/router/universityRouter";
import northWindRouter from "../northWind/routes/router";
const router = express.Router();

router.use("/api/users", usersRoutes);
router.use("/api/university", universityRouter);
router.use("/api/northwind", northWindRouter);
router.use("*", (req: Request, res: Response) =>
  res.status(404).send("Page not found!")
);

export default router;
