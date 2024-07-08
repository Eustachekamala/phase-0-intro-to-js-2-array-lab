// Write your solution here!
const cats = [];
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat(name){
    return cats.push(name);
}
destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name){
    return cats.unshift(name);
}
destructivelyPrependCat('Bob');

function destructivelyRemoveLastCat(){
   return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name){
    return [...cats,'Broom'];
}

function prependCat(){
    return ['Arnold',...cats];
}

function removeLastCat(){
    let catRm = [...cats];
    catRm.pop();
    return catRm;
}

function removeFirstCat(){
    let catRm = [...cats];
    catRm.shift();
    return catRm;
}

destructivelyRemoveLastCat();
