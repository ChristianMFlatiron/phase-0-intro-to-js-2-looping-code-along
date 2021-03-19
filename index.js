
const newArray = []

function writeCards(cards, event) {
  for (let i = 0; i < cards.length; i++) {
    //console.log(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
     newArray.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
  }
  return newArray
}
 





function countDown(time){
    while (time >= 0){
        console.log(time--);
    }
}

