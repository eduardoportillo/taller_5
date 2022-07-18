const Carrito = require('./Carrito');
// En este archivo se encuentran datos de pruebas para usar.
// Ejemplo: carritoCompras.agregar( autos[0] );
const autos = require('./data/autos');
let carritoCompras = new Carrito();

describe('Carrito Propiedades:', function () {
	test('La propiedad productos dentro del carritoCompras deberia ser un array vacio', function () {
		// carritoCompras.productos
		expect(carritoCompras.productos).toEqual([]);
	});

	test('La propiedad total deberia ser  0.', function () {
		// carritoCompras.total
		expect(carritoCompras.total).toBe(0);
	});
});

describe('Carrito Metodos:', function () {
	afterEach(function () {
		// Como buena practica es bueno reiniciar los valores del objeto
		// despues de correr cada test
		carritoCompras.productos = [];
		carritoCompras.total = 0;
	});

	test('agregar() deberia agregar productos autos al carrito de compras.', function () {
		// Ejemplo: carritoCompras.agregar( autos[0] );
		let lengthProductos = 2;
		carritoCompras.agregar(autos[0]);
		carritoCompras.agregar(autos[1]);

		expect(carritoCompras.productos.length).toBe(lengthProductos);

		expect(carritoCompras.productos[1]).toEqual(autos[1]);
	});

	test('agregar() deberia incrementar la propiedad total.', function () {
		// carritoCompras.total
		carritoCompras.agregar(autos[0]);
		carritoCompras.agregar(autos[1]);
		
		expect(carritoCompras.total).toBe(57144);
	});

	test('remover() deberia remover productos autos del carrito de compras.', function () {
		// la function remover recibe la posicion en el array de productos que se desea remover
		// y el precio del producto
		let lengthProductos = 1;

		carritoCompras.agregar(autos[0]);
		carritoCompras.agregar(autos[1]);

		carritoCompras.remover(1,autos[1].precio);

		expect(carritoCompras.productos.length).toBe(lengthProductos);
	});

	test('remover() deberia decrementar la propiedad total.', function () {
		carritoCompras.agregar(autos[0]);
		carritoCompras.agregar(autos[1]);

		carritoCompras.remover(1,autos[1].precio);

		expect(carritoCompras.total).toBe(8605);
	});

	test('pagar() deberia dejar la lista de productos vacia y el total en 0.', function () {
		// carritoCompras.pagar();
		carritoCompras.pagar()

		expect(carritoCompras.productos).toEqual([]);
		expect(carritoCompras.total).toBe(0);																																										
	});
});
		