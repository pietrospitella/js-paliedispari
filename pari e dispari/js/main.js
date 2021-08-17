// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

let userChoise = prompt("Pari o dispari?").toLowerCase();

console.log(userChoise);

let userNum = parseInt(prompt("Scegli un numero da 1 a 5"));

console.log("tu hai scelto " + userNum);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).


function random1to5(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cpuNum = parseInt(random1to5(1, 5));

console.log("il pc ha scelto " + cpuNum);

alert("il pc ha scelto " + cpuNum);

// Sommiamo i due numeri

let sum = parseInt(userNum + cpuNum);

console.log("la somma è " + sum);

alert("la somma è " + sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

let result;

function even() {
    if (sum % 2 == 0) {
        result = "pari";
    }
    else {
        result = "dispari";
    }
}

let finalResult = even();

// Dichiariamo chi ha vinto.

if (userChoise == result){
    alert("hai vinto");
    console.log("hai vinto");
}
else {
    alert("hai perso");
    console.log("hai perso");
}
