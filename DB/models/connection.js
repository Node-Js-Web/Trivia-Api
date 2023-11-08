import mongoose from "mongoose";


export const connectDB = async () => {
    console.log(process.env.DBCloud)
    return await mongoose.connect("mongodb://127.0.0.1:27017/TriviaHub")
        .then((res) => {
            console.log("Connected to DB");
        }).catch((err) => {
            console.log("DB error is "+err);
        });
};
