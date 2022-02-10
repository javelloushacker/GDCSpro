import { UserModel } from "../model/model.schema";

//this will add the user into database
export const puttingUser = async (req, res) => {
  const data = await UserModel.create(req.body);
  res.send(data);
};

//this will get all the users in the database
export const getAllUsers = async (req, res) => {
  const data = await UserModel.find({}, { __v: 0 }).exec();
  res.send(data);
};

//this will authenticate the user
export const authUser = async (req, res) => {
  const data = await UserModel.findOne({
    email: req.params.email,
    passwd: req.params.passwd,
  });
  if (data) {
    res.send({ validation: 1 });
  } else {
    res.send({ validation: 0 });
  }
};
