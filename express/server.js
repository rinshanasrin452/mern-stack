const express =require('express')
const db=require('./config/db')
const app=express()
const port=3000
app.get('/',(req, res)=>{
    res.send("welcome to server")
})

app.listen(port, () => {
    console.log('server is running in port : ' + port)
}) 

console.log ("Hello Hi")