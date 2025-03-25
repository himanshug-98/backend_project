// require('dotenv').config({path: './env'})

import dotevn from "dotenv"
import connectDB from "./db/index.js";

dotevn.config({
    pah: './env'
})

connectDB()















/*  first approach to connect database


import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/ $
        {DB_NAME}`);
    AudioParamMap.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    AudioParamMap.listen(process.env.PORT, () => {
      console.log(`App is listening on port $
                {process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR", error);
    throw error;
  }
})();
*/
