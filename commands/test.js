const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let fin = 0;

    let MP = message.author.createDM().then(channel => {
        channel.send('coucou')
    });

    for (let i = 1; i > fin; i++) {
        console.log(i)
        return MP
    };
    
};

module.exports.help = {
    name: 'test'
};