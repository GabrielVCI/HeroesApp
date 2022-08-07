//Con esta funcion vamos a verificar si el numero esta verificado o no
const TerreColor = function(value){
    let isValid = false;
    const colorg = ["Alcalinoterreos"];

    colorg.forEach(function(elem){

        if(value === elem){
            isValid = true;
        }
    })
    return isValid;
}

exports.TerreColor = TerreColor;