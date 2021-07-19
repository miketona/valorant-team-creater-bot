const handleCommand = function (message) {
  // const [command, ...args] = message.content.trim().substring(1).split(/\s+/);
  let storedContent = message.content;
  const command = message.content.trim().substring(1).split(/\s+/)[0];
  let args = storedContent.split(command);

  //stop running and return an error if the command does not include any arguments
  if (!args.length)
    return message.reply(
      'Please enter a value after the command "' + command + '"'
    );

  if (command === "vcreate") {
    const main = require("./valorant");
    main(args[1].substring("1"), message);
  }
};
module.exports = handleCommand;
