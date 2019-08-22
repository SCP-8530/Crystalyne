const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let channeltest = message.guild.channels.find('id', '613126591203115149');
    channeltest.send('je suis mis a jour')
};
