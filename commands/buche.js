const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    //les chances
    let prob = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //les differentes ressources
    let bois = Math.floor((Math.random() * prob.length + 1);
    let channellog = message.guild.channels.find('id', '604987895207428096');
    let utilisateur = message.member
    
    //embed
    
    let Embed = new Discord.RichEmbed()
         .setDescription('ACTION')
         .setColor('#CD24E6')
         .addField('Journer de bucheron', 'vous avez couper des arbre pour recuperer du bois')
         .addField("Ressource recuperer", `${bois} buche de bois`);
    message.channel.send(Embed)
    
    channellog.send(`!give-item ${utilisateur} ${bois} bois`)
};

module.exports.help = {
    name: 'buche'
};
