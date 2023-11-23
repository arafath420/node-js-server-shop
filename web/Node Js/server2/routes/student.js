import express from "express";
import { createStudent } from "../controllers/studentController.js";
import { createStudentMulter } from "../utils/studentMulter.js";

// express routes
const stdentRouteres = express.Router();

stdentRouteres.post("/student", createStudentMulter, createStudent);

export default stdentRouteres;
