import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://merkasin272:DIu9ViNsavmZ6s5x@cluster0.vvjvbfl.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Conection to database successful !");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDb;
