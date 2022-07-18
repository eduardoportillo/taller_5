const provincias=['Álava','Badajoz','Cáceres','Girona','Huelva','Jaén','La Rioja','Madrid','Navarra'];
const dias=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
const expReg={ 
    responseOK: 'Response OK',
    responseFAIL: 'Response FAIL',
    email: 'test@test.com',
    telefono: '919784852'
}
function sumar(a, b) { return a + b};
function restar(a, b) { return a - b};
function multiplicar(a, b) { return a * b};
function dividir(a, b) { 
    if (b === 0) {

    return null;

}

return a / b;};
function isNull() { return null};
function isFalse() { return false};
function isTrue() { return true};
function isUndefined() { return undefined};
function arrProvincias() { return provincias};
function arrDias() { return dias};
function objExpReg() { return expReg};

module.exports = {
    sumar,
    multiplicar,
    restar,
    dividir,
    isNull,
    isFalse,
    isTrue,
    isUndefined,
    arrProvincias,
    arrDias,
    objExpReg
};
