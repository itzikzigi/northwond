import express from "express";
import {
  getAllProductsReq,
  getProductByDetailReq,
  getProductByIDReq,
} from "../controller/controller";

const router = express.Router();

router.get("/", getAllProductsReq);
router.get("/search", getProductByDetailReq);
router.get("/search/:id", getProductByIDReq);

export default router;
