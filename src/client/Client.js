const socket = require('../ws.js').socket
const discord = new socket()
const readyEvent = new (require('events').EventEmitter)()

class Client {
  constructor(ready) {
    this.ready = readyEvent
  }
  
  /**
  * @param {token} [token]
  */
  login(token) {
    discord.gateConnect(token)
  }
}

module.exports.Client = Client

