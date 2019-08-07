const book = {
    title: 'Ego is my enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: myPub = "self-published"} = book.publisher;
console.log(myPub);


//ARRAY

const address = ['1299 ELA', 'PHILI', 'PENNY', '1933'];
const [, city, state = 'NEW YORK'] = address;
console.log(`you are in ${city} ${state}`);

const item = ['Coffee (hot)','$2.00','$2.50','$2.75']
const [drink, , medium] = item;
console.log(`A medium ${drink} is ${medium}`);