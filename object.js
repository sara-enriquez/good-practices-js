// bad
const item = new Object();

//good
const item = {};

//bad 
const test = 'test';

const obj = {
    test: test
}

//good


//bad copy
const person = {
    name: 'person',
    age: 20,
    lastName: 'lastname'
}

let newObj = {};

for(key in person){
    newObj[key] = person[key];
}

//good



// bad 
const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
};

//good
const bad = {
    foo: 3,
    bar: 4,
    dataBlah: 5
};

// bad
const items = new Array();

// good
const items = [];

//bad 
const list = [];

list[0] = 'add new element to list';

//good
const list = [];
list.push('add new element to list');

//bad copy
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

//good
const len = items.length;
const itemsCopy = [];

for (let i = 0; i < len.length; i + 1) {
  itemsCopy = len[i];
}



//destructurin obj
// bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;
  
    return `${firstName} ${lastName}`;
}

//good


//destructurin array
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

//good