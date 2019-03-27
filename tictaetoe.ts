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

function repeatplayer(){
 

}


//its array function to store those value

const tictactoe = ["","","","","","","","",""]
displayUI(tictactoe)

console.log('Player 1 turn, please insert based on above value you want to from 0-8:')
let anstictaetoe = question('Please input it\n')

let isMyTurn = true
const player1 = 'X'
const player2 = 'O'
//let currentplayer = player1



while (isMyTurn) {
       console.log('------------------------------')
    let taketurn = isMyTurn ? player1 : player2
    //console.log(+taketurn + ' please insert based on above value you want to from 0-8:')
    //let anstictaetoe = question('Please input it\n')  

if(anstictaetoe === '0'){
  tictactoe[0]= taketurn
  displayUI(tictactoe)
  

}else if (anstictaetoe === '1'){
  tictactoe[1]= taketurn
  displayUI(tictactoe)

}else if (anstictaetoe === '2'){
  tictactoe[2]= taketurn
  displayUI(tictactoe)

}else if (anstictaetoe === '3'){
  tictactoe[3]= taketurn
  displayUI(tictactoe)

}else if (anstictaetoe === '4'){
  tictactoe[4]= taketurn
  displayUI(tictactoe)

}else if (anstictaetoe === '5'){
  tictactoe[5]= taketurn
  displayUI(tictactoe)

}else if (anstictaetoe === '6'){
  tictactoe[6]= taketurn
  displayUI(tictactoe)

}else if (anstictaetoe === '7'){
  tictactoe[7]= taketurn
  displayUI(tictactoe)

}else if (anstictaetoe === '8'){
  tictactoe[8]= taketurn
  displayUI(tictactoe)

}break;
//console.log("nothing")

}

//function check for winner
function checkforwinner() {

console.log("Checking for Winner...")

let winner
//let playerone= anstictaetoe //playerone is always X !
let playertwo= '';

let player1win1 = (tictactoe).length ===3

}
