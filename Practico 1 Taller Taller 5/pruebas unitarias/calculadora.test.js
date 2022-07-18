
const { suma, multiplicar, restar, dividir } = require('./calculadora');

describe('Test para la suma', function () {
    test('Va a sumar 3 + 5 que es igual a 8', () => {
        expect(suma(3, 5)).toBe(8);    
    });
    test('Va a sumar 5 + -8 que es igual a -3', () => {
        expect(suma(5, -8)).toBe(-3);
    });
    test('Va a sumar -5 + -8 que es igual a -13', () => {
        expect(suma(-5, -8)).t
    });
});

describe('Test para la multiplicacion', function () {
    test('Va a multiplicar 3 * 5 que es igual a 15', () => {
        expect(multiplicar(3, 5)).toBe(15);    
    });
    test('Va a multiplicar -5 * -8 que es igual a 40', () => {
        expect(multiplicar(-5, -8)).toBe(40);
    });
    test('Va a multiplicar -4* 5 que es igual a -20', () => {
        expect(multiplicar(-4, 5)).toBe(-20);
    });
});

describe('Test para la resta', function () {
    test('Va a restar 5 - -3 que es igual a 8', () => {
        expect(restar( 5,-3)).toBe(8);    
    });
    test('Va a restar -5  - 4 que es igual a -9', () => {
        expect(restar(-5, 4)).toBe(-9);
    });
});

describe('Test para la division', function () {
    test('Va a dividir 9 / -3 que es igual a -3', () => {
        expect(dividir(9, -3)).toBe(-3);    
    });
    test('Va a dividir -5 / -5 que es igual a 1', () => {
        expect(dividir(-5, -5)).toBe(1);
    });
});

describe('Matchers numéricos', () => {
    test('Resultado menor que...', () => {
        expect(restar(5,3)).toBeLessThan(3);
    });
    test('Resultado menor o igual que...', () => {
        expect(restar(5,3)).toBeLessThanOrEqual(2);
    });
    test('Resultado mayor o igual que...', () => {
        expect(multiplicar(2,5)).toBeGreaterThanOrEqual(10);
    });
    
    test('Resultado mayor o igual que...', () => {
        expect(multiplicar(2,5)).toBeGreaterThan(8);
    });
});


