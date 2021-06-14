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
        backup.fetch(backupID).then(async () => {
            message.inlineReply("<a:ayar:803595478620962867> Yedek yüklendiğinde, tüm kanallar, roller vb. Değiştirilecektir.! \n<a:bytcec:818712678146113567> `g.onayla` yazarak onaylayabilirsiniz.");
                await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "g.onayla"), {
                   max: 1,
                    time: 20000,
                    errors: ["time"]
                }).catch((err) => {
                    return message.inlineReply("<:bakimda:798582408642560110> Zaman doldu, yanıt verilmediği için işlem iptal edildi.");
                });
                message.author.send("<:verified:799571972727504896> Yedek yüklenmeye başladı...");
                backup.load(backupID, message.guild).then(() => {
                   backup.remove(backupID);
               }).catch((err) => {
                    return message.author.send("<:bakimda:798582408642560110> Bir hata oluştu... Hata sebepleri: \n<a:bytcec:818712678146113567> Bota tam yetki vermelisiniz \n<a:bytcec:818712678146113567> Botun rolünü en üste almalısınız \nNot Eğer ikisini yapmış iseniz destek Sunucumuza geliniz.");
                });
        }).catch((err) => {
            console.log(err);
            return message.inlineReply("<:bakimda:798582408642560110> `"+backupID+"` Id' ye sahip bir yedek bulamadım.");
        });

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "yedek-yükle" 
} 
