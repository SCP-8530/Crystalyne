const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    //les chances
    let proba = [1, 2, 3, 4, 5, 6, 7, 8];
    let probb = [1, 2, 3, 4, 5, 6];
    let probc = [1, 2, 3, 4, 5, 6];
    
    //les differentes ressources
    let vege = Math.floor((Math.random() * proba.length + 1));
    let bois = Math.floor((Math.random() * probb.length));
    let pierre = Math.floor((Math.random() * probc.length));

    //reponce
    message.channel.send(`Tu as recuperer **${vege} de végétaux.** Tu as recuperer **${bois} de bois.** Tu as recuperer **${pierre} de pierre.** Ses ressource se teleporte dans ton crystal.`);
    let channellog = message.guild.channels.find('id', '604987895207428096');
    let utilisateur = message.member;
    channellog.send(`!give-item ${utilisateur} ${vege} végétaux`);
    channellog.send(`!give-item ${utilisateur} ${bois} bois`);
    channellog.send(`!give-item ${utilisateur} ${pierre} végétaux`);
};

module.exports.help = {
    name: 'mine'
};