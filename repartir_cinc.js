let printar = "";
let dreta;

function calcular_cinc() {
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
    cinquena_de_cinc(curts);

    // Mostrar el resultado en la página
    document.getElementById('resultado').innerText = printar;
}
function cinquena_de_cinc(llargs) {
    console.log('Función setena iniciada');

    var  moment = llargs - 10;
    var moment_actual;

    if (llargs % 2 === 0) {

        if ((moment) % 8 === 0) {
            moment_actual = llargs - 3;
            printar += "\n Setena tirada: Comptar " + moment_actual + " i dir Un DOS (esquerra) .";
        } else if ((moment) % 8 === 2) {
            moment_actual = llargs - 5;
            printar += "\n Setena tirada: Comptar " + moment_actual + " i dir Un QUATRE (esquerra) .";
        } else if ((moment) % 8 === 4) {
            moment_actual = llargs - 5;
            printar += "\n Setena tirada: Comptar " + moment_actual + " i dir Dos DOSSOS i Un DOS (esquerra) .";
        } else {
            moment_actual = llargs - 4;
            printar += "\n Setena tirada: Comptar " + moment_actual + " i dir Un DOSSOS i Un DOS (esquerra) .";
        }

    } else {
        // Continuar con el cálculo para el caso en que llargs es impar
        if (moment % 8 === 1) {
            moment_actual = llargs - 4;
            printar += "\n Setena tirada: Comptar " + moment_actual + " i dir Un TRES (esquerra) .";
        } else if (moment % 8 === 3) {
            moment_actual = llargs - 10;
            printar += "\n Setena tirada: Comptar " + moment_actual + " i dir Tres DOSSOS i Un TRES (esquerra) .";
        } else if (moment % 8 === 5) {
            moment_actual = llargs - 3;
            printar += "\n Setena tirada: Comptar " + moment_actual + " i dir dos DOSSOS i un TRES (esquerra) .";
        } else {
            moment_actual = llargs - 4;
            printar += "\n Setena tirada: Comptar " + moment_actual + " i dir un DOSSOS i un TRES (esquerra) .";
        }
    }
}