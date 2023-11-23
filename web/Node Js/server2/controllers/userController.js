import nodemailer from "nodemailer";
import dotenv from "dotenv";

export const creatUser = async (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `test <${process.env.MAIL_ADDRESS}>`,
    to: req.body.email,
    subject: "For Test",
    text: "Message Paicho...?",
  });

  // main().catch(console.error);

  res.redirect("/");
};
export const createUserPag = (req, res) => {
  res.render("createUserPag");
};
