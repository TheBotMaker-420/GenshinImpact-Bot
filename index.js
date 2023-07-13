const {Client, Events} = require('discord.js');
require('dotenv').config();

const client = new Client({intents: [513]});

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(process.env.TOKEN).then(r => console.log('Logged In!'));