const express=require('express');
const app=express();
const conn=require('./conn');
const Ad=require('./models/ads');
const Com=require('./models/companies');
const cors =require('cors');
const companies = require('./models/companies');



app.use(cors());

app.get('/',(req,res)=>{

    const searchText = req.query.searchText;
console.log(searchText);

Ad.aggregate([
    {
      '$lookup': {
        'from': 'coms', 
        'localField': 'companyId', 
        'foreignField': '_id', 
        'as': 'company'
      }
    }
  ]).exec((err, result)=>{
    if (err) {
        console.log("error" ,err)
    }
    if (result) {
        console.log(result);
        res.send(result);
    }
});








//     Com.find({}).then((result)=>{
// res.send(result);
//     }).catch((error)=>{
// console.log(error);
//     })
})


















const PORT=process.env.PORT||4000;


app.listen(PORT,()=>{
    console.log(`Connection Established at ${PORT}`)
})