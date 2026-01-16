const fs=require('fs');
const {Transform}=require('stream');

const upper=new Transform({
    transform(chunk,encoding,callback){
    //removing vowels and replacing with *
    const modifiedData=chunk.toString().replace(/[aeiou]/gi,'*');
    callback(null,modifiedData);
    }
});
const readStream=fs.createReadStream('./16jan/task2/log.txt');
const writeStream=fs.createWriteStream('./16jan/task2/infoOutput.txt');
readStream
.pipe(upper)
.pipe(writeStream);