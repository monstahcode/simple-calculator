var operandoa;
var operandob;
var operacion;

function init(){
    //Variables
    var resultado = document.getElementById("resultado");
    var suma = document.getElementById('suma');
    var cero = document.getElementById('cero');
    var reset = document.getElementById('reset');
    var igual = document.getElementById('igual');
    var resta = document.getElementById('resta');
    var tres = document.getElementById('tres');
    var dos = document.getElementById('dos');
    var uno = document.getElementById('uno');
    var multiplicacion = document.getElementById('multiplicacion');
    var seis = document.getElementById('seis');
    var cinco = document.getElementById('cinco');
    var cuatro = document.getElementById('cuatro');
    var division = document.getElementById('division');
    var nueve = document.getElementById('nueve');
    var ocho = document.getElementById('ocho');
    var siete = document.getElementById("siete");

    //Eventos
    //Pulsar
    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    }

    //Reset
    reset.onclick = function(e) {
        resetear();
    }
    
    //Suma
    suma.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }

    //Resta
    resta.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }

    //Multiplicacion
    multiplicacion.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }

    //Division
    division.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    //Igual
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }

}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){    
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
           break;

       case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }

    resetear();
        resultado.textContent = res;
}