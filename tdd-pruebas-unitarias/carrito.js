class Carrito {

  constructor() {
    this.productos = [];
    this.total = 0;
  }

  agregar(auto) {
    this.total += auto.precio;
    this.productos.push(auto);
  }

  remover(index, precio) {
    this.total -= precio;
    this.productos.splice(index, 1);
  }

  pagar() {
    this.productos = [];
    this.total = 0;
  }
}

module.exports = Carrito;
