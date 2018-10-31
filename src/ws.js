const events = require('events')
const ws = require('ws')
const events = require('events')
bot.ready = new events.EventEmitter()

class WebSocket extends events {
  gateConnect(token, ready) {
    const socket = new ws(`wss://gateway.discord.gg/?v=6&encoding=json`)
    socket.onopen = () => {
      console.log("Logged in.")
    }
  }
} 
