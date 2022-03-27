const Discord = require('discord.js');

module.exports = {//YassineHz & Ameen Devlopment
  name : 'help',
  run : async(client, message, args)=>{//YassineHz & Ameen Devlopment
    let color = message.guild.me.displayHexColor;
   let embed = new Discord.MessageEmbed()
   .setTitle('Help Section')//YassineHz & Ameen Devlopment
   .setColor(color)
   .setDescription(`** 
> ⚙️ \`To show Iformation commands\`

> 🎵  \`To show Music commands\`

> 🔧 \`To show Config commands\`
   
    **`)//YassineHz & Ameen Devlopment

//YassineHz & Ameen Devlopment
  message.channel.send(embed).then(async msg => {//YassineHz & Ameen Devlopment
      msg.react("⚙️")
      msg.react("🎵")//YassineHz & Ameen Devlopment
      msg.react("🔧")
 //YassineHz & Ameen Devlopment
 const doma= msg.createReactionCollector((reaction, user) => reaction.emoji.name == "⚙️" && user.id == message.author.id, {time: 86400000})
 const domaa = msg.createReactionCollector((reaction, user) => reaction.emoji.name == "🎵" && user.id == message.author.id, {time: 86400000})
 const domaaa = msg.createReactionCollector((reaction, user)=> reaction.emoji.name == "🔧" && user.id == message.author.id, {time: 86400000} )//YassineHz & Ameen Devlopment
 //YassineHz & Ameen Devlopment
 doma.on("collect",async r => {
   let embe = new Discord.MessageEmbed()//YassineHz & Ameen Devlopment
   .setColor(color)
   .setTitle('⚙️ Information commands')
   .setDescription(`
- help ➛ To Show Help List

- ping ➛ To See Bot Latency

   `)
   msg.edit(embe)//YassineHz & Ameen Devlopment
 })
      domaa.on("collect", async r => {
        let embe = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle('🎵 Music commands')
        .setDescription(`
- play ➛ To Play A Song

- loop ➛ To Repeat Song

- pause ➛ To Pause Song

- resume ➛ To Resume Song

- skip ➛ To Skip To Next Song

- stop ➛ To Stop Song

- volume ➛ To Set Volume 0-100

- queue ➛ To See Queued Songs List

- skip-to ➛ Skips To A Certain Position In The Queue

- now-playing ➛ To Show The Current Song
         `)
      msg.edit(embe)//YassineHz & Ameen Devlopment
      })
 domaaa.on("collect",async r => {//YassineHz & Ameen Devlopment
   let embe = new Discord.MessageEmbed()//YassineHz & Ameen Devlopment
   .setColor(color)
   .setTitle('🔧 config commands')//YassineHz & Ameen Devlopment
   .setDescription(`
- set-prefix (prefx) ➛ To Change the bot prefix
   `)
   msg.edit(embe)
 })//YassineHz & Ameen Devlopment

    })
  }
}
