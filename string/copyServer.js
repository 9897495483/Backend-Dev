//coping output.txt to copiedOutput.txt using streams
const fs=require('fs');
const readStream=fs.createReadStream('./16jan/string/output.txt');
const writeStream=fs.createWriteStream('./16jan/string/pipedOutput.txt');
// const writeStream=fs.createWriteStream('./16jan/string/copiedOutput.txt');
// readStream.on('data',(chunk)=>{
//     let data=chunk.toString();
//     writeStream.write(data);
// });
// readStream.on('end',()=>{
//     writeStream.end();
// });


//piping - one linear for coping
readStream.pipe(writeStream);