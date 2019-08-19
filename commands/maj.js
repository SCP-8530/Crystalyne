const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    console.log('commande fonctionnelle');
    let Here = message.guild.member(
        message.mentions.users.first() || message.guild.members.get(args[0])
    );

    if(!Here) return message.channel.send('tu as oublier de mentionner here');

    await Here.AddRole('610901457499193372');

    message.channel.send('ok -_-');


};

module.exports.help = {
    name: "maj"
};