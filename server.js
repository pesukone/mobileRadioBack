const http = require('http')
const fs = require('fs')
const express = require('express')

const app = express()

const server = http.createServer(app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/audio', (req, res) => {
  const fd = fs.openSync('Scripts/input_pipe', 'r')
  const stream = fs.createReadStream(null, { fd })
  stream.on('data', (d) => {
    console.log(d.toString())
  })
})

server.listen(3000, () => {
  console.log('Server running on port 3000')
})
