import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL as string);
        console.log('MongoDB Connected:', conn.connection.host);
    } catch (error) {
        console.error("Error Connecting to MongoDB:", error);
        process.exit(1);
    }
}