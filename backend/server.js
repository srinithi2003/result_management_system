const express=require("express");

const cors=require("cors");
const mongoose=require("mongoose");
require('dotenv').config();
const app=express();

const port=process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

//const URI = process.env.ATLAS_URI;

mongoose.connect("mongodb+srv://sri4:pass123@res4.uqkwb21.mongodb.net/?retryWrites=true&w=majority",
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

const adminD=require("./routes/admin")
app.use('/admin',adminD)


app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
})