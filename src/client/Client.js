const socket = require('../ws.js').Socket
const discord = new Socket()
const readyEvent = new (require('events').EventEmitter)()
discord.gateConnect("", readyEvent)

