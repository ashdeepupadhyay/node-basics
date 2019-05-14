//console.log("hi from node.js");
/*
const person=require('./person');
console.log(person);
console.log(person.age);
*/
// const Person=require('./person');
// const person1=new Person('ash',23);

// person1.greeting();

// const Logger=require('./logger');

// const logger=new Logger();
 
// logger.on('message',data=>console.log(`called listener `,data));

// logger.log('hello world logger');
// logger.log('hi');
// logger.log('bye');

const http=require('http');
const path=require('path');
const fs=require('fs');

const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         fs.readFile(path.join(__dirname,'public','index.html'),(err,contnet)=>{
//             if(err)throw err;
//             res.writeHead(200,{'Content-Type':'text/html'});
//             res.end(contnet);
//         })
       
//     }

//     if(req.url==='/about'){
//         fs.readFile(path.join(__dirname,'public','about.html'),(err,contnet)=>{
//             if(err)throw err;
//             res.writeHead(200,{'Content-Type':'text/html'});
//             res.end(contnet);
//         })
       
//     }
// //making a json 
//     if(req.url==='/api/users'){
//        const users=[
//            {name:'ash',age:'23'},
//            {name:'doe',age:'30'}
//        ];
//        res.writeHead(200,{'Content-Type':'application/json'});
//        res.end(JSON.stringify(users));
//     }
//console.log(req.url);

//Build file path 
let filePath=path.join(__dirname,'public',req.url==='/'?'index.html':req.url);
console.log(filePath); 
//Extension of file
let extname=path.extname(filePath);
//Initial content type
let contentType='text/html';
//Check ext and set content type
switch(extname){
    case '.js':
    contentType='text/javascript';
    break;

    case '.css':
    contentType='text/css';
    break;

    case '.json':
    contentType='application/json';
    break;

    case '.png':
    contentType='image/png';
    break;

    case '.jpg':
    contentType='image/jpg';
    break;
}
console.log(contentType); 

//Read File
fs.readFile(filePath,(err,content)=>{
    if(err){
        if(err.code=='ENOENT'){
            //page not found
            fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(content,'utf-8');
            })
        }
        else{
                //some server error
                res.writeHead(500);
                res.end(`Server Error :${err.code}`);
        }
    }else{
        //Success
        res.writeHead(200,{'Content-Type':contentType});
        res.end(content,'utf-8');
    }
});
console.log(filePath);    
});

const PORT=process.env.PORT||5000;//port no should be env.PORT to deploy on server

server.listen (PORT,()=>console.log(`Server running on port ${PORT}`));
