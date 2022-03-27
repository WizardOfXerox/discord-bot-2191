const db = require('quick.db')

const { Client, Collection } = require("discord.js");
const {default_prefix} = require("./configuration/config.json")
const token = process.env['TOKEN']
require('./server')();

const client = new Client({
    disableEveryone: true
})

client.on('message', async message => {
  if (message.content.startsWith('!reply')) {
    message.lineReply('Hey'); //Line (Inline) Reply with mention

    message.lineReplyNoMention(`My name is ${client.user.username}`); //Line (Inline) Reply without mention
  }
});

client.commands = new Collection();
client.aliases = new Collection();
client.queue = new Map();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
//Status / Game

client.on("ready", () => {
  client.user.setActivity(default_prefix + `help`)
  console.log('Client is ready')
});

 
 
client.on("message", async message => { 
    
 
    if (message.author.bot) return;
    if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`) 
  if(prefix === null) prefix = default_prefix;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await guild.fetchMember(message); 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
     
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd); 
  if (!command) command = client.commands.get(client.aliases.get(cmd)); 
    if (command) 
        command.run(client, message, args); 


}); 

client.login(token); // if you are not on replit use client.login('TOKEN HERE')