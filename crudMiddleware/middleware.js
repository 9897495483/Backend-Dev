import fs from 'fs';
//custom middleware to log request details
//req -> request, res-> response, next-> to pass control to next middleware
let logFun=(req,res,next)=>{
    let log=`timestamp: ${new Date().toISOString()}, method: ${req.method}, url: ${req.originalUrl}\n`;
    //append the log to server.log file
    fs.appendFile('./server.log',log,(err)=>{
        if(err) console.error(err);
    });
    console.log(log);
    next();
}
export default logFun;
//ek function ko export kar rhe to export default use karenge
//multiple functions ko export kar rhe to named export use karenge