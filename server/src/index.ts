import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {errorHandler} from "./middleware/errorHandler";

import db from "./config/db"


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    console.log("testing")
});

// error handler
app.use(errorHandler);

db().then(()=>{
    app.listen(port,()=>{
        console.log(`Server running at ${port}`);
    })
})