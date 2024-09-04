function calcular_contagem(){
    let num1 = parseInt(document.getElementById("num1").value);
    let resultado = [];

    for (let i = num1; i >= 0; i--){
        resultado[num1 - i] = i;
    }
    document.getElementById("tela6").innerHTML = resultado;

}