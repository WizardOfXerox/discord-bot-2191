const Discord = require("discord.js"); 
 
module.exports = {
    name: "serverinfo",
    category: "info",
    description: "Get the server info",
    run: async (client, message, args) => {
 
    let serverembed = new Discord.MessageEmbed() 
    .setColor("#6400b6")
    .setTitle(message.guild.name + ` Server Status`)
    .addField(":gift: Name", message.guild.name, )
    .addField(":id:  ID", message.guild.id, )
    .addField(`:pencil:  **Server administrators**`, 
    `<@${message.guild.ownerID}>`, true)
    .addField(':date: **Server Created in**',
     message.guild.createdAt, true)
    .addField(`:closed_lock_with_key: **Server verification**`, message.guild.verificationLevel, true)
    .addField(':man: **Members**', `${message.guild.members.cache.filter(member => member.user.bot).size} Bots | ${(message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)} Humans | ${message.guild.memberCount} Total of Members | ${Math.round((message.guild.members.cache.filter(member => member.user.bot).size / message.guild.memberCount) * 100)}% Bots | ${Math.round((((message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)) / message.guild.memberCount) * 100)}% Humans`, true)
    .addField(':wrench:  **Channels**', `${message.guild.channels.cache.filter(chan => chan.type === 'voice').size} Voice Chat | ${message.guild.channels.cache.filter(chan => chan.type === 'text').size} Text Channel | ${message.guild.channels.cache.filter(chan => chan.type === 'category').size} Categories | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'voice').size / message.guild.channels.cache.size) * 100)}% Voice Chat | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'text').size / message.guild.channels.cache.size) * 100)}% Text Channel | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'category').size / message.guild.channels.cache.size) * 100)}% Categories`, true)
    .addField(":inbox_tray:  **You entered**", message.member.joinedAt)
    .setFooter(` • Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
 
    message.channel.send(serverembed);
 
   message.delete();
    }
};