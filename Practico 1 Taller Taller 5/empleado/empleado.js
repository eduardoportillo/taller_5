class Empleado {
    constructor(nombre, antiguedad) {
        this.nombre = nombre;
        this.antiguedad = antiguedad;
        this.salarioMinimoNacional = 2250;
    }

    // B.A. = Porcentaje x 3 veces el Salario Mínimo Nacional
    calcularBonoAntiguedad() {
        if (this.antiguedad >= 2 && this.antiguedad < 5) {
            return this.calcularBonoSegunPorcentaje(0.05);
        }
        if (this.antiguedad >= 5 && this.antiguedad < 8) {
            return this.calcularBonoSegunPorcentaje(0.11);
        }
        if (this.antiguedad >= 8 && this.antiguedad < 11) {
            return this.calcularBonoSegunPorcentaje(0.18);
        } else {
            return 0;
        }
    }

    setAntiguedad(valor){
        this.antiguedad=valor;
    }
    calcularBonoSegunPorcentaje(valor) {
        const resultado = valor * 3 * this.salarioMinimoNacional;
        return Math.floor(resultado.toFixed(2));
    }
}

module.exports = Empleado;
