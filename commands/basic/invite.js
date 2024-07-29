const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Generate an invite link for the bot.'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setAuthor({ 
                name: "Invite Link", 
                iconURL: "https://cdn.discordapp.com/attachments/1246408947708072027/1256597293323256000/invite.png?ex=668158ed&is=6680076d&hm=030c83f567ffdaf0bebb95e50baaec8bb8a8394fa1b7717cc43c3622447f58e3&" ,
                 url: "https://discord.com/invite/PeEHBqJNbG"
                })
            .setDescription('Sorry, Nyansic is made only for the sole purpose of this server. If you want an publicly available bot, Please contact cbloxy#0054 on discord. Thank you!')
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
