const fs=require('fs');
const {Transform}=require('stream');

const upper=new Transform({
    transform(chunk,encoding,callback){
    const modifiedData=chunk.toString().toUpperCase();
    callback(null,modifiedData);
    }
});
const readStream=fs.createReadStream('./16jan/string/log.txt');
const writeStream=fs.createWriteStream('./16jan/string/infoOutput.txt');
readStream
.pipe(upper)
.pipe(writeStream);