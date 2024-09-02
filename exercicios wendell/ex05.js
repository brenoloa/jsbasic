function classificarTEMPERATURA(temp){
    if (temp <= 15){
        return "FRIO";
    }
    else if (temp <= 25){
        return "AGRADAVEL";
    }
    else {
        return "QUENTE.";
    }
}

console.log(classificarTEMPERATURA(22));