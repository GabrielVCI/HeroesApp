//Con esta funcion vamos a verificar si el numero esta verificado o no
const OMColor = function(value){
    let isValid = false;
    const colorg = ["OtroMetales"];

    colorg.forEach(function(elem){

        if(value === elem){
            isValid = true;
        }
    })
    return isValid;
}

exports.OMColor = OMColor;