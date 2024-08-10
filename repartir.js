let printar = "";
let dreta;

function calcular() {
    console.log('Función calcular iniciada');

    // Obtener los valores de los inputs
    var curts = parseFloat(document.getElementById('numero5').value);
    var llargs = parseFloat(document.getElementById('numero6').value);

    console.log('Número de Curts:', curts);
    console.log('Número de Llargs:', llargs);

    // Verificar que los valores no estén vacíos
    if (isNaN(curts) || isNaN(llargs)) {
        document.getElementById('resultado3').innerText = 'Si us plau, ingresa els dos tiratges.';
        return;
    }

    // Resetear la variable printar para nuevos cálculos
    printar = "";

    // Repartir la sardana si los curts y los llargs son impares
    primera_segona(curts);
    tercera_quarta(llargs);
    cinquena(curts);
    sisena(llargs);
    setena(llargs);

    // Mostrar el resultado en la página
    document.getElementById('resultado3').innerText = printar;
}


function primera_segona(curts) {
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

function tercera_quarta(llargs) {
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

function cinquena(curts) {
    console.log('Función cinquena iniciada');

    var moment;
    var moment_actual;

    if (curts % 2 === 0) {
        moment = curts - 3;
        moment_actual = moment;
        if (dreta === false) {
            moment_actual += 2;
        }

        if ((moment_actual + 1) % 4 === 0) {
            printar += "\n Cinquena tirada: Comptar " + moment + " i dir Un DOS (esquerra) .";
            dreta = false;
        } else {
            printar += "\n Cinquena tirada: Comptar " + moment + " i dir Un DOS (dreta) .";
            dreta = true;
        }

    } else {
        moment = curts - 4;
        moment_actual = moment;
        if (dreta === false) {
            moment_actual += 2;
        }

        if ((moment_actual + 1) % 4 === 0) {
            printar += "\n Cinquena tirada: Comptar " + moment + " i dir Un TRES (esquerra) .";
            dreta = false;
        } else {
            printar += "\n Cinquena tirada: Comptar " + moment + " i dir Un TRES (dreta) .";
            dreta = true;
        }
    }
}

function sisena(llargs) {
    console.log('Función sisena iniciada');

    var moment;
    var moment_actual;
    var llargs_copy = llargs;

    moment = llargs - 10;

    if(dreta === false){
        if(llargs_copy % 2 === 0){
            if(moment % 8 === 0){
                moment_actual = llargs - 5;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir Dos DOSSOS i Un DOS (esquerra) .";
            }else if (moment % 8 === 2) {
                moment_actual = llargs - 4;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir Un DOSSOS i Un DOS (esquerra) .";
            } else if (moment % 8 === 4) {
                moment_actual = llargs - 3;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir Un DOS (esquerra) .";
            } else {
                moment_actual = llargs - 5;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir Un QUATRE (esquerra) .";
            }
        }else{
            if ((moment) % 8 === 1) {
                moment_actual = llargs - 3;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir dos DOSSOS i un TRES (esquerra) .";
            } else if ((moment) % 8 === 3) {
                moment_actual = llargs - 4;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir un DOSSOS i un TRES (esquerra) .";
            } else if ((moment) % 8 === 5) {
                moment_actual = llargs - 4;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir Un TRES (esquerra) .";
            } else {
                moment_actual = llargs - 10;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir Tres DOSSOS i Un TRES (esquerra) .";
            }
        }
    }else{
        if(llargs_copy % 2 === 0){
            if(moment % 8 === 0){
                moment_actual = llargs - 3;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir Un DOS (esquerra) .";
            }else if (moment % 8 === 2) {
                moment_actual = llargs - 5;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir Un QUATRE (esquerra) .";
            } else if (moment % 8 === 4) {
                moment_actual = llargs - 5;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir Dos DOSSOS i Un DOS (esquerra) .";
            } else {
             moment_actual = llargs - 4;
             printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir Un DOSSOS i Un DOS (esquerra) .";
            }
        }else{
            if ((moment) % 8 === 1) {
                moment_actual = llargs - 4;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir Un TRES (esquerra) .";
            } else if ((moment) % 8 === 3) {
                moment_actual = llargs - 10;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir Tres DOSSOS i Un TRES (esquerra) .";
            } else if ((moment) % 8 === 5) {
                moment_actual = llargs - 3;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir dos DOSSOS i un TRES (esquerra) .";
            } else {
                moment_actual = llargs - 4;
                printar += "\n Sisena tirada: Comptar " + moment_actual + " i dir un DOSSOS i un TRES (esquerra) .";
            }
        }
    }
}

function setena(llargs) {
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
