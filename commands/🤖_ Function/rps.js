module.exports = {
    name: "rockpaperscissor",
    category: "game",
    description: "Plays rock paper scissor",
  run: async (client, message) => {
  const Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");
  const rps_embed = new Discord.MessageEmbed()

                .setTitle('Rock, Paper, Scissor')
                .setColor('BLUE')
                .setThumbnail("https://media.discordapp.net/attachments/743528055259267233/777094703849406464/unknown.png?width=1022&height=447")
                .setDescription('React to play the game!')
                .setTimestamp()
                .setFooter('﴾۞﴿');

            message.channel.send(rps_embed)

        .then((r_message) => {

        r_message.react('🧱').then(r_message.react('✂').then(r_message.react('📰').then(r_message.react('🔄'))));

        const filter = (reaction, user) => {
            return ['🧱', '✂', '📰', '🔄'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        r_message.awaitReactions(filter, { max: 1, time: 60000, error: ["time"] }).then(
            async (collected) => {
                const reaction = collected.first()
                if((reaction.emoji.name === "🔄")){
                  message.channel.send(rps_embed); return message.channel.send({content: "Reloaded!"})
            }
            });

        const bot_choice = ['🧱', '✂', '📰']
        const random_bot_choice = bot_choice[Math.floor(Math.random() * bot_choice.length)]

        r_message.awaitReactions(filter, { max: 1, time: 60000, error: ["time"] }).then(
            async (collected) => {
                const reaction = collected.first()
                if((random_bot_choice === "✂" && reaction.emoji.name === "🧱") || (random_bot_choice === "🧱" && reaction.emoji.name === "📰") || (random_bot_choice === "📰" && reaction.emoji.name === "✂")){

                    const rps_won_embed = new Discord.MessageEmbed()

                        .setColor('GREEN')
                        .setAuthor( message.author.tag, message.author.displayAvatarURL())
                        .setDescription('✅ Yey you won!.' + '\n\n ' + 'Choices:' + '\nYou chose ' + reaction.emoji.name + ',  and I chose ' + random_bot_choice + '!')
                        .setTimestamp()
                        .setFooter('﴾۞﴿');
                                   
                    r_message.edit(rps_won_embed)
                    .then(() => {
                        r_message.reactions.removeAll();
                    });
                } 
                else if(random_bot_choice === reaction.emoji.name){
                    const rps_tie_embed = new Discord.MessageEmbed()
                        .setColor('BLUE')
                        .setAuthor( message.author.tag, message.author.displayAvatarURL())
                        .setDescription('🚫 Its a tie!.' + '\n\n ' + 'Choices:' + '\nYou chose ' + reaction.emoji.name + ',  and I chose ' + random_bot_choice + '!')
                        .setTimestamp()
                        .setFooter('﴾۞﴿');

                    r_message.edit(rps_tie_embed)
                    .then(() => {
                        r_message.reactions.removeAll();
                    });

                }
                else{
                   
                    const rps_loose_embed = new Discord.MessageEmbed()

                        .setColor('RED')
                        .setAuthor( message.author.tag, message.author.displayAvatarURL())
                        .setDescription('❌ You lost!.' + '\n\n ' + 'Choices:' + '\nYou chose ' + reaction.emoji.name + ',  and I chose ' + random_bot_choice + '!')
                        .setTimestamp()
                        .setFooter('﴾۞﴿');

                    r_message.edit(rps_loose_embed)
                    .then(() => {
                        r_message.reactions.removeAll();
                    });
                }
            })
            .catch(collected => {

                const no_response = new Discord.MessageEmbed()

                        .setColor('RED')
                        .setAuthor( message.author.tag, message.author.displayAvatarURL())
                        .setDescription('❌ Game has been cancelled since you did not reposnd in time!')
                        .setTimestamp()
                        .setFooter('﴾۞﴿');

                r_message.edit(no_response)
                .then(() => {
                    r_message.reactions.removeAll();
                });
            })
        });
  }
};