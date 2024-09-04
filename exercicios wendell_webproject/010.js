function calcular_fat(){
    let num5 = parseInt(document.getElementById("num5").value);
    let fat = 1;
    for (let i = 1; i <= num5; i++){
        fat *= i;

    }
    document.getElementById("tela10").innerHTML = fat;
}