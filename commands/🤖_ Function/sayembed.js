const Discord = require('discord.js');
module.exports = {
    name: "saymembed",
    category: "message",
    description: "make the bot say a embeded messsage",
  run: async (client, message, args) => {
  message.delete().catch(O_o => {});
  let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 })
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "you are not authorized to use this command. You must have **Manage Messages** permission!"
    );
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  
  const embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`)
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 }))
  .setDescription(`${sayMessage}`)
  message.channel.send(embed);
  }
};