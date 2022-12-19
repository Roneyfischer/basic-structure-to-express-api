import express from "express";

import jwt from "jsonwebtoken";

import chalk from "chalk";

const admUser = express.Router();

admUser.post(
  "/",
  //authorization.verifyJWT,
  async (req, res) => {
    const executeRequisitionReturn = await authorization.userDriver[
      req.body.role
    ](req.body);

    return res.status(200).json({ message4: executeRequisitionReturn });
  }
);

export default admUser;
