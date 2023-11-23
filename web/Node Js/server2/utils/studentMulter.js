import multer from "multer";

// multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "studentPhoto") {
      cb(null, "public/student");
    } else if (file.fieldname === "userPhoto") {
      cb(null, "public/user/userphoto");
    } else if (file.fieldname === "userCv") {
      cb(null, "public/user/usercv");
    } else if (file.fieldname === "productPhoto") {
      cb(null, "public/product");
    }
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + Math.floor(Math.random() * 100000) + "_" + file.originalname
    );
  },
});

export const createStudentMulter = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(new Error("invalid file type"));
    }
  },
  limits: {
    fileSize: 500000,
  },
}).single("studentPhoto");

export const createUserMulter = multer({ storage }).fields([
  {
    name: "userPhoto",
    maxCount: 1,
  },
  {
    name: "userCv",
    maxCount: 1,
  },
]);

export const creatProductMulter = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(new Error("invalid file type"));
    }
  },
}).single("productPhoto");
