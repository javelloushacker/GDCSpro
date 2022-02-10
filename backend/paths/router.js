import { Router } from "express";
import { UserModel } from "../model/model.schema";
import { puttingUser, getAllUsers, authUser } from "./controllers";

const router = Router();

//POST: {UserName, passwd, email}
router.route("/getUser").post(puttingUser);

//to get all users
router.route("/getAllUsers").get(getAllUsers);

//to authenticate the user
router.route("/auth/:email/:passwd").get(authUser);

export default router;
