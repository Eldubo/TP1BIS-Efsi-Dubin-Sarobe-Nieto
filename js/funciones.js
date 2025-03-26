const pPromedio = document.getElementById("mostrarPromedio");
const pNotaMayor = document.getElementById("mostrarMayorNota");

function CalcularPromedio(evento) {
    evento.preventDefault();
    console.log("Entra a la función");
    let notaMatematica = parseFloat(document.getElementById("notaMatematica").value);
    let notaLengua = parseFloat(document.getElementById("notaLengua").value);
    let notaEfsi = parseFloat(document.getElementById("notaEfsi").value);

    if (VerificarCamposCompletos(notaMatematica, notaLengua, notaEfsi) && VerificarCamposValidos()) {
        console.log("entra");
        var promedio = (notaMatematica + notaLengua + notaEfsi) / 3;
        alert(promedio)
        pPromedio.innerHTML = "El promedio de notas es de " + promedio;
        pPromedio.style.color = promedio < 6 ? "red" : "green";
    }
}



function NotaMasAlta(evento) {
    evento.preventDefault();
    console.log("Entra a la función");
    let notaMatematica = parseFloat(document.getElementById("notaMatematica").value);
    let notaLengua = parseFloat(document.getElementById("notaLengua").value);
    let notaEfsi = parseFloat(document.getElementById("notaEfsi").value);

    pNotaMayor.innerHTML = "La/s materia/s en las que obtuvo la nota más alta es/son ";
    
    if (VerificarCamposCompletos(notaMatematica, notaLengua, notaEfsi) && VerificarCamposValidos()) {
        let notaMasAlta = Math.max(notaMatematica, notaLengua, notaEfsi);
        if (notaMatematica === notaMasAlta) {
            pNotaMayor.innerHTML += "matemática";
        }
        if (notaLengua === notaMasAlta) {
            pNotaMayor.innerHTML += ", lengua";
        }
        if (notaEfsi === notaMasAlta) {
            pNotaMayor.innerHTML += ", EFSI";
        }
        pNotaMayor.style.color = "blue";
    }
}

function VerificarCamposCompletos(notaMatematica, notaLengua, notaEfsi) {
    if (notaMatematica != null && notaLengua != null && notaEfsi != null) {
        return true;
    } else {
        alert("Los campos son obligatorios");
        return false;
    }
}

function VerificarCampoValido(notaElement) {
    let nota = parseFloat(notaElement.value);
    if (ValidarNota(nota)) {
        notaElement.style.color = "green";
        return true;
    } else {
        notaElement.style.color = "red";
        return false;
    }
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


function ValidarNota(nota) {
    return nota >= 1 && nota <= 10;
}
