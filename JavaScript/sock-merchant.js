///// HackerRank "Sock Merchant" problem solution /////
/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example:
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]

There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs
Input Format

The first line contains an integer n, the number of socks represented in ar.
The second line contains the array of integers ar, representing the colors of the socks in the pile.
*/ 

const n = 14;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20, 50, 70, 70, 30, 10];

function sockMerchant(n, ar) {
  // Read first number x
  // Store unique number from ar
  // Iterate through ar to find total number of that color
  // Remove it from future checks
  // Count how many of the same value x
  // Increase pair count by number of x / 2, drop modulus
  // Read next unique number y
  let colorCounter = 0;
  let pairCounter = 0;
  let colors = [];
  for (let i = 0; i < n; i++) {
    let currentColor = ar[i];
    if (colors.includes(currentColor) === false) {
      colors.push(currentColor);
      for (let j = 0; j < n; j++) {
        if (ar[j] === currentColor) {
          colorCounter++;
        }
        console.log(
          "currentColor: " +
            currentColor +
            " colorCounter:" +
            colorCounter +
            "  pairCounter:" +
            pairCounter
        );
      }
    }
    pairCounter += Math.floor(colorCounter / 2); // use Math.floor to drop modulus
    colorCounter = 0;
  }
  return pairCounter;
}

console.log(sockMerchant(n, ar));
