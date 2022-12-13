// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
};

function destructivelyPrependCat(name) {
    return cats.unshift(name);
};

function destructivelyRemoveLastCat() {
    return cats.splice(2);
};

function destructivelyRemoveFirstCat() {
    return cats.splice(0, 1);
};

function appendCat(name){
    let newCats ='';
    return newCats = [...cats, name];
};

function prependCat(name){
    let newCats ='';
    return newCats = [name, ...cats];
};

function removeLastCat() {
    let newCats = '';
    return newCats = cats.slice(0, 2);
}

function removeFirstCat() {
    let newCats = '';
    return newCats = cats.slice(-2);
}