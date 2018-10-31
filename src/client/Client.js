const socket = require('../ws.js').Socket
const discord = new socket()
const readyEvent = new (require('events').EventEmitter)()
const BaseClient = require('./BaseClient')

/** 
 * @extends {BaseClient}
*/

class Client extends BaseClient {
  this.ready = readyEvent
  /**
  * @param {token} [token]
  */
  login(token) {
    Socket.gateConnect(token)
  }
}

