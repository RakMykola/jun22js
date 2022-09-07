const arrcards =[
    {cardSuit:'spade-pika',value:'6',color:'black'},
    {cardSuit:'spade-pika',value:'7',color:'black'},
    {cardSuit:'spade-pika',value:'8',color:'black'},
    {cardSuit:'spade-pika',value:'9',color:'black'},
    {cardSuit:'spade-pika',value:'10',color:'black'},
    {cardSuit:'spade-pika',value:'jack',color:'black'},
    {cardSuit:'spade-pika',value:'queen',color:'black'},
    {cardSuit:'spade-pika',value:'king',color:'black'},
    {cardSuit:'spade-pika',value:'ace',color:'black'},
    {cardSuit:'spade-pika',value:'joker',color:'black'},

    {cardSuit:'diamond-buba',value:'6',color:'red'},
    {cardSuit:'diamond-buba',value:'7',color:'red'},
    {cardSuit:'diamond-buba',value:'8',color:'red'},
    {cardSuit:'diamond-buba',value:'9',color:'red'},
    {cardSuit:'diamond-buba',value:'10',color:'red'},
    {cardSuit:'diamond-buba',value:'jack',color:'red'},
    {cardSuit:'diamond-buba',value:'queen',color:'red'},
    {cardSuit:'diamond-buba',value:'king',color:'red'},
    {cardSuit:'diamond-buba',value:'ace',color:'red'},
    {cardSuit:'diamond-buba',value:'joker',color:'red'},

    {cardSuit:'heart-4erva',value:'6',color:'red'},
    {cardSuit:'heart-4erva',value:'7',color:'red'},
    {cardSuit:'heart-4erva',value:'8',color:'red'},
    {cardSuit:'heart-4erva',value:'9',color:'red'},
    {cardSuit:'heart-4erva',value:'10',color:'red'},
    {cardSuit:'heart-4erva',value:'jack',color:'red'},
    {cardSuit:'heart-4erva',value:'queen',color:'red'},
    {cardSuit:'heart-4erva',value:'king',color:'red'},
    {cardSuit:'heart-4erva',value:'ace',color:'red'},
    {cardSuit:'heart-4erva',value:'joker',color:'red'},

    {cardSuit:'clubs-xresta',value:'6',color:'black'},
    {cardSuit:'clubs-xresta',value:'7',color:'black'},
    {cardSuit:'clubs-xresta',value:'8',color:'black'},
    {cardSuit:'clubs-xresta',value:'9',color:'black'},
    {cardSuit:'clubs-xresta',value:'10',color:'black'},
    {cardSuit:'clubs-xresta',value:'jack',color:'black'},
    {cardSuit:'clubs-xresta',value:'queen',color:'black'},
    {cardSuit:'clubs-xresta',value:'king',color:'black'},
    {cardSuit:'clubs-xresta',value:'ace',color:'black'},
    {cardSuit:'clubs-xresta',value:'joker',color:'black'},


]

// описати колоду карт
// - знайти піковий туз

let find = arrcards.find(card => card.value === 'ace' && card.cardSuit==='spade-pika');
    console.log(find);

// - всі шістки

let filteredCards = arrcards.filter(card => card.value === '6');
    console.log(filteredCards);

// - всі червоні карти

let filterRedCards = arrcards.filter(card => card.color === 'red');
    console.log(filterRedCards);
// - всі буби
let filterBubaCards = arrcards.filter(card => card.cardSuit === 'diamond-buba');
    console.log(filterBubaCards);

// - всі трефи від 9 та більше
let filterXrestaCards = arrcards.filter(card =>{
    if (Number(card.value) >= 9 && card.cardSuit === 'clubs-xresta' ){
        console.log(card);
    }
    if (card.value>'9' && card.cardSuit === 'clubs-xresta'){
        console.log(card);
    }
}
    );


//     Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log(arrcards.reduce((accum,card)=>{
    if(card.cardSuit==='spade-pika'){
        accum.pika.push(card);
    }if(card.cardSuit==='diamond-buba'){
        accum.buba.push(card);
    }if(card.cardSuit==='heart-4erva'){
        accum.cherva.push(card);
    }if(card.cardSuit==='clubs-xresta'){
        accum.xresta.push(card);
    }
    return accum;
},{pika:[],buba:[],cherva:[],xresta:[]}));
