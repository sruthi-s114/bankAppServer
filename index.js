const express=require('express');
const app=express();

//read
app.get('/',(req,res)=>{
    res.status(401).send("This is a get method")
});

//create
app.post('/',(req,res)=>{
    res.send("This is a post method")
});

//update/modify all
app.put('/',(req,res)=>{
    res.send("This is a put method")
});

//update/modify partially
app.patch('/',(req,res)=>{
    res.send("This is a patch method")
});

//delete
app.delete('/',(req,res)=>{
    res.send("This is a delete method")
});

app.listen(3000,()=>{
    console.log("server started at port: 3000");
});

