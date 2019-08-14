const Discord = require("discord.js");
const fs = require('fs');
const bot = new Discord.Client();

bot.login('process.env.TOKEN')

bot.on('ready', async () => {
    console.log('bot connecter');
    bot.user.setActivity("Observer Langitia");
});

let prefix = 'c!';

