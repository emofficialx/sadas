const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message) => {
    message.channel.send('<@&1094883483127648257>')
    if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      "Bu komutu kullanabilmek için yeterli iznine sahip değilsin!"
    );
  let prefix = ayarlar.prefix;
  let member = message.mentions.users.first()
  const embed = new Discord.MessageEmbed() 
  .setAuthor(`Borz RolePlay`)
    .setColor("ORANGE")
    .setThumbnail(client.user.avatarURL())
  .setImage('https://media.discordapp.net/attachments/1013396495753556049/1112122357323141140/standard_2.gif')
  .addField(
      ` :green_circle: Sunucumuz Aktiftir!`, 
    `Sunucumuza f8'den (connect 185.254.30.219) Yaparak Giriş Sağlayabilirsiniz.\n İyi Roller dileriz. `,
    )
    .addField(
      `__Bilgilendirme__`,
      `🔱 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz.`
    );
  message.channel.send(embed)
};

 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "aktif",
  description: "aktif",
  usage: "aktif"
};
