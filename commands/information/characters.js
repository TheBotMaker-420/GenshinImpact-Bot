const { SlashCommandBuilder } = require('discord.js');
const data = require('../../data/characters/data.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('character')
        .setDescription('Provides Character Information')
        .addStringOption(option =>
            option
                .setName('name')
                .setRequired(true)
        ),
    async execute(interaction){
        const id = interaction.options.getString('name');

        await interaction.reply(data[0].name);
    },
};