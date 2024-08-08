function calcular() {
    // Obtener los valores de los inputs
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    // Verificar que los valores no estén vacíos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = 'Por favor, ingrese ambos números.';
        return;
    }

    // Realizar alguna operación (suma en este caso)
    var suma = num1 + num2;

    // Mostrar el resultado en la página
    document.getElementById('resultado').innerText = 'La suma de ' + num1 + ' y ' + num2 + ' es: ' + suma;
}
