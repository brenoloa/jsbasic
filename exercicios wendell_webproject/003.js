function calcular_idade(){
    let idade = parseInt(document.getElementById("numero").value);

    if (idade < 18){
        document.getElementById("tela3").innerHTML = "MENOR DE IDADE";
    }
    else if (idade >= 65){
        document.getElementById("tela3").innerHTML = "IDOSO";
    }
    else {
        document.getElementById("tela3").innerHTML = "MAIOR DE IDADE";
    }
}