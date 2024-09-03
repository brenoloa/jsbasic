let preco = 100;
let tipo_cliente = "membro";
let preco_final = 0;


function calcular(preco, tipo_cliente){
    if (tipo_cliente == "membro"){
        preco_final = preco - (preco * 0,10);
        return preco_final;
    }
    else {
        preco_final = preco;
        return preco_final;
    }
}

console.log(calcular(preco, tipo_cliente));