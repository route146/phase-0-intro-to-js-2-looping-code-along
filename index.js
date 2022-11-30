function writeCards(names, event) {
    let cardList = [];
    for (let i= 0; i < names.length; i++) {
        cardList.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return cardList;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
        debugger;
    }
}

countDown(10);