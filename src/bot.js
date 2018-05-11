// @flow

const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.BOT_TOKEN;

const prefix = ">"

client.on('ready', () => {
  console.log('Wolf bot is now ready!');
});

client.on('message', message => {
  if(message.content === prefix + "hello") {
    message.reply("hello!");
  }
});

client.login(token);
