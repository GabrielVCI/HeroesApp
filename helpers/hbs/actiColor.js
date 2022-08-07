//Con esta funcion vamos a verificar si el numero esta verificado o no
const ActiColor = function(value){
    let isValid = false;
    const colorg = ["actinidos"];

    colorg.forEach(function(elem){

        if(value === elem){
            isValid = true;
        }
    })
    return isValid;
}

exports.ActiColor = ActiColor;