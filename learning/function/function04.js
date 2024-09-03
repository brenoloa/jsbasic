let fatorial = function(n){
    var fat = 1;
    for(var i = 5; i > 1; i--){
        fat *= i;
    }
    return fat;
}

console.log(fatorial(5));