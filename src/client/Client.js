const socket = require('../ws.js').Socket
const discord = new socket()
const readyEvent = new (require('events').EventEmitter)()

class Client {
  this.ready = readyEvent
  /**
  * @param {token} [token]
  */
  login(token) {
    socket.gateConnect(token)
  }
}

