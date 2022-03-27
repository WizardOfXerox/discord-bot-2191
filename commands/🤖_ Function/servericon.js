const Discord = require('discord.js');

module.exports = {
  name: "servericon",
  catergory: "info",
  description: "Download the server icon",
  alternativas: ['servericon'],
  run: async (client, message, args) => {
    var embed = {
      title: `Server Icon ${message.guild.name}`,
      description: `[Click Here](${message.guild.iconURL({
        dynamic: true, format: "png", size: 4096
      })}) to download the icon for this server.`,
      color: 'BLACK',
      image: {
        url: message.guild.iconURL({ dynamic: true, format: "png", size: 4096 })
      }
    };
    message.reply({ embed: embed });
  }
};