import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/ecomm`)

    } catch (error) {
        console.log("mongodb connection error", error)
        process.exit();

    }
}
export default connectDB;