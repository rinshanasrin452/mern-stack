const mongoose= require("mongoose")

mongoose.connect

const conection = mongoose.connection

connection.on('connected',() => (console.log('db connected')))
connection.on('error',()=>{console.log{'db error'}})
