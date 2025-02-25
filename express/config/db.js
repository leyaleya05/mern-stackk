const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://leyark369:samplepassword@cluster0.5l9fu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const connection = mongoose.connection

connection.on('connected',() => (console.log('db connected')))
connection.on('error',()=> {console.log('db error')})