function calcular_desconto(){
    let tipo_cliente = document.getElementById("tipo_cliente").value;
    let valor = parseFloat(document.getElementById("valor").value)
    
    let novo_valor;
   
    
    if (tipo_cliente == "membro" || tipo_cliente == "MEMBRO"){
        novo_valor = valor - (valor * 0.10)

    }
    else {
        novo_valor = valor;
    }

    document.getElementById("tela").innerHTML = novo_valor;
}