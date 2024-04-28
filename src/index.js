import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config({ path: "./env" });
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`The server is running on port ${process.env.PORT ?? port}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB connection Error ${err}`);
  });
