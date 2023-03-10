import express from "express";
import homePage from "./1.public.js";
import auth from "./2.auth.js";

import admUser from "./4.loggedUser.js";

const router = (app) => {
  console.log("> [route.index] Inicial route");
  app
    .use("/", homePage)
    .use("/auth", auth)

    .use("/loggedUser", admUser);
};

export default router;
