import express from "express" 
import { Create_Event, delete_event, getallevent, getbyid, updateid } from "../Controller/Event"; 

const router=express.Router();   

router.post('/events',Create_Event)  
router.get('/events',getallevent)   
router.delete('/events/:id',delete_event) 
router.get('/events/:id',getbyid)  
router.patch('/events/:id',updateid) 



