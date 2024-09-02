function contagemREGRESSIVA(numero){
    var resultados = [];
    for (var i = 0; i < numero + 1; i++){
        resultados.push(numero - i);
        
    }
    return resultados;
}   

console.log(contagemREGRESSIVA(5));