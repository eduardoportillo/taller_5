const {suma, division, multiplicacion, resta} = require('./calculadora');

describe('Test de la Suma', () => {
    test('va a sumar 3 + 5 que es igual a 8', () => {
        expect(suma(3, 5)).toBe(8); 
    })
    test('va a sumar 5 + -8 que es igual a 8', () => {
        expect(suma(5, -8)).toBe(-3); 
    })
    test('va a sumar -5 + -8 que es igual a 8', () => {
        expect(suma(-5, -8)).toBe(-13); 
    })
})

describe('Test de la Resta', () => {
    test('va a sumar 3 - 5 que es igual a 8', () => {
        expect(resta(3, 5)).toBe(-2); 
    })
    test('va a sumar 5 - -8 que es igual a 8', () => {
        expect(resta(5, -8)).toBe(13); 
    })
    test('va a sumar -5 - -8 que es igual a 8', () => {
        expect(resta(-5, -8)).toBe(3); 
    })
})

describe('Test de la Multiplicación', () => {
    test('va a sumar 3 X 5 que es igual a 8', () => {
        expect(multiplicacion(3, 5)).toBe(15); 
    })
    test('va a sumar 5 X -8 que es igual a 8', () => {
        expect(multiplicacion(5, -8)).toBe(-40); 
    })
    test('va a sumar -5 X -8 que es igual a 8', () => {
        expect(multiplicacion(-5, -8)).toBe(40); 
    })
})

describe('Test de la División', () => {
    test('va a sumar 3 / 5 que es igual a 8', () => {
        expect(division(3, 5)).toBe(0.6); 
    })
    test('va a sumar 5 / -8 que es igual a 8', () => {
        expect(division(5, -8)).toBe(-0.625); 
    })
    test('va a sumar -5 / -8 que es igual a 8', () => {
        expect(division(-5, -8)).toBe(0.625); 
    })
})