//Con esta funcion vamos a verificar si el numero esta verificado o no
const MetaloidesColor = function(value){
    let isValid = false;
    const colorg = ["metaloides"];

    colorg.forEach(function(elem){

        if(value === elem){
            isValid = true;
        }
    })
    return isValid;
}

exports.MetaloidesColor = MetaloidesColor;