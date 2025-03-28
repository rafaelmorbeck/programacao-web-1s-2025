let n;

function verificarNumeroPrimo(n){
    if (n%2 !==0 && n%3 !== 0 && n !== 1|| n == 2 || n ==3){
        return true;
    }
    else{
        return false;
    }
}

console.log(verificarNumeroPrimo(n));