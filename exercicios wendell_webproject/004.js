function calcular_frete(){
    
    let peso = parseFloat(document.getElementById("peso").value);
    if (peso <= 5){
        document.getElementById("tela4").innerHTML = "R$20,00 de frete.";
    }
    else if (peso <= 20){
        document.getElementById("tela4").innerHTML = "R$50,00 de frete.";

    }
    else {
        document.getElementById("tela4").innerHTML = "R$100,00 de frete.";
    }
}