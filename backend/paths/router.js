import { Router } from "express";
import { UserModel } from "../model/model.schema";
import { puttingUser } from "./controllers";

const router = Router();

//POST: {UserName, passwd, email}
router.route("/getUser").post(puttingUser);

export default router;
