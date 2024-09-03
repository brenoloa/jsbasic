function contagemREGRESSIVA(numero){
    let resultados = [];
    for (let i = 0; i < numero + 1; i++){
        resultados[i] = (numero - i);
        
    }
    return resultados;
}   

console.log(contagemREGRESSIVA(5));