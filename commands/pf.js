const Discord = require(`discord.js`);


module.exports.run = async (bot, message, args) => {
    //differente reponce
    let pilev = "Bravo c'est tomber sur Pile";
    let piled = "Dommmage c'est tomber sur Face";
    let facev = "Bravo c'est tomber sur Face";
    let faced = "Dommage c'est tomber sur Pile";
    
    //ajout pour la commande
    let choix = args.slice(0).join(' ');
    let prob = [0, 1] 
    if (!choix) return message.channel.send("Tu dois rajouter **pile** ou **face** a la commande");
    let resultat = Math.floor((Math.random() * prob.length));
    
    //reponse
    if (resultat==0 && choix=='pile') {
        return message.channel.send(pilev);
    }

    if (resultat==1 && choix=='pile') {
        return message.channel.send(piled);
    }

    if (resultat==1 && choix=='face') {
        return message.channel.send(facev);
    }

    if (resultat==0 && choix=='face') {
        return message.channel.send(faced);
    }
};

module.exports.help = {
    name: "pf"
};
