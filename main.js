const Discord = require("discord.js");
const fs = require('fs');
const bot = new Discord.Client();



//information de connection
bot.login('NjEwMjAxNzQxNjEwNDUwOTQ0.XVLatg.VoibNE70MbR1rY_uvejpDD52-vY')
bot.on('ready', async () => {
    console.log('bot connecter');
    bot.user.setActivity("Observer Langitia");
});

//systeme de classement des commands
bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.log(err);

    let jsFile = files.filter(f => f.split('.').pop() === 'js');
    if (jsFile.length <= 0){
        console.log('commande introvable');
        return;
    };

    jsFile.forEach ((f, i) => {
        let props = require(`./commands/${f}`);
        bot.commands.set(props.help.name, props);
    });
});



bot.on('message', async message => {

//prefix
let prefix = 'c!';

//activation des commandes
let CommandFile = bot.commands.get(commands.slice(prefix.length));
if (CommandFile) CommandFile.run(message, bot, args);

});