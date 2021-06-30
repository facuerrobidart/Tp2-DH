const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.resolve(__dirname,"./public")));
var port = process.env.PORT || 3000;
app.listen(port,()=>{console.log("Corriendo en puerto", port);});

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
});