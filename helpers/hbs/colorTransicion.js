//Con esta funcion vamos a verificar si el numero esta verificado o no
const TransColor = function(value){
    let isValid = false;
    const colorg = ["MetalesTransicion"];

    colorg.forEach(function(elem){

        if(value === elem){
            isValid = true;
        }
    })
    return isValid;
}

exports.TransColor = TransColor;