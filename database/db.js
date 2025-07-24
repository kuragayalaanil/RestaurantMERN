import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log(`Database Connected Sucessfully!`);
    })
    .catch((err) => {
      console.log(`Database Connection Error ${err}`);
    });
};

