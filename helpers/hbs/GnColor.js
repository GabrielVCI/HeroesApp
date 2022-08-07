//Con esta funcion vamos a verificar si el numero esta verificado o no
const GnColor = function(value){
    let isValid = false;
    const colorg = ["GasNoble"];

    colorg.forEach(function(elem){

        if(value === elem){
            isValid = true;
        }
    })
    return isValid;
}

exports.GnColor = GnColor;