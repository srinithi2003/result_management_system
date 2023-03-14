const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    roll:{type:String},
    name:{type:String},
    dob:{type:String},
    gen:{type:String},
    ph:{type:String},
    fname:{type:String},
    mname:{type:String},
    pph:{type:String},
    cm:{type:String},
    pm:{type:String},
    add:{type:String},
    cl:{type:String},
})

const User=mongoose.model('sdetails',userSchema)
module.exports=User;