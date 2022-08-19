
const mongoose=require('mongoose');


mongoose.connect("mongodb+srv://uk07coder:OlcGPtja3phhpzT1@cluster0.lvvet.mongodb.net/?retryWrites=true&w=majority",(error)=>{

    if(error)
    {
        console.log("Connection failed with -",error)
    }
    else{

        console.log("connection established")
    }

  })