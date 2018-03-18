const http = require('http')
const express = require('express')

const app = express()

const server = http.createServer(app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(3000, () => {
  console.log('Server running on port 3000')
})
