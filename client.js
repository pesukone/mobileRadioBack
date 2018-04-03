const io = require('socket.io-client')
const ss = require('socket.io-stream')
const socket = io.connect('http://127.0.0.1:3000', { reconnect: true })
const stream = ss.createStream()

ss(socket).emit('client-stream-request', stream)

ss(socket).on('audio-stream', (stream) => {
  let parts = []
  stream.on('data', (chunk) => {
    parts.push(chunk)
    if (parts.length >= 30) {
      console.log("ASDASDASD")
      parts = []
    }
  })
  stream.on('end', () => {
    console.log(parts)
  })
})
