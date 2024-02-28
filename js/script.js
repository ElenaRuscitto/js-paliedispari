// PALINDROMA

// const wordUser = prompt('Scrivi una parola');
const wordUser = document.getElementById('parola-inserire');
const btn = document.querySelector('.btn');



btn.addEventListener('click', function(){
  const parolaInserita = wordUser.value;
  palindroma (parolaInserita);
})


function palindroma(word) {

    for( let i = word.length; i > 0; i-- ) {

        if( word[i] = word.charAt(word.length)-1 ){

            document.getElementById('output1').innerHTML = 'La parola che hai inserito è palindroma';

        } else{

          document.getElementById('output1').innerHTML = 'La parola che hai inserito NON è palindroma';
        }
    }
}
