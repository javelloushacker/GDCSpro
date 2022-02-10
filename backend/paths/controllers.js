import { UserModel } from "../model/model.schema";

//this will add the user into database
export const puttingUser = async (req, res) => {
  const data = await UserModel.create(req.body);
  res.send(data);
};
