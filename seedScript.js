import mongoose from "mongoose";
import dotenv from "dotenv";
import userModel from "./models/userModel.js";
import bcrypt from "bcrypt";

dotenv.config();

const createAdmin = async () => {

  try {

    await mongoose.connect(process.env.MONGODB_URL);

    console.log("Connected to MongoDB");

    const adminExist = await userModel.findOne({ email: process.env.ADMIN_EMAIL });

    if (adminExist) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    const admin = await userModel.create({
      name: "Super Admin",
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      role: "admin"
    });

    console.log("Admin user created successfully:", admin.email);

    process.exit();

  } catch (error) {

    console.error("Error Creating Admin", error);
    process.exit(1);
    
  }

};

createAdmin();