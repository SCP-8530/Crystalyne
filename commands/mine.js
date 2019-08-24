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
    let channelIDpierre = 614242539888967738;
    let IDchannelfer = 614242581177565210;
    let IDchannelcharbon = 614242610562859041;
    let IDchannelor = 614242653839818771;
    let IDchannel4 = 614242689109721106;
    let IDchannel5 = 614242714040533002;
    let IDchannel6 = 614242740254801969;
    let IDchannel7 = 614242772400209931;
    let IDchannel8 = 614242796798476308;
    let IDchannel9 = 614242831829041162;
    //reponce
    message.channel.send(`Tu as recuperer **${pierre} de pierre.** Tu as recuperer **${charbon} de charbon.** Tu as recuperer **${fer} de minerai de fer.** Tu as recuperer **${or} de minerai de or.** Ses ressource se teleporte dans ton crystal.`);
    let channellog = message.guild.channels.find('id', IDchannel);
    let utilisateur = message.member;
    let latence = 3000

    //give
    bot.setTimeout(() => {
        message.guild.channels.find('id', channelIDpierre).send(`!give-item ${utilisateur} ${pierre} pierre`);
    }, latence * 0);

    bot.setTimeout(() => {
        message.guild.channels.find('id', IDchannelcharbon).send(`!give-item ${utilisateur} ${charbon} charbon`);        
    }, latence * 1);

    bot.setTimeout(() => {
        message.guild.channels.find('id', IDchannelfer).send(`!give-item ${utilisateur} ${fer} minerai de fer`);       
    }, latence * 2);

    bot.setTimeout(() => {
        message.guild.channels.find('id', IDchannelor).send(`!give-item ${utilisateur} ${or} minerai d'or`);
    }, latence * 3);
    
};

module.exports.help = {
    name: 'mine'
};