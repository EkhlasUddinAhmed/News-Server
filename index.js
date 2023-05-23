require("dotenv").config();
const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require("mongoose");
const newsRouter=require("./AllRouters/allNewsRouters");
const PORT=process.env.Port || 5000;

app.use(cors());
app.use(express.json());
app.use("/news",newsRouter);

// USER_NAME=EkhlasUddinAhmed
// USER_PASSWORD=IFewOIFetMmJ5HCu
// DB_NAME=DragonNews


const url=`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.13y3n.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

console.log("Connection URL is:",url);
const config={ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
             };

mongoose.connect(url,config)
.then(()=>{
    console.log("DataBase Connection Successfull");
    app.listen(PORT,()=>{
        console.log(`After Connection DataBase ,Server is Running at PORT :${PORT}`)
    })
})
.catch(error=>console.log(error))

function errorHandler(err, req, res, next){

if(res.headersSent){
return next(err);
}
res.status(500).json({error:err})
}


