import express from "express";
import app from "./src/0.config/server/app.js";
import chalk from "chalk";

try {
  app.listen(process.env.SERVER_PORT, () => {
    console.log("> [server] Starting server");
    console.log(
      chalk.blueBright.bold(
        `> [server] Server is running on ${process.env.SERVER_PORT}`
      )
    );
  });
} catch (error) {
  errorHandling(error.message);
}
