function calcular_tabuada(){
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado_display = '';
    for (let i = 1; i <= 10; i++){
        let resultado = num2 * i;
         resultado_display += num2 + " x " + i + " = " + resultado + "<br>";
    }
    document.getElementById("tela7").innerHTML = resultado_display;
}