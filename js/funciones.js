const pPromedio = document.getElementById("mostrarPromedio");
const pNotaMayor = document.getElementById("mostrarMayorNota");

function CalcularPromedio(event) {
    event.preventDefault(); 
    
    let notaMatematica = document.getElementById("notaMatematica").value;
    let notaLengua = document.getElementById("notaLengua").value;
    let notaEfsi = document.getElementById("notaEfsi").value;

    if (VerificarCamposCompletos(notaMatematica, notaLengua, notaEfsi) && VerificarCamposValidos()) {
        notaMatematica = parseFloat(notaMatematica);
        notaEfsi = parseFloat(notaEfsi);
        notaLengua = parseFloat(notaLengua);
        var promedio = (notaMatematica + notaLengua + notaEfsi) / 3;
        pPromedio.innerHTML = "El promedio de notas es de " + promedio;
        pPromedio.style.color = promedio < 6 ? "red" : "green";
    }
}

function NotaMasAlta(event) {
    event.preventDefault();
    let notaMatematica = document.getElementById("notaMatematica").value;
    let notaLengua = document.getElementById("notaLengua").value;
    let notaEfsi = document.getElementById("notaEfsi").value;


    if (VerificarCamposCompletos(notaMatematica, notaLengua, notaEfsi) && VerificarCamposValidos()) {
        pNotaMayor.innerHTML = "La/s materia/s en las que obtuvo la nota más alta es/son ";
        notaMatematica = parseFloat(notaMatematica);
        notaEfsi = parseFloat(notaEfsi);
        notaLengua = parseFloat(notaLengua);
        let notaMasAlta = Math.max(notaMatematica, notaLengua, notaEfsi);
        if (notaMatematica === notaMasAlta) {
            pNotaMayor.innerHTML += "matemática";
        }
        if (notaLengua === notaMasAlta) {
            pNotaMayor.innerHTML += " lengua";
        }
        if (notaEfsi === notaMasAlta) {
            pNotaMayor.innerHTML += " EFSI";
        }
        pNotaMayor.style.color = "blue";
    }
}


function VerificarCamposCompletos(notaMatematica, notaLengua, notaEfsi) {
    let ret = false;
   
    if (notaMatematica != "" && notaLengua != "" && notaEfsi != "") {
        ret = true;
    } else {
        alert("Los campos son obligatorios");
    }
    return ret;
}

function VerificarCamposValidos(){
    let ret = false;
    if( VerificarMatematica() && VerificarLengua() && VerificarEFSI()){
        ret = true;
        
    }else{
        alert("Las notas tienen que tener un valor entre el 1 y el 10");
    }
    return ret;
}

function VerificarCampoValido(notaElement) {
    let ret = false;
    let nota = parseFloat(notaElement.value);
    if (nota >= 1 && nota <= 10) {
        notaElement.style.color = "green";
        ret = true;
    } else {
        notaElement.style.color = "red";
    }
    return ret;
}

function VerificarMatematica() {
    let nota = document.getElementById("notaMatematica");
    return VerificarCampoValido(nota);
}

function VerificarLengua() {
    let nota = document.getElementById("notaLengua");
    return VerificarCampoValido(nota);
}

function VerificarEFSI() {
    let nota = document.getElementById("notaEfsi");
    return VerificarCampoValido(nota);
}


