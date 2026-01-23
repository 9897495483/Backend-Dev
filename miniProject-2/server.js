const  http=require('http');
const express=require('express');
const app=express();
const user=require('./data.js');

app.get('/' || "/home",(req,res)=>{
    res.send("Home route accessed");
});

app.get('/user',(req,res)=>{
    res.json(user);
})
//static route pehle
app.get('/user/profile',(req,res)=>{
    res.send("User profile route accessed");
});

//query paramater
app.get('/user/page',(req,res)=>{
    const page=req.query.pageSize;
    const limit=req.query.limit;
    res.json({
        page,
        limit
    });
});

//dynamic route baad me
app.get('/user/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    let user=user.find((ele)=>ele.id===id);
    if(user){
        res.json(user);
    }
    else{
        res.status(404).send('User not found');
    }
})



app.listen(3000,()=>{
    console.log("Server is running on port 3000 , http://localhost:3000");
});