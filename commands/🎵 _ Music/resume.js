const color = require('../../configuration/colors.json')
const footer = require('../../configuration/footer.json')

module.exports = {
        name: 'resume',
        aliases : ['re'],
        description : 'To resume the music that is playing :3',
        
    run: async (client, message, args) => {
        const { channel } = message.member.voice;
        if (!channel) { 
          
          message.channel.send({embed : {
            description : `:x: \`You have to be in a voice channel before using this command\``,
            color : color.error,
            footer : {
              text : footer.footertext,
              icon_url : footer.footericon
            }
          }}).then(msg=>msg.react('❌'))
        } else {
          const serverQueue = client.queue.get(message.guild.id);

          if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send({embed : {
              description : `:x: \`You have to be in the same voice channel as the bot\``,
              color : color.error,
              footer : {
                text : footer.footertext,
                icon_url : footer.footericon
              }
            }}).then(msg=>msg.react('❌'))
          } else {
            if (serverQueue && !serverQueue.playing) {
              serverQueue.playing = true;
              serverQueue.connection.dispatcher.resume();
              message.channel.send({embed:{
                description: `▶ \`Resumed the music for you\``,
                color: color.blue,
                footer : {
                  text : footer.footertext,
                  icon_url : footer.footericon
                }
              }}).then(msg=>msg.react('▶️'))
            } else {
              return message.channel.send({embed : {
              description : `:x: \`There is nothing to resume\``,
              color : color.error,
              footer :  {
                text : footer.footertext,
                icon_url : footer.footericon
              }
            }}).then(msg=>msg('❌'))
            }
          }
        }
    }
};