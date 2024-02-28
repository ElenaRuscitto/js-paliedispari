// PALINDROMA

// const wordUser = prompt('Scrivi una parola');
const wordUser = document.getElementById('parola-inserire');
const btn = document.querySelector('.btn');



btn.addEventListener('click', function(){
  const parolaInserita = wordUser.value;
  palindroma (parolaInserita);
})

// METODO A: charAt
// function palindroma(word) {

//     for (let i = word.length; i > 0; i-- ) {
        
//         if (word[i] = word.charAt(word.length)-1 ){
//             // stampo la risposta se è vera
//             document.getElementById('output1').innerHTML = 'La parola che hai inserito è palindroma';

//         } else{

//           document.getElementById('output1').innerHTML = 'La parola che hai inserito NON è palindroma';
//         }
//     }
// }





// METODO B: KISS
function palindroma(word) {

  // divido la parola scritta dall'utente viene divisa / 2, in caso viene arrotondata per eccesso
  const lunghezzaParola = Math.floor(word.length / 2);

    for (var i = 0; i < lunghezzaParola; i++) {

       if (word[i] !== word[word.length - i - 1]) {

        // stampo la risposta 
        document.getElementById('output1').innerHTML = 'La parola che hai inserito NON è palindroma';

      } else {
       // stampo la risposta 
        document.getElementById('output1').innerHTML = 'La parola che hai inserito è palindroma';
      }
    } 
}


///////////// GIOCO PARI E DISPARI ///////////////////////////////////////////////////////////////
const pariDispariUtente = document.getElementById('pariDispariUtente');
const numberUser = document.getElementById('numero-utente');
const btn2 = document.querySelector('.btn2');



btn2.addEventListener('click', function() {

  const numberUserValue = parseInt(numberUser.value);
  const pariDispariUtenteValue = pariDispariUtente.value;
  const pc = numeriRandom();
  const sommaCalcolata = pc + numberUserValue;


  if((numberUserValue < 1) || (numberUserValue > 5)){
    alert('Attenzione!! il numero inserito non è valido');

  } else {


    document.getElementById('numero-pc').innerHTML = `il computer ha giocato il numero: ` + pc;
    document.getElementById('output2').innerHTML = sommaCalcolata;
    const output3 =  document.getElementById('output3');
  
  
    esito(sommaCalcolata, pariDispariUtenteValue, output3);
  
  }

 
  console.log(sommaCalcolata);
}) 



function numeriRandom () {
  const numRandom = Math.ceil(Math.random() * 5); 

  console.log(numRandom);
  return numRandom

}



function esito(sommaC, pduv, out ) {

  if(sommaC % 2 === 0 && pduv === 'pari'){
    out.innerHTML = 'Vince il giocatore'

  }else if(sommaC % 2 !== 0 && pduv === 'dispari'){
    out.innerHTML = 'Vince il giocatore'

  }else{
    out.innerHTML = 'Vince il pc'
  }
}




