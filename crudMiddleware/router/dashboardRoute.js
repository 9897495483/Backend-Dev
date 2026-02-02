import express from 'express';

const router=express.Router();

router.get('/profile',(req,res)=>{
    res.send("Dashboard Profile Route");
});

router.get('/reports',(req,res)=>{
    res.send("Dashboard Reports Route");
});

export default router;