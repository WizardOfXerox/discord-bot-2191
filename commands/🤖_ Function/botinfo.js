const { MessageEmbed } = require("discord.js");
const {default_prefix} = require("../../configuration/config.json")
const db = require("quick.db");

module.exports = {
  name: "botinfo",
  aliases: ["binfo", "info"],
  run: async (client, message, args) => {
    
let cmds = await db.get(`cmd_`) || 0;
    
    client.fetchApplication().then(app => {
            let owner = app.owner
    
    const binfo = new MessageEmbed()
    .setAuthor(`${message.guild.name} | BotInfo`, message.guild.iconURL())
    .setDescription(`**Hi! \`${message.author.username}\` My name is \`${client.user.username}\` and I was made especially to help you, my prefix is \`${default_prefix.prefix}\`**`)
    .addField("My Creator", `\`${owner.tag}\``, true)
     .addField(`My statistics`,
    `\n**Channels:** \`${client.channels.cache.size}\`\n**Servers:** \`${client.guilds.cache.size}\``, true)
    .addField("My Status", `**Ping:** \`${client.ws.ping}ms\`\n**Language:** \`JavaScript\`\n**Host:** \`Repl.it\``, true)
    .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
     .setThumbnail(client.user.displayAvatarURL())
    .setColor("RANDOM")
    message.channel.send(`${message.author}`, binfo)
    
    })
  }
}