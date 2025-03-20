const expresionValidaNums = /^[0-9]*$/;


function CalcularPormedio() {
    let notaMatematica = document.getElementById("notaMatematica").value;
    let notaLengua = document.getElementById("notaLengua").value;
    let notaEfsi = document.getElementById("notaEfsi").value;
    if(VerificarCamposCompletos(notaMatematica, notaLengua, notaEfsi)){
        var promedio = (notaMatematica + notaLengua + notaEfsi) / 3;
    }
}

function NotaMasAlta() {
    let notaMatematica = document.getElementById("notaMatematica").value;
    let notaLengua = document.getElementById("notaLengua").value;
    let notaEfsi = document.getElementById("notaEfsi").value;
    if(VerificarCamposCompletos(notaMatematica, notaLengua, notaEfsi)){
        let notaMasAlta = null
        notaMasAlta = Math.max(notaMatematica, notaLengua, notaEfsi)-
     /*  if(notaMatematica > notaLengua && notaMatematica > notaEfsi){
           notaMasAlta = notaMatematica
        }
        else if (notaLengua > notaMatematica && notaLengua > notaEfsi){
            notaMasAlta = notaLengua
        }
        else if(notaEfsi > notaLengua && notaEfsi > notaMatematica){
            notaMasAlta = notaEfsi
        }
        else {
            notaMasAlta = "Hay 2 o mas materias con la misma nota"
        }*/
    }
}

VerificarCamposCompletos(notaMatematica, notaLengua, notaEfsi);{
    let ret = false;
    expresionValidaNums.test(notaMatematica) && expresionValidaNums.test(notaLengua) && expresionValidaNums.test(notaEfsi) ? ret = true : alert("Faltan completar campos");
    return ret;
}