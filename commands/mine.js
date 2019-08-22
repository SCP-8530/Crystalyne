const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    //les chances
    let proba = [1, 2, 3, 4, 5, 6, 7, 8];
    let probb = [1, 2, 3, 4, 5, 6];
    let probc = [1, 2, 3, 4, 5, 6];
    let probd = [1, 2, 3, 4, 5, 6];
    
    //les differentes ressources
    let pierre = Math.floor((Math.random() * proba.length + 1));
    let charbon = Math.floor((Math.random() * probb.length));
    let fer = Math.floor((Math.random() * probc.length));
    let or = Math.floor((Math.random() * probd.length));
    //reponce
    message.channel.send(`Tu as recuperer **${pierre} de pierre.** Tu as recuperer **${charbon} de charbon.** Tu as recuperer **${fer} de minerai de fer.** Tu as recuperer **${or} de minerai de or.** Ses ressource se teleporte dans ton crystal.`);
    let channellog = message.guild.channels.find('id', '604987895207428096');
    let utilisateur = message.member;
    channellog.send(`!give-item ${utilisateur} ${pierre} pierre`);
    setTimeout(() => {
        channellog.send(`!give-item ${utilisateur} ${charbon} charbon`);
    }, 1000);
    channellog.send(`!give-item ${utilisateur} ${fer} minerai de fer`);
    channellog.send(`!give-item ${utilisateur} ${or} minerai de or`);
};

module.exports.help = {
    name: 'mine'
};