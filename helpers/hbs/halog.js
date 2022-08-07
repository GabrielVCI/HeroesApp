//Con esta funcion vamos a verificar si el numero esta verificado o no
const HalogColor = function(value){
    let isValid = false;
    const colorg = ["Halogeno"];

    colorg.forEach(function(elem){

        if(value === elem){
            isValid = true;
        }
    })
    return isValid;
}

exports.HalogColor = HalogColor;