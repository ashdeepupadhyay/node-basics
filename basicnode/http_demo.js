const http=require('http');

//create a server object
http.createServer((req,res)=>{
    //wrtite a response
    res.write('Hello World');
    res.end()
})
.listen(5000,()=>console.log('server running....'));