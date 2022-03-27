const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "userinfo",
    category: "info",
    description: "user Information",
    run: async (bot, message, args) => {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "Online";
                break;
            case "dnd":
                status = "AFK";
                break;
            case "idle":
                status = "Idle";
                break;
            case "offline":
                status = "Offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} Info`)
            .setColor(`#6400b6`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Nick: ",
                    value: user.user.username,
                },
                {
                    name: "#️Hashtag: ",
                    value: `#${user.user.discriminator}`,
                },
                {
                    name: "ID: ",
                    value: user.user.id,
                },
                {
                    name: "Status: ",
                    value: status,
                },
                {
                    name: "Activity: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `User is not doing anything!`,
                },
                {
                    name: 'Avatar : ',
                    value: `[Click here!](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Account created at: ',
                    value: user.user.createdAt.toLocaleDateString("pt-BR"),
                },
                {
                    name: 'Entered into: ',
                    value: user.joinedAt.toLocaleDateString("pt-BR"),
                },
                {
                    name: 'Roles: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                }
            )

        await message.channel.send(embed)
    }
};