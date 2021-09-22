const express=require("express");
const cors=require("cors");
const mongoose=require('mongoose');
const user=require("./router/user");
const posts=require("./router/post");
const path=require("path");
const app=express();
app.use(cors());
app.use(express.json())
const uri="";
mongoose.connect(uri,{useNewUrlParser:true});
const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("Mongodb database connection established successfully");

})

app.use('/upload',express.static(path.join(__dirname,'upload')))
app.use("/user",user);
app.use("/posts",posts)
let port=8000;
app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
});