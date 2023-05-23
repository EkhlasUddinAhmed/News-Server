const express=require('express');
const newsRouter=express.Router();
const categorySchema=require("../Schemas/CategorySchema");
const newsSchema=require('../Schemas/NewsSchema');
const mongoose=require('mongoose');
const categoryModel=new mongoose.model("category",categorySchema);
const newsModel=new mongoose.model("AllNew",newsSchema);




newsRouter.get("/allcategory",async(req,res)=>{
   try{
    const allCategory=await categoryModel.find();
    // console.log("All News category are:",allCategory);
    res.status(200).send(allCategory);
   }catch(e){
    // console.log("All News category Server sided Error:",e.message);
    res.status(500).send({error:error.message});
   }
});
newsRouter.get("/category/:id",async(req,res)=>{
    try{
     const specifiCategory=await newsModel.find({category_id:req.params.id});
      console.log("Specific Category are:",specifiCategory);
     res.status(200).send(specifiCategory);
    }catch(e){
      console.log("All News category Server sided Error:",e.message);
     res.status(500).send({error:e.message});
    }
 });

newsRouter.get("/allNews",async(req,res)=>{
    try{
     const allNews=await newsModel.find();
    //  console.log("All News  are:",allNews);
     res.status(200).send(allNews);
    }catch(e){
    //  console.log("All News Server sided Error:",e.message);
     res.status(500).send({error:error.message});
    }
 });

 newsRouter.get('/selectedNews/:id',async(req,res)=>{
    try{
        const selectedNews=await newsModel.find({_id:req.params.id});
        console.log("Selected News is:",selectedNews);
        res.status(200).send(selectedNews);
       }catch(e){
        console.log("Selected News Server sided Error:",e.message);
        res.status(500).send({error:error.message});
       }
 })


module.exports=newsRouter;