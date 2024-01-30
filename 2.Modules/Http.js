const http = require('http');

http.createServer((req,res)=>{
    res.write("WE CREATED SERVER")
    res.end()
}).listen(8000)
