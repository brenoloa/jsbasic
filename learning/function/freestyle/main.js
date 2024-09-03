function calcularSoma() {
    // Obter os valores dos campos de entrada
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    
    // Verificar se os valores são números válidos
    if (isNaN(valor1) || isNaN(valor2)) {
        alert('Por favor, insira números válidos em ambos os campos.');
        return;
    }
    
    // Calcular a soma
    var soma = valor1 + valor2;
    
    // Exibir o resultado
    document.getElementById('resultado').innerText = 'Resultado: ' + soma;
}