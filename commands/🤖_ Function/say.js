module.exports = {
    name: "say",
    category: "message",
    description: "Make the bot say something",
    run: async (client, message, args) => {
  let toSay = args.join(" ")
  if(!toSay) return message.channel.send({content: "You have to add another word."})
  message.channel.send({content: toSay})
    }
};