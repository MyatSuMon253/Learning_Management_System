const mongoose = require("mongoose");
const url =
  "mongodb+srv://myatsumon2531999:3A6XEPXQrzPtvWLU@cluster0.1qr1wh2.mongodb.net/?retryWrites=true&w=majority";

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed");
  }
};

dbConnect();
