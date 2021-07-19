require("dotenv").config();
const handleCommand = require("./modules/handleCommand.js");
const commandSymbol = "!"; //This should be entered by the user before any specific command that the bot supports(kick, ban, etc.)
//Login the bot
const { Client, Message } = require("discord.js");
const client = new Client();
client.login(process.env.DiscordToken);

//When Client has logged in
client.on("ready", () => {
  console.log(client.user.username);
});

// reading message functionality
client.on("message", (message) => {
  const text = message.content;
  //if message is from bot return
  if (message.author.bot) return;
  //message is from user
  // console.log(text);
  // console.log(message.author.username);
  //if message is a command
  if (text.startsWith(commandSymbol)) handleCommand(message);
  // } else if (text.includes("hello") || text.includes("Hello")) {
  //   message.channel.send(
  //     "Hello " + message.author.username + ", how are you good sir?"
  //   );
  // }
});
console.log(process.env.DiscordToken);
