const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect("url");
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed");
  }
};

dbConnect();