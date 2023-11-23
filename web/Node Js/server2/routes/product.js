import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  newProduct,
  editProduct,
  updateProduct,
} from "../controllers/productController.js";
import { creatProductMulter } from "../utils/studentMulter.js";

// express init

const router = express.Router();

router.get("/home", (req, res) => {
  res.render("home");
});
router.get("/about", (req, res) => {
  res.render("about", {
    name: "arafath",
    skill: "Ios Dev",
  });
});

router.get("/", getAllProduct);
router.get("/product/single/:slug", getSingleProduct);
router.get("/product/edit/:id", editProduct);
router.post("/product/update/:id", creatProductMulter, updateProduct);
router.get("/creatproduct", newProduct);
router.post("/creatproduct", creatProductMulter, createProduct);
router.get("/product/delete/:id", deleteProduct);

export default router;
