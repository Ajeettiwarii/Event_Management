import mongoose from "mongoose";  
const  eventSchema= new mongoose.Schema({
    eventName: String,
    date: Date,
    time: String,
    location: String,
    menuItems: [
      {
        itemName: String,
        quantity: Number,
        specialRequirements: String,
      },
    ],
    clientDetails: {
      clientName: String,
      contactNumber: String,
      email: String,
    },
}) 
export   const Event =  mongoose.model('Event',eventSchema)