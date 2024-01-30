const fs = require('fs')

fs.readFile('./demo.txt','utf-8',(err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log(data);
})


fs.writeFile('index.html',"Hello",(err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log("File is Created");
})


const content = "I am Learning Node js"
fs.writeFile('index.css',content,(err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log("File is Created");
})


fs.unlink('index.css',(err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log("File is Deleted");
})

