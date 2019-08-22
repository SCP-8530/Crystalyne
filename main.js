const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.log(err);

    let jsFile = files.filter(f => f.split('.').pop() === 'js');
    if (jsFile.length <= 0){
        console.log("il n'y as pas de commandes dans le ficher");
        return;
    };

    jsFile.forEach ((f, i) => {
        let props = require(`./commands/${f}`);
        bot.commands.set(props.help.name, props);
    });
});

//information de connection
bot.login('NjEzODI4NzM1NTg1NDg0ODAw.XV2qqw.mFd4zkgeMcN3zpjDPM7ZWPaoPUQ')
bot.on('ready', async message => {
    console.log('bot connecter');
    bot.user.setActivity("rien");
});



bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    
    let prefix = '/';
    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(command.slice(prefix.length));
    if (commandFile) commandFile.run(bot, message, args);
});
