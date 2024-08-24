import express from "express";
import bodyParser from "body-parser";

let app = express();

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.get("/", (req,res)=>{
    res.send("<h1>Hello World From Express</h1>");
});
app.post("/students", (req,res)=>{
    console.log(req.url, req.method, req.body, req.form);
    res.send(JSON.stringify({message: "Student Created Successfully"}));
})
app.patch("/students", ()=>{

})

app.listen(3100, ()=>{
    console.log("Express server is running");
})
