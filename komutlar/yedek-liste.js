const Discord = require("discord.js")
const backup = require("discord-backup");

exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")){
           return message.inlineReply("<:bakimda:798582408642560110> Yedek komutlarını kullanabilmek için Yönetici iznine sahip olman gerekiyor!");
        }

backup.list().then((backups) => {
    const embed = new Discord.MessageEmbed() 
.setDescription(`${backups}`) 
.setColor("RANDOM") 
.setTitle("Yedek Liste")
});

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "yedek-liste" 
} 
