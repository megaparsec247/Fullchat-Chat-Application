import express from 'express';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import { connectDB } from "./lib/db.js";
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.routes.js';
import { app, server } from "./lib/socket.js";
import cors from "cors";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: process.env.NODE_ENV === "production"
    ? "https://fullchat-chat-application.onrender.com"
    : "http://localhost:5173",
  credentials: true
}));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
  });
}

server.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
  connectDB();
});