ESERCIZIO1
 
let base = 25;
let altezza = 40;
let perimetro = (base * 2) + (altezza * 2);
console.log("Il perimetro del rettangolo è " + perimetro);
 
ESERCIZIO2
 
//calcolo perimetro
/*let base = 25;
let altezza = 40;
let perimetro = (base * 2) + (altezza * 2);
console.log("Il perimetro del rettangolo è " + perimetro);
*/
 
ESERCIZIO3
//Calcolo somma e prodotto di due numeri da utente
/*let num1 = parseInt(prompt("Inserire primo numero: "));
let num2 = parseInt(prompt("Inserire secondo numero: "));
let somma = num1 + num2;
let prod = num1 * num2;
 
console.log("La somma è " + somma);
console.log("Il prodotto è " + prod);
*/
 
ESERCIZIO34
//area cerchio
/*const pi = 3.14;
let raggio = parseInt(prompt("Inserire il raggio del cerchio: "));
let area = pi*raggio*raggio;
console.log("L'area del cerchio con raggio " + raggio+ " è " + area);
*/
 
ESERCIZIO35
//Divisione
/*let num1 = parseInt(prompt("Inserire primo numero: "));
let num2 = parseInt(prompt("Inserire secondo numero: "));
let quoziente = num1/num2;
let resto = num1%num2;
console.log("Il risultato della divisione è " + quoziente + "\nIl resto è " + resto);
*/
 
ESERCIZIO36
//OreinMinuti
let ore = parseFloat(prompt("Inserire numero di ore: "));
let minuti = ore*60;
console.log(ore + " ore equivalgono a " + minuti + " minuti");
 
ESERCIZIO7
//Maggiore3Valori
/*
let num1 = parseInt(prompt("inserisci il primo numero: "));
let num2 = parseInt(prompt("inserisci il secondo numero: "));
let num3 = parseInt(prompt("inserisci il terzo numero: "));
 
if (num1 > num2 && num1 > num3){
    console.log(num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2);
}
else if (num3 > num1 && num3 > num2) {
    console.log(num3);
}
*/
 
ESERCIZIO8
//Pari e piccolo
/*let num1 = parseInt(prompt("Scrivi un numero: "));
 
let isPari = num1 % 2 == 0;
let isPiccolo = num1 > 0 && num1 < 100;
 
if (isPari && isPiccolo){
    console.log("E' pari e piccolo!");
}
else console.log("Non è pari e piccolo!");
*/
 
ESERCIZIO9
//Giudizio
/*
let voto = parseInt(prompt("Inserire il voto: "));
 
let votoErrato = voto < 0 || voto > 30;
let votoInsuff = voto >= 0 && voto <= 17;
let votoSuff = voto >= 18 && voto <= 24;
let votoBuono =voto >= 25 && voto <= 30;
 
if (votoErrato){
    console.log("Voto errato");
} else if (votoInsuff) {
    console.log("Esame non superato");
} else if (votoSuff){
    console.log("Giudizio sufficiente");
} else if (votoBuono){
    console.log("Giudizio buono");
}
 
if (votoSuff || votoBuono){
    let reg = parseInt(prompt("Vuoi registrare il voto? (0 = NO; 1 = SI) "));
    if (reg == 0){
        console.log("Voto rifiutato");
    } else if (reg == 1){
        console.log("Voto accettato");
    } else console.log("Risposta non corretta");
}
 
*/
 
 
ESERCIZIO10
//mese
let month = prompt("Scrivi in numero un mese dell'anno: ");
 
switch(month){
    case '1':
    console.log("Gennaio");
    break;
    case '2':
    console.log("Febbraio");
    break;
    case '3':
    console.log("Marzo");
    break;
    case '4':
    console.log("Aprile");
    break;
    case '5':
    console.log("Maggio");
    break;
    case '6':
    console.log("Giugno");
    break;
    case '7':
    console.log("Luglio");
    break;
    case '8':
    console.log("Agosto");
    break;
    case '9':
    console.log("Settembre");
    break;
    case '10':
    console.log("Ottobre");
    break;
    case '11':
    console.log("Novembre");
    break;
    case '12':
    console.log("Dicembre");
    break;
    default:
    console.log("Numero non valido: i mesi sono 12!");
}