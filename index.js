// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    return cats.push(name);
}
destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name){
    return cats.unshift(name);
}
destructivelyPrependCat('Bob');

function destructiveRemoveLastCat(){
   return cats.pop();
}
destructiveRemoveLastCat();

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
    [...cats,cats.pop()];
    console.log(cats);
}

function removeFirstCat(){
    [...cats,cats.shift()];
    console.log(cats);
}

