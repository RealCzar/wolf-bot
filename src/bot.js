// @flow

const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = ">"

client.on('ready', () => {
  console.log('Wolf bot is now ready!');
});

client.on('message', message => {
  if(message.content === prefix + "hello") {
    message.reply("hello!");
  }
});

client.login(process.env.BOT_TOKEN);
