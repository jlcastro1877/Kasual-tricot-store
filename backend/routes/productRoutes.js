import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductsByid,
} from "../controllers/productController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductsByid);

export default router;
