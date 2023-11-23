import express from "express";
import { creatUser, createUserPag } from "../controllers/userController.js";
import { createUserMulter } from "../utils/studentMulter.js";

const userRouteres = express.Router();

userRouteres.post("/user", createUserMulter, creatUser);
userRouteres.get("/user", createUserPag);

export default userRouteres;
