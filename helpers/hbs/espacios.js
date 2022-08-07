const espacioVacios = function(filas){
    valido = false;
    if(filas === undefined|| filas === null|| filas=== " "){
        valido = true
    }
    return valido;
}


exports.espacioVacios = espacioVacios;