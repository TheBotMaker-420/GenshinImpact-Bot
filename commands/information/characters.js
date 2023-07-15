const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const data = require('../../data/characters/data.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('character')
        .setDescription('Provides Character Information')
        .addStringOption(option =>
            option
                .setName('name')
                .setDescription('Enter A Valid Name')
                .setRequired(true)
        ),
    async execute(interaction) {
        const id = interaction.options.getString('name');

        // Below Code Returns True When The Name Is Found
        // let find= data.some(item => item.name.toLowerCase() === id.toLowerCase());
        // console.log(find);

        let find_one = data.find(item => item.name.toLowerCase() === id.toLowerCase());

        if (find_one) {
            const char_embed = new EmbedBuilder()
                .setColor("Yellow")
                .setTitle(`**__${find_one.name}__**`)
                .addFields(
                    {
                        name: "**Title**",
                        value: `${find_one.title}`,
                        inline: true
                    },
                    {
                        name: "**Quality**",
                        value: `${find_one.title}`,
                        inline: true
                    },
                    {
                        name: "**Vision**",
                        value: `${find_one.title}`,
                        inline: true
                    },
                    {
                        name: "**Model Type**",
                        value: `${find_one.title}`,
                        inline: true
                    },
                    {
                        name: "**Birthday**",
                        value: `${find_one.title}`,
                        inline: true
                    },
                    {
                        name: "**Region**",
                        value: `${find_one.title}`,
                        inline: true
                    },
                    {
                        name: "**Constellation**",
                        value: `${find_one.title}`,
                        inline: true
                    },
                    {
                        name: "**Weapon**",
                        value: `${find_one.title}`,
                        inline: true
                    },
                    {
                        name: "**Special Dish**",
                        value: `${find_one.title}`,
                        inline: true
                    },
                    {
                        name: "**Release Date**",
                        value: `${find_one.title}`,
                        inline: true
                    },
                )
                .setDescription(find_one.description)
                .setImage(find_one.image)

            await interaction.reply({
                embeds: [char_embed]
            });
        } else {
            await interaction.reply("Character Not Found !");
        }
    },
};