const Discord = require("discord.js")
const backup = require("discord-backup");

exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")){
           return message.inlineReply("<:bakimda:798582408642560110> Yedek komutlarını kullanabilmek için Yönetici iznine sahip olman gerekiyor!");
        }

           let backupID = args[1];
       if(!backupID){
            return message.inlineReply("<:bakimda:798582408642560110> Bilgisi verilmesi gereken bir yedek ID'si girmen gerekiyor!");
        }
        backup.fetch(backupID).then((backupInfos) => {
            const date = new Date(backupInfos.data.createdTimestamp);
            const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
            const formatedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;
            let embed = new Discord.MessageEmbed()
               .setAuthor("Yedekleme Bilgisi")
                .addField("<:rozetamaisminibilemedmsj:841725455447228416> Yedekleme ID", backupInfos.id, false)
               .addField("<:rozetamaisminibilemedmsj:841725455447228416> Sunucu ID", backupInfos.data.guildID, false)
                .addField("<:dosya:768792973734576138> Boyut", `${backupInfos.size} kb`, false)
                .addField("<:yt_v:841725470697193533> Oluşturulma tarihi", formatedDate, false)
               .setColor("GREEN");
           message.channel.send(embed);
        }).catch((err) => {
            return message.inlineReply("<:bakimda:798582408642560110> `"+backupID+"` Id' ye sahip bir yedek bulamadım.");
       });

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "yedek-bilgi" 
} 
