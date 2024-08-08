function calcular() {
    // Obtener los valores de los inputs
    var curts = parseFloat(document.getElementById('numero1').value);
    var llargs = parseFloat(document.getElementById('numero2').value);
    let printar;
    var dreta;

    // Verificar que los valores no estén vacíos
    if (isNaN(curts) || isNaN(llargs)) {
        document.getElementById('resultado').innerText = 'Por favor, ingrese ambos números.';
        return;
    }

    // Repartir la sardana si els curts son imparells i els llargs tambe
    primera_segona();
    tercera_quarta();
    cinquena();
    sisena();
    setena();

    // Mostrar el resultado en la página
    document.getElementById('resultado').innerText = printar;
}


function primera_segona(){
    var moment = curts - 3;

    if((moment + curts) % 4 === 0){
        dreta = false;
        printar = printar + "\n Primera tirada: Comptar " + curts + " ." + "\n Segona tirada: Comptar " + moment + " i  dir Un DOS (esquerra) ."
    }else{
        dreta = true;
        printar = printar + "\n Primera tirada: Comptar " + curts + " ." + "\n Segona tirada: Comptar " + moment + " i  dir Un DOS (dreta) ."
    }
}

function tercera_quarta(){
    var moment;
    var moment_actual;

    printar = printar + "\n Tercera tirada: Comptar " + llargs + " ."

    if(llargs % 2 === 0){
        moment = llargs - 5;
        moment_actual = moment;
        if(dreta === false){
            moment_actual += 4;
        }
        if((moment_actual + llargs) % 8 === 0){
            printar = printar + "\n Quarta tirada: Comptar " + moment + " i dir Un QUATRE (esquerra) .";
            dreta = false;
        }else{
            printar = printar + "\n Quarta tirada: Comptar " + moment + " i dir Un QUATRE (dreta) .";
            dreta = true;
        }

    }else{
        moment = llargs - 3;
        moment_actual = moment;
        if(dreta === false){
            moment_actual += 4;
        }
        if((moment_actual + llargs) % 8 === 0){
            printar = printar + "\n Quarta tirada: Comptar " + moment + " i dir Un DOS (esquerra) .";
            dreta = false;
        }else{
           printar = printar + "\n Quarta tirada: Comptar " + moment + " i dir Un DOS (dreta) .";
            dreta = true;
        }
    }
}

function cinquena(){
    var moment;
    var moment_actual;

    if(curts % 2 === 0){
        moment = curts - 3;
        moment_actual = moment;
        if(dreta === false){
            moment_actual += 2;
        }

        if((moment_actual) % 4 === 0){
            printar = printar + "\n Cinquena tirada: Comptar " + moment + " i dir Un DOS (esquerra) ."
            dreta = false;
        }else{
            printar = printar + "\n Cinquena tirada: Comptar " + moment + " i dir Un DOS (dreta) ."
            dreta = true;
        }

    }else{
        moment = curts - 4;
        moment_actual = moment;
        if(dreta === false){
            moment_actual += 2;
        }

        if((moment_actual) % 4 === 0){
            printar = printar + "\n Cinquena tirada: Comptar " + moment + " i dir Un TRES (esquerra) ."
            dreta = false;
        }else{
            printar = printar + "\n Cinquena tirada: Comptar " + moment + " i dir Un TRES (dreta) ."
            dreta = true;
        }
    }
}

function sisena(){
    var moment;
    var moment_actual;

    if(llargs % 2 === 0){
        if(dreta === false){
            moment = llargs + 4 - 10;
        }else{
            moment = llargs - 10;
        }

        if(moment % 8 === 0){
            moment_actual = llargs - 3;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir Un DOS (esquerra) ."
        }else if(moment % 8  === 2){
            moment_actual = llargs - 5;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir Un QUATRE (esquerra) ."
        }else if(moment % 8 === 4){
            moment_actual = llargs - 5;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir Dos DOSSOS i Un DOS (esquerra) ."
        }else{
            moment_actual = llargs - 4;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir Un DOSSOS i Un DOS (esquerra) ."
        }

    }else{
        if(dreta === false){
            moment = llargs + 4 - 10;
        }else{
            moment = llargs - 10;
        }

        if(moment % 8 === 1){
            moment_actual = llargs - 4;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir Un TRES (esquerra) ."
        }else if(moment % 8  === 3){
            moment_actual = llargs - 10;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir Tres DOSSOS i Un TRES (esquerra) ."
        }else if(moment % 8 === 5){
            moment_actual = llargs - 3;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir dos DOSSOS i un TRES (esquerra) ."
        }else{
            moment_actual = llargs - 4;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir un DOSSOS i un TRES (esquerra) ."
        }
    }
}

function setena(){
    var moment;
    var moment_actual;

    if(llargs % 2 === 0){
        moment = llargs-10;

        if(moment % 8 === 0){
            moment_actual = llargs - 3;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir Un DOS (esquerra) ."
        }else if(moment % 8  === 2){
            moment_actual = llargs - 5;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir Un QUATRE (esquerra) ."
        }else if(moment % 8 === 4){
            moment_actual = llargs - 5;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir Dos DOSSOS i Un DOS (esquerra) ."
        }else{
            moment_actual = llargs - 4;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir Un DOSSOS i Un DOS (esquerra) ."
        }

    }else{
        moment=llargs-10;

        if(moment % 8 === 1){
            moment_actual = llargs - 4;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir Un TRES (esquerra) ."
        }else if(moment % 8  === 3){
            moment_actual = llargs - 10;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir Tres DOSSOS i Un TRES (esquerra) ."
        }else if(moment % 8 === 5){
            moment_actual = llargs - 3;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir dos DOSSOS i un TRES (esquerra) ."
        }else{
            moment_actual = llargs - 4;
            printar = printar + "\n Sisena tirada: Comptar " + moment_actual + " i dir un DOSSOS i un TRES (esquerra) ."
        }
    }
}
