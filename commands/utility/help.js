const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription("Replies With Bot's Help Menu"),
    async execute(interaction) {
        const help_embed = new EmbedBuilder()
            .setColor("DarkVividPink")
            .setTitle("**Help Menu**")
            .setURL('https://github.com/TheBotMaker-420/GenshinImpact-Bot')
            .addFields(
                {
                    name: "__Information__",
                    value: `\`\`\`character <name>\`\`\``,
                    inline: false
                },
                {
                    name: "__Utility__",
                    value: `\`\`\`help | ping | botinfo | invite | support\`\`\``,
                    inline: false
                }
            )
            .setTimestamp()
        await interaction.reply({
            embeds: [help_embed]
        });
    },
};