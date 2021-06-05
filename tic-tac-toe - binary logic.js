// Writing this file in JS first so that I can try to rockstar it later

// Only writing the 'winner' check function, and in the simplest way I can think of
// so that it is a little easier to translate to rockstar

// I'm going to store board state in a binary number
// ex: 100010001 is:
// 100
// 010
// 001

// Make an array of winning conditions:
const winningConditions = [
  0b111000000,
  0b000111000,
  0b000000111,
  0b100100100,
  0b010010010,
  0b001001001,
  0b100010001,
  0b001010100,
];

// Check to see if our current state matches one of the winning conditions:
const xs = 0b001010101;
const os = 0b100001010;
for (const condition of winningConditions) {
  if ((xs & condition) === condition) {
    console.log('x wins');
    break;
  }
  if ((os & condition) === condition) {
    console.log('o wins');
    break;
  }
}