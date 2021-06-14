const Discord = require("discord.js")
const backup = require("discord-backup");

exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")){
           return message.inlineReply("<:bakimda:798582408642560110> Yedek komutlarını kullanabilmek için Yönetici iznine sahip olman gerekiyor!");
        }

let backupID = args[1];
        if(!backupID){
            return message.inlineReply("<:bakimda:798582408642560110> Yedek yüklemek için önceden oluşturduğunuz yedeği bir id' si lazımdır.");
        }
backup.remove(backupID).then(async () => {
message.inlineReply("<a:check:844812514529509386> Yedek silindi.") 
}).catch((err) => {
                    return message.inlineReply("<:bakimda:798582408642560110> Zaman doldu, yanıt verilmediği için işlem iptal edildi.");
                });

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "yedek-sil" 
}  
