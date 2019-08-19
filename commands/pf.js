const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    let event = random(0,1);
    if (event==0) return message.channel.send("Tu lance une piece en l'air. quand tu la ratrape elle tombe sur **Face**")
    if (event==1) return message.channel.send("Tu lance une piece en l'air. quand tu la ratrape elle tombe sur **Pile**")
};

module.exports.help = {
    name: "pf"
};
