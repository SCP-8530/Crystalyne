const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let user_void_inv = message.mentions.members.first();

    if (!user_void_inv) {
        message.channel.send('Aucun utilisitateur as ete mentionner');
    };

    if (user_void_inv) {
        message.channel.send(`Veuiller patienter que son inventaire soit clear`);

        //clear
        let logchannel = message.guild.channels.find('id', '604987895207428096');
    
        logchannel.send(`!take-item ${user_void_inv} 10000 bois`);
        logchannel.send(`!take-item ${user_void_inv} 10000 pierre`);
        logchannel.send(`!take-item ${user_void_inv} 10000 minerai de fer`);
        logchannel.send(`!take-item ${user_void_inv} 10000 charbon`);
        logchannel.send(`!take-item ${user_void_inv} 10000 vegeteux`);
        logchannel.send(`!take-item ${user_void_inv} 10000 minerai d'or`);
        logchannel.send(`!take-item ${user_void_inv} 10000 lingo d'or`);
        logchannel.send(`!take-item ${user_void_inv} 10000 lingo de fer`);

        message.channel.send('inventaire clear');
    };

};

module.exports.help = {
    name: 'vide'
};
