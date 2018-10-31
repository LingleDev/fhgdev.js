const events = require('events')
const ws = require('ws')
const events = require('events')
const readyevent = new events.EventEmitter()

class WebSocket extends events {
  gateConnect(token, ready, message) {
    const socket = new ws(`wss://gateway.discord.gg/?v=6&encoding=json`)
    socket.onopen = () => {
      console.log("Connected to Discord.")
    }
  }
} 

module.exports.Socket = WebSocket
