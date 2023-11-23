import { json } from "express";
import {
  generateRandomId,
  generateSlug,
  getDataFromDb,
  setDataInDb,
} from "../helpers/helpers.js";

//Get All Product
export const getAllProduct = (req, res) => {
  const allProduct = getDataFromDb("product.json");

  if (allProduct.length === 0) {
    return res.status(400).json({ message: "Product Not found" });
  }

  // res.status(200).json({ message: allProduct });
  res.render("product", { allProduct });
};

//Get Single Product
export const getSingleProduct = (req, res) => {
  const { slug } = req.params;

  const allProduct = getDataFromDb("product.json");

  const singleProduct = allProduct.find((data) => data.slug === slug);

  if (!singleProduct) {
    return res.render("notFound");
  }

  res.render("singleProduct", { singleProduct });
};

//Create Product
export const createProduct = (req, res) => {
  const { name, regularPrice, salePrice, stock } = req.body;

  const product = {
    id: generateRandomId(10),
    name,
    slug: generateSlug(name),
    regularPrice,
    salePrice,
    stock,
    photo: req.file.filename,
  };

  const allProduct = getDataFromDb("product.json");

  if (!name || !salePrice) {
    return res
      .status(400)
      .json({ message: "Product nam and price is requared" });
  }

  if (allProduct.some((data) => data.slug === generateSlug(name))) {
    return res.status(400).json({ message: "this product is allready exist" });
  }

  allProduct.push(product);

  setDataInDb("product.json", allProduct);

  res.redirect("/");
};

//Create Product Page
export const newProduct = (req, res) => {
  res.render("creatProduct");
};

//Edit Product Page
export const editProduct = (req, res) => {
  const { id } = req.params;

  const allProduct = getDataFromDb("product.json");

  const singleProduct = allProduct.find((data) => data.id === id);

  res.render("editProduct", { singleProduct });
};

//Update Product
export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, regularPrice, salePrice, stock } = req.body;

  const allProduct = getDataFromDb("product.json");

  let photo_name =
    allProduct[allProduct.findIndex((data) => data.id === id)].photo;

  if (req?.file?.filename) {
    photo_name = req.file.filename;
  }

  allProduct[allProduct.findIndex((data) => data.id === id)] = {
    ...allProduct[allProduct.findIndex((data) => data.id === id)],
    id: id,
    name,
    slug: generateSlug(name),
    regularPrice,
    salePrice,
    stock,
    photo: photo_name,
  };

  setDataInDb("product.json", allProduct);
  res.redirect("/");
};

//Delete Product
export const deleteProduct = (req, res) => {
  const { id } = req.params;

  const getAllProduct = getDataFromDb("product.json");

  const fDta = getAllProduct.filter((data) => data.id !== id);

  setDataInDb("product.json", fDta);

  res.redirect("/");
};
