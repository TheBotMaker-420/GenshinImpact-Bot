const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription("Replies With Support Sever's Link"),
    async execute(interaction) {
        const support_embed = new EmbedBuilder()
            .setColor("DarkGold")
            .setTitle("**Support Server**")
            .setDescription(`[Click Here To Join The Support Server](https://discord.gg/47wazmdAbT)`)
            .setTimestamp()
            .setFooter({
                text: `To Get More Help Type \`/help\`.`
            })
        await interaction.reply({
            embeds: [support_embed]
        });
    },
};