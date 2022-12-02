const express = require('express')

const server = express()

server.use(express.static(__dirname))
server.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'))
    console.log('got request');
})


server.listen(5000, ()=>console.log('App started.'))


