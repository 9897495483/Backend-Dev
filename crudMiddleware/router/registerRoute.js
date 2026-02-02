import express from ' express';

const router=express.Router();
let loginvalidation=(req,res,next)=>{ 
    const token=req.query.token;
    if(token==="abcd1234"){
        next();
    }else{
        res.status(401).send("Unauthorized: Invalid or missing token"); 
    }
};
router.get('/login',loginvalidation,(req,res)=>{
    
    res.send("Login Route");
});

router.get('/login/register',(req,res)=>{
    res.send("Route for Registration");
});

export default router;