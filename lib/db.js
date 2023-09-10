import mongoose from 'mongoose';

const connectDb = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/AdamasConnect")
        .then(() => {
            console.log("Conection to database successful !");
        })
        .catch((err) => {
            console.log(err);
        })
};

export default connectDb;