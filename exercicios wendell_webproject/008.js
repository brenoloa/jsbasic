function calcular_soma(){
    let num3 = parseInt(document.getElementById("num3").value);
    let soma = 0;

    for (let i = 1; i <= num3; i++){
        soma += i;

    }
    document.getElementById("tela8").innerHTML = soma;
}