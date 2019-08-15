const Discord = require('discord.js');

module.exports.run = async (bot, message, args, send) => {
    message.channel.send('ok -_-');
    console.log('commande fonctionnelle');
};

module.exports.help = {
    name: 'maj'
};