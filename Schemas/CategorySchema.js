const mongoose=require("mongoose");
const categorySchema=mongoose.Schema({
    
    category_id:{
        type:String,
        required:true
    },
    category_Name:{
        type:String,
        required:true
    }
});

module.exports=categorySchema;