import express from "express";
const router = express.Router();
import {
  createProduct,
  getProducts,
  getProductsByid,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getProductsByid)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
