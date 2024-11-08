const { GatewayIntentBits, Client, Partials } = require('discord.js')
const client = new Client({ intents: Object.keys(GatewayIntentBits), partials: Object.keys(Partials) });
const { token } = require('./config.json')

client.logs = require('./utils/logs.js')

/* Client Passing */
    require('./handlers/PrefixHandler.js')(client);
    require('./handlers/SlashHandler.js')(client);
    
client.logs.log('Logging the bot...')
client.login(token)
client.on('ready', x => {
    client.logs.login(`${x.user.tag} Is Ready`)
})

