const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let channellog = message.guild.channels.find('id', '604987895207428096')
    
    //les chances
    let proba = [1, 2, 3, 4, 5, 6, 7, 8];
    let probb = [1, 2, 3, 4, 5, 6];
    let probc = [1, 2, 3, 4, 5, 6];
    let probd = [1, 2, 3, 4, 5, 6];
    let probe = Math.floor((Math.random() * 4));
    
    //les differentes ressources
    let pierre = Math.floor((Math.random() * proba.length + 1));
    let charbon = Math.floor((Math.random() * probb.length + 1));
    let fer = Math.floor((Math.random() * probc.length + 1));
    let or = Math.floor((Math.random() * probd.length + 1));

    //reponce
    {
        //pierre
        if (probe==0) {
        let Embeda = new Discord.RichEmbed()
            .setDescription('ACTION')
            .setColor('#CD24E6')
            .addField('Journer de minage', 'vous avez miner mais vous ne trouver aucun minerai')
            .addField("Ressource recuperer", `${pierre} pierre`);
        message.channel.send(Embeda);
        channellog.send(`!give-item ${message.author} ${pierre} pierre`);
        };

        //charbon
        if (probe==1) {
        let Embedb = new Discord.RichEmbed()
            .setDescription('ACTION')
            .setColor('#CD24E6')
            .addField('Journer de minage', 'vous avez miner et vous trouver un fillon de charbon')
            .addField("Ressource recuperer", `${pierre} pierre et ${charbon} charbon`);
        message.channel.send(Embedb);

        channellog.send(`!give-item ${message.author} ${pierre} pierre`);
        channellog.send(`!give-item ${message.author} ${charbon} charbon`);
        };

        //fer
        if (probe==2) {
        let Embedc = new Discord.RichEmbed()
            .setDescription('ACTION')
            .setColor('#CD24E6')
            .addField('Journer de minage', 'vous avez miner et vous trouver un fillon de fer')
            .addField("Ressource recuperer", `${pierre} pierre et ${fer} fer`);
        message.channel.send(Embedc);
            
        channellog.send(`!give-item ${message.author} ${pierre} pierre`);
        channellog.send(`!give-item ${message.author} ${fer} minerai de fer`);
        };

        //or 
        if (probe==3) {
            let Embedd = new Discord.RichEmbed()
                .setDescription('ACTION')
                .setColor('#CD24E6')
                .addField('Journer de minage', 'vous avez miner et vous trouver un fillon de charbon')
                .addField("Ressource recuperer", `${pierre} pierre et ${or} minerai d'or`, );
            message.channel.send(Embedd);
            
            channellog.send(`!give-item ${message.author} ${pierre} pierre`);
            channellog.send(`!give-item ${message.author} ${or} minerai d'or`)
        };
    };
    
};

module.exports.help = {
    name: 'mine'
};
