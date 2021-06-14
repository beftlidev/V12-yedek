const Discord = require("discord.js")
const backup = require("discord-backup");

exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")){
           return message.inlineReply("<:bakimda:798582408642560110> Yedek komutlarını kullanabilmek için Yönetici iznine sahip olman gerekiyor!");
        }

 message.inlineReply('<a:WindowsBusy:798582405627773069> Yedek oluşturuluyor. Lütfen birkaç dakika bekleyiniz!').then(msg => msg.delete({ timeout: 5000 }))
  backup.create(message.guild, {
         jsonBeautify: true
        }).then((backupData) => {
            message.author.send("<:verified:799571972727504896> Yedek oluşturuldu! Yedeği yüklemek için: \n<a:bytcec:818712678146113567> `g.yedek-yükle "+backupData.id+"`");
            message.inlineReply("<:verified:799571972727504896> Yedek başarıyla oluşturuldu. DM kutunuzu kontrol ediniz!");
       });

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "yedekle" 
}
