import express from "express";

import jwt from "jsonwebtoken";
import chalk from "chalk";
const auth = express.Router();

auth.post("/", async (req, res) => {
  /*
  const user = new AdmUser();
  console.log("> [route.auth] Open");

  const operation = await user[req.body.type](req.body, res);

  if (!operation.status) {
    return res.status(401).json({ return: operation.message });
  }

  if (operation.status) {
    return res
      .cookie("access_token", operation.token, {
        secure: true,
        sameSite: "none",
        expire: 500000,
      })
      .status(200)
      .json({
        return: operation.status,
        message: operation.message,
        token: operation.token,
      });
  }
  */
});

export default auth;
