import express from "express";

import indexController from "./controllers/index";

const PORT = 3002;

// initialize the application and create the routes
const app = express();

app.use(indexController);

// start the app
app.listen(PORT, error => {
  if (error) {
    return console.log("Connection refused", error);
  }

  console.log("listening on " + PORT + "...");
});
