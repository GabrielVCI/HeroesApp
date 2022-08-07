const validacion = function(lista){
    valido = false;
    if(lista === undefined|| lista === null|| lista=== ""){
        valido = true
    }
    return valido;
}


exports.validacion = validacion;