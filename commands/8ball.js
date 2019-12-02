const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let question = args.slice(0).join(' ')
    
    //diferente reponse
    let errorEmbed = new Discord.RichEmbed()
         .setDescription('8Ball')
         .setColor('#FFFFFF')
         .addField('Pas de question', 'Veuiller posser une question a 8Ball');
    
    if (!question) return message.channel.send(errorEmbed)
    if (question == help) else 
         
};

module.exports.help = {
    name: '8ball'
};
