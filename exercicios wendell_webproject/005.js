function calcular_temp(){
    let temp = parseInt(document.getElementById("temp").value);

    if (temp <= 15){
        document.getElementById("tela5").innerHTML = "FRIO";
    }
    else if (temp <= 25){
        document.getElementById("tela5").innerHTML = "AGRADAVEL";
    }
    else {
        document.getElementById("tela5").innerHTML = "QUENTE";
    }
}