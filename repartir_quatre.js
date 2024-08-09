let printar = "";
let dreta;

function calcular_quatre() {
    console.log('Función calcular_quatre iniciada');

    // Obtener los valores de los inputs
    var curts = parseFloat(document.getElementById('numero1').value);
    var llargs = parseFloat(document.getElementById('numero2').value);

    console.log('Número de Curts:', curts);
    console.log('Número de Llargs:', llargs);

    // Verificar que los valores no estén vacíos
    if (isNaN(curts) || isNaN(llargs)) {
        document.getElementById('resultado1').innerText = 'Por favor, ingrese ambos números.';
        return;
    }

    // Resetear la variable printar para nuevos cálculos
    printar = "";

    // Repartir la sardana si los curts y los llargs son impares
    primera_segona_de_quatre(curts);
    tercera_quarta_de_quatre(llargs);

    // Mostrar el resultado en la página
    document.getElementById('resultado1').innerText = printar;
}

function primera_segona_de_quatre(curts) {
    console.log('Función primera_segona iniciada');

    var moment = curts - 3;
    if ((moment + curts + 1) % 4 === 0) {
        dreta = false;
        printar += "\n Primera tirada: Comptar " + curts + " .\n Segona tirada: Comptar " + moment + " i dir Un DOS (esquerra) .";
    } else {
        dreta = true;
        printar += "\n Primera tirada: Comptar " + curts + " .\n Segona tirada: Comptar " + moment + " i dir Un DOS (dreta) .";
    }
}

function tercera_quarta_de_quatre(llargs) {
    console.log('Función tercera_quarta iniciada');

    var moment;
    var moment_actual;

    printar += "\n Tercera tirada: Comptar " + llargs + " .";

    if (llargs % 2 === 0) {
        moment = llargs - 5;
        moment_actual = moment;
        if (dreta === false) {
            moment_actual += 4;
        }
        if ((moment_actual + llargs + 1) % 8 === 0) {
            printar += "\n Quarta tirada: Comptar " + moment + " i dir Un QUATRE (esquerra) .";
            dreta = false;
        } else {
            printar += "\n Quarta tirada: Comptar " + moment + " i dir Un QUATRE (dreta) .";
            dreta = true;
        }

    } else {
        moment = llargs - 3;
        moment_actual = moment;
        if (dreta === false) {
            moment_actual += 4;
        }
        if ((moment_actual + llargs + 1) % 8 === 0) {
            printar += "\n Quarta tirada: Comptar " + moment + " i dir Un DOS (esquerra) .";
            dreta = false;
        } else {
            printar += "\n Quarta tirada: Comptar " + moment + " i dir Un DOS (dreta) .";
            dreta = true;
        }
    }
}