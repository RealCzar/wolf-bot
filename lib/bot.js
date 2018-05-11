//      

const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.BOT_TOKEN;

const prefix = ">"

client.on('ready', () => {
  console.log('Wolf bot is now ready!');
});

client.on('message', message => {

  // >kick @person meanie

  let messagearray = message.content.split(" ");
  let cmd = messagearray[0];
  let args = messagearray.slice(1);

  if(cmd === prefix + "hello") {
    message.reply("hello!");
  } else if (cmd === prefix + "ban") {
    let kickee = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!kickee) {
      return message.reply('Cannot find user.');
    } else {
      if(!message.member.hasPermission("KICK_MEMBERS")) {
        message.reply('I can\'t do that for you, pal!');
      } else {
        let kRichEmbed = new Discord.RichEmbed()
          .setDescription("Player kicked")
          .setColor('#FF0000')
          .addField("Kicked user", `${kickee} with ID ${kickee.id}`)
          .addField('Kicked in', message.channel)
          .addField('Time', message.createdAt);

        let kickChannel = message.guild.channels.find(`name`, 'incidents');
        if(!kickChannel) {
          message.reply('ERROR: Cannot find \"incidents\" channel.');
        } else {
          kickChannel.send(kRichEmbed);
        }
      }
    }
  }
});

client.login(token);
