const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.log(err);

    let jsFile = files.filter(f => f.split('.').pop() === 'js');
    if (jsFile.length <= 0){
        console.log('commande introuvable');
        return;
    };

    jsFile.forEach ((f, i) => {
        let props = require(`./commands/${f}`);
        bot.commands.set(props.help.name, props);
    });
});

//information de connection
bot.login('NjEwMjAxNzQxNjEwNDUwOTQ0.XViUow.a0DTOxZvgSB1v_dvr7bNCBg5RdA')
bot.on('ready', async message => {
    console.log('bot connecter');
    bot.user.setActivity("faire chier un putin de SCP");
    return bot.guilds.channel.get('588734587174125588').send('je suis connecter petit con de SCP');
});

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    
    let prefix = 'c!';
    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(command.slice(prefix.length));
    if (commandFile) commandFile.run(bot, message, args);
});
