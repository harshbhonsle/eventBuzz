import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../src/models/User";
import dotenv from "dotenv";

dotenv.config();

async function seedAdmin() {
  try {
    // connect to DB
    await mongoose.connect(process.env.MONGO_URI!);

    const email = process.env.ADMIN_EMAIL || "admin@example.com";
    const password = process.env.ADMIN_PASSWORD; 
    const role = "admin";

    if (!password) {
      throw new Error("ADMIN_PASSWORD environment variable is not set");
    }

    const existing = await User.findOne({ email });
    if (existing) {
      console.log("Admin already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new User({ email, password: hashedPassword, role });
    await admin.save();

    console.log("Admin seeded successfully");
  } catch (err) {
    console.error("Error seeding admin:", err);
    process.exit(1); // exit with failure
  } finally {
    await mongoose.disconnect(); // cleanly close DB connection
  }
}

seedAdmin();
