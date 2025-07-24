import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required Field"],
    minLength: [3, "Firstname must contain at least 3 Characters"],
    maxLength: [30, "Firstname don't exceed 30 Characters"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required Field"],
    minLength: [3, "LastName must contain at least 3 Characters"],
    maxLength: [30, "LastName don't exceed 30 Characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required field"],
    validate: [validator.isEmail, "Provide a valid Email"],
  },
  phone: {
    type: String,
    required: [true, "Phone Number is required Field"],
    minLength: [10, "Phone Number must contain 10 Characters"],
    maxLength: [10, "Phone Number must contain 10 Characters"],
  },
  time: {
    type: String,
    reqiuired: [true, "Time is required Field"],
  },
  date: {
    type: String,
    reqiuired: [true, "Date is required Field"],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
