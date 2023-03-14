const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    roll:{type:String},
    sem:{type:String},
    sub:{type:String},
    cr:{type:String},
    gr:{type:String}
})

const User=mongoose.model('semdetail',userSchema)
module.exports=User;