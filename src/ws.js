const events = require('events')
const ws = require('ws')
const events = require('events')
const readyevent = new events.EventEmitter()
var sequence = 0
const ops = {
  ready: 10,
  identify: 2,
  incorrect: 4004
}

class WebSocket extends events {
  gateConnect(token, ready, message) {
    const socket = new ws(`wss://gateway.discord.gg/?v=6&encoding=json`)
    socket.onopen = () => {
      console.log("Connected to Discord.")
    }
    socket.onmessage = (a) => {
      const data = JSON.parse(a.data)
      if (0 == data.op) return;
      console.log(data)
      sequence = data.s
      10 == b.op
      && (ws.send(JSON.stringify({
        op: 2,
        token: token,
        properties: {
          $browser: "Github"
        },
        large_threshold: 50
      })))
      
      if (data.op == ops.incorrect) {
        throw new RangeError("Incorrect Token.")
      }
      
      if (data.op == ops.ready) {
        ready.emit("ready")
      }
      
    }
  }
} 

module.exports.Socket = WebSocket
