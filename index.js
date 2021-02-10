const Discord = require('discord.js');

const client = new Discord.Client();

const { token, prefix } = require('./config.json');

const { readdirSync } = require('fs');

const { join } = require('path');

const config = require('./config.json');
client.config = config;

const db = require('quick.db');



const { GiveawaysManager } = require('discord-giveaways');

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

client.commands = new Discord.Collection();
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on('ready', () => {
    console.log('I am ready');
    client.user.setActivity(`DEVELOPERS SERVER`)
});


