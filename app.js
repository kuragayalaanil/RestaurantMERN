import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/db.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./Routes/reservationRouter.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// Middlewares
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json()); //Convers String in JSON Object
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);

// DB Connection
dbConnection();
// Error Handler Middleware
app.use(errorMiddleware);

export default app;
