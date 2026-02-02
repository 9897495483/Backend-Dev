import express from 'express';
import userRoute from './Router/userRoute.js';


const port=3000;


const app=express();

app.use("/api",userRoute);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

// const app=express();
// app.get('/',(req,res)=>{
//     res.send("Server is running");
// })

// app.get('/user',((req,res)=>{
//     res.send("User Route");
// }))
// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// })