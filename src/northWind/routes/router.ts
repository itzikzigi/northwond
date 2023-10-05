import express from "express";
import employeesRouter from "../employees/router/router";
import productsRouter from "../products/routes/routes";
import customersRouter from "../customers/routes/routes";
import ordersRouter from "../orders/routes/routes";
const router = express.Router();

router.use("/employees", employeesRouter);
router.use("/products", productsRouter);
router.use("/customers", customersRouter);
router.use("/orders", ordersRouter);

export default router;
