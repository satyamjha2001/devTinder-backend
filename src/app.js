// console.log("This is my new js project");
const express = require("express");

const app = express();
const port = 3000;

app.get("/user/:userid/:name/:password", (req, res)=>{
    console.log(req.params);
    res.send({firstname: "Satyam", lastname: "Jha"});
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});