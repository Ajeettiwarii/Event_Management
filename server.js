import express from "express" ;  
import cors from "cors";  
import { connectDB } from "./Database/database.js";
  const app= express();     
  const router=express.Router();
 app.use(cors());  
 app.use(express.json());     

 connectDB();  
 const PORT = process.env.PORT || 3000;

 app.listen(5000,()=>{
    console.log(`Server is running on port ${PORT}`);
 })