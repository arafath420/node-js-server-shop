import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import ejsLayout from "express-ejs-layouts";

import stdentRouteres from "./routes/student.js";
import userRouteres from "./routes/user.js";
import product from "./routes/product.js";

dotenv.config();
const PORT = process.env.PORT || 6060;

const app = express();

//setting middleware
app.use(express.static("public"));

//ejs setup
app.set("view engine", "ejs");
app.use(ejsLayout);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(stdentRouteres);
app.use(userRouteres);
app.use(product);

app.listen(PORT, () => {
  console.log(`server is runnig on ${PORT} port`.bgGreen.black);
});
