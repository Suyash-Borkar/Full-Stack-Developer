// import {mul} from "suyash-b-math-package"

// console.log(mul(90,10));

import httpModule from "http";


//var server = httpModule.createServer((req,res)=>{
    // console.log(req.method,req.url);
    // res.write("<h1>Hello World</h1>");
    // res.end();

var server = httpModule.createServer((req,res)=>{
    if(req.method === "GET" && req.url === "/students"){
        res.write(JSON.stringify([{name: "John Doe"},{name: "Maria Doe"}]));
        res.end();
    } else if(req.method === "POST" && req.url === "/students"){
        res.write(JSON.stringify({status: "Student Created Successfully"}));
        res.end()
    } else if(req.method === "DELETE" && req.url === "/students"){
        res.write(JSON.stringify({status: "Student Deleted Successfully"}));
        res.end()
    } else if(req.method === "PATCH" && req.url === "/students"){
        res.write(JSON.stringify({status: "Student Updated Successfully"}));
        res.end()
    } else if(req.method === "PUT" && req.url === "/students"){
        res.write(JSON.stringify({status: "Student Replaced Successfully"}));
        res.end()
    }
    else {
    res.write("<h1>Default Else Block</h1>");
    res.end();
    }
});


server.listen(3200,()=>{
    console.log("Server Is Running");
});