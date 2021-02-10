const Discord = require('discord.js')

module.exports = {

    name: "ping",

    description: "ping command",

    category: "utility",

    async run (client, message, args) {

const ping = new Discord.MessageEmbed()

.setTitle(':ping_pong: PING !!!')

.setDescription(` :ping_pong: API : \`${client.ws.ping}\` `)

message.channel.send(ping)

}

}




