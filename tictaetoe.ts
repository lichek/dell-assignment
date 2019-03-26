// board is a 3x3 array with blank cells
// each person takes turns
// choose a position on the board
// fill it with X or Y depending on the player
// after placing, check if theres a winner
// how to check
// check rows, columns, diagonals for 3 matching pieces
// if all 3 match, that player won
// show victory message
// else if all board spaces filled up and no winner
// its a draw

// board = "000000000"
// board = [
//   [0,0,0], 
//   [0,0,0],
//   [0,0,0]
// ]


import { question } from 'readline-sync'

//TODO user take turn to insert
//TODO let user to keyin which position they want to insert
//TODO function to validate got winner or not

//Function to display Tic Tac Toe UI.
function displayUI(array) {
  console.log("\n[" + array[0] + "] " + "[" + array[1] + "] " + "[" + array[2] + "]")
  console.log("[" + array[3] + "] " + "[" + array[4] + "] " + "[" + array[5] + "]")
  console.log("[" + array[6] + "] " + "[" + array[7] + "] " + "[" + array[8] + "]\n")
}

const tictactoe = ["0","1","2","3","4","5","6","7","8"]

displayUI(tictactoe)

console.log('Player 1 turn, please insert based on above value you want to:')
let anstictaetoe = question('Please input it\n')

while (anstictaetoe[0] >= 'X') {

if(anstictaetoe === '0'){
  tictactoe[0]= 'X'
  displayUI(tictactoe)

}else if (anstictaetoe === '1'){
  tictactoe[1]= 'X'
  displayUI(tictactoe)

}else if (anstictaetoe === '2'){
  tictactoe[2]= 'X'
  displayUI(tictactoe)

}else if (anstictaetoe === '3'){
  tictactoe[3]= 'X'
  displayUI(tictactoe)

}else if (anstictaetoe === '4'){
  tictactoe[4]= 'X'
  displayUI(tictactoe)

}else if (anstictaetoe === '5'){
  tictactoe[5]= 'X'
  displayUI(tictactoe)

}else if (anstictaetoe === '6'){
  tictactoe[6]= 'X'
  displayUI(tictactoe)

}else if (anstictaetoe === '7'){
  tictactoe[7]= 'X'
  displayUI(tictactoe)

}else if (anstictaetoe === '8'){
  tictactoe[8]= 'X'
  displayUI(tictactoe)

}
}
