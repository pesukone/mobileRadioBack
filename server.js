const fs = require('fs')
const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const ss = require('socket.io-stream')
const stream = ss.createStream()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

io.on('connection', (socket) => {
  ss(socket).on('client-stream-request', () => {
    ss(socket).emit('audio-stream', stream, { name: 'fifo' })
    fs.createReadStream('Scripts/input_pipe').pipe(stream)
  })
})

server.listen(3000, () => {
  console.log('Server running on port 3000')
})
