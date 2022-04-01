/////////// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



function giraParola(){

    let parolaSplittata = parola.split('');
    let parolaRicomposta = '';

    for (let i = parolaSplittata.length - 1; i >= 0; i--){
        
        parolaRicomposta += parolaSplittata[i];
        
    }

    return parolaRicomposta;
    
}

let parola = prompt('Inserire una parola per verificare se è un palidromo');

giraParola(parola);

console.log(giraParola());

parolaDaConfrontare = giraParola();

if (parola === parolaDaConfrontare ){
    alert(`${parolaDaConfrontare} è un palidromo`);
} else {
    alert(`${parola} NON è un palidromo`);
}




