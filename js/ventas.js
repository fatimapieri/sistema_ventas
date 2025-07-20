// ventas.js

let formVenta = document.getElementById('form-venta');
let mensajeVenta = document.getElementById('mensajeVenta');

formVenta.addEventListener('submit', function (event) {
    event.preventDefault();

    let nombre = document.getElementById('productoVenta').value.trim();
    let cantidad = parseInt(document.getElementById('cantidadVenta').value);

    
    if (!nombre || isNaN(cantidad)) {
        mensajeVenta.textContent = 'Por favor, completá los datos correctamente.';
        return;
    }

    let producto = productos.find(function (p) {
        return p.nombre.toLowerCase() === nombre.toLowerCase();
    });

    if (!producto) {
        mensajeVenta.textContent = `No existe el producto "${nombre}".`;
        return;
    }



    producto.stock -= cantidad;
    mensajeVenta.textContent = `Compra realizada. Quedan ${producto.stock} unidades de "${producto.nombre}".`;

    formVenta.reset();
});
