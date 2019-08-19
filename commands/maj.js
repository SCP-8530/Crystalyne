const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    console.log('commande fonctionnelle');
    //let Here = 
    
    /*(
        message.mentions.user.first() || message.guild.members.get(args[0])
    );*/

    //if(!Here) return message.channel.send('tu as oublier de mentionner here');

    message.member.addRole('610901457499193372')

    message.channel.send('ok -_-');


};

module.exports.help = {
    name: "maj"
};