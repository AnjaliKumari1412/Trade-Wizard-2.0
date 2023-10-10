const express = require('express')
const http = require("http")
const app = express()
const server = http.createServer(app)
app.get('/', async (req, res) => {
    res.send("Hello from server")
})

server.listen(80, () => {
    console.log("Ready on port 80")
})