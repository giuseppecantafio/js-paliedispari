////////// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// facciamo scegliere all'utente pari o dispari 

let pariDispari = prompt("Scegliere tra pari o dispari");

if ((pariDispari !== 'pari') && (pariDispari !== 'dispari')) {
alert('Valori validi: pari o dispari. Ritentare');
location.reload();
}

console.log('L\'utente ha scelto ' + pariDispari);

// facciamo inserire all'utente un numero da 1 a 5

let numeroUtente = parseInt(prompt("Scegliere un numero da 1 a 5"));

if ((numeroUtente < 1) || (numeroUtente > 5)){
    alert('Valori validi: numeri da 1 a 5. Ritentare');
    location.reload();
}

console.log('Questo è il numero utente ' + numeroUtente);

// funzione per generare numero da computer

function generoNumeroComputer(){

    let numeroComputer;

    numeroComputer = Math.round(Math.random() * 4) + 1;

    return numeroComputer;

}

generoNumeroComputer();

let numeroPc = generoNumeroComputer();
console.log('Questo è il numero pc ' + numeroPc);

// sommo i due numeri 

 let numeroFinale =  numeroUtente + numeroPc;
 console.log('Questo è il numero sommato ' + numeroFinale);

 // funzione per stabilire se il numero è pari o dispari

 function checkPariDispari(check){

    if (check % 2 !== 0){

         return 'dispari';

     } else {

         return 'pari';

     }
 }

 checkPariDispari(numeroFinale);

let risultato = checkPariDispari(numeroFinale);

console.log('La somma ha valore ' + risultato);

 // stabiliamo chi ha vinto

 if (pariDispari === risultato){
     alert(`L'utente ha scelto ${pariDispari}, il numero inserito è ${numeroUtente}, il numero del computer è ${numeroPc}, la somma è ${numeroFinale} e ha valore ${risultato}, per cui l'utente vince!`)
 } else {
     alert(`L'utente ha scelto ${pariDispari}, il numero inserito è ${numeroUtente}, il numero del computer è ${numeroPc}, la somma è ${numeroFinale} e ha valore ${risultato}, per cui l'utente ha perso!`)
 }

