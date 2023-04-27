require('dotenv').config();
const client = require('../resources/client');
const channels = require('../resources/channels');

client.on('ready', (c) => {
    console.log(`Psst, ${c.user.username}'s online.`)
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    const welcomeChannel = client.channels.cache.get(channels.welcome);
    welcomeChannel.send(`Que onda, ${message.author.username}`);

});

client.login(process.env.TOKEN);