const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = { run: async (client, message, args) => {
const part = message.content.slice(1).trim();
//if(!part) return message.delete();
if(!part) return message.reply("Tu dois spécifier ta raison de ton **partenariat** aprés avoir mis ta commande : **!part**")
const messagee = message.author;
let laDate = new Date();
const embedpart= new MessageEmbed()
.setColor('RANDOM')
.setAuthor(
{
name: `🤝|Partenariat de ${messagee.tag}`, 
iconURL: messagee.displayAvatarURL({dynamic: true})
})
.setAuthor({ name: `partenaire: de ${messagee.tag}`, iconURL: messagee.displayAvatarURL({dynamic: true})}) 
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setDescription(`📧 | partenaire: **Un utilisateur demande un partenariat avec votre serveur**: Auteur du message : ${message.author}\nDate de création du message : <t:${Math.floor(message.createdAt / 1000)}:F>\nContenu : \`\`\`${message.content}\`\`\``)
.addField('La commande a était faite sur le salon -->',` ${message.channel }`,"\`", true)
.setTimestamp()
return message.guild.channels.cache.get("624758777601720333").send({embeds: [embedpart] 
}).then(async msg => {
    message.delete();
    console.log(`
    ╔══════════════════════════════════╗
    Nouvelle Partenariat :
    Auteur : ${message.author.username}
    Suggestion : ${part}
    Heure : ${laDate.getHours() + 'h' + laDate.getMinutes()}
    ╚══════════════════════════════════╝
    `);
});

},
name: 'part',
aliases: [],
description: "Commande partenariat, faire la commande !part."
};