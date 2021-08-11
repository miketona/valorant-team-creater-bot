"use strict";
const fetchData = require("./fetch");
const userScore = require("./userScore");
const sortTotal = require("./ranking-algorithm");
let users = [];
//Example obj:
// let Mike = { name: "lazerbeem123456", id: "NA1" };
// let Cass = { name: "kooks mcdaddy", id: "NA1" };
// let Streling = { name: "smills2486", id: "3451" };
// let Tony = { name: "tonypatrick", id: "7660" };
// let Silas = { name: "MK14goSKRratt", id: "9991" };
// let Toast = { name: "ToastKunUwU", id: "NA1" };

const main = async (userString, message) => {
  if (typeof userString !== "undefined") {
    console.log(userString);
    userString.split("/").forEach(function (full) {
      let el = full.split("-");
      users.push({ name: el[0], id: el[1] });
    });
    //if there is an even number of users. This stops the bot from trying to calculate uneven teams, such as 3v4s.
    if (users.length % 2 === 0) {
      //use a web scraper to fetch each users data
      const userData = await fetchData(users, message); 
      //get the rankings of each user from the returned data
      const rankings = userScore(userData);
      //sort each user based on their ranks
      const sortedRanks = sortTotal(rankings[0], rankings[1]);

      let teamOneString = "";
      let teamTwoString = "";

      //create teams
      userData.forEach((user) => {
        console.log(user);
        const findEl = (element) => (element = user.rank);
        console.log(sortedRanks[0], sortedRanks[1], user.rank);
        if (sortedRanks[0].findIndex(findEl) !== -1) {
          let index = sortedRanks[0].findIndex(findEl);
          console.log("here");
          sortedRanks[0].splice(index, 1);
          console.log(sortedRanks[0]);
          teamOneString += user.username + " , ";
        } else if (sortedRanks[1].findIndex(findEl) !== -1) {
          console.log("there");

          let index = sortedRanks[1].findIndex(findEl);
          sortedRanks[1].splice(index, 1);
          teamTwoString += user.username + " , ";
        }
        //});
      });
      console.log(teamOneString);
      console.log(teamTwoString);
      if (
        typeof teamOneString !== "undefined" &&
        typeof teamTwoString !== "undefined"
      )
      //output message
        message.channel.send(
          "Team One:  " + teamOneString + "\nTeam Two: " + teamTwoString
        );
      //}
    } else {
      return message.channel.send(
        "Are you even trying to play a game? Enter an even number of people. I can not calculate an uneven number of people. I'm not a god."
      );
    }
  }
};
main();

module.exports = main;
// app.listen(port, () => console.log(` listening on port ${port}!`));
