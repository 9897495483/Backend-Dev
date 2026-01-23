const express = require("express");
const app = express();
const users = require("./data.js");

app.get("/"||"/home",(req,res)=>{
    res.send("Home Page");
});

//http://localhost:3000/users/7/profile?tab=settings&lang=en
app.get("/users/:id/profile",(req,res)=>{
    const userId=Number(req.params.id);
    const tab=req.query.tab;
    const lang=req.query.lang;
    const user=users.find(u=>u.id===userId);
    if(!user){
        return res.status(404).json({
            message: "User not found"
        });
    }
    res.json({
        userId:userId,
        selectedTab:tab,
        language:lang,
        userDetails:user
    });
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000 → http://localhost:3000");
});