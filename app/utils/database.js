import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://jyatatsu:LRntWUBx56swNEpr@cluster0.kpygl.mongodb.net/nextMarket15Data?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    } catch (error) {
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB