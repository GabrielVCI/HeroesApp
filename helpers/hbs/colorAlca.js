//Con esta funcion vamos a verificar si el numero esta verificado o no
const AlcaColor = function(value){
    let isValid = false;
    const colorg = ["Alcalinos"];

    colorg.forEach(function(elem){

        if(value === elem){
            isValid = true;
        }
    })
    return isValid;
}

exports.AlcaColor = AlcaColor;