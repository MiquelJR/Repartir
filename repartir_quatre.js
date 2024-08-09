let printar = "";
let dreta;

function calcular_quatre() {
    console.log('Función calcular iniciada');

    // Obtener los valores de los inputs
    var curts = parseFloat(document.getElementById('numero1').value);
    var llargs = parseFloat(document.getElementById('numero2').value);

    console.log('Número de Curts:', curts);
    console.log('Número de Llargs:', llargs);

    // Verificar que los valores no estén vacíos
    if (isNaN(curts) || isNaN(llargs)) {
        document.getElementById('resultado').innerText = 'Por favor, ingrese ambos números.';
        return;
    }

    // Resetear la variable printar para nuevos cálculos
    printar = "";

    // Repartir la sardana si los curts y los llargs son impares
    primera_segona(curts);
    tercera_quarta(llargs);

    // Mostrar el resultado en la página
    document.getElementById('resultado').innerText = printar;
}