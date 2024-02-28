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



