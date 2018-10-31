const socket = require('../ws.js').Socket
const discord = new socket()
const readyEvent = new (require('events').EventEmitter)()
discord.gateConnect("", readyEvent)

