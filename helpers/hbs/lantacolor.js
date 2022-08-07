//Con esta funcion vamos a verificar si el numero esta verificado o no
const LantaColor = function(value){
    let isValid = false;
    const colorg = ["lantanidos"];

    colorg.forEach(function(elem){

        if(value === elem){
            isValid = true;
        }
    })
    return isValid;
}

exports.LantaColor = LantaColor;