const Discord = require("discord.js");

module.exports = {
    name: "uptime",
    category: "info",
    description: "bot uptime",
    run: async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `šļø ${days.toFixed()} days\nšļø ${hours.toFixed()} hours\nšļø ${minutes.toFixed()} minutes\nšļø ${seconds.toFixed()} seconds`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`Activity time š°ļø`)
    .setThumbnail("https://imgur.com/WZMylbw.gif")
    .setColor("#FF0000")
    .setDescription(`**I've been online for:**\n${uptime}`)

  message.channel.send(embed);
    }
};