const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription("Replies With Bot's Invitation Link"),
    async execute(interaction) {
        const invite_embed = new EmbedBuilder()
            .setColor("Gold")
            .setTitle('**Invite Me**')
            .setDescription(`[Click Here To Added Me To Your Server!](https://youtu.be/dQw4w9WgXcQ)`)
            .setTimestamp()
            .setFooter({
                text: `To Get More Help Type \`/help\`.`
            })
        await interaction.reply({
            embeds: [invite_embed]
        });
    },
};