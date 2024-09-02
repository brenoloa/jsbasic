function calcularFrete(peso){
    if (peso <= 5){
        return "20 REAIS.";
    }

    else if (peso <= 20){
        return "50 REAIS";
    }
    else {
        return "100 REAIS.";
    }
}

console.log(calcularFrete(12));