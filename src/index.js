require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log(`Psst, ${c.user.username}'s online.`)
});

client.on('guildMemberAdd', (member) => {
    member.send('Bienvenido, gato')
})

client.login(process.env.TOKEN);