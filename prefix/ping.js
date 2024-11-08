module.exports = {
    name: 'ping',
    async execute(message) {
        await message.reply('Pong!')
    }
}