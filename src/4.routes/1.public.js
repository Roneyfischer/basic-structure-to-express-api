import express from "express";

const homePage = express.Router();

homePage.get("/", async (req, res) => {
  console.log("> [route.public]");

  console.log("> [route.admUser] user: ");
  const reqBody = req.body;

  return res.status(200).json({ message: "1.public!" });
});

export default homePage;
