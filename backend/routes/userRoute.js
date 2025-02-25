import express from "express";
import {

  loginUser,
  registerUser,
  getProfile,
  updateProfile,
  bookAppointment,
  listAppointment,
  cancelAppointment,
  hospitalList,
} from "../controllers/userController.js";

import { getDoctorsByAdminId } from "../controllers/doctorController.js";

import upload from "../middleware/multer.js";
import authUser from "../middleware/authUser.js";
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

userRouter.get("/get-profile", authUser, getProfile);
userRouter.post(
  "/update-profile",
  upload.single("image"),
  authUser,
  updateProfile
);
userRouter.post("/book-appointment", authUser, bookAppointment);
userRouter.get("/appointments", authUser, listAppointment);
userRouter.get("/hospitals", hospitalList);
userRouter.post("/cancel-appointment", authUser, cancelAppointment);
userRouter.get("/doctors/:id", getDoctorsByAdminId);

export default userRouter;
