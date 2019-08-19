const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    console.log('commande fonctionnelle');
    let Here = message.guild.member(
        message.mention.user.frist() || message.guild.member.get(args[0])
    );
    if(!Here) return message.channel.send('tu as oublier de mentionner here')
    if(Here) Here.AddRole('610901457499193372')
    message.channel.send('ok -_-');


};

module.exports.help = {
    name: "maj"
};