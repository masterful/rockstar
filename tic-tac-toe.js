// Writing this file in JS first so that I can try to rockstar it later

// Only writing the 'winner' check function, and in the simplest way I can think of
// so that it is a little easier to translate to rockstar

// I'm going to store board state in a nested array
// ex:
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// We have an array of counters for both x and o, that keep track of the number of x's and o's
// in each column/row/diagonal:
const counters = {
  x: [0, 0, 0, 0, 0, 0, 0, 0],
  o: [0, 0, 0, 0, 0, 0, 0, 0],
}

// The update function will put either 'x' or 'o' in the provided position (if that position is empty)
// and also update the counter arrays
function place(row, column, value) {
  if (board[row][column]) throw new Error('That position already has a value');
  
  board[row][column] = value;
  counters[value][row] ++;
  counters[value][column + 3] ++;
  // diagonals are harder:
  if (row === column) counters[value][6] ++;
  if ((2 - row) === column) counters[value][7] ++;

  checkForWinner();
}

function checkForWinner() {
  for (const value in counters) {
    for (const count of counters[value]) {
      if (count === 3) {
        console.log(`${value} wins!`);
        return;
      }
    }
  }
}

// Example run:
place(1, 1, 'x');
// ___
// _X_
// ___
place(0, 0, 'o');
// O__
// _X_
// ___
place(2, 2, 'x');
// O__
// _X_
// __X
place(1, 2, 'o');
// O__
// _XO
// __X
place(2, 0, 'x');
// O__
// _XO
// X_X
place(2, 1, 'o');
// O__
// _XO
// XOX
place(0, 2, 'x');
// O_X
// _XO
// XOX
// Expect to see "x wins!"