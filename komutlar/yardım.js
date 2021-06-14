const Discord = require("discord.js")

exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed() 
.setDescription(`yedek-al - Yedek alırsınız. 
yedek-yükle - Yedek yüklerseniz. 
yedek-bilgi - Yedek hakkında bilgi alırsınız. 
yedek-liste - Tüm yedekleri listeler. 
yedek-sil - Yedek silersiniz. 
`) 
.setColor("RANDOM") 
.setTitle("Yardım Menüsü") 

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "yardım" 
}
