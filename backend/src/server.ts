// File is a CommonJS module; it may be converted to an ES module.

import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import authRoutes from "./routes/auth.route.ts";
import messageRoutes from "./routes/message.route.ts";

dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;

process.on("uncaughtException", (err) => {
    console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (err) => {
    console.error("UNHANDLED REJECTION:", err);
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    });
}


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

