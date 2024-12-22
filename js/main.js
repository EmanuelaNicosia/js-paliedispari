const parola = prompt("inserisci una parola");
const risultato = palindroma(parola);

function palindroma(input) {

    const lista = input.split("");
    lista.reverse();
    const rovescio = lista.join("");
    const risultato = rovescio === input;
    return risultato;
}


console.log(risultato);


const pariDispari = prompt("inserisci pari o dispari");
const numero = prompt("inserisci numero da 1 a 5");

const numeropc = numeroCasuale(1, 5);

const pari = sommaPari(numero, numeropc);

if (pariDispari === "pari" && pari) {
    console.log("Hai Vinto");
}
else {
    console.log("Hai Perso");
}


function sommaPari(a, b) {
    const somma = Number(a) + Number(b);
    const pari = (somma % 2) === 0;

    return pari;
}

function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}