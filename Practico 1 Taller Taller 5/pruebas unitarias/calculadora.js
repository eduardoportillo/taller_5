function suma(a, b) {

    return a + b;

}


function restar(a, b) {

    return a - b;

}



function multiplicar(a, b) {

    return a * b;

}


function dividir(a, b) {

    if (b === 0) {

        return null;

    }

    return a / b;

}


module.exports = {

    suma,

    multiplicar,

    restar,

    dividir,
    

};
const provincias = ['Álava','Badajoz','Cáceres','Girona','Huelva','Jaén','La Rioja','Madrid','Navarra'];
const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
const expReg = {
    responseOK: 'Response OK',
    responseFAIL: 'Response FAIL',
    email: 'test@test.com',
    telefono: '919784852'
}
function isnull() {

    return null;

}