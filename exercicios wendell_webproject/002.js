function calcular_nota(){
    let nota = parseFloat(document.getElementById("nota").value);
    

    if (nota < 50){
        //reprovado
        document.getElementById("tela2").innerHTML = "REPROVADO";
    }
    else if (nota >= 70){
        //apro
        document.getElementById("tela2").innerHTML = "APROVADO";
    }
    else {
        //recu
        document.getElementById("tela2").innerHTML = "RECUPERAÇÃO!";
    }
}