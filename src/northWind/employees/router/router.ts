import express from "express";
import {
  getAllEmployeesReq,
  getEmployeeByDetailReq,
  getEmployeeByIDReq,
} from "../controller/controller";
const router = express.Router();

router.get("/", getAllEmployeesReq);
router.get("/search", getEmployeeByDetailReq);
router.get("/search/:id", getEmployeeByIDReq);

export default router;
