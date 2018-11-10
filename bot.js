const Client = new (require('./src/client/Client.js').Client)()

Client.login(process.env.token)
