"use strict";
const fetchData = require("./fetch");
const userScore = require("./userScore");
const sortTotal = require("./ranking-algorithm");
let users = [];
// let Mike = { name: "lazerbeem123456", id: "NA1" };
// let Cass = { name: "kooks mcdaddy", id: "NA1" };
// let Streling = { name: "smills2486", id: "3451" };
// let Tony = { name: "tonypatrick", id: "7660" };
// let Silas = { name: "MK14goSKRratt", id: "9991" };
// let Toast = { name: "ToastKunUwU", id: "NA1" };

// users.push(Mike, Cass, Tony, Streling, Toast, Silas);
const main = async (userString, message) => {
  if (typeof userString !== "undefined") {
    console.log(userString);
    userString.split("/").forEach(function (full) {
      let el = full.split("-");
      users.push({ name: el[0], id: el[1] });
    });
    //gets the data of all the users
    if (users.length % 2 === 0) {
      const userData = await fetchData(users, message);
      const rankings = userScore(userData);
      const sortedRanks = sortTotal(rankings[0], rankings[1]);
      console.log(sortedRanks);
      //give names back to sorted list based on rank (If two users have the same rank, the name could swap, but that doesn't really matter since they have the same rank)
      let teamOneString = "";
      let teamTwoString = "";
      //if (userData.length === sortedRanks[1].length + sortedRanks[2].length) {
      userData.forEach((user) => {
        // el.forEach((user) => {
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
