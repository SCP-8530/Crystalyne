const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    //les chances
    //let prob = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //les differentes ressources
    let bois = Math.floor((Math.random() * /*prob.length*/ + 1))

    message.channel.send(`Tu as recuperer ${bois} de bois. Ses ressource se teleporte dans ton crystal`)
    let channellog = message.guild.channels.find('id', '604987895207428096');
    let utilisateur = message.member
    channellog.send(`!give-item ${utilisateur} ${bois} bois`)
};

module.exports.help = {
    name: 'buche'
};