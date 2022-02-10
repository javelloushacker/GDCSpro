import express from "express";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import router from "./paths/router";
import { modelConnect } from "./model/model.connect";

const app = express();

//middlewares
app.use(json());
app.use(morgan("dev"));
app.use(cors());
app.use(urlencoded({ extended: true }));

app.use("/", router);

modelConnect().then(() => {
  app.listen(5000, () => {
    console.log("the server is on localhost:5000");
  });
});
