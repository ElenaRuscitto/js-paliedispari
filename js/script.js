// PALINDROMA

const wordUser = prompt('Scrivi una parola');

function palindroma(string);
{

    for( let i = wordUser.length; i > 0; i-- ) {

        if( wordUser[i] = wordUser.charAt(wordUser.length)-1 ){

            document.getElementById('output1').innerHTML = 'La parola che hai inserito è palindroma';

        } else{

          document.getElementById('output1').innerHTML = 'La parola che hai inserito NON è palindroma';
        }
    }
}
palindroma('wordUser');
console.log(palindroma(wordUser));