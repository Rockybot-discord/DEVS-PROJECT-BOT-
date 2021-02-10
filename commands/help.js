const pagination = require('discord.js-pagination');

const Discord = require('discord.js');

module.exports = {

    name: "help",

    description: "help page",

category: "info",

    async run (client, message, args){

       

        const moderation = new Discord.MessageEmbed()

        .setTitle('Moderation')

         .setDescription('`\ kick, ban, mute, unmute, lock, unlock, clear, embed`\ ')

        .setTimestamp()

        const Other = new Discord.MessageEmbed()

        .setTitle('Other')

        .setDescription('`\ bal, work, daily, , buy, store, leaderboard, weather, playstore, color `\ ')

        .setTimestamp()



        const pages = [

                moderation,

                Other



        ]



        const emojiList = ["◀️", "▶️"];

        const timeout = '12000

        pagination(message, pages, emojiList, timeout)

    }

}


p
