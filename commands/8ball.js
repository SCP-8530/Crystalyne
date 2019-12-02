const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let question = args.slice(0).join(' ')
    
    //diferente reponse
    let errorEmbed = new Discord.RichEmbed() 
        .setDescription('8Ball')
        .setColor('#000000')
        .addField('Pas de question', 'Veuiller posser une question a 8Ball');
    let helpEmbed = new Discord.RichEmbed()
        .setDescription('Help 8ball')
        .setColor('#000000')
        .addField('','Pause une question a 8ball qui peut se repondre par oui ou par non.');
    let repEmbed = new Discord.RichEmbed()
        .setDescription('8Ball')
        .setColor('#000')
        .addField(question, reponse);
    //reponces de 8ball
    let variable8ball = Math.floor((Math.random()* 6));
    let reponse = 'ok';
    if (variable8ball == 0)  reponse = 'oui';
    if (variable8ball == 1)  reponse = 'non';
    if (variable8ball == 2)  reponse = 'peut-etre';
    if (variable8ball == 3)  reponse = 'je ne sais pas';
    if (variable8ball == 4)  reponse = 'surment';
    if (variable8ball == 5)  reponse = 'il y a peut de chance';
    //comportement
    if (!question) return message.channel.send(errorEmbed);
    if (question == help) message.channel.send(helpEmbed) 
    else message.channel.send(repEmbed);
         
};

module.exports.help = {
    name: '8ball'
};
