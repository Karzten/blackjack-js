/* 
    *2C = Two of Clubs
    *2D = Two of Diamonds
    *2H = Two of Hearts
    *2S = Two of Spades
*/

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];


const createDeck = () => {
    for( let i = 2; i <= 10; i++ ){
        for( let type of types ){
            deck.push( i + type);
        }
    }
    for( let type of types ){
        for( let special of specials ){
            deck.push( special + type );
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

createDeck();

const takeCard = () => {

    if(deck.length === 0){
        throw 'No hay cartas en la baraja';
    }

    const card = deck.pop();
    return card;
}

const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return ( isNaN(value) ) ? ( value === 'A' ) ? 11 : 10  : value * 1; 
} 

const valor = cardValue('5D');
console.log({valor})
