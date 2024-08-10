let printar_quatre = "";
let dreta_quatre;

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
    printar_quatre = "";

    // Repartir la sardana si los curts y los llargs son impares
    primera_segona_de_quatre(curts);
    tercera_quarta_de_quatre(llargs);

    // Mostrar el resultado en la página
    document.getElementById('resultado1').innerText = printar_quatre;
}

function primera_segona_de_quatre(curts) {
    console.log('Función primera_segona_de_quatre iniciada');

    var moment = curts - 3;
    if ((moment + curts + 1) % 4 === 0) {
        dreta_quatre = false;
        printar_quatre += "Primera tirada: Comptar " + curts + " .\nSegona tirada: Comptar " + moment + " i dir Un DOS (esquerra) .";
    } else {
        dreta_quatre = true;
        printar_quatre += "Primera tirada: Comptar " + curts + " .\nSegona tirada: Comptar " + moment + " i dir Un DOS (dreta) .";
    }
}

function tercera_quarta_de_quatre(llargs) {
    console.log('Función tercera_quarta_de_quatre iniciada');

    var moment;
    var moment_actual;

    printar_quatre += "\nTercera tirada: Comptar " + llargs + " .";

    if (llargs % 2 === 0) {
        moment = llargs - 5;
        moment_actual = moment;
        if (dreta_quatre === false) {
            moment_actual += 4;
        }
        if ((moment_actual + llargs + 1) % 8 === 0) {
        if (dreta_quatre === false) {
            printar_quatre += "\nQuarta tirada: Comptar " + moment + " i dir Un QUATRE (esquerra) .";
        if (dreta_quatre === false) {
            dreta_quatre = false;
        } else {
            printar_quatre += "\nQuarta tirada: Comptar " + moment + " i dir Un QUATRE (dreta) .";
            dreta_quatre = true;
        }
    } else {
        moment = llargs - 3;
        moment_actual = moment;
        if (dreta_quatre === false) {
            moment_actual += 4;
        }
        if ((moment_actual + llargs + 1) % 8 === 0) {
            printar_quatre += "\nQuarta tirada: Comptar " + moment + " i dir Un DOS (esquerra) .";
            dreta_quatre = false;
        } else {
            printar_quatre += "\nQuarta tirada: Comptar " + moment + " i dir Un DOS (dreta) .";
            dreta_quatre = true;
        }
    }
}
