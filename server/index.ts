import "dotenv/config";

import cors from "cors";
import express from "express";

import bookingRoutes from "./routes/booking";

const app = express();

const port = Number(process.env.PORT) || 3001;

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use(express.json());

app.use("/api/bookings", bookingRoutes);

app.get("/api/health", (_request, response) => {
    response.status(200).json({
        status: "ok",
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});