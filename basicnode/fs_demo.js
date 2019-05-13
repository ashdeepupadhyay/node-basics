const fs=require('fs');
const path=require('path');

//create folder  
/*   
fs.mkdir(path.join(__dirname,'/test'),{},function(err){
    if(err)throw err;
    console.log('Folder created...');
});
*/
// fs.mkdir(path.join(__dirname,'/test'),{},(err)=>{
//     if(err)throw err;
//     console.log('Folder created...');
// })

//Create and write to a file
// fs.writeFile(path.join(__dirname,'/test','/hello.txt'),'hello world!',function(err){
//     if(err)throw err;
//     console.log('File written...');

//     //append to a file
// fs.appendFile(path.join(__dirname,'/test','/hello.txt'),'i love react and trying to learn node',function(err){
//     if(err)throw err;
//     console.log('File appended');
// });
// });

//read to a file
// fs.readFile(path.join(__dirname,'/test','/hello.txt'),'utf-8',(err,data)=>{
//     if(err)throw err;
//     console.log('data'+data);
// })

//Rename a file
fs.rename(path.join(__dirname,'/test','/hello.txt'),path.join(__dirname,'/test','/helloWorld.txt'),(err)=>{
    if(err)throw err;
    console.log('file renamed');
})
