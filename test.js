function sortTotal(teamOne, teamTwo) {
  let teamOneTotal = teamOne.reduce((a, b) => a + b, 0);
  let teamTwoTotal = teamTwo.reduce((a, b) => a + b, 0);
  let largerTotal = null;
  teamOneTotal > teamTwoTotal ? (largerTotal = 1) : (largerTotal = 2);
  //while loop which will continue to run until team scores are as even as possible
  while (1 !== 2) {
    console.log("Array One: " + teamOne);
    console.log("Array Two: " + teamTwo);
    let myAnswer = totalTest(
      largerTotal,
      teamOneTotal,
      teamTwoTotal,
      teamOne,
      teamTwo
    );

    if (myAnswer == false) break;
    // console.log(myAnswer);
    teamOne = myAnswer[0];
    teamTwo = myAnswer[1];
    teamOneTotal = teamOne.reduce((a, b) => a + b, 0);
    teamTwoTotal = teamTwo.reduce((a, b) => a + b, 0);
    teamOneTotal > teamTwoTotal ? (largerTotal = 1) : (largerTotal = 2);
  }

  //   console.log(teamOneTotal, teamOne, teamTwoTotal, teamTwo);
  return [teamOneTotal, teamTwoTotal];
}

//tests if swapping an element of the array will change the outcome without making a different one bigger
const totalTest = function (bigger, totalOne, totalTwo, arrOne, arrTwo) {
  let answer = false;
  if (bigger === 1) {
    //Test One: replace second largest with smallest

    for (let index = arrOne.length - 1; index >= 0; index--) {
      const test = arrOne[index];
      answer = runTest(test, totalOne, totalTwo, arrTwo[0]);
      //   console.log(test);

      //   console.log(typeof answer);
      if (answer === true) {
        //modify the array
        arrOne[index] = arrTwo[0];
        arrTwo[0] = test;
        answer = [arrOne, arrTwo];
        break;
      }
    }
  } else {
    for (let index = arrTwo.length - 1; index >= 0; index--) {
      const test = arrTwo[index];
      answer = runTest(test, totalTwo, totalOne, arrOne[0]);
      //   if(typeof test !== 'undefined')
      console.log(test);
      //   console.log(totalOne);
      //   console.log(totalTwo);
      //   console.log(arrOne[0]);
      //   console.log(answer);
      if (answer === true) {
        //modify the array
        arrTwo[index] = arrOne[0];
        arrOne[0] = test;
        answer = [arrOne, arrTwo];
        break;
      }
    }
  }
  return answer;
};

const runTest = function (
  testNumber,
  BiggerTotal,
  SmallerTotal,
  smallestNumber
) {
  //If bigger total is still not greater then the smaller array
  console.log(testNumber, smallestNumber, SmallerTotal + testNumber);
  console.log(BiggerTotal - smallestNumber);
  if (
    testNumber > smallestNumber &&
    BiggerTotal - testNumber + smallestNumber > SmallerTotal + testNumber
  )
    return true;
  //   console.log(testNumber, smallestNumber);
  return false;
};
let testArrayOne = [2, 4, 6, 8, 9];
let testArrayTwo = [3, 5, 7, 8, 15];
console.log(sortTotal(testArrayOne, testArrayTwo));
