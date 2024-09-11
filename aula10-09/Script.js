function mais(){
    let resultado;
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    resultado = n1 + n2;

    document.getElementById("resultado").value = resultado;
}    
function menos(){
    let resultado;
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    resultado = n1 - n2;

    document.getElementById("resultado").value = resultado;
}   
function mult(){
    let resultado;
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    resultado = n1 * n2;

    document.getElementById("resultado").value = resultado;
}     
function div(){
    let resultado;
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    resultado = n1 / n2;

    document.getElementById("resultado").value = resultado;
}    

function limpar(){
    document.getElementById("resultado").value = "";
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}