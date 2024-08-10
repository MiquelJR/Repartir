let printar_cinc = "";
let dreta_cinc;

function calcular_cinc() {
    console.log('Función calcular_cinc iniciada');

    // Obtener los valores de los inputs
    var curts = parseFloat(document.getElementById('numero3').value);
    var llargs = parseFloat(document.getElementById('numero4').value);

    console.log('Número de Curts:', curts);
    console.log('Número de Llargs:', llargs);

    // Verificar que los valores no estén vacíos
    if (isNaN(curts) || isNaN(llargs)) {
        document.getElementById('resultado2').innerText = 'Si us plau, ingressa els dos tiratges.';
        return;
    }

    // Resetear la variable printar para nuevos cálculos
    printar_cinc = "";

    // Repartir la sardana si los curts y los llargs son impares
    primera_segona_de_cinc(curts);
    tercera_quarta_de_cinc(llargs);
    cinquena_de_cinc(llargs);

    // Mostrar el resultado en la página
    document.getElementById('resultado2').innerText = printar_cinc;
}

function primera_segona_de_cinc(curts) {
    console.log('Función primera_segona_de_cinc iniciada');

    var moment = curts - 3;
    if ((moment + curts + 1) % 4 === 0) {
        dreta_cinc = false;
        printar_cinc += "Primera tirada: Comptar " + curts + " .\nSegona tirada: Comptar " + moment + " i dir Un DOS (esquerra) .";
    } else {
        dreta_cinc = true;
        printar_cinc += "Primera tirada: Comptar " + curts + " .\nSegona tirada: Comptar " + moment + " i dir Un DOS (dreta) .";
    }
}

function tercera_quarta_de_cinc(llargs) {
    console.log('Función tercera_quarta_de_cinc iniciada');

    var moment;
    var moment_actual;

    printar_cinc += "\nTercera tirada: Comptar " + llargs + " .";

    if (llargs % 2 === 0) {
        moment = llargs - 5;
        moment_actual = moment;
        if (dreta_cinc === false) {
            moment_actual += 4;
        }
        if ((moment_actual + llargs + 1) % 8 === 0) {
            printar_cinc += "\nQuarta tirada: Comptar " + moment + " i dir Un QUATRE (esquerra) .";
            dreta_cinc = false;
        } else {
            printar_cinc += "\nQuarta tirada: Comptar " + moment + " i dir Un QUATRE (dreta) .";
            dreta_cinc = true;
        }
    } else {
        moment = llargs - 3;
        moment_actual = moment;
        if (dreta_cinc === false) {
            moment_actual += 4;
        }
        if ((moment_actual + llargs + 1) % 8 === 0) {
            printar_cinc += "\nQuarta tirada: Comptar " + moment + " i dir Un DOS (esquerra) .";
            dreta_cinc = false;
        } else {
            printar_cinc += "\nQuarta tirada: Comptar " + moment + " i dir Un DOS (dreta) .";
            dreta_cinc = true;
        }
    }
}

function cinquena_de_cinc(llargs) {
    console.log('Función cinquena_de_cinc iniciada');

    var moment = llargs - 10;
    var moment_actual;

    if (llargs % 2 === 0) {
        if (moment % 8 === 0) {
            moment_actual = llargs - 3;
            printar_cinc += "\nCinquena tirada: Comptar " + moment_actual + " i dir Un DOS (esquerra) .";
        } else if (moment % 8 === 2) {
            moment_actual = llargs - 5;
            printar_cinc += "\nCinquena tirada: Comptar " + moment_actual + " i dir Un QUATRE (esquerra) .";
        } else if (moment % 8 === 4) {
            moment_actual = llargs - 5;
            printar_cinc += "\nCinquena tirada: Comptar " + moment_actual + " i dir Dos DOSSOS i Un DOS (esquerra) .";
        } else {
            moment_actual = llargs - 4;
            printar_cinc += "\nCinquena tirada: Comptar " + moment_actual + " i dir Un DOSSOS i Un DOS (esquerra) .";
        }
    } else {
        if (moment % 8 === 1) {
            moment_actual = llargs - 4;
            printar_cinc += "\nCinquena tirada: Comptar " + moment_actual + " i dir Un TRES (esquerra) .";
        } else if (moment % 8 === 3) {
            moment_actual = llargs - 10;
            printar_cinc += "\nCinquena tirada: Comptar " + moment_actual + " i dir Tres DOSSOS i Un TRES (esquerra) .";
        } else if (moment % 8 === 5) {
            moment_actual = llargs - 3;
            printar_cinc += "\nCinquena tirada: Comptar " + moment_actual + " i dir dos DOSSOS i un TRES (esquerra) .";
        } else {
            moment_actual = llargs - 4;
            printar_cinc += "\nCinquena tirada: Comptar " + moment_actual + " i dir un DOSSOS i un TRES (esquerra) .";
        }
    }
}
