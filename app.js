const express = require("express");
const app = express();
const router = express().router;
const path = require("path");

app.set("view engine","ejs");
app.use(express.static(path.resolve(__dirname,"./public")));
app.use(express.static(path.resolve(__dirname,"./views")));
app.listen(process.env.PORT||3000,()=>{console.log("Corriendo en puerto");});

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
});

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
});