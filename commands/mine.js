const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let channellog = message.guild.channels.find('id', '604987895207428096')
    
    //les chances
    let proba = [1, 2, 3, 4, 5, 6, 7, 8];
    let probb = [1, 2, 3, 4, 5, 6];
    let probc = [1, 2, 3, 4, 5, 6];
    let probd = [1, 2, 3, 4, 5, 6];
    let probe = Math.floor((Math.random(3)));
    
    //les differentes ressources
    let pierre = Math.floor((Math.random() * proba.length + 1));
    let charbon = Math.floor((Math.random() * probb.length));
    let fer = Math.floor((Math.random() * probc.length));
    let or = Math.floor((Math.random() * probd.length));

    //reponce
    if (probe==0) {
        let Embed =new Discord.RichEmbed()
        .setDescription('Report')
        .setColor('#CD24E6')
        .addField('Journer de minage', 'vous avez miner mais vous ne trouver aucun minerai')
        .addField("Ressuorce recuperer", `${pierre} pierre`);
        channellog
    }
    if (probe==1) {
        message.channel.send('OK')
    }
    if (probe==2) {
        message.channel.send('OK')
    }
    if (probe==3) {
        message.channel.send('OK')
    }

    //channel log
    let channellogp = message.guild.channels.find('id', '614242539888967738');
    let channellogc = message.guild.channels.find('id', '614242581177565210');
    let channellogf = message.guild.channels.find('id', '614242581177565210');
    let channellogo = message.guild.channels.find('id', '614242653839818771');

    /*give
    bot.setTimeout(() => {
        channellogp.send(`!give-item ${utilisateur} ${pierre} pierre`);
    }, latence * 0);

    bot.setTimeout(() => {
        channellogc.send(`!give-item ${utilisateur} ${charbon} charbon`);        
    }, latence * 1);

    bot.setTimeout(() => {
        channellogf.send(`!give-item ${utilisateur} ${fer} minerai de fer`);       
    }, latence * 2);

    bot.setTimeout(() => {
        channellogo.send(`!give-item ${utilisateur} ${or} minerai d'or`);
    }, latence * 3);*/
    
};

module.exports.help = {
    name: 'mine'
};
