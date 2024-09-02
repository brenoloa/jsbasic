
function classificarNota(nota){
    if (nota >= 70){
        return "APROVADO.";
    }
    else if (nota >= 50){
    return "RECUPERAÇÃO.";
    }
    else if (nota < 50){
        return "REPROVADO.";
    }

}

console.log(classificarNota(65));