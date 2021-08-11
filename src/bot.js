require("dotenv").config();
const handleCommand = require("./modules/handleCommand.js");
const commandSymbol = "!"; //This should be entered by the user before any specific command that the bot supports(kick, ban, etc.)

//Optional for if you wish to serve this application with a web backend. I do because mine is on a heroku free application, where I ping / every so often so that it doesn't sleep all the time
// const express = require("express");
// const path = require("path");
// const PORT = process.env.PORT || 5000;

const { Client, Message } = require("discord.js");
const client = new Client();

//Login the bot -- Must have .env file with DiscordToken
client.login(process.env.DiscordToken);

//When Client has logged in
client.on("ready", () => {
  console.log(client.user.username);
});

// reading message functionality
client.on("message", (message) => {
  const text = message.content;
  if (message.author.bot) return;
  if (text.startsWith(commandSymbol)) handleCommand(message);
});

//Again, optional code, only use if you need the express web server functionality
// express()
//   .get("/", (req, res) => {
//     console.log("ping");
//     res.send("Bot is listening");
//   })
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));
