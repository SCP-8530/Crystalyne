const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    //raccourcie
    let idee = args[1]
    let reponse = message.channel.send
    //embed
    let Embed_inconnue = new Discord.RichEmbed()
        .setDescription('Craft')
        .setColor('#E41764')
        .addField('Caractere inconnue', 'Argument possible: ``help`` ``liste`` ``[ID]``');
    let Embed_help = new Discord.RichEmbed
        .setDescription('Craft')
        .setColor('#1493FE')
        .addField('help', "permet d'avoir les description des argument pour la commande /craft")
        .addField('liste', "permet d'avoir la liste des craft possible et leur id")
        .addField('[ID]', "permet de declancher un craft");
    let Embed_liste = new Discord.RichEmbed()
        .setDescription('Craft')
        .setColor('#1493FE')
        .addField('Dague[1]', 'require 2 bois et 5 lingo de fer')
        .addField('epee de bois[2]', 'require 10 bois')
        .addField('epee de pierre[3]', 'require 4 bois et 10 de pierre')

    //reponce
    if (!idee) {
        message.channel.send(Embed_inconnue)
    };

    if (idee==help) {
        reponse(Embed_help);
    };

    if (idee==liste) {
        reponse(Embed_liste)
    };
};

module.exports.help = {
    name: 'craft'
};