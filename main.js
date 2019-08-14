const Discord = require("discord.js");
const fs = require('fs');
const bot = new Discord.Client();

let prefix = 'c!';

bot.login('NjEwMjAxNzQxNjEwNDUwOTQ0.XVLatg.VoibNE70MbR1rY_uvejpDD52-vY')

bot.on('ready', async () => {
    console.log('bot connecter');
    bot.user.setActivity("Observer Langitia");
});


