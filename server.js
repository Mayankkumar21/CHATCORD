const express=require('express')
const path=require('path')
const http = require('http')
const app=express();

//set static folder
app.use(express.static(path.join(__dirname,'public')))

const PORT=3000 || process.env.PORT;

app.listen(PORT,()=> console.log(`server running on port ${PORT}`));