//list of all possible ranks
function convertRankToNumber(rank) {
  let conversion = null;
  switch (rank.toLowerCase()) {
    case "iron 1":
      conversion = 1;

      break;
    case "iron 2":
      conversion = 2;

      break;
    case "iron 3":
      conversion = 3;

      break;
    case "bronze 1":
      conversion = 4;

      break;
    case "bronze 2":
      conversion = 5;

      break;
    case "bronze 3":
      conversion = 6;

      break;
    case "silver 1":
      conversion = 7;

      break;
    case "silver 2":
      conversion = 8;

      break;

    case "silver 3":
      conversion = 9;

      break;
    case "gold 1":
      conversion = 10;

      break;
    case "gold 2":
      conversion = 11;

      break;
    case "gold 3":
      conversion = 12;

      break;
    case "platinum 1":
      conversion = 13;

      break;
    case "platinum 2":
      conversion = 14;

      break;
    case "platinum 3":
      conversion = 15;

      break;
    case "diamond 1":
      conversion = 16;

      break;
    case "diamond 2":
      conversion = 17;

      break;
    case "diamond 3":
      conversion = 18;

      break;
    case "immortal 1":
      conversion = 19;

      break;
    case "immortal 2":
      conversion = 20;

      break;
    case "immortal 3":
      conversion = 21;

      break;
    case "valorant":
      conversion = 22;

      break;
    default:
      break;
  }
  return conversion;
}
let convertedRankList = [];
const rankUser = function (usersData) {
  let usersScore = Number;
  usersData.forEach((userData) => {
    userData.rank = convertRankToNumber(userData.rank);
    convertedRankList.push(userData.rank);
  });

  let teamOne = [];
  let teamTwo = [];
  //split into two teams based on highest of rank
  convertedRankList = convertedRankList.sort((a, b) => a - b);
  convertedRankList.forEach(function (rank, i) {
    i % 2 === 0 ? teamOne.push(rank) : teamTwo.push(rank);
  });

  return [teamOne, teamTwo];
};

module.exports = rankUser;
