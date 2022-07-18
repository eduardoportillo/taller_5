const Empleado = require('./empleado');

describe('Test para empleado', () => {
    let empleado;
    beforeEach(() => {
        empleado = new Empleado('Luis', 6);
    });

    test('Se probara la function calcularBonoSegunPorcentaje con 0.020', function () {
        expect(empleado.calcularBonoSegunPorcentaje(0.20)).toBe(1350.00);
    } );
    test('Se probara la function calcularBonoAntiguedad con 3', function () {
        empleado.setAntiguedad(3);
        
        expect(empleado.calcularBonoAntiguedad()).toBe(337);
    } );
    test('Se probara la function calcularBonoSegunPorcentaje con 5', function () {
        empleado.setAntiguedad(5);
        
        expect(empleado.calcularBonoAntiguedad()).toBe(742);
    } );
    test('Se probara la function calcularBonoSegunPorcentaje con 8', function () {
        empleado.setAntiguedad(8);
        
        expect(empleado.calcularBonoAntiguedad()).toBe(1215);
    } )
    test('Se probara la function calcularBonoSegunPorcentaje con 20', function () {
        empleado.setAntiguedad(20);
        
        expect(empleado.calcularBonoAntiguedad()).toBe(0);
    } )
});