const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require("mongoose");
const newsRouter=require("./AllRouters/allNewsRouters");
const PORT=process.env.Port || 5000;

app.use(cors());
app.use(express.json());
app.use("/news",newsRouter);



// password: IFewOIFetMmJ5HCu
// UserName: EkhlasUddinAhmed
// database:DragonNews

// Database Connection Start here...
// const uri = "mongodb+srv://Ekhlas:sLd69aj8CB6g9BdB@cluster0.13y3n.mongodb.net/EkhlasDB?retryWrites=true&w=majority";

const uri="mongodb+srv://EkhlasUddinAhmed:IFewOIFetMmJ5HCu@cluster0.13y3n.mongodb.net/DragonNews?retryWrites=true&w=majority";

const config={ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
             };

mongoose.connect(uri,config)
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


