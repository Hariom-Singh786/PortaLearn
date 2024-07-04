import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4001; // Use logical OR (||) instead of bitwise OR (|)

// Ensure the MongoDB URI is correctly set
const URI = process.env.MongoDBURI;

if (!URI) {
  throw new Error("MongoDB URI is not defined in environment variables");
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(URI, options)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB Atlas', err);
  });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
