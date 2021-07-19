const rp = require("request-promise");
const cheerio = require("cheerio");

const $ = cheerio.load("<div");

let url = "https://tracker.gg/valorant/profile/riot/";
let endingString = "/overview?playlist=competitive";
// const users = [];
const usersRanks = [];
// import rankUser from ("./userScore");
async function fetchData(users, message) {
  function isRank(testString) {
    let isRank = false;
    const rankList = [
      "Bronze",
      "Platinum",
      "Silver",
      "Iron",
      "Diamond",
      "Immortal",
      "Radient",
    ];
    rankList.forEach((rank) => {
      if (
        testString.toLocaleLowerCase().indexOf(rank.toLocaleLowerCase()) !== -1
      ) {
        isRank = true;
      }
    });
    return isRank;
  }
  const runScrapper = async (singleUrl, username, message) => {
    await rp(singleUrl)
      .then(function (html) {
        let rank;
        let KDA;

        $(
          ".valorant-highlighted-content__stats .valorant-highlighted-stat__value",
          html
        ).each(function () {
          const text = $(this).text();
          if (isRank(text)) rank = text;
          else KDA = text;
        });
        usersData = { username: username, rank: rank, KDA: KDA };
        usersRanks.push(usersData);
        // return usersData;
      })
      .catch(function (err) {
        //handle error
        console.log(err);
        message.channel.send(
          "Error:  " +
            username +
            "Was not able to be found. I hope you don't fat finger the keyboard this bad when you're in game."
        );
      });
  };

  async function main(message) {
    for (const user of users) {
      singleUrl = url + user.name + "%23" + user.id + endingString;
      await runScrapper(singleUrl, user.name, message);
    }
    return usersRanks;
  }

  return await main(message);
}

module.exports = fetchData;
