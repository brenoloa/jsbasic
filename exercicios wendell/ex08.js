function somaNUMEROS(n){
    let soma = 0;
    let i = 1;

    while (i <= n) {
        soma += i;
        i++
    }
    return soma;
}


console.log(somaNUMEROS(4));
