function calcular_pares(){
    let num4 = parseInt(document.getElementById("num4").value);
    let pares = [];
   
    for (let i = 0; i <= num4 + 1; i += 2){
        //pares[i] = i;
        //ta aparecendo 2 virgulas assim entao é melhor usar push
        pares.push(i);

      
       
    }
    document.getElementById("tela9").innerHTML = pares;
}