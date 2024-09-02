function verificarIDADE(idade){
    if (idade < 18){
        return "MENOR DE IDADE";
    }
    else if (idade >= 65){
        return "IDOSO";
    }
    else {
        return "MAIOR DE IDADE";
    }
}

console.log(verificarIDADE(67))