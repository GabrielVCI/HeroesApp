//Con esta funcion vamos a verificar si el numero esta verificado o no
const NmColor = function(value){
    let isValid = false;
    const colorg = ["NoMetales"];

    colorg.forEach(function(elem){

        if(value === elem){
            isValid = true;
        }
    })
    return isValid;
}

exports.NmColor = NmColor;