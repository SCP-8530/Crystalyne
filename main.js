const Discord = require("discord.js");
const fs = require('fs');
const bot = new Discord.Client();



//information de connection
bot.login('NjEwMjAxNzQxNjEwNDUwOTQ0.XVLatg.VoibNE70MbR1rY_uvejpDD52-vY')
bot.on('ready', async () => {
    console.log('bot connecter');
    bot.user.setActivity("Observer Langitia");
});

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    
    let prefix = 'c!';
    let messageArray = message.content.split(' ');
    let commands = messageArray[0];
    let args = messageArray.slice(1);


    if (args[0].toLowerCase() === prefix + 'pf'){
        let event = random(0,1);
        if (event==0) return message.channel.send("Tu lance une piece en l'air. quand tu la ratrape elle tombe sur **Face**")
        if (event==1) return message.channel.send("Tu lance une piece en l'air. quand tu la ratrape elle tombe sur **Pile**")
    };
});
