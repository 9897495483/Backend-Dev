const fs=require('fs');
const readStream=fs.createReadStream('./16jan/task/log.txt');
const writeStream=fs.createWriteStream('./16jan/task/logUppercase.txt');
readStream.on('data',(chunk)=>{
    let data=chunk.toString().toUpperCase();
    writeStream.write(data);
});
readStream.on('end',()=>{
    writeStream.end();
});

