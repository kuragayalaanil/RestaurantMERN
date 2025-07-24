import express from "express";
import { send_reservation } from "./../controllers/reservationController.js";

const router = express.Router();

// Send Reservation Route
router.post("/send", send_reservation);

export default router;
