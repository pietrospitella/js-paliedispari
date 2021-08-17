// Chiedere all’utente di inserire una parola

let userWord = prompt("Inserisci una parola").toLowerCase();

// Creare una funzione per capire se la parola inserita è palindroma

let palindrome = reverseWord(userWord);

if (userWord == palindrome) {
    console.log("palindroma");
}
else {
    console.log("non palindroma");
}

function reverseWord(word) {

    var invertedWord = "";

    for (let i = word.length - 1; i >= 0; i-- ) {
        invertedWord += word[i];
        
    }

    return invertedWord;
}