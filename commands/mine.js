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

    //logchannel
    let IDchannel = Math.floor((Math.random() * 9))
    if (IDchannel==0) return {let channelID = 614242539888967738};
    if (IDchannel==1) return {let channelID = 614242581177565210};
    if (IDchannel==2) return {let channelID = 614242610562859041};
    if (IDchannel==3) return {let channelID = 614242653839818771};
    if (IDchannel==4) return {let channelID = 614242689109721106};
    if (IDchannel==5) return {let channelID = 614242714040533002};
    if (IDchannel==6) return {let channelID = 614242740254801969};
    if (IDchannel==7) return {let channelID = 614242772400209931};
    if (IDchannel==8) return {let channelID = 614242796798476308};
    if (IDchannel==9) return {let channelID = 614242831829041162};
    //reponce
    message.channel.send(`Tu as recuperer **${pierre} de pierre.** Tu as recuperer **${charbon} de charbon.** Tu as recuperer **${fer} de minerai de fer.** Tu as recuperer **${or} de minerai de or.** Ses ressource se teleporte dans ton crystal.`);
    let channellog = message.guild.channels.find('id', channelID);
    let utilisateur = message.member;
    let latence = 3000

    //give
    bot.setTimeout(() => {
        channellog.send(`!give-item ${utilisateur} ${pierre} pierre`);
    }, latence * 0);

    bot.setTimeout(() => {
    channellog.send(`!give-item ${utilisateur} ${charbon} charbon`);        
    }, latence * 1);

    bot.setTimeout(() => {
        channellog.send(`!give-item ${utilisateur} ${fer} minerai de fer`);       
    }, latence * 2);

    bot.setTimeout(() => {
        channellog.send(`!give-item ${utilisateur} ${or} minerai de or`);
    }, latence * 3);
    
};

module.exports.help = {
    name: 'mine'
};