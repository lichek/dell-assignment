import { question } from 'readline-sync'


function skills(array) {
  let i = 0
  while (i < 3) {
    console.log(i + '. ' + array[i].name + ' Damage ' +array[i].damage)

    // i += 1
    i = i + 1
  }
}


// having 2 pokemon, with specific oppHP
const myPokemon = 'Charmander'
const opponent = 'Mr.Mime'
let myHP = Math.floor(Math.random() * 100);
let oppHP = Math.floor(Math.random() * 200);
let isMyTurn = true
let currentPokemon = myPokemon

console.log('You have encountered a wild ' + opponent)
console.log('You send out ' + myPokemon)
console.log(myPokemon + ' has ' + myHP + ' HP')
console.log(opponent + ' has ' + oppHP + ' HP')





// the game continues while either pokemon has more than 0 HP
// as long as my HP is more than 0 and opponent HP is more than 50
// if myHP goes below 0, stop
// if oppHP goes below 0, stop

// myHP >0 || oppHP > 0
// my HP goes below 0, but opponent HP is above 0, continue
// opponent HP goes below 0, but my HP is above 0, continue
// my HP is below 0 and opponent HP is below 0, stop
while (myHP > 0 && oppHP > 0) {
  console.log('------------------------------')
  let attackerName = isMyTurn ? myPokemon : opponent
  let defenderName = isMyTurn ? opponent : myPokemon
  // first pokemon attacks

  const move = [
    {
      name: 'Tackle',
      damage: 50,
      type: 'fire',
    },
  
    {
      name: 'Ember',
      damage: 50,
      type: 'fire',
    },
  
    {
      name: 'Shadow',
      damage: 50,
      type: 'water',
    },
  ]
  
   skills(move)
   let ansRes = question('Select your attack\n')
  
   console.log(move[ansRes].name)



  console.log(attackerName +[ansRes]) 
  console.log(' hits for 50 damage')

//const attackDamage =Math.floor(Math.random() * 10)

 let x =30
 let y =30


  if (isMyTurn) {
    oppHP = oppHP - x
    console.log(defenderName + "'s health is reduced to " + oppHP)
  } else {
    myHP = myHP - y
    console.log(defenderName + "'s health is reduced to " + myHP)
  }

  // TODO: switch turns
  isMyTurn = !isMyTurn
}

if (oppHP <= 0) {
  console.log(opponent + ' faints')
  console.log(myPokemon + ' has gained 50 exp')
} else if (myHP <= 0) {
  console.log(myPokemon + ' faints')
  console.log('GAME OVER')
}

