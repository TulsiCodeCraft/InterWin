import express from "express";
import authRoute from"./routes/auth.route.js";
import cookieParser from "cookie-parser";
import 'dotenv/config';
import cors from "cors";

import jobListingRoute from "./routes/jobListingRoute.js";


const app= express();
app.use(cors({origin: process.env.CLIENT_URL, credentials:true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);

app.use('/api/job-listings', jobListingRoute );

app.listen(8800,() => {
  console.log("server is running")
});