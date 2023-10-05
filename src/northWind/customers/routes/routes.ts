import express from "express";
import {
  getAllCustomersReq,
  getCustomerByDetailReq,
  getCustomerByIDReq,
} from "../controller/controller";

const router = express.Router();

router.get("/", getAllCustomersReq);
router.get("/search", getCustomerByDetailReq);
router.get("/search/:id", getCustomerByIDReq);

export default router;
