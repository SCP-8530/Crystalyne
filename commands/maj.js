const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    console.log('commande fonctionnelle');
    return message.channel.send('ok -_-');
};

module.exports.help = {
    name: 'maj'
};