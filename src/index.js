require('dotenv').config();
const client = require('../resources/client');
const channels = require('../resources/channels');
const prompts = require('../resources/prompts');
const promptArray = Object.keys(prompts).map(key => '!' + key);

client.on('ready', (c) => {
    console.log(`Psst, ${c.user.username}'s online.`)
});

client.on('guildMemberAdd', (member) => {
    const welcomeChannel = client.channels.cache.get(channels.welcome);

    welcomeChannel.send(`Bienvenid@, ${member.user.username}!`);
})

client.on('messageCreate', (message) => {
    if (message.author.bot || !promptArray.includes(message.content)) return;
    let reply;

    switch (message.content) {
        case '!hola':
            reply = prompts.hola.replace('%NAME%', message.author.username);
            break;
        case '!adios':
            reply = prompts.adios.replace('%NAME%', message.author.username);
            break;
        case '!nihongo':
            reply = prompts.nihongo;
            break;
        case '!comandos':
            reply = prompts.comandos;
            break;
    };

    message.channel.send(reply);

});

client.login(process.env.TOKEN);