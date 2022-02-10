// mongodb://localhost:27017/studentDB

import mongoose from "mongoose";

export const modelConnect = async () => {
  await mongoose.connect("mongodb://localhost:27017/studentDB");
};
