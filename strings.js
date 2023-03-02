//bad 
function sayHi(name) {
    return 'How are you, ' + name + '?';
}

//good
const sayHi = (name) => {
    return `How are you, ${name}?`;
}

//bad
const name = "Capt. Janeway";

//good
