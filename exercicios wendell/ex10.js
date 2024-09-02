function FATORIAL(n){
    let fat = 1;
    for (let i = 1; i <= n; i++){
        fat *= i;
    }
    return fat;
}

console.log(FATORIAL(5));