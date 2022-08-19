const mongoose=require('mongoose');
const db=require('../conn');
const comSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        
    },
    url:{
        type:String,
        required:true,
        
    }
});



module.exports=mongoose.model("Com",comSchema);