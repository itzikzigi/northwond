import express from "express";
import {
  getAllOrdersReq,
  getOrderByDetailReq,
  getOrderByIDReq,
} from "../controller/controller";

const router = express.Router();

router.get("/", getAllOrdersReq);
router.get("/search", getOrderByDetailReq);
router.get("/search/:id", getOrderByIDReq);

export default router;
